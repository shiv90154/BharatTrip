"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function PackagesList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/packages").then(res => setData(res.data));
  }, []);

  const deletePkg = async (id) => {
    await axios.delete(`/api/packages/${id}`);
    setData(data.filter(p => p._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Packages</h1>

      <Link href="/admin/packages/new" className="px-4 py-2 bg-blue-600 text-white rounded">
        + Add New Package
      </Link>

      <div className="mt-6 space-y-4">
        {data.map(pkg => (
          <div key={pkg._id} className="p-4 border rounded flex justify-between">
            <div>
              <p className="font-bold">{pkg.title}</p>
              <p className="text-gray-500">Rs {pkg.price}</p>
            </div>

            <div className="flex gap-4">
              <Link href={`/admin/packages/edit/${pkg._id}`} className="text-blue-600">Edit</Link>
              <button onClick={() => deletePkg(pkg._id)} className="text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
