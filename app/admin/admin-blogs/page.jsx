"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/blogs").then((res) => setData(res.data));
  }, []);

  const remove = async (id) => {
    await axios.delete(`/api/blogs/${id}`);
    setData(data.filter((b) => b._id !== id));
  };

  return (
    <div className="p-6">

      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Blog Management</h1>

        <Link
          href="/admin/blogs/new"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Blog
        </Link>
      </div>

      <div className="space-y-4">
        {data.map((b) => (
          <div key={b._id} className="p-4 border rounded flex justify-between items-center">

            <div>
              <p className="font-bold">{b.title}</p>
              <p className="text-gray-500">{b.slug}</p>
            </div>

            <div className="flex gap-4">
              <Link
                href={`/admin/blogs/edit/${b._id}`}
                className="text-blue-600"
              >
                Edit
              </Link>

              <button
                onClick={() => remove(b._id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
