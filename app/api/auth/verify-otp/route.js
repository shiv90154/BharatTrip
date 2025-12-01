import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import User from "@/lib/models/User";
import { verifyOTP } from "@/utils/auth"; // must exist

export async function POST(request) {
  try {
    await connectDB();

    const { email, phone, otp } = await request.json();

    if (!otp || otp.length !== 6) {
      return NextResponse.json(
        { error: "Valid 6-digit OTP is required" },
        { status: 400 }
      );
    }

    const identifier = email || phone;

    const isValid = await verifyOTP(identifier, otp);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    /* -----------------------------
       FIND OR CREATE USER
    ------------------------------ */

    let user = null;

    if (email) {
      user = await User.findOne({ email });
    } else if (phone) {
      user = await User.findOne({ phone });
    }

    if (!user) {
      user = await User.create({
        email: email || null,
        phone: phone || null,
        name: email ? email.split("@")[0] : `User${Math.floor(Math.random() * 10000)}`,
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    /* -----------------------------
       GENERATE JWT TOKEN
    ------------------------------ */

    const token = jwt.sign(
      {
        id: user._id.toString(),
        email: user.email,
        phone: user.phone,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "30d" }
    );

    /* -----------------------------
       SAFE USER DATA
    ------------------------------ */
    const userResponse = {
      id: user._id.toString(),
      email: user.email,
      phone: user.phone,
      name: user.name,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin,
    };

    return NextResponse.json({
      success: true,
      user: userResponse,
      token,
      message: "Login successful",
    });

  } catch (error) {
    console.error("Verify OTP error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to verify OTP",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
