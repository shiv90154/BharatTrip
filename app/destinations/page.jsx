"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, MapPin, Calendar, Users, Star, Heart, ChevronDown, Sparkles } from "lucide-react";

// Destination Card Component
function DestinationCard({ data, index }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {data.featured && (
            <span className="bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
              <Sparkles size={10} />
              Featured
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
            <Star size={10} className="fill-amber-400 text-amber-400" />
            {data.rating}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-gradient-to-r from-rose-600 to-orange-600 text-white px-3 py-2 rounded-xl shadow-lg text-center">
            <div className="text-xs opacity-90">From</div>
            <div className="text-sm font-bold">₹{data.price}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute top-12 right-3 opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm border ${
              isLiked 
                ? "bg-rose-500 text-white border-rose-500" 
                : "bg-white/20 text-white border-white/30"
            }`}
          >
            <Heart size={14} className={isLiked ? "fill-current" : ""} />
          </motion.button>
        </motion.div>

        {/* Location Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm flex items-center gap-1">
            <MapPin size={10} />
            {data.region}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <Link href={`/destinations/${data.slug}`}>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-rose-600 transition-colors duration-300 line-clamp-1">
              {data.title}
            </h3>
          </Link>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
          {data.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span className="font-medium">{data.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={12} />
            <span className="font-medium">{data.groupSize}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs">🌡️</span>
            <span className="font-medium">{data.temperature}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1 mb-4">
          {data.highlights.slice(0, 3).map((highlight, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
            >
              {highlight}
            </span>
          ))}
          {data.highlights.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              +{data.highlights.length - 3}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Link href={`/destinations/${data.slug}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Explore Destination
            <motion.span
              animate={{ x: [0, 4, 0] }}
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

// Filter Section Component
function FilterSection({ 
  filters, 
  activeFilter, 
  onFilterChange, 
  searchTerm, 
  onSearchChange, 
  sortBy, 
  onSortChange, 
  resultsCount,
  showFilters,
  setShowFilters 
}) {
  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowFilters(!showFilters)}
          className="w-full py-3 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center gap-2 font-semibold text-gray-700 text-sm"
        >
          <Filter size={16} />
          Filters & Sorting
          <ChevronDown size={14} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </motion.button>
      </div>

      {/* Main Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`bg-white rounded-xl shadow-lg border border-gray-100 p-4 mb-6 ${showFilters ? 'block' : 'hidden lg:block'}`}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          
          {/* Search Bar */}
          <div className="flex-1 w-full relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full py-3 pl-10 pr-4 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all duration-300 text-gray-700 placeholder-gray-500 text-sm"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onFilterChange(filter.id)}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                  activeFilter === filter.id
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-500/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent"
                }`}
              >
                <span className="text-sm">{filter.icon}</span>
                <span>{filter.label}</span>
                {filter.count && (
                  <span className={`px-1.5 py-0.5 rounded-full text-xs ${
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
              className="pl-3 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all duration-300 appearance-none font-medium text-gray-700 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
          </div>
        </div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200"
        >
          <span className="text-gray-700 font-medium text-sm">
            Found <span className="text-rose-600 font-bold">{resultsCount}</span> destinations
          </span>
          <span className="text-gray-500 text-xs">
            {activeFilter !== 'all' && `in ${filters.find(f => f.id === activeFilter)?.label}`}
          </span>
        </motion.div>
      </motion.div>
    </>
  );
}

