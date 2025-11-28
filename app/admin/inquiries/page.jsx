"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InquiryAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/inquiries").then((res) => setData(res.data));
  }, []);

  const remove = async (id) => {
    await axios.delete(`/api/inquiries/${id}`);
    setData(data.filter((i) => i._id !== id));
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">Inquiries</h1>

      <div className="space-y-4">
        {data.map((i) => (
          <div
            key={i._id}
            className="p-4 border rounded flex justify-between items-start"
          >
            <div>
              <p className="font-bold">{i.name}</p>
              <p>{i.phone}</p>
              <p className="text-sm text-gray-500">{i.email}</p>
              <p className="mt-2">
                <strong>Package:</strong> {i.packageId?.title || "-"}
              </p>
            </div>

            <div className="flex gap-6">
              <Link
                className="text-blue-600"
                href={`/admin/inquiries/${i._id}`}
              >
                View
              </Link>

              <button
                className="text-red-600"
                onClick={() => remove(i._id)}
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
