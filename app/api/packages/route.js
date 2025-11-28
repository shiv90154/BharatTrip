import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import PackageModel from "@/lib/models/Package";
import { verifyAdmin } from "@/lib/middleware/authMiddleware";

export async function GET() {
  await connectDB();
  const data = await PackageModel.find().sort({ createdAt: -1 });
  return NextResponse.json(data);
}

export async function POST(req) {
  await connectDB();
  const admin = await verifyAdmin(req);
  if (!admin.authorized) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const pkg = await PackageModel.create(body);

  return NextResponse.json(pkg);
}
