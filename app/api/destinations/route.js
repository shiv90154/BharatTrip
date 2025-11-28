import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Destination from "@/lib/models/Destination";
import { verifyAdmin } from "@/lib/middleware/authMiddleware";

export async function GET() {
  await connectDB();
  const dests = await Destination.find().sort({ createdAt: -1 });
  return NextResponse.json(dests);
}

export async function POST(req) {
  await connectDB();
  
  const admin = await verifyAdmin(req);
  if (!admin.authorized) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  
  const body = await req.json();
  const dest = await Destination.create(body);
  return NextResponse.json(dest);
}
