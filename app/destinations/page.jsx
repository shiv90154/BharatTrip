"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------
// 🎯 ENHANCED DESTINATION CARD
// ---------------------------------------------
function DestinationCard({ data, index }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Image / Icon Section with Gradient */}
      <div className="relative h-72 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-12 h-12 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-purple-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-pink-500 rounded-full"></div>
        </div>
        
        {/* Main Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative z-10 text-8xl"
        >
          {data.icon}
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg flex items-center gap-1">
            ⭐ {data.rating}
          </span>
          {data.featured && (
            <span className="bg-yellow-500 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg flex items-center gap-1">
              ✨ Featured
            </span>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-2xl shadow-lg">
            <div className="text-xs opacity-90">Starting from</div>
            <div className="text-xl font-bold">₹{data.price}</div>
          </div>
        </div>

        {/* Hover Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`p-3 rounded-2xl backdrop-blur-sm border ${
              isLiked 
                ? "bg-red-500 text-white border-red-500" 
                : "bg-white/20 text-white border-white/30"
            }`}
          >
            {isLiked ? "❤️" : "🤍"}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSaved(!isSaved)}
            className={`p-3 rounded-2xl backdrop-blur-sm border ${
              isSaved 
                ? "bg-blue-500 text-white border-blue-500" 
                : "bg-white/20 text-white border-white/30"
            }`}
          >
            {isSaved ? "📌" : "📍"}
          </motion.button>
        </motion.div>

        {/* Quick View Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
            <span className="text-white font-semibold text-lg">Quick View 👀</span>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header with Title and Flag */}
        <div className="flex items-start justify-between mb-3">
          <Link href={`/destinations/${data.slug}`}>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
              {data.title}
            </h3>
          </Link>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-3xl"
          >
            {data.flag}
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {data.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <span className="text-lg">⏱️</span>
            <span className="font-semibold">{data.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg">👥</span>
            <span className="font-semibold">{data.groupSize}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg">🌡️</span>
            <span className="font-semibold">{data.temperature}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg">🏷️</span>
            <span className="font-semibold">{data.category}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-6">
          {data.highlights.map((highlight, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-xl text-xs font-medium border border-blue-100"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <Link href={`/destinations/${data.slug}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            Explore Destination
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------
// 🎯 ENHANCED FILTER SECTION
// ---------------------------------------------
function FilterSection({ filters, activeFilter, onFilterChange, searchTerm, onSearchChange, sortBy, onSortChange, resultsCount }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/90 backdrop-blur-xl p-8 mb-12 rounded-3xl shadow-2xl border border-white/20"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8">
        
        {/* Search Bar */}
        <div className="flex-1 w-full relative">
          <input
            type="text"
            placeholder="🔍 Search destinations, activities, or locations..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full py-5 px-14 rounded-2xl bg-gray-50/80 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition-all duration-300 text-lg placeholder-gray-500"
          />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400">
            🌍
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange(filter.id)}
              className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 border-2 border-transparent hover:border-blue-200"
              }`}
            >
              <span className="text-xl">{filter.icon}</span>
              <span>{filter.label}</span>
              {filter.count && (
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === filter.id ? "bg-white/20" : "bg-gray-200"
                }`}>
                  {filter.count}
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-6 py-4 bg-gray-50/80 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition-all duration-300 appearance-none pr-12 font-medium"
          >
            <option value="featured">✨ Featured</option>
            <option value="rating">⭐ Highest Rated</option>
            <option value="price-low">💰 Price: Low to High</option>
            <option value="price-high">💰 Price: High to Low</option>
            <option value="popular">🔥 Most Popular</option>
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            ⬇️
          </span>
        </div>
      </div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200"
      >
        <span className="text-gray-700 font-semibold">
          Found <span className="text-blue-600 text-xl">{resultsCount}</span> amazing destinations
        </span>
        <span className="text-gray-500 text-sm">
          {activeFilter !== 'all' && `in ${filters.find(f => f.id === activeFilter)?.label}`}
        </span>
      </motion.div>
    </motion.div>
  );
}

// ---------------------------------------------
// 🎯 MAIN ENHANCED DESTINATIONS PAGE
// ---------------------------------------------
export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [loading, setLoading] = useState(true);

  // ENHANCED FILTER TYPES WITH COUNTS
  const filters = [
    { id: "all", label: "All Destinations", icon: "🌍", count: 12 },
    { id: "adventure", label: "Adventure", icon: "⛰️", count: 4 },
    { id: "beach", label: "Beach", icon: "🏖️", count: 3 },
    { id: "cultural", label: "Cultural", icon: "🏛️", count: 3 },
    { id: "hills", label: "Hill Stations", icon: "🏔️", count: 4 },
    { id: "wildlife", label: "Wildlife", icon: "🐘", count: 2 },
    { id: "spiritual", label: "Spiritual", icon: "🛕", count: 2 }
  ];

  // ENHANCED SAMPLE DATA
  const sampleDestinations = [
    {
      title: "Kashmir - Paradise on Earth",
      slug: "kashmir",
      icon: "🏔️",
      flag: "🇮🇳",
      rating: "4.8",
      price: "12,999",
      description: "Experience the breathtaking beauty of snow-capped peaks, serene Dal Lake, and enchanting Mughal gardens in the crown jewel of India.",
      duration: "5-7 Days",
      groupSize: "2-12 People",
      temperature: "15°C",
      category: "hills",
      featured: true,
      highlights: ["Houseboat Stay", "Skiing", "Shikara Ride", "Mughal Gardens"]
    },
    {
      title: "Manali - Adventure Capital",
      slug: "manali",
      icon: "⛷️",
      flag: "🇮🇳",
      rating: "4.6",
      price: "8,999",
      description: "Thrilling adventures await in the Himalayas with skiing, trekking, paragliding, and breathtaking mountain views.",
      duration: "4-6 Days",
      groupSize: "2-8 People",
      temperature: "12°C",
      category: "adventure",
      featured: true,
      highlights: ["Skiing", "Trekking", "Paragliding", "Hot Springs"]
    },
    {
      title: "Goa - Beach Paradise",
      slug: "goa",
      icon: "🏖️",
      flag: "🇮🇳",
      rating: "4.5",
      price: "7,999",
      description: "Sun-kissed beaches, vibrant nightlife, Portuguese heritage, and delicious seafood await in India's party capital.",
      duration: "3-5 Days",
      groupSize: "2-10 People",
      temperature: "28°C",
      category: "beach",
      featured: false,
      highlights: ["Beach Parties", "Water Sports", "Portuguese Architecture", "Seafood"]
    },
    {
      title: "Kerala - God's Own Country",
      slug: "kerala",
      icon: "🛶",
      flag: "🇮🇳",
      rating: "4.7",
      price: "11,999",
      description: "Cruise through tranquil backwaters, explore lush tea plantations, and experience rich cultural traditions in tropical paradise.",
      duration: "6-8 Days",
      groupSize: "2-6 People",
      temperature: "26°C",
      category: "cultural",
      featured: true,
      highlights: ["Houseboat Cruise", "Ayurveda", "Tea Gardens", "Kathakali"]
    },
    {
      title: "Rajasthan - Royal Heritage",
      slug: "rajasthan",
      icon: "🏯",
      flag: "🇮🇳",
      rating: "4.8",
      price: "15,999",
      description: "Walk through the land of kings with majestic forts, opulent palaces, desert safaris, and vibrant cultural experiences.",
      duration: "7-9 Days",
      groupSize: "2-8 People",
      temperature: "32°C",
      category: "cultural",
      featured: true,
      highlights: ["Palace Stay", "Camel Safari", "Folk Dance", "Desert Camp"]
    },
    {
      title: "Andaman Islands - Tropical Escape",
      slug: "andaman",
      icon: "🏝️",
      flag: "🇮🇳",
      rating: "4.9",
      price: "18,999",
      description: "Pristine beaches, crystal-clear waters, and incredible marine life make this the perfect tropical getaway.",
      duration: "5-7 Days",
      groupSize: "2-6 People",
      temperature: "27°C",
      category: "beach",
      featured: false,
      highlights: ["Scuba Diving", "Beach Camping", "Coral Reefs", "Snorkeling"]
    },
    {
      title: "Ladakh - Mountain Desert",
      slug: "ladakh",
      icon: "🚵",
      flag: "🇮🇳",
      rating: "4.9",
      price: "21,999",
      description: "High-altitude adventure with breathtaking landscapes, ancient monasteries, and challenging treks in the Himalayas.",
      duration: "8-10 Days",
      groupSize: "2-4 People",
      temperature: "8°C",
      category: "adventure",
      featured: true,
      highlights: ["Bike Trip", "High Altitude Lakes", "Monasteries", "Trekking"]
    },
    {
      title: "Varanasi - Spiritual Capital",
      slug: "varanasi",
      icon: "🛕",
      flag: "🇮🇳",
      rating: "4.4",
      price: "6,999",
      description: "Experience ancient spiritual rituals, sacred Ganga Aarti, and the timeless culture of India's oldest living city.",
      duration: "2-4 Days",
      groupSize: "1-8 People",
      temperature: "30°C",
      category: "spiritual",
      featured: false,
      highlights: ["Ganga Aarti", "Temple Tour", "Boat Ride", "Yoga"]
    },
    {
      title: "Rishikesh - Yoga Capital",
      slug: "rishikesh",
      icon: "🧘",
      flag: "🇮🇳",
      rating: "4.6",
      price: "5,999",
      description: "Find your inner peace with yoga, meditation, and adventure sports in the foothills of the Himalayas.",
      duration: "3-5 Days",
      groupSize: "1-10 People",
      temperature: "22°C",
      category: "spiritual",
      featured: false,
      highlights: ["Yoga Retreat", "River Rafting", "Meditation", "Temples"]
    }
  ];

  // LOAD DATA
  useEffect(() => {
    setTimeout(() => {
      setDestinations(sampleDestinations);
      setFilteredDestinations(sampleDestinations);
      setLoading(false);
    }, 1200);
  }, []);

  // APPLY FILTERS AND SORTING
  useEffect(() => {
    let list = [...destinations];

    // Apply category filter
    if (activeFilter !== "all") {
      list = list.filter((d) => d.category === activeFilter);
    }

    // Apply search filter
    if (searchTerm.trim()) {
      list = list.filter((d) =>
        d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "rating":
        list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      case "price-low":
        list.sort((a, b) => parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, '')));
        break;
      case "price-high":
        list.sort((a, b) => parseFloat(b.price.replace(/,/g, '')) - parseFloat(a.price.replace(/,/g, '')));
        break;
      case "popular":
        // For demo, using rating as popularity proxy
        list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      default: // featured
        list.sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? -1 : 1);
    }

    setFilteredDestinations(list);
  }, [activeFilter, searchTerm, sortBy, destinations]);

  // UPDATE FILTER COUNTS
  useEffect(() => {
    filters.forEach(filter => {
      if (filter.id === "all") {
        filter.count = destinations.length;
      } else {
        filter.count = destinations.filter(d => d.category === filter.id).length;
      }
    });
  }, [destinations]);

  // LOADING UI
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Discovering Amazing Destinations</h2>
          <p className="text-gray-600">Loading your next adventure...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* ENHANCED HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-2xl text-lg font-semibold mb-6 border border-blue-200/50"
          >
            🌍 Explore Incredible India
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Discover Your Next
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Adventure 🗺️
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From snow-capped Himalayas to tropical beaches, ancient temples to modern cities - 
            explore the diverse beauty of India with our handpicked destinations.
          </p>
        </motion.div>

        {/* ENHANCED FILTERS */}
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
          resultsCount={filteredDestinations.length}
        />

        {/* DESTINATIONS GRID */}
        {filteredDestinations.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredDestinations.map((item, index) => (
                <DestinationCard key={item.slug} data={item} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* EMPTY STATE */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-3xl shadow-lg"
          >
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              No destinations found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your search terms or filters to discover more amazing destinations.
            </p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchTerm("");
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all"
            >
              Show All Destinations
            </button>
          </motion.div>
        )}

        {/* LOAD MORE BUTTON */}
        {filteredDestinations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <button className="bg-white border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
              Load More Destinations
            </button>
          </motion.div>
        )}

        {/* NEWSLETTER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl text-white text-center py-16 px-8 shadow-2xl relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-4">
              ✈️ Never Miss an Adventure
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Get exclusive destination guides, travel deals, and insider tips delivered to your inbox. 
              Join 10,000+ travelers discovering India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                placeholder="Enter your email address"
                className="px-6 py-4 rounded-2xl text-gray-800 flex-1 text-lg placeholder-gray-500 focus:ring-4 focus:ring-white/20 outline-none"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">
              No spam ever. Unsubscribe anytime with one click.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}