"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Calendar, Star, Heart } from "lucide-react";
import { useState } from "react";

const PackageCard = ({ data, index }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100 group"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {data.discount && (
          <span className="absolute top-3 right-3 bg-rose-600 text-white text-xs px-2 py-1 rounded-full shadow-lg font-semibold">
            {data.discount}% OFF
          </span>
        )}

        {/* Favorite Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 left-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all z-10"
        >
          <Heart 
            size={16} 
            className={isLiked ? "fill-rose-600 text-rose-600" : "text-gray-600 hover:text-rose-600"} 
          />
        </button>

        {/* Category Tag */}
        <span className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
          {data.category}
        </span>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4">
        <Link href={`/packages/${data.slug}`}>
          <div className="flex items-start justify-between mb-2 cursor-pointer">
            <h3 className="font-semibold text-gray-800 flex-1 pr-2 hover:text-rose-600 transition-colors text-sm leading-tight">
              {data.title}
            </h3>
            <div className="flex items-center gap-1 bg-rose-50 text-rose-600 px-2 py-1 rounded-full text-xs font-medium">
              <Star size={10} className="fill-rose-600" />
              {data.rating}
            </div>
          </div>
        </Link>

        <p className="text-gray-500 text-xs mb-2 flex items-center gap-1">
          <MapPin size={12} />
          {data.location}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1 mb-3">
          {data.highlights.slice(0, 2).map((h, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
            >
              {h}
            </span>
          ))}
          {data.highlights.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              +{data.highlights.length - 2}
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {data.tags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price Section */}
        <div className="flex justify-between items-end pt-3 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 mb-1">Starting from</p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-rose-600">
                ₹{data.price.toLocaleString()}
              </span>
              {data.originalPrice && (
                <span className="text-sm line-through text-gray-400">
                  ₹{data.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <Calendar size={10} />
              {data.duration}
            </p>
          </div>

          <Link href={`/packages/${data.slug}`}>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;