// app/wishlist/page.js
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Star, Users, Calendar, Trash2, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { getWishlist, removeFromWishlist, clearWishlist as clearWishlistUtil } from '@/utils/wishlist';

export default function WishlistPage() {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      // Load user-specific wishlist
      const userWishlist = getWishlist(user.uid || user.id);
      setWishlist(userWishlist);
    } else {
      // Load guest wishlist
      const guestWishlist = getWishlist();
      setWishlist(guestWishlist);
    }
    setLoading(false);
  }, [user]);

  const handleRemove = (packageId) => {
    if (user) {
      removeFromWishlist(user.uid || user.id, packageId);
      setWishlist(getWishlist(user.uid || user.id));
    } else {
      removeFromWishlist(null, packageId);
      setWishlist(getWishlist());
    }
  };

  const handleClearWishlist = () => {
    if (user) {
      clearWishlistUtil(user.uid || user.id);
      setWishlist([]);
    } else {
      clearWishlistUtil();
      setWishlist([]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              My Wishlist
              <span className="text-[#FF385C]">.</span>
            </h1>
            <p className="text-gray-600 mt-2">
              {wishlist.length} {wishlist.length === 1 ? 'package' : 'packages'} saved
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {wishlist.length > 0 && (
              <button
                onClick={handleClearWishlist}
                className="px-4 py-2 text-red-600 hover:text-red-700 border border-red-200 rounded-xl hover:bg-red-50 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
              >
                <Trash2 size={16} />
                Clear All
              </button>
            )}
            <Link href="/packages">
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-medium">
                Explore Packages
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-16 px-4">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={40} className="text-[#FF385C]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
              Start exploring amazing travel packages and save your favorites here for later.
            </p>
            <Link href="/packages">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#FF385C] to-[#FF6B9D] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-200 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto">
                <span>Explore Packages</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Package Image */}
                <div className="relative h-48">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"></div>
                  )}
                  
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <Heart size={18} className="text-[#FF385C] fill-[#FF385C]" />
                  </button>
                  
                  {item.featured && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-[#FF385C] text-white text-xs font-semibold rounded-lg">
                      Featured
                    </span>
                  )}
                </div>

                {/* Package Details */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-gray-400 flex-shrink-0" />
                    <span className="text-sm text-gray-600 truncate">{item.destination || item.location}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-3 text-lg line-clamp-1">
                    {item.name || item.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{item.travelers || '2'} People</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{item.duration || '3'} Days</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span>{item.rating || '4.5'}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-[#FF385C]">
                          ₹{item.price?.toLocaleString() || '12,999'}
                        </span>
                        <span className="text-sm text-gray-600 ml-1">/person</span>
                      </div>
                      
                      <Link href={`/packages/${item.id || item.slug}`}>
                        <button className="px-4 py-2 bg-gradient-to-r from-[#FF385C] to-[#FF6B9D] text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-pink-200 transition-all duration-300">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Guest User Notice */}
        {!user && wishlist.length > 0 && (
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Save your wishlist permanently
                </h3>
                <p className="text-gray-600">
                  Sign in to access your wishlist from any device and get personalized recommendations.
                </p>
              </div>
              <Link href="/login">
                <button className="px-6 py-3 bg-linear-to-r from-[#FF385C] to-[#FF6B9D] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-200 transition-all duration-300 whitespace-nowrap">
                  Sign In Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}