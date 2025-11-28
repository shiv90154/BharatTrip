"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PackageCard from "@/components/PackageCard";

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [durationFilter, setDurationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

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
    },
    { 
      title: "Andaman Islands", 
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=500", 
      slug: "andaman-islands", 
      duration: "5N/6D", 
      price: 18999,
      originalPrice: 22999,
      discount: 17,
      rating: 4.8,
      reviews: 145,
      location: "Port Blair, Havelock, Neil Island",
      highlights: ["Scuba Diving", "Beach Camping", "Coral Reefs", "Snorkeling"],
      featured: true,
      category: "beach",
      tags: ["Beach", "Adventure", "Romantic"]
    },
    { 
      title: "Varanasi Spiritual", 
      image: "https://images.unsplash.com/photo-1598257008675-7b708b103b1a?w=500", 
      slug: "varanasi-spiritual", 
      duration: "3N/4D", 
      price: 7999,
      originalPrice: 9999,
      discount: 20,
      rating: 4.4,
      reviews: 98,
      location: "Varanasi, Sarnath",
      highlights: ["Ganga Aarti", "Temple Tour", "Boat Ride", "Yoga"],
      featured: false,
      category: "spiritual",
      tags: ["Spiritual", "Religious", "Cultural"]
    },
    { 
      title: "North East Explorer", 
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500", 
      slug: "north-east-explorer", 
      duration: "7N/8D", 
      price: 16999,
      originalPrice: 20999,
      discount: 19,
      rating: 4.7,
      reviews: 112,
      location: "Shillong, Cherrapunji, Kaziranga",
      highlights: ["Living Root Bridges", "Wildlife Safari", "Waterfalls", "Tribal Culture"],
      featured: true,
      category: "adventure",
      tags: ["Adventure", "Wildlife", "Cultural"]
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

    return matchesCategory && matchesPrice && matchesSearch && matchesDuration;
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

  // Update category counts
  useEffect(() => {
    categories.forEach(cat => {
      if (cat.id !== "all") {
        cat.count = packages.filter(pkg => pkg.category === cat.id).length;
      } else {
        cat.count = packages.length;
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
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
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
          >
            ✈️ Explore Incredible Destinations
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Travel Packages
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover handpicked experiences with perfect blend of adventure, culture, and relaxation
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, activities, or locations..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                🔍
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full py-3 bg-white border border-gray-300 rounded-xl shadow-sm flex items-center justify-center gap-2 font-medium"
          >
            <span>🎛️ Filters & Sorting</span>
            <span className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>🔍</span> Filters
              </h2>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-700 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                        activeCategory === category.id
                          ? 'bg-blue-50 border border-blue-200 text-blue-700'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-700 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span className="font-semibold text-blue-600">₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Duration */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-700 mb-4">Duration</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: "all", label: "Any", icon: "⏱️" },
                    { value: "short", label: "1-4 Days", icon: "📅" },
                    { value: "medium", label: "5-7 Days", icon: "🗓️" },
                    { value: "long", label: "8+ Days", icon: "📆" }
                  ].map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setDurationFilter(item.value)}
                      className={`p-3 rounded-xl border transition-all text-center ${
                        durationFilter === item.value
                          ? 'bg-blue-50 border-blue-200 text-blue-700'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="text-lg mb-1">{item.icon}</div>
                      <div className="text-xs font-medium">{item.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setPriceRange([0, 50000]);
                  setDurationFilter("all");
                  setSearchTerm("");
                }}
                className="w-full py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Reset All Filters
              </button>
            </motion.div>
          </div>

          {/* Mobile Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white rounded-2xl shadow-lg p-6 mb-6"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>
                
                {/* Mobile filter content - simplified version */}
                <div className="space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeCategory === category.id
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-3">Sort By</h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="popular">Most Popular</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {sortedPackages.length} Packages Found
                </h2>
                <p className="text-gray-600">
                  {activeCategory !== "all" && `in ${categories.find(c => c.id === activeCategory)?.name}`}
                </p>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-4">
                <span className="text-gray-600 text-sm hidden sm:block">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </motion.div>

            {/* Packages Grid */}
            {sortedPackages.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
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
              /* Empty State */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  No packages found
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Try adjusting your filters or search terms to find more amazing travel packages.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setPriceRange([0, 50000]);
                    setDurationFilter("all");
                    setSearchTerm("");
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
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
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all">
                  Load More Packages
                </button>
              </motion.div>
            )}

            {/* Trust Badges Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                Why Book With Us?
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "🏆", title: "Best Price", desc: "Guaranteed lowest prices" },
                  { icon: "🔒", title: "Secure Booking", desc: "SSL encrypted payments" },
                  { icon: "⭐", title: "4.8/5 Rating", desc: "From 5000+ travelers" },
                  { icon: "📞", title: "24/7 Support", desc: "Always here to help" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                Frequently Asked Questions
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    question: "What's included in the package price?",
                    answer: "All packages include accommodation, meals as specified, transportation, and guided tours. Flights and personal expenses are usually extra."
                  },
                  {
                    question: "Can I customize my package?",
                    answer: "Yes! We offer flexible customization options for hotels, activities, and duration to match your preferences."
                  },
                  {
                    question: "What is your cancellation policy?",
                    answer: "We offer free cancellation up to 30 days before travel. Between 30-15 days, 50% refund. Less than 15 days, no refund."
                  },
                  {
                    question: "Do you provide travel insurance?",
                    answer: "Yes, we offer comprehensive travel insurance options that can be added to any package for complete peace of mind."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
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