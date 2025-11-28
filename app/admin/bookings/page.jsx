"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BookingsAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/bookings").then((res) => setData(res.data));
  }, []);

  const remove = async (id) => {
    await axios.delete(`/api/bookings/${id}`);
    setData(data.filter((b) => b._id !== id));
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">Bookings Management</h1>

      <div className="space-y-4">
        {data.map((b) => (
          <div key={b._id} className="p-4 border rounded flex justify-between items-center">

            <div>
              <p className="font-bold">{b.name} ({b.phone})</p>
              <p className="text-gray-500">
                Package: {b.packageId?.title}
              </p>
              <p className="text-sm">Date: {b.travelDate}</p>
              <p className="text-sm">Status: 
                <span className={
                  b.status === "Pending"
                    ? "text-orange-500"
                    : b.status === "Confirmed"
                    ? "text-green-600" 
                    : "text-red-600"
                }>
                  {" "}{b.status}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href={`/admin/bookings/${b._id}`}
                className="text-blue-600"
              >
                View / Edit
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
