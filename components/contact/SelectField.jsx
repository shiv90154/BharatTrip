"use client";

import { ChevronDown } from "lucide-react";

export default function SelectField({ icon, label, options, value, onChange }) {
  return (
    <div>
      <label className="font-semibold text-sm text-gray-700 mb-1 block">{label}</label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 p-3 bg-gray-50 border border-gray-300 rounded-xl appearance-none focus:border-rose-500 focus:ring-2"
        >
          <option value="">Select {label}</option>
          {options.map((o, idx) => (
            <option key={idx}>{o}</option>
          ))}
        </select>

        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
}
