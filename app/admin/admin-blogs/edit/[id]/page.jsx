"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditBlog() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState(null);

  useEffect(() => {
    axios.get(`/api/blogs/${id}`).then((res) => setForm(res.data));
  }, []);

  if (!form) return "Loading...";

  const save = async () => {
    await axios.put(`/api/blogs/${id}`, form);
    router.push("/admin/blogs");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>

      <input
        className="input"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        className="input"
        value={form.slug}
        onChange={(e) => setForm({ ...form, slug: e.target.value })}
      />

      <input
        className="input"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <textarea
        className="input"
        rows={10}
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <button
        onClick={save}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
      >
        Save Changes
      </button>

    </div>
  );
}
