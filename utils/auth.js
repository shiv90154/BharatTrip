import nodemailer from "nodemailer";
import { connectDB } from "@/lib/db";
import mongoose from "mongoose";

// ---------------------------
// OTP Memory Fallback Store
// ---------------------------
const otpStore = new Map();

// OTP Database Schema
const OTPSchema = new mongoose.Schema({
  identifier: String,
  otp: String,
  expiresAt: Date,
  used: { type: Boolean, default: false },
  attempts: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const OTP = mongoose.models.OTP || mongoose.model("OTP", OTPSchema);

// ---------------------------
// Create Email Transporter
// ---------------------------
const createTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

// ---------------------------
// Generate 6-digit OTP
// ---------------------------
export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ---------------------------
// Store OTP in DB + Memory
// ---------------------------
export async function storeOTP(identifier, otp) {
  await connectDB();

  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  try {
    await OTP.create({
      identifier,
      otp,
      expiresAt
    });
  } catch (err) {
    console.error("MongoDB OTP save failed:", err);
  }

  // Memory fallback
  otpStore.set(identifier, {
    otp,
    expiresAt: expiresAt.getTime(),
    attempts: 0
  });

  return true;
}

// ---------------------------
// Verify OTP From DB + Memory
// ---------------------------
export async function verifyOTP(identifier, otp) {
  await connectDB();

  // 1️⃣ Check MongoDB
  try {
    const record = await OTP.findOne({
      identifier,
      used: false,
      expiresAt: { $gt: new Date() }
    });

    if (record) {
      if (record.attempts >= 5) return false;

      record.attempts += 1;
      await record.save();

      if (record.otp === otp) {
        record.used = true;
        await record.save();
        return true;
      }

      return false;
    }
  } catch (err) {
    console.error("Mongo OTP verify failed, using memory:", err);
  }

  // 2️⃣ Memory Fallback
  const stored = otpStore.get(identifier);

  if (!stored) return false;
  if (Date.now() > stored.expiresAt) {
    otpStore.delete(identifier);
    return false;
  }
  if (stored.attempts >= 5) return false;

  stored.attempts++;
  otpStore.set(identifier, stored);

  const isValid = stored.otp === otp;
  if (isValid) otpStore.delete(identifier);

  return isValid;
}

// ---------------------------
// SEND OTP EMAIL
// ---------------------------
export async function sendOTPEmail(email, otp) {
  const transporter = createTransporter();

  const html = `
    <div style="font-family:Arial;padding:20px">
      <h2>Your OTP for BharatTrip Login</h2>
      <p>Your 6-digit OTP is:</p>
      <h1 style="font-size:40px;color:#FF385C">${otp}</h1>
      <p>Valid for 10 minutes. Do not share this code.</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"BharatTrip" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your BharatTrip OTP",
      html
    });

    console.log("OTP Email Sent To:", email);
    return true;
  } catch (err) {
    console.error("OTP Email Error:", err);
    return false;
  }
}

// ---------------------------
// SEND SMS OTP (Mock)
// ---------------------------
export async function sendSMSOTP(phone, otp) {
  console.log("📱 SMS OTP (simulated):", phone, otp);
  return true;
}

// ---------------------------
// GET OTP STATISTICS
// ---------------------------
export async function getOTPStats() {
  await connectDB();

  const dbStats = {
    total: await OTP.countDocuments(),
    active: await OTP.countDocuments({ used: false, expiresAt: { $gt: new Date() } }),
    expired: await OTP.countDocuments({ expiresAt: { $lte: new Date() } })
  };

  const memStats = {
    total: otpStore.size,
    active: [...otpStore.values()].filter(v => Date.now() < v.expiresAt).length,
    expired: [...otpStore.values()].filter(v => Date.now() > v.expiresAt).length
  };

  return { database: dbStats, memory: memStats };
}

// ---------------------------
// Auto-cleanup old OTPs
// ---------------------------
setInterval(async () => {
  try {
    await connectDB();
    await OTP.deleteMany({ expiresAt: { $lte: new Date() } });

    for (const [id, rec] of otpStore.entries()) {
      if (Date.now() > rec.expiresAt) otpStore.delete(id);
    }
  } catch (err) {
    console.error("OTP cleanup error:", err);
  }
}, 10 * 60 * 1000);
