"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Enhanced DestinationCard Component
function DestinationCard({ data, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <span className="text-6xl">{data.icon}</span>
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            ⭐ {data.rating}
          </span>
          <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            ${data.price}
          </span>
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
            ♡
          </button>
          <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
            📍
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {data.title}
          </h3>
          <span className="text-2xl">{data.flag}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {data.description}
        </p>

        {/* Features */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <span>⏱️</span>
            <span>{data.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>👥</span>
            <span>{data.groupSize}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>🌡️</span>
            <span>{data.temperature}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={`/destinations/${data.slug}`}
          className="w-full bg-linear-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
        >
          <span>Explore Now</span>
          <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </div>
  );
}

// Filter Component
function FilterSection({ filters, activeFilter, onFilterChange, searchTerm, onSearchChange }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        
        {/* Search Bar */}
        <div className="flex-1 w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
              🔍
            </span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filters = [
    { id: "all", label: "All", icon: "🌍" },
    { id: "adventure", label: "Adventure", icon: "⛰️" },
    { id: "beach", label: "Beach", icon: "🏖️" },
    { id: "cultural", label: "Cultural", icon: "🏛️" },
    { id: "hills", label: "Hill Stations", icon: "🏔️" },
    { id: "wildlife", label: "Wildlife", icon: "🐘" }
  ];

  // Sample destinations data
  const sampleDestinations = [
    {
      title: "Kashmir - Paradise on Earth",
      slug: "kashmir",
      icon: "🏔️",
      flag: "🇮🇳",
      rating: "4.8",
      price: "299",
      description: "Experience the breathtaking beauty of Dal Lake, Mughal gardens, and snow-capped Himalayas in the crown jewel of India.",
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
      description: "Thrilling adventures in the Himalayas with skiing, trekking, and stunning mountain vistas in this popular hill station.",
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
      description: "Sun-kissed beaches, Portuguese architecture, and vibrant nightlife in India's ultimate coastal destination.",
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
      description: "Serene backwaters, lush tea plantations, and rich cultural heritage in this tropical paradise of South India.",
      duration: "6-8 Days",
      groupSize: "2-6",
      temperature: "26°C",
      category: "cultural",
      featured: true
    },
    {
      title: "Rajasthan - Royal Heritage",
      slug: "rajasthan",
      icon: "🏰",
      flag: "🇮🇳",
      rating: "4.6",
      price: "349",
      description: "Majestic palaces, desert safaris, and vibrant culture in the land of kings and warriors.",
      duration: "7-10 Days",
      groupSize: "2-8",
      temperature: "32°C",
      category: "cultural",
      featured: false
    },
    {
      title: "Ladakh - Moonland",
      slug: "ladakh",
      icon: "🚵",
      flag: "🇮🇳",
      rating: "4.9",
      price: "399",
      description: "High-altitude deserts, ancient monasteries, and breathtaking landscapes in the land of high passes.",
      duration: "8-12 Days",
      groupSize: "2-6",
      temperature: "8°C",
      category: "adventure",
      featured: true
    },
    {
      title: "Andaman - Tropical Islands",
      slug: "andaman",
      icon: "🐠",
      flag: "🇮🇳",
      rating: "4.7",
      price: "279",
      description: "Pristine beaches, coral reefs, and water sports in India's exotic island archipelago.",
      duration: "5-7 Days",
      groupSize: "2-8",
      temperature: "27°C",
      category: "beach",
      featured: false
    },
    {
      title: "Rishikesh - Yoga Capital",
      slug: "rishikesh",
      icon: "🧘",
      flag: "🇮🇳",
      rating: "4.4",
      price: "159",
      description: "Spiritual awakening, yoga retreats, and river rafting in the gateway to the Himalayas.",
      duration: "3-4 Days",
      groupSize: "2-12",
      temperature: "20°C",
      category: "cultural",
      featured: false
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setDestinations(sampleDestinations);
      setFilteredDestinations(sampleDestinations);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter destinations
  useEffect(() => {
    let filtered = destinations;

    // Filter by category
    if (activeFilter !== "all") {
      filtered = filtered.filter(dest => dest.category === activeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(dest =>
        dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredDestinations(filtered);
  }, [activeFilter, searchTerm, destinations]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>🌍</span>
            <span>Explore India</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Incredible India</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From snow-capped mountains to sun-kissed beaches, explore diverse landscapes and rich cultural heritage.
          </p>
        </div>

        {/* Filters Section */}
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredDestinations.length}</span> destinations
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>🔃</span>
            <span>Sort by: Popularity</span>
          </div>
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((destination, index) => (
              <DestinationCard 
                key={destination.slug} 
                data={destination} 
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setActiveFilter("all");
                setSearchTerm("");
              }}
              className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Canot Find Your Dream Destination?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our travel experts can create a custom itinerary tailored to your preferences and budget.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              💬 Talk to an Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}