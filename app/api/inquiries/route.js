import { NextResponse } from "next/server";
import Inquiry from "@/lib/models/Inquiry";
import { connectDB } from "@/lib/db";
import { verifyAdmin } from "@/lib/middleware/authMiddleware";

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const inquiry = await Inquiry.create(body);
  return NextResponse.json(inquiry);
}

export async function GET(req) {
  await connectDB();

  const admin = await verifyAdmin(req);
  if (!admin.authorized)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const inquiries = await Inquiry.find()
    .sort({ createdAt: -1 })
    .populate("packageId");

  return NextResponse.json(inquiries);
}
