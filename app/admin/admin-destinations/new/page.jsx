"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewDestination() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    image: "",
  });

  const save = async () => {
    await axios.post("/api/destinations", form);
    router.push("/admin/destinations");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add Destination</h1>

      <input
        className="input"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="input"
        placeholder="Slug"
        onChange={(e) => setForm({ ...form, slug: e.target.value })}
      />

      <input
        className="input"
        placeholder="Image URL"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <textarea
        className="input"
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button
        onClick={save}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
      >
        Save Destination
      </button>
    </div>
  );
}
