import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/lib/models/Booking";
import { verifyAdmin } from "@/lib/middleware/authMiddleware";

export async function POST(req) {
  await connectDB();

  const body = await req.json();
  const booking = await Booking.create(body);

  return NextResponse.json(booking);
}

export async function GET(req) {
  await connectDB();

  const admin = await verifyAdmin(req);
  if (!admin.authorized) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const data = await Booking.find().sort({ createdAt: -1 }).populate("packageId");

  return NextResponse.json(data);
}
