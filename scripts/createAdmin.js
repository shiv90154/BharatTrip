import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../lib/models/User.js";

async function run() {
  await mongoose.connect("mongodb://127.0.0.1:27017/bharattrip");

  const hashed = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "Admin",
    email: "admin@admi.com",
    password: hashed,
    role: "admin",
  });

  console.log("🔥 ADMIN USER CREATED SUCCESSFULLY!");
  process.exit(0);
}

run();
