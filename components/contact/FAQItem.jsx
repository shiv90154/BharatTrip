"use client";

import { ChevronDown } from "lucide-react";

export default function FAQItem({ q, a, open, onClick }) {
  return (
    <div
      onClick={onClick}
      className="border p-4 rounded-xl cursor-pointer hover:border-gray-300 transition"
    >
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-gray-900">{q}</h4>

        <ChevronDown
          className={`text-rose-500 transition ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </div>

      {open && <p className="mt-3 text-gray-600">{a}</p>}
    </div>
  );
}
