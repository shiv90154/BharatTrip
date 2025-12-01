"use client";

import { motion } from "framer-motion";
import PackageCard from "./PackageCard";

const TrendingPackages = () => {
  const trendingPackages = [
    {
      title: "Ladakh Adventure",
      location: "Leh, Ladakh",
      rating: 4.9,
      reviews: 892,
      price: 28900,
      originalPrice: 32000,
      duration: "7 Days 6 Nights",
      highlights: ["Pangong Lake", "Nubra Valley", "Magnetic Hill"],
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
      category: "adventure"
    },
    {
      title: "Shimla Manali Escape",
      location: "Himachal Pradesh",
      rating: 4.7,
      reviews: 634,
      price: 15600,
      originalPrice: 18500,
      duration: "5 Days 4 Nights",
      highlights: ["Snow Views", "Adventure Sports", "Local Markets"],
      image: "https://images.unsplash.com/photo-1574362849221-71cad6d6fb34?w=400",
      category: "mountain"
    },
    {
      title: "Andaman Island Tour",
      location: "Port Blair, Havelock",
      rating: 4.8,
      reviews: 523,
      price: 22400,
      originalPrice: 26000,
      duration: "6 Days 5 Nights",
      highlights: ["Scuba Diving", "Beach Camping", "Coral Reefs"],
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400",
      category: "beach"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="p-2 bg-rose-100 rounded-xl">
            <div className="w-5 h-5 bg-gradient-to-r from-rose-600 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">🔥</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Trending Now
            </h2>
            <p className="text-gray-600 mt-1">Most booked experiences this season</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingPackages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPackages;