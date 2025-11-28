import { connectDB } from "@/lib/db";
import Destination from "@/lib/models/Destination";
import { verifyAdmin } from "@/lib/middleware/authMiddleware";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();
  const dest = await Destination.findById(params.id);
  return NextResponse.json(dest);
}

export async function PUT(req, { params }) {
  await connectDB();
  const admin = await verifyAdmin(req);
  if (!admin.authorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const dest = await Destination.findByIdAndUpdate(params.id, body, { new: true });

  return NextResponse.json(dest);
}

export async function DELETE(req, { params }) {
  await connectDB();
  const admin = await verifyAdmin(req);
  if (!admin.authorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await Destination.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
