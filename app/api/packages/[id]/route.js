import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import PackageModel from "@/lib/models/Package";
import { verifyAdmin } from "@/lib/middleware/authMiddleware";

export async function GET(req, { params }) {
  await connectDB();
  const pkg = await PackageModel.findById(params.id);
  return NextResponse.json(pkg);
}

export async function PUT(req, { params }) {
  await connectDB();
  const admin = await verifyAdmin(req);
  if (!admin.authorized) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const pkg = await PackageModel.findByIdAndUpdate(params.id, body, { new: true });

  return NextResponse.json(pkg);
}

export async function DELETE(req, { params }) {
  await connectDB();
  const admin = await verifyAdmin(req);
  if (!admin.authorized) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  await PackageModel.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
