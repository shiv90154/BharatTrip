"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get("/api/blogs").then((res) =>
      setBlog(res.data.find((b) => b.slug === slug))
    );
  }, []);

  if (!blog) return "Loading...";

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-10">
        <img src={blog.image} className="w-full h-80 rounded object-cover" />
        <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>

        <div className="mt-6 text-lg leading-8">
          {blog.content}
        </div>
      </div>

      <Footer />
    </>
  );
}
