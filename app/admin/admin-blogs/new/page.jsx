"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddBlog() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    image: "",
    content: "",
  });

  const save = async () => {
    await axios.post("/api/blogs", form);
    router.push("/admin/blogs");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">Add Blog</h1>

      <input
        className="input"
        placeholder="Blog Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        className="input"
        placeholder="Slug (url)"
        onChange={(e) => setForm({ ...form, slug: e.target.value })}
      />

      <input
        className="input"
        placeholder="Image URL"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <textarea
        className="input"
        rows={10}
        placeholder="Content"
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded" onClick={save}>
        Publish Blog
      </button>

    </div>
  );
}
