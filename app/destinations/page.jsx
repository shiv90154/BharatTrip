"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ---------------------------------------------
// 🎯 DESTINATION CARD – Tailwind + Animations
// ---------------------------------------------
function DestinationCard({ data, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
    >
      {/* Image / Icon Section */}
      <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-7xl">
        {data.icon}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 px-3 py-1 rounded-full text-xs shadow">⭐ {data.rating}</span>
          <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs shadow">${data.price}</span>
        </div>

        {/* Hover Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100"
        >
          <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow hover:scale-110">♡</button>
          <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow hover:scale-110">📍</button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
            {data.title}
          </h3>
          <span className="text-2xl">{data.flag}</span>
        </div>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{data.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
          <span>⏱️ {data.duration}</span>
          <span>👥 {data.groupSize}</span>
          <span>🌡️ {data.temperature}</span>
        </div>

        <Link
          href={`/destinations/${data.slug}`}
          className="mt-5 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:scale-105 transition"
        >
          Explore Now →
        </Link>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------
// 🎯 FILTER SECTION – Tailwind + Animation
// ---------------------------------------------
function FilterSection({ filters, activeFilter, onFilterChange, searchTerm, onSearchChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-lg p-6 mb-10 rounded-2xl shadow-lg"
    >
      <div className="flex flex-col lg:flex-row items-center gap-6">
        
        {/* Search */}
        <div className="flex-1 w-full relative">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full py-4 px-12 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-blue-500 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.icon} {filter.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------
// 🎯 MAIN DESTINATIONS PAGE
// ---------------------------------------------
export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // FILTER TYPES
  const filters = [
    { id: "all", label: "All", icon: "🌍" },
    { id: "adventure", label: "Adventure", icon: "⛰️" },
    { id: "beach", label: "Beach", icon: "🏖️" },
    { id: "cultural", label: "Cultural", icon: "🏛️" },
    { id: "hills", label: "Hill Stations", icon: "🏔️" },
    { id: "wildlife", label: "Wildlife", icon: "🐘" }
  ];

  // SAMPLE DATA
  const sampleDestinations = [
    {
      title: "Kashmir - Paradise on Earth",
      slug: "kashmir",
      icon: "🏔️",
      flag: "🇮🇳",
      rating: "4.8",
      price: "299",
      description: "Experience snow peaks, Dal Lake & Mughal gardens.",
      duration: "5-7 Days",
      groupSize: "2-12",
      temperature: "15°C",
      category: "hills",
      featured: true
    },
    {
      title: "Manali - Adventure Capital",
      slug: "manali",
      icon: "⛷️",
      flag: "🇮🇳",
      rating: "4.6",
      price: "199",
      description: "Skiing, trekking & Himalayan views.",
      duration: "4-6 Days",
      groupSize: "2-8",
      temperature: "12°C",
      category: "adventure",
      featured: true
    },
    {
      title: "Goa - Beach Paradise",
      slug: "goa",
      icon: "🏖️",
      flag: "🇮🇳",
      rating: "4.5",
      price: "179",
      description: "Beaches, nightlife & Portuguese heritage.",
      duration: "3-5 Days",
      groupSize: "2-10",
      temperature: "28°C",
      category: "beach",
      featured: false
    },
    {
      title: "Kerala - God's Own Country",
      slug: "kerala",
      icon: "🛶",
      flag: "🇮🇳",
      rating: "4.7",
      price: "249",
      description: "Backwaters, tea gardens & culture.",
      duration: "6-8 Days",
      groupSize: "2-6",
      temperature: "26°C",
      category: "cultural",
      featured: true
    }
  ];

  // LOAD DATA
  useEffect(() => {
    setTimeout(() => {
      setDestinations(sampleDestinations);
      setFilteredDestinations(sampleDestinations);
      setLoading(false);
    }, 800);
  }, []);

  // APPLY FILTERS
  useEffect(() => {
    let list = destinations;

    if (activeFilter !== "all") {
      list = list.filter((d) => d.category === activeFilter);
    }

    if (searchTerm.trim()) {
      list = list.filter((d) =>
        d.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredDestinations(list);
  }, [activeFilter, searchTerm, destinations]);

  // LOADING UI
  if (loading) {
    return (
      <div className="min-h-screen pt-24 px-8">
        <div className="text-center animate-pulse">Loading destinations...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
            🌍 Explore India
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Discover 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Incredible India</span>
          </h1>

          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Mountains, beaches, deserts & culture — sab ek jagah!
          </p>
        </motion.div>

        {/* FILTERS */}
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* RESULTS COUNT */}
        <p className="text-gray-700 mb-4">
          Showing <b>{filteredDestinations.length}</b> destinations
        </p>

        {/* DESTINATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((item, index) => (
            <DestinationCard key={item.slug} data={item} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
