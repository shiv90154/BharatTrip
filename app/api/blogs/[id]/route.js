import { NextResponse } from "next/server";
import Blog from "@/lib/models/Blog";
import { connectDB } from "@/lib/db";
import { verifyAdmin } from "@/lib/middleware/authMiddleware";

export async function GET(req, { params }) {
  await connectDB();
  const blog = await Blog.findById(params.id);
  return NextResponse.json(blog);
}

export async function PUT(req, { params }) {
  await connectDB();
  
  const admin = await verifyAdmin(req);
  if (!admin.authorized) 
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const updated = await Blog.findByIdAndUpdate(params.id, body, { new: true });

  return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
  await connectDB();

  const admin = await verifyAdmin(req);
  if (!admin.authorized) 
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  await Blog.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
