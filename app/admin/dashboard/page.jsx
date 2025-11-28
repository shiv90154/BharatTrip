"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get("/api/admin/stats")
      .then(res => setStats(res.data))
      .catch(() => router.push("/admin-login"));  // 🔥 FIXED
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl">Total Packages</h2>
          <p className="text-3xl font-bold mt-2">{stats.packages}</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl">Bookings</h2>
          <p className="text-3xl font-bold mt-2">{stats.bookings}</p>
        </div>

        <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl">Inquiries</h2>
          <p className="text-3xl font-bold mt-2">{stats.inquiries}</p>
        </div>
      </div>
    </div>
  );
}
