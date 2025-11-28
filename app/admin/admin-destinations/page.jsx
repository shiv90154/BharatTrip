"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function DestinationsAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/destinations").then((res) => setData(res.data));
  }, []);

  const remove = async (id) => {
    await axios.delete(`/api/destinations/${id}`);
    setData(data.filter((d) => d._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Destinations</h1>

      <Link
        href="/admin/destinations/new"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        + Add Destination
      </Link>

      <div className="mt-6 space-y-4">
        {data.map((dest) => (
          <div key={dest._id} className="p-4 border rounded flex justify-between">
            <div>
              <p className="font-bold">{dest.name}</p>
              <p className="text-gray-500">{dest.slug}</p>
            </div>

            <div className="flex gap-6">
              <Link
                href={`/admin/destinations/edit/${dest._id}`}
                className="text-blue-600"
              >
                Edit
              </Link>
              <button className="text-red-600" onClick={() => remove(dest._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