// Main Destinations Page
export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Enhanced filters with better categories
  const filters = [
    { id: "all", label: "All", icon: "🌍", count: 9 },
    { id: "mountain", label: "Mountains", icon: "⛰️", count: 2 },
    { id: "beach", label: "Beaches", icon: "🏖️", count: 2 },
    { id: "cultural", label: "Cultural", icon: "🏛️", count: 2 },
    { id: "adventure", label: "Adventure", icon: "🚵", count: 2 },
    { id: "spiritual", label: "Spiritual", icon: "🛕", count: 2 }
  ];

  // Sample data
  const sampleDestinations = [
    {
      title: "Kashmir - Paradise on Earth",
      slug: "kashmir",
      image: "/destinations/Kashmir.avif",
      region: "Jammu & Kashmir",
      rating: "4.8",
      price: "12,999",
      description: "Experience the breathtaking beauty of snow-capped peaks, serene Dal Lake, and enchanting Mughal gardens.",
      duration: "5-7 Days",
      groupSize: "2-12 People",
      temperature: "15°C",
      category: "mountain",
      featured: true,
      highlights: ["Houseboat Stay", "Skiing", "Shikara Ride", "Mughal Gardens"]
    },
    {
      title: "Goa Beach Paradise",
      slug: "goa",
      image: "/destinations/Goa.avif",
      region: "Goa",
      rating: "4.5",
      price: "7,999",
      description: "Sun-kissed beaches, vibrant nightlife, Portuguese heritage, and delicious seafood.",
      duration: "3-5 Days",
      groupSize: "2-10 People",
      temperature: "28°C",
      category: "beach",
      featured: false,
      highlights: ["Beach Parties", "Water Sports", "Portuguese Architecture", "Seafood"]
    },
    {
      title: "Manali Adventure",
      slug: "manali",
      image: "/destinations/Manali.avif",
      region: "Himachal Pradesh",
      rating: "4.6",
      price: "8,999",
      description: "Thrilling adventures in the Himalayas with skiing, trekking, and breathtaking mountain views.",
      duration: "4-6 Days",
      groupSize: "2-8 People",
      temperature: "12°C",
      category: "adventure",
      featured: true,
      highlights: ["Skiing", "Trekking", "Paragliding", "Hot Springs"]
    },
    {
      title: "Kerala Backwaters",
      slug: "kerala",
      image: "/destinations/kerla.avif",
      region: "Kerala",
      rating: "4.7",
      price: "11,999",
      description: "Cruise through tranquil backwaters, explore lush tea plantations, and experience rich cultural traditions.",
      duration: "6-8 Days",
      groupSize: "2-6 People",
      temperature: "26°C",
      category: "cultural",
      featured: true,
      highlights: ["Houseboat Cruise", "Ayurveda", "Tea Gardens", "Kathakali"]
    },
    {
      title: "Rajasthan Royal Heritage",
      slug: "rajasthan",
      image: "/destinations/Rajasthan.avif",
      region: "Rajasthan",
      rating: "4.8",
      price: "15,999",
      description: "Walk through the land of kings with majestic forts, opulent palaces, and desert safaris.",
      duration: "7-9 Days",
      groupSize: "2-8 People",
      temperature: "32°C",
      category: "cultural",
      featured: true,
      highlights: ["Palace Stay", "Camel Safari", "Folk Dance", "Desert Camp"]
    },
    {
      title: "Andaman Islands",
      slug: "andaman",
      image: "/destinations/AndamanIslands.avif",
      region: "Andaman",
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
      title: "Ladakh Mountain Desert",
      slug: "ladakh",
      image: "/destinations/Ladakh.avif",
      region: "Ladakh",
      rating: "4.9",
      price: "21,999",
      description: "High-altitude adventure with breathtaking landscapes, ancient monasteries, and challenging treks.",
      duration: "8-10 Days",
      groupSize: "2-4 People",
      temperature: "8°C",
      category: "adventure",
      featured: true,
      highlights: ["Bike Trip", "High Altitude Lakes", "Monasteries", "Trekking"]
    },
    {
      title: "Varanasi Spiritual Journey",
      slug: "varanasi",
      image: "/destinations/Varanasi.avif",
      region: "Uttar Pradesh",
      rating: "4.4",
      price: "6,999",
      description: "Experience ancient spiritual rituals, sacred Ganga Aarti, and timeless culture.",
      duration: "2-4 Days",
      groupSize: "1-8 People",
      temperature: "30°C",
      category: "spiritual",
      featured: false,
      highlights: ["Ganga Aarti", "Temple Tour", "Boat Ride", "Yoga"]
    },
    {
      title: "Rishikesh Yoga Capital",
      slug: "rishikesh",
      image: "/destinations/Rishikesh.avif",
      region: "Uttarakhand",
      rating: "4.6",
      price: "5,999",
      description: "Find your inner peace with yoga, meditation, and adventure sports in the Himalayan foothills.",
      duration: "3-5 Days",
      groupSize: "1-10 People",
      temperature: "22°C",
      category: "spiritual",
      featured: false,
      highlights: ["Yoga Retreat", "River Rafting", "Meditation", "Temples"]
    }
  ];

  // Load data
  useEffect(() => {
    setTimeout(() => {
      setDestinations(sampleDestinations);
      setFilteredDestinations(sampleDestinations);
      setLoading(false);
    }, 1000);
  }, []);

  // Apply filters and sorting
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
        list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      default: // featured
        list.sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? -1 : 1);
    }

    setFilteredDestinations(list);
  }, [activeFilter, searchTerm, sortBy, destinations]);

  // Loading UI
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50/30 pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-rose-600 border-t-transparent rounded-full mx-auto mb-3"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Discovering Amazing Destinations</h2>
          <p className="text-gray-600 text-sm">Loading your next adventure...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-xl text-sm font-semibold mb-4"
          >
            <Sparkles size={14} />
            Explore Incredible India
          </motion.span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Discover Your Next
            <span className="block bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            From snow-capped Himalayas to tropical beaches, explore the diverse beauty of India with our handpicked destinations.
          </p>
        </motion.div>

        {/* Enhanced Filters */}
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
          resultsCount={filteredDestinations.length}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
          >
            <AnimatePresence>
              {filteredDestinations.map((item, index) => (
                <DestinationCard key={item.slug} data={item} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-xl shadow-lg border border-gray-100"
          >
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              No destinations found
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
              Try adjusting your search terms or filters to discover more amazing destinations.
            </p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchTerm("");
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Show All Destinations
            </button>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredDestinations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <button className="bg-white border-2 border-rose-600 text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-rose-600 hover:text-white transition-all duration-300 text-sm">
              Load More Destinations
            </button>
          </motion.div>
        )}

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-rose-600 to-orange-600 rounded-xl text-white text-center py-8 px-6 shadow-xl"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">
              Never Miss an Adventure
            </h2>
            <p className="text-rose-100 mb-6 leading-relaxed text-sm">
              Get exclusive destination guides, travel deals, and insider tips delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-lg text-gray-800 flex-1 text-sm placeholder-gray-500 focus:ring-2 focus:ring-white/20 outline-none"
              />
              <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold text-sm hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-rose-200 text-xs mt-3">
              No spam ever. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}