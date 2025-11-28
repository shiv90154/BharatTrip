"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function InquiryDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`/api/inquiries/${id}`).then((res) => setData(res.data));
  }, []);

  if (!data) return "Loading...";

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">Inquiry Details</h1>

      <div className="space-y-3">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Email:</strong> {data.email}</p>

        <p><strong>Message:</strong></p>
        <p className="p-3 border bg-gray-50 rounded">{data.message}</p>

        <p><strong>Package:</strong> {data.packageId?.title || "-"}</p>
      </div>

    </div>
  );
}
