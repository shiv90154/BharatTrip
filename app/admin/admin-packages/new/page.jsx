"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddPackage() {
  const router = useRouter();

  const [data, setData] = useState({
    title: "",
    slug: "",
    price: "",
    duration: "",
    about: "",
  });

  const addPackage = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/packages", data);

      if (res.status === 200) {
        alert("Package Added Successfully!");
        router.push("/admin/admin-packages");
      }
    } catch (err) {
      console.log(err);
      alert("Failed to add package");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Add New Package</h1>

      <form onSubmit={addPackage} className="space-y-4">

        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Slug"
          className="border p-2 w-full"
          value={data.slug}
          onChange={(e) => setData({ ...data, slug: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />

        <input
          type="text"
          placeholder="Duration (e.g. 5 Nights / 6 Days)"
          className="border p-2 w-full"
          value={data.duration}
          onChange={(e) => setData({ ...data, duration: e.target.value })}
        />

        <textarea
          placeholder="About Package"
          className="border p-2 w-full h-32"
          value={data.about}
          onChange={(e) => setData({ ...data, about: e.target.value })}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Add Package
        </button>

      </form>
    </div>
  );
}
