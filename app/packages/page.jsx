"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, Filter, X, Star, MapPin, Calendar, Users, Heart, Shield, Award, Clock, ChevronDown } from "lucide-react";
import Link from "next/link";

// Package Card Component
const PackageCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100 group"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Discount Badge */}
        {data.discount && (
          <span className="absolute top-4 right-4 bg-rose-600 text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold z-10">
            {data.discount}% OFF
          </span>
        )}

        {/* Favorite Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 left-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all z-10"
        >
          <Heart 
            size={18} 
            className={isLiked ? "fill-rose-600 text-rose-600" : "text-gray-600 hover:text-rose-600"} 
          />
        </button>

        {/* Category Tag */}
        <span className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
          {data.category}
        </span>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <Link href={`/packages/${data.slug}`}>
          <div className="flex items-start justify-between mb-3 cursor-pointer">
            <h3 className="font-semibold text-lg text-gray-800 flex-1 pr-2 hover:text-rose-600 transition-colors">
              {data.title}
            </h3>
            <div className="flex items-center gap-1 bg-rose-50 text-rose-600 px-2 py-1 rounded-full text-xs font-medium">
              <Star size={12} className="fill-rose-600" />
              {data.rating}
            </div>
          </div>
        </Link>

        <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
          <MapPin size={14} />
          {data.location}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.highlights.slice(0, 3).map((h, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
            >
              {h}
            </span>
          ))}
          {data.highlights.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              +{data.highlights.length - 3} more
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {data.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price Section */}
        <div className="flex justify-between items-end pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 mb-1">Starting from</p>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-rose-600">
                ₹{data.price.toLocaleString()}
              </span>
              {data.originalPrice && (
                <span className="text-sm line-through text-gray-400">
                  ₹{data.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <Calendar size={12} />
              {data.duration}
            </p>
          </div>

          <Link href={`/packages/${data.slug}`}>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [durationFilter, setDurationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const categories = [
    { id: "all", name: "All Packages", count: 12, icon: "🌍" },
    { id: "adventure", name: "Adventure", count: 4, icon: "🚵‍♂️" },
    { id: "cultural", name: "Cultural", count: 3, icon: "🏯" },
    { id: "beach", name: "Beach", count: 2, icon: "🏖️" },
    { id: "mountain", name: "Mountain", count: 2, icon: "⛰️" },
    { id: "spiritual", name: "Spiritual", count: 1, icon: "🛕" }
  ];

  const packages = [
    { 
      title: "Kashmir 5N/6D", 
      image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=500", 
      slug: "kashmir-5n6d", 
      duration: "5N/6D", 
      price: 12999,
      originalPrice: 15999,
      discount: 19,
      rating: 4.8,
      reviews: 124,
      location: "Srinagar, Gulmarg, Pahalgam",
      highlights: ["Houseboat Stay", "Skiing", "Shikara Ride", "Mughal Gardens"],
      featured: true,
      category: "mountain",
      tags: ["Family", "Honeymoon", "Adventure"]
    },
    { 
      title: "Goa Beach Tour", 
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500", 
      slug: "goa-tour", 
      duration: "3N/4D", 
      price: 8999,
      originalPrice: 11999,
      discount: 25,
      rating: 4.5,
      reviews: 89,
      location: "North Goa, South Goa",
      highlights: ["Beach Parties", "Water Sports", "Portuguese Heritage", "Nightlife"],
      featured: false,
      category: "beach",
      tags: ["Party", "Beach", "Youth"]
    },
    { 
      title: "Himachal Adventure", 
      image: "https://images.unsplash.com/photo-1574362849221-71cad6d6fb34?w=500", 
      slug: "himachal-adventure", 
      duration: "6N/7D", 
      price: 14999,
      originalPrice: 18999,
      discount: 21,
      rating: 4.9,
      reviews: 156,
      location: "Manali, Kasol, Spiti Valley",
      highlights: ["Trekking", "Camping", "Mountain Biking", "River Rafting"],
      featured: true,
      category: "adventure",
      tags: ["Adventure", "Trekking", "Extreme"]
    },
    { 
      title: "Kerala Backwaters", 
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=500", 
      slug: "kerala-backwaters", 
      duration: "4N/5D", 
      price: 10999,
      originalPrice: 13999,
      discount: 21,
      rating: 4.7,
      reviews: 203,
      location: "Alleppey, Munnar, Kochi",
      highlights: ["Houseboat", "Ayurveda", "Tea Plantations", "Kathakali"],
      featured: false,
      category: "cultural",
      tags: ["Relaxing", "Cultural", "Family"]
    },
    { 
      title: "Rajasthan Cultural", 
      image: "https://images.unsplash.com/photo-1539590581446-74e33a6e2ab2?w=500", 
      slug: "rajasthan-cultural", 
      duration: "7N/8D", 
      price: 17999,
      originalPrice: 21999,
      discount: 18,
      rating: 4.6,
      reviews: 178,
      location: "Jaipur, Udaipur, Jodhpur",
      highlights: ["Palace Stay", "Camel Safari", "Folk Dance", "Desert Camp"],
      featured: true,
      category: "cultural",
      tags: ["Royal", "Cultural", "Luxury"]
    },
    { 
      title: "Ladakh Road Trip", 
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500", 
      slug: "ladakh-roadtrip", 
      duration: "8N/9D", 
      price: 21999,
      originalPrice: 25999,
      discount: 15,
      rating: 4.9,
      reviews: 267,
      location: "Leh, Nubra Valley, Pangong",
      highlights: ["Bike Trip", "High Altitude Lakes", "Monasteries", "Camping"],
      featured: true,
      category: "adventure",
      tags: ["Adventure", "Biking", "Extreme"]
    }
  ];

  // Filter packages based on active filters
  const filteredPackages = packages.filter(pkg => {
    const matchesCategory = activeCategory === "all" || pkg.category === activeCategory;
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Duration filter logic
    let matchesDuration = true;
    if (durationFilter === "short") matchesDuration = parseInt(pkg.duration) <= 4;
    else if (durationFilter === "medium") matchesDuration = parseInt(pkg.duration) > 4 && parseInt(pkg.duration) <= 6;
    else if (durationFilter === "long") matchesDuration = parseInt(pkg.duration) > 6;

    // Tags filter
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => pkg.tags.includes(tag));

    return matchesCategory && matchesPrice && matchesSearch && matchesDuration && matchesTags;
  });

  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "popular":
        return b.reviews - a.reviews;
      default: // featured
        return (b.featured === a.featured) ? 0 : b.featured ? 1 : -1;
    }
  });

  // Get all unique tags
  const allTags = [...new Set(packages.flatMap(pkg => pkg.tags))];

  // Reset all filters
  const resetFilters = () => {
    setActiveCategory("all");
    setPriceRange([0, 50000]);
    setDurationFilter("all");
    setSearchTerm("");
    setSelectedTags([]);
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-6"
          >
            <Award size={16} />
            ✈️ Explore Incredible Destinations
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Travel Packages
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover handpicked experiences with perfect blend of adventure, culture, and relaxation across incredible India
          </p>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative bg-white rounded-xl shadow-sm border border-gray-200 p-2">
              <div className="flex items-center gap-2">
                <Search className="ml-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search destinations, activities, or locations..."
                  className="flex-1 py-3 px-2 text-gray-700 placeholder-gray-500 bg-transparent outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm"
                >
                  <Filter size={18} />
                  Filters
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Enhanced Sidebar Filters - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:block w-80 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Filter size={20} />
                  Filters
                </h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-rose-600 hover:text-rose-700 font-medium"
                >
                  Reset All
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all border text-sm ${
                        activeCategory === category.id
                          ? 'bg-rose-50 border-rose-200 text-rose-700'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activeCategory === category.id ? 'bg-rose-100 text-rose-700' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span className="font-medium text-rose-600">₹{priceRange[1].toLocaleString()}+</span>
                  </div>
                </div>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">Duration</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: "all", label: "Any", icon: "🌎" },
                    { value: "short", label: "Short", icon: "📅" },
                    { value: "medium", label: "Medium", icon: "🗓️" },
                    { value: "long", label: "Long", icon: "📆" }
                  ].map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setDurationFilter(item.value)}
                      className={`p-3 rounded-lg border transition-all text-center text-sm ${
                        durationFilter === item.value
                          ? 'bg-rose-50 border-rose-200 text-rose-700'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="text-lg mb-1">{item.icon}</div>
                      <div className="font-medium">{item.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">Travel Style</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSelectedTags(prev =>
                          prev.includes(tag)
                            ? prev.filter(t => t !== tag)
                            : [...prev, tag]
                        );
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all border ${
                        selectedTags.includes(tag)
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-6 border border-rose-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-rose-600" size={20} />
                <h3 className="font-semibold text-gray-800 text-sm">Book with Confidence</h3>
              </div>
              <p className="text-xs text-gray-600">
                Best price guarantee, free cancellation, and 24/7 customer support for your peace of mind.
              </p>
            </motion.div>
          </motion.div>

          {/* Mobile Filters Modal */}
          <AnimatePresence>
            {showFilters && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  onClick={() => setShowFilters(false)}
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30 }}
                  className="fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden overflow-y-auto"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {/* Mobile filter content */}
                    <div className="space-y-6">
                      {/* Categories */}
                      <div>
                        <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => setActiveCategory(category.id)}
                              className={`p-3 rounded-lg border text-center text-sm ${
                                activeCategory === category.id
                                  ? 'bg-rose-50 border-rose-200 text-rose-700'
                                  : 'bg-gray-50 border-gray-200'
                              }`}
                            >
                              <div className="text-lg mb-1">{category.icon}</div>
                              <div className="font-medium">{category.name}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Sort */}
                      <div>
                        <h3 className="font-medium text-gray-700 mb-3">Sort By</h3>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-sm"
                        >
                          <option value="featured">Featured</option>
                          <option value="price-low">Price: Low to High</option>
                          <option value="price-high">Price: High to Low</option>
                          <option value="rating">Highest Rated</option>
                          <option value="popular">Most Popular</option>
                        </select>
                      </div>

                      {/* Apply Button */}
                      <button
                        onClick={() => setShowFilters(false)}
                        className="w-full py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {sortedPackages.length} {sortedPackages.length === 1 ? 'Package' : 'Packages'} Found
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {activeCategory !== "all" && `in ${categories.find(c => c.id === activeCategory)?.name}`}
                  {selectedTags.length > 0 && ` • ${selectedTags.length} travel style${selectedTags.length > 1 ? 's' : ''} selected`}
                </p>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-4">
                <span className="text-gray-600 text-sm hidden sm:block">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-4 py-2 pr-8 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="popular">Most Popular</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>
            </motion.div>

            {/* Active Filters */}
            {(activeCategory !== "all" || selectedTags.length > 0 || durationFilter !== "all") && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {activeCategory !== "all" && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs">
                    {categories.find(c => c.id === activeCategory)?.name}
                    <button onClick={() => setActiveCategory("all")}>×</button>
                  </span>
                )}
                {selectedTags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    {tag}
                    <button onClick={() => setSelectedTags(prev => prev.filter(t => t !== tag))}>×</button>
                  </span>
                ))}
                {durationFilter !== "all" && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    {durationFilter} trips
                    <button onClick={() => setDurationFilter("all")}>×</button>
                  </span>
                )}
              </motion.div>
            )}

            {/* Packages Grid */}
            {sortedPackages.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {sortedPackages.map((pkg, index) => (
                    <motion.div
                      key={pkg.slug}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      layout
                    >
                      <PackageCard data={pkg} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* Enhanced Empty State */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-gray-50 rounded-2xl"
              >
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  No packages found
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto leading-relaxed text-sm">
                  Try adjusting your filters or search terms to discover amazing travel packages tailored to your preferences.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors font-semibold text-sm"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}

            {/* Load More Button */}
            {sortedPackages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-center mt-12"
              >
                <button className="px-6 py-3 border-2 border-rose-600 text-rose-600 rounded-lg font-semibold hover:bg-rose-600 hover:text-white transition-all text-sm">
                  Load More Packages
                </button>
              </motion.div>
            )}

            {/* Enhanced Trust Badges Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-6 shadow-sm border border-rose-100"
            >
              <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
                Why Book With BharatTrip?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: <Award className="w-5 h-5" />, title: "Best Price", desc: "Guaranteed lowest prices" },
                  { icon: <Shield className="w-5 h-5" />, title: "Secure Booking", desc: "SSL encrypted payments" },
                  { icon: <Star className="w-5 h-5" />, title: "4.8/5 Rating", desc: "From 5000+ travelers" },
                  { icon: <Clock className="w-5 h-5" />, title: "24/7 Support", desc: "Always here to help" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 mx-auto mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-medium text-gray-800 mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}