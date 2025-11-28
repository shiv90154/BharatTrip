import { NextResponse } from "next/server";
import Blog from "@/lib/models/Blog";
import { connectDB } from "@/lib/db";
import { verifyAdmin } from "@/lib/middleware/authMiddleware";

export async function GET() {
  await connectDB();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}

export async function POST(req) {
  await connectDB();
  
  const admin = await verifyAdmin(req);
  if (!admin.authorized) 
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const blog = await Blog.create(body);

  return NextResponse.json(blog);
}
