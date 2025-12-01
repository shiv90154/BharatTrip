"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Heart } from "lucide-react";

const PackageCard = ({ pkg, index, isFeatured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100 group"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {pkg.discount && (
          <span className="absolute top-3 right-3 bg-rose-600 text-white text-xs px-2 py-1 rounded-full shadow-lg font-semibold">
            {pkg.discount}% OFF
          </span>
        )}

        {/* Favorite Button */}
        <button className="absolute top-3 left-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all">
          <Heart size={16} className="text-gray-600 hover:text-rose-600" />
        </button>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg text-gray-800 flex-1">{pkg.title}</h3>
          <div className="flex items-center gap-1 bg-rose-50 text-rose-600 px-2 py-1 rounded-full text-xs font-medium">
            <Star size={12} className="fill-rose-600" />
            {pkg.rating}
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
          <MapPin size={14} />
          {pkg.location}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1 mb-4">
          {pkg.highlights.slice(0, 3).map((h, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Price Section */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-500 mb-1">Starting from</p>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-rose-600">
                ₹{pkg.price.toLocaleString()}
              </span>
              {pkg.originalPrice && (
                <span className="text-sm line-through text-gray-400">
                  ₹{pkg.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">{pkg.duration}</p>
          </div>

          <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
            {isFeatured ? "View Details" : "Book Now"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;