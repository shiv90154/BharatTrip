"use client";

import Link from "next/link";

export default function ContactCard({ icon, title, description, details, link, color, buttonText }) {
  return (
    <Link href={link}>
      <div className={`p-6 rounded-2xl ${color} text-white shadow-md hover:-translate-y-1 transition`}>
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-white/20 rounded-xl">{icon}</div>

          <div>
            <h3 className="font-bold text-lg">{title}</h3>

            <p className="text-sm text-white/90 mb-2">{description}</p>

            {details?.map((d, i) => (
              <p key={i} className="text-white/80">{d}</p>
            ))}

            <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg text-sm">
              {buttonText}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
