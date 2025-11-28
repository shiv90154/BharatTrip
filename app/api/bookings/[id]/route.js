import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/lib/models/Booking";
import { verifyAdmin } from "@/lib/middleware/authMiddleware";

export async function GET(req, { params }) {
  await connectDB();
  const booking = await Booking.findById(params.id).populate("packageId");
  return NextResponse.json(booking);
}

export async function PUT(req, { params }) {
  await connectDB();
  const admin = await verifyAdmin(req);
  if (!admin.authorized) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const updated = await Booking.findByIdAndUpdate(params.id, body, { new: true });

  return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
  await connectDB();
  const admin = await verifyAdmin(req);
  if (!admin.authorized) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  await Booking.findByIdAndDelete(params.id);

  return NextResponse.json({ success: true });
}
