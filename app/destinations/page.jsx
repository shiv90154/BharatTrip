"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, MapPin, Calendar, Users, Star, Heart, ChevronDown, X, Sparkles } from "lucide-react";

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
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {data.featured && (
            <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
              <Sparkles size={12} />
              Featured
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            {data.rating}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-gradient-to-r from-rose-600 to-orange-600 text-white px-4 py-2 rounded-2xl shadow-lg text-center">
            <div className="text-xs opacity-90">From</div>
            <div className="text-lg font-bold">₹{data.price}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute top-16 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300"
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
            <Heart size={16} className={isLiked ? "fill-current" : ""} />
          </motion.button>
        </motion.div>

        {/* Location Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm flex items-center gap-1">
            <MapPin size={12} />
            {data.region}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <Link href={`/destinations/${data.slug}`}>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors duration-300 line-clamp-1">
              {data.title}
            </h3>
          </Link>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {data.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span className="font-medium">{data.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span className="font-medium">{data.groupSize}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">🌡️</span>
            <span className="font-medium">{data.temperature}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-6">
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
            className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group"
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

// ---------------------------------------------
// 🎯 ENHANCED FILTER SECTION
// ---------------------------------------------
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
      <div className="lg:hidden mb-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowFilters(!showFilters)}
          className="w-full py-4 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center justify-center gap-3 font-semibold text-gray-700"
        >
          <Filter size={20} />
          Filters & Sorting
          <ChevronDown size={16} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </motion.button>
      </div>

      {/* Main Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`bg-white rounded-3xl shadow-lg border border-gray-100 p-6 mb-8 ${showFilters ? 'block' : 'hidden lg:block'}`}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          
          {/* Search Bar */}
          <div className="flex-1 w-full relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search destinations, activities, or experiences..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full py-4 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all duration-300 text-gray-700 placeholder-gray-500"
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
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-500/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent"
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                <span className="text-sm">{filter.label}</span>
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
              className="pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all duration-300 appearance-none font-medium text-gray-700"
            >
              <option value="featured">Featured</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200"
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
  const [showFilters, setShowFilters] = useState(false);

  // Enhanced filters with better categories
  const filters = [
    { id: "all", label: "All", icon: "🌍", count: 12 },
    { id: "mountain", label: "Mountains", icon: "⛰️", count: 4 },
    { id: "beach", label: "Beaches", icon: "🏖️", count: 3 },
    { id: "cultural", label: "Cultural", icon: "🏛️", count: 3 },
    { id: "adventure", label: "Adventure", icon: "🚵", count: 4 },
    { id: "spiritual", label: "Spiritual", icon: "🛕", count: 2 }
  ];

  // Enhanced sample data with real images
  const sampleDestinations = [
    {
      title: "Kashmir - Paradise on Earth",
      slug: "kashmir",
      image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=500",
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
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500",
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
      image: "https://images.unsplash.com/photo-1574362849221-71cad6d6fb34?w=500",
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
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=500",
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
      image: "https://images.unsplash.com/photo-1539590581446-74e33a6e2ab2?w=500",
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
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=500",
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
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500",
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
      image: "https://images.unsplash.com/photo-1598257008675-7b708b103b1a?w=500",
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
      image: "https://images.unsplash.com/photo-1594736797933-d0f05c5bd04e?w=500",
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
    }, 1200);
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

  // Update filter counts
  useEffect(() => {
    filters.forEach(filter => {
      if (filter.id === "all") {
        filter.count = destinations.length;
      } else {
        filter.count = destinations.filter(d => d.category === filter.id).length;
      }
    });
  }, [destinations]);

  // Loading UI
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50/30 pt-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-rose-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Discovering Amazing Destinations</h2>
          <p className="text-gray-600">Loading your next adventure...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50/30 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-rose-100 text-rose-700 rounded-2xl text-sm font-semibold mb-6"
          >
            <Sparkles size={16} />
            Explore Incredible India
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Next
            <span className="block bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
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
            className="text-center py-20 bg-white rounded-3xl shadow-lg border border-gray-100"
          >
            <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-rose-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
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
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
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
            className="text-center mt-12"
          >
            <button className="bg-white border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-600 hover:text-white transition-all duration-300">
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
          className="mt-20 bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl text-white text-center py-12 px-6 shadow-2xl"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Never Miss an Adventure
            </h2>
            <p className="text-rose-100 text-lg mb-8 leading-relaxed">
              Get exclusive destination guides, travel deals, and insider tips delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                placeholder="Enter your email address"
                className="px-6 py-4 rounded-2xl text-gray-800 flex-1 text-lg placeholder-gray-500 focus:ring-4 focus:ring-white/20 outline-none"
              />
              <button className="bg-white text-rose-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-rose-200 text-sm mt-4">
              No spam ever. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}