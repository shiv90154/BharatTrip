"use client";

export default function StatsBox({ icon, number, label }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <p className="text-2xl font-bold text-gray-900">{number}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
