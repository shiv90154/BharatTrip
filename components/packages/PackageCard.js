// components/packages/PackageCard.js
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Star, Users, Calendar, ArrowRight, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function PackageCard({ data, index }) {
  const { 
    user, 
    addToUserWishlist, 
    removeFromUserWishlist, 
    isPackageInWishlist 
  } = useAuth();
  
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsWishlisted(isPackageInWishlist(data.slug));
  }, [data.slug, isPackageInWishlist]);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const packageData = {
      id: data.slug,
      name: data.title,
      destination: data.location,
      price: data.price,
      duration: data.duration,
      travelers: data.groupSize,
      rating: data.rating,
      image: data.image,
      featured: data.featured,
      description: data.description,
      tags: data.tags
    };

    if (isWishlisted) {
      // Remove from wishlist
      removeFromUserWishlist(data.slug);
      setIsWishlisted(false);
    } else {
      // Add to wishlist
      addToUserWishlist(packageData);
      setIsWishlisted(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/packages/${data.slug}`}>
        {/* Package Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
          {data.image && !imageError ? (
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <ImageIcon size={48} className="text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">{data.location}</p>
              </div>
            </div>
          )}
          
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10"
          >
            <Heart 
              size={18} 
              className={isWishlisted ? "text-[#FF385C] fill-[#FF385C]" : "text-gray-600"} 
            />
          </button>
          
          {/* Featured Badge */}
          {data.featured && (
            <span className="absolute top-3 left-3 px-2 py-1 bg-[#FF385C] text-white text-xs font-semibold rounded-lg">
              Featured
            </span>
          )}
          
          {/* Price Badge */}
          <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-sm">
            <span className="text-lg font-bold text-[#FF385C]">₹{data.price.toLocaleString()}</span>
            <span className="text-xs text-gray-600 ml-1">/person</span>
          </div>
        </div>

        {/* Package Details */}
        <div className="p-5">
          {/* Location */}
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={14} className="text-gray-400 flex-shrink-0" />
            <span className="text-sm text-gray-600 truncate">{data.location}</span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-gray-900 mb-3 text-lg line-clamp-1 group-hover:text-[#FF385C] transition-colors">
            {data.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {data.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {data.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
                {tag}
              </span>
            ))}
            {data.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
                +{data.tags.length - 3}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{data.duration} days</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={14} />
                <span>{data.groupSize} people</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{data.rating}</span>
              <span className="text-gray-400">({data.reviews})</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4 border-t border-gray-100">
            <button className="w-full px-4 py-3 bg-linear-to-r from-[#FF385C] to-[#FF6B9D] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-200 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
              <span>View Package Details</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}