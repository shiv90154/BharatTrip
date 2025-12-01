"use client";

export default function InputField({ icon, label, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="font-semibold text-sm text-gray-700 mb-1 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 p-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-rose-500 focus:ring-2"
        />

        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      </div>
    </div>
  );
}
