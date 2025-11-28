"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function BookingDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`/api/bookings/${id}`).then((res) => setData(res.data));
  }, []);

  if (!data) return "Loading...";

  const updateStatus = async (status) => {
    await axios.put(`/api/bookings/${id}`, { status });
    setData({ ...data, status });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">Booking Details</h1>

      <div className="space-y-3">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Travel Date:</strong> {data.travelDate}</p>
        <p><strong>Adults:</strong> {data.adults}</p>
        <p><strong>Children:</strong> {data.children}</p>

        <p className="mt-3">
          <strong>Package:</strong> {data.packageId?.title}
        </p>

        <p>
          <strong>Status:</strong> {data.status}
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-3">Update Status</h2>

      <div className="flex gap-4">
        <button
          onClick={() => updateStatus("Pending")}
          className="px-4 py-2 bg-orange-500 text-white rounded"
        >
          Pending
        </button>

        <button
          onClick={() => updateStatus("Confirmed")}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Confirmed
        </button>

        <button
          onClick={() => updateStatus("Cancelled")}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Cancelled
        </button>
      </div>

    </div>
  );
}
