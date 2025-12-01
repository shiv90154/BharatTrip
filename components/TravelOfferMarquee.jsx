"use client";

import { motion } from "framer-motion";
import { Tag, Plane, Gift, Star } from "lucide-react";

export default function TravelOfferMarquee() {
  const offers = [
    { icon: <Plane size={20} />, text: "Flat 20% Off on Himachal Packages" },
    { icon: <Gift size={20} />, text: "Free Hotel Upgrade on Goa Trips" },
    { icon: <Star size={20} />, text: "Special Honeymoon Discounts" },
    { icon: <Tag size={20} />, text: "Save ₹3000 on Kerala Luxury Tour" },
    { icon: <Plane size={20} />, text: "Early Bird Offers for Kashmir" },
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-rose-600 to-rose-500 py-3 border-b border-rose-400 shadow-md">
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {offers.concat(offers).map((offer, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-white font-medium text-sm md:text-base"
          >
            <span className="bg-white/20 p-2 rounded-full flex items-center justify-center">
              {offer.icon}
            </span>
            <span>{offer.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
