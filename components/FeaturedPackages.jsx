"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import PackageCard from "./PackageCard";

const FeaturedPackages = () => {
  const featuredPackages = [
    {
      title: "Kerala Backwaters",
      location: "Alleppey, Kerala",
      rating: 4.8,
      reviews: 1247,
      price: 12500,
      originalPrice: 15000,
      duration: "3 Days 2 Nights",
      highlights: ["Houseboat Stay", "Traditional Food", "Village Tour"],
      discount: 15,
      featured: true,
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400",
      category: "cultural"
    },
    {
      title: "Goa Beach Paradise",
      location: "North Goa",
      rating: 4.6,
      reviews: 892,
      price: 8900,
      originalPrice: 11000,
      duration: "4 Days 3 Nights",
      highlights: ["Beach Parties", "Water Sports", "Portuguese Heritage"],
      discount: 20,
      featured: true,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400",
      category: "beach"
    },
    {
      title: "Rajasthan Cultural Tour",
      location: "Jaipur, Udaipur",
      rating: 4.9,
      reviews: 756,
      price: 18900,
      originalPrice: 22000,
      duration: "6 Days 5 Nights",
      highlights: ["Palace Stay", "Desert Safari", "Folk Dance"],
      discount: 14,
      featured: true,
      image: "https://images.unsplash.com/photo-1539590581446-74e33a6e2ab2?w=400",
      category: "cultural"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Featured Packages
            </h2>
            <p className="text-gray-600 mt-1">Handpicked experiences for unforgettable journeys</p>
          </div>
          <span className="bg-rose-100 text-rose-600 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-2">
            <Star size={14} className="fill-rose-600" />
            Most Popular
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPackages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} index={index} isFeatured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;