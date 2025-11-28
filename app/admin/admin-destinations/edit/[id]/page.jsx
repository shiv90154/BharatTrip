"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditDestination() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState(null);

  useEffect(() => {
    axios.get(`/api/destinations/${id}`).then((res) => setForm(res.data));
  }, []);

  if (!form) return "Loading...";

  const save = async () => {
    await axios.put(`/api/destinations/${id}`, form);
    router.push("/admin/destinations");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Destination</h1>

      <input
        className="input"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
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
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
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
