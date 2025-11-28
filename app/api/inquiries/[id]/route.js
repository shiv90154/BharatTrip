import { NextResponse } from "next/server";
import Inquiry from "@/lib/models/Inquiry";
import { verifyAdmin } from "@/lib/middleware/authMiddleware";
import { connectDB } from "@/lib/db";

export async function GET(req, { params }) {
  await connectDB();
  const inquiry = await Inquiry.findById(params.id).populate("packageId");
  return NextResponse.json(inquiry);
}

export async function DELETE(req, { params }) {
  await connectDB();

  const admin = await verifyAdmin(req);
  if (!admin.authorized)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  await Inquiry.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
