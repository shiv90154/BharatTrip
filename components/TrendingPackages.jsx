"use client";

import { motion } from "framer-motion";
import PackageCard from "./PackageCard";

const TrendingPackages = () => {
  const trendingPackages = [
  {
    title: "Romantic Gateway to Shimla & Manali",
    image: "/packages/RomanticGatewaytoShimla&Manali.avif",
    slug: "romantic-shimla-manali-5n6d",
    duration: "5N/6D",
    price: 29000,
    originalPrice: 34000,
    discount: 15,
    rating: 4.7,
    reviews: 112,
    location: "Shimla, Manali",
    highlights: ["Kufri", "Mall Road", "Solang Valley", "Hadimba Temple"],
    featured: true,
    category: "honeymoon",
    tags: ["Couple", "Honeymoon", "Romantic"]
  },

  {
    title: "Highlights of Kashmir (Srinagar to Srinagar)",
    image: "/packages/HighlightsOfKashmir(SrinagartoSrinagar).avif",
    slug: "kashmir-srinagar-5n6d",
    duration: "5N/6D",
    price: 35000,
    originalPrice: 39999,
    discount: 12,
    rating: 4.8,
    reviews: 189,
    location: "Srinagar, Gulmarg, Pahalgam",
    highlights: ["Shikara Ride", "Gulmarg Gondola", "Mughal Gardens"],
    featured: true,
    category: "mountain",
    tags: ["Family", "Nature", "Honeymoon"]
  },
    {
      title: "Andaman Island Tour",
      slug: "andaman-island-tour",
      location: "Port Blair, Havelock",
      rating: 4.8,
      reviews: 523,
      price: 22400,
      originalPrice: 26000,
      duration: "6 Days 5 Nights",
      highlights: ["Scuba Diving", "Beach Camping", "Coral Reefs"],
      image: "/gallery/AndamanIslands/1.avif",
      category: "beach"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="p-3 bg-rose-100 rounded-2xl shadow-sm">
            <div className="w-7 h-7 bg-gradient-to-r from-rose-600 to-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-sm">🔥</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trending Now
            </h2>
            <p className="text-gray-500 mt-1">
              Most booked experiences this season
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {trendingPackages.map((pkg, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
      onClick={() => window.location.href = `/packages/${pkg.slug}`}
    >
      <PackageCard pkg={pkg} index={index} showButton />
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default TrendingPackages;
