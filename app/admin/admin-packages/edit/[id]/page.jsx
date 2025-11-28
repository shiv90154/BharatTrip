"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditPackage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState(null);

  useEffect(() => {
    axios.get(`/api/packages/${id}`).then(res => setForm(res.data));
  }, []);

  if (!form) return "Loading...";

  const save = async () => {
    await axios.put(`/api/packages/${id}`, form);
    router.push("/admin/packages");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Package</h1>

      <input className="input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />

      <textarea className="input" value={form.about} onChange={(e) => setForm({ ...form, about: e.target.value })} />

      <button onClick={save} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">
        Save Changes
      </button>
    </div>
  );
}
