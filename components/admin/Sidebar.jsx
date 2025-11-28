"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const link = (path) =>
    `block px-4 py-2 rounded ${
      pathname.startsWith(path)
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-200 text-gray-700"
    }`;

  const logout = async () => {
    await axios.post("/api/auth/logout");
    router.push("/admin-login");   // 🔥 updated
  };

  return (
    <div className="w-64 bg-white border-r shadow-sm p-4 space-y-2">

      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        Admin Panel
      </h1>

      <Link href="/admin/dashboard" className={link("/admin/dashboard")}>
        Dashboard
      </Link>

      <Link href="/admin/admin-packages" className={link("/admin/admin-packages")}>
        Packages
      </Link>

      <Link href="/admin/admin-destinations" className={link("/admin/admin-destinations")}>
        Destinations
      </Link>

      <Link href="/admin/admin-blogs" className={link("/admin/admin-blogs")}>
        Blogs
      </Link>

      <Link href="/admin/bookings" className={link("/admin/bookings")}>
        Bookings
      </Link>

      <Link href="/admin/inquiries" className={link("/admin/inquiries")}>
        Inquiries
      </Link>

      <button
        onClick={logout}
        className="mt-6 w-full bg-red-600 text-white p-2 rounded"
      >
        Logout
      </button>

    </div>
  );
}
