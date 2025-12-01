"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X, ChevronLeft, ChevronRight, MapPin, Calendar, Users, Download, Share2, ExternalLink } from "lucide-react";

export default function GalleryPage() {
  // Enhanced trips data with multiple photos per trip
const trips = [
  /* ------------------------------- 1. HIMALAYAN ------------------------------- */
  {
    id: 1,
    title: "Himalayan Adventure",
    location: "Himachal Pradesh",
    category: "mountains",
    duration: "7 Days",
    groupSize: "6 Travelers",
    date: "March 2024",
    description:
      "An unforgettable journey through the majestic Himalayas with breathtaking views and cultural experiences.",
    coverImage: "/gallery/HimalayanAdventure/1.avif",
    images: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      src: `/gallery/HimalayanAdventure/${i + 1}.avif`,
      caption: `Himalayan Adventure ${i + 1}`,
    })),
    featured: true,
  },

  /* ------------------------------- 2. GOA BEACH ------------------------------- */
  {
    id: 2,
    title: "Goa Beach Escape",
    location: "Goa",
    category: "beaches",
    duration: "5 Days",
    groupSize: "4 Travelers",
    date: "February 2024",
    description:
      "Relaxing beach vacation with water sports, seafood, and vibrant nightlife.",
    coverImage: "/gallery/GoaBeachEscape/1.avif",
    images: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      src: `/gallery/GoaBeachEscape/${i + 1}.avif`,
      caption: `Goa Beach Escape ${i + 1}`,
    })),
    featured: false,
  },

  /* ------------------------------- 3. KERALA BACKWATERS ------------------------------- */
  {
    id: 3,
    title: "Kerala Backwaters",
    location: "Kerala",
    category: "cultural",
    duration: "6 Days",
    groupSize: "8 Travelers",
    date: "January 2024",
    description:
      "Serene houseboat experience through tranquil backwaters and lush landscapes.",
    coverImage: "/gallery/KeralaBackwaters/1.avif",
    images: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      src: `/gallery/KeralaBackwaters/${i + 1}.avif`,
      caption: `Kerala Backwaters ${i + 1}`,
    })),
    featured: true,
  },

  /* ------------------------------- 4. RAJASTHAN HERITAGE ------------------------------- */
  {
    id: 4,
    title: "Rajasthan Heritage",
    location: "Rajasthan",
    category: "cultural",
    duration: "8 Days",
    groupSize: "10 Travelers",
    date: "December 2023",
    description:
      "Royal experience exploring majestic forts, palaces, and desert culture.",
    coverImage: "/gallery/RajasthanHeritage/1.avif",
    images: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      src: `/gallery/RajasthanHeritage/${i + 1}.avif`,
      caption: `Rajasthan Heritage ${i + 1}`,
    })),
    featured: true,
  },

  /* ------------------------------- 5. LADAKH EXPEDITION ------------------------------- */
  {
    id: 5,
    title: "Ladakh Expedition",
    location: "Ladakh",
    category: "mountains",
    duration: "10 Days",
    groupSize: "5 Travelers",
    date: "July 2024",
    description:
      "High-altitude adventure through breathtaking landscapes and ancient monasteries.",
    coverImage: "/gallery/LadakhExpedition/1.avif",
    images: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      src: `/gallery/LadakhExpedition/${i + 1}.avif`,
      caption: `Ladakh Expedition ${i + 1}`,
    })),
    featured: true,
  },

  /* ------------------------------- 6. ANDAMAN ISLANDS ------------------------------- */
  {
    id: 6,
    title: "Andaman Islands",
    location: "Andaman",
    category: "beaches",
    duration: "7 Days",
    groupSize: "6 Travelers",
    date: "November 2023",
    description:
      "Tropical paradise with crystal-clear waters and marine adventures.",
    coverImage: "/gallery/AndamanIslands/1.avif",
    images: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      src: `/gallery/AndamanIslands/${i + 1}.avif`,
      caption: `Andaman Islands ${i + 1}`,
    })),
    featured: false,
  },
];


  const categories = [
    { id: "all", name: "All Trips", count: trips.length, icon: "🌍" },
    { id: "mountains", name: "Mountains", count: trips.filter(trip => trip.category === "mountains").length, icon: "⛰️" },
    { id: "beaches", name: "Beaches", count: trips.filter(trip => trip.category === "beaches").length, icon: "🏖️" },
    { id: "cultural", name: "Cultural", count: trips.filter(trip => trip.category === "cultural").length, icon: "🏛️" }
  ];

  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTrips = trips.filter(trip => {
    const matchesCategory = activeCategory === "all" || trip.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
                         trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedTrip) return;
      
      if (e.key === "Escape") setSelectedTrip(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedTrip, selectedImageIndex]);

  const handleNext = () => {
    if (!selectedTrip) return;
    setSelectedImageIndex((prev) => (prev + 1) % selectedTrip.images.length);
  };

  const handlePrev = () => {
    if (!selectedTrip) return;
    setSelectedImageIndex((prev) => (prev - 1 + selectedTrip.images.length) % selectedTrip.images.length);
  };

  const openTripGallery = (trip, imageIndex = 0) => {
    setSelectedTrip(trip);
    setSelectedImageIndex(imageIndex);
  };

  const downloadImage = async (imageUrl, imageName) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${imageName}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const shareTrip = async (trip) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: trip.title,
          text: trip.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Sharing cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${trip.title} - ${trip.location}\n${trip.description}`);
      alert('Trip details copied to clipboard!');
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      mountains: "from-green-500 to-emerald-600",
      beaches: "from-blue-400 to-cyan-500",
      cultural: "from-amber-500 to-orange-500",
      wildlife: "from-brown-500 to-amber-600"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-xl text-sm font-semibold mb-4"
          >
            📸 Travel Memories
          </motion.span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Explore <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Trip Galleries</span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Discover beautiful moments from our travelers' adventures across incredible India
          </p>
        </motion.div>

        {/* Enhanced Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 mb-6"
        >
          <div className="flex flex-col lg:flex-row gap-3 items-center">
            {/* Search Bar */}
            <div className="flex-1 w-full relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search trips by destination, title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 pl-10 pr-4 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all duration-300 text-gray-700 placeholder-gray-500 text-sm"
                />
              </div>
            </div>

            {/* Filter Button - Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm"
            >
              <Filter size={16} />
              Categories
            </button>

            {/* Categories - Desktop */}
            <div className="hidden lg:flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                    activeCategory === category.id
                      ? "bg-rose-600 text-white shadow-lg shadow-rose-500/25"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-base">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                    activeCategory === category.id ? "bg-white/20" : "bg-gray-200"
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Categories */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-3 overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setShowFilters(false);
                      }}
                      className={`p-3 rounded-lg text-center transition-all text-sm ${
                        activeCategory === category.id
                          ? "bg-rose-600 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="text-base mb-1">{category.icon}</div>
                      <div className="font-medium">{category.name}</div>
                      <div className="text-xs opacity-75">({category.count})</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200"
          >
            <span className="text-gray-700 font-medium text-sm">
              Showing <span className="text-rose-600 font-bold">{filteredTrips.length}</span> trips
            </span>
            {activeCategory !== 'all' && (
              <span className="text-gray-500 text-xs">
                in {categories.find(c => c.id === activeCategory)?.name}
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Enhanced Trip Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence>
            {filteredTrips.map((trip, index) => (
              <motion.div
                key={trip.id} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                {/* Trip Cover Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={trip.coverImage}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={trip.title}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {trip.featured && (
                      <span className="bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                        ⭐ Featured
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(trip.category)}`}>
                      {trip.category}
                    </span>
                  </div>

                  {/* Image Count Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                    📷 {trip.images.length} photos
                  </div>

                  {/* View Gallery Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    <button className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm backdrop-blur-sm flex items-center gap-2">
                      <ExternalLink size={16} />
                      View Gallery
                    </button>
                  </motion.div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg mb-1">{trip.title}</h3>
                    <div className="flex items-center gap-1 text-white/90 text-sm mb-2">
                      <MapPin size={14} />
                      <span>{trip.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{trip.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={12} />
                        <span>{trip.groupSize}</span>
                      </div>
                      <span>{trip.date}</span>
                    </div>
                  </div>
                </div>

                {/* Trip Description */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                    {trip.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openTripGallery(trip);
                      }}
                      className="text-rose-600 hover:text-rose-700 font-semibold text-sm flex items-center gap-1 transition-colors"
                    >
                      View All Photos
                      <ExternalLink size={14} />
                    </button>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          shareTrip(trip);
                        }}
                        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                        title="Share trip"
                      >
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredTrips.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-xl shadow-lg border border-gray-100"
          >
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">No trips found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
              Try adjusting your search terms or select a different category to discover amazing travel experiences.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchTerm("");
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Show All Trips
            </button>
          </motion.div>
        )}

        {/* Enhanced Trip Gallery Lightbox */}
        <AnimatePresence>
          {selectedTrip && (
            <motion.div
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTrip(null)}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                onClick={() => setSelectedTrip(null)}
              >
                <X size={20} />
              </motion.button>

              {/* Navigation Arrows */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <ChevronLeft size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight size={20} />
              </motion.button>

              {/* Action Buttons */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadImage(selectedTrip.images[selectedImageIndex].src, selectedTrip.title);
                  }}
                  className="p-2 rounded-full backdrop-blur-sm bg-white/20 text-white border border-white/30"
                  title="Download photo"
                >
                  <Download size={18} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    shareTrip(selectedTrip);
                  }}
                  className="p-2 rounded-full backdrop-blur-sm bg-white/20 text-white border border-white/30"
                  title="Share trip"
                >
                  <Share2 size={18} />
                </motion.button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 rounded-full px-3 py-1 text-sm">
                {selectedImageIndex + 1} / {selectedTrip.images.length}
              </div>

              {/* Trip Info */}
              <div className="absolute top-4 left-20 z-10 text-white max-w-md">
                <h3 className="text-lg font-bold">{selectedTrip.title}</h3>
                <p className="text-white/80 text-sm">{selectedTrip.location}</p>
              </div>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-4xl max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedTrip.images[selectedImageIndex].src}
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-2xl object-contain max-h-[80vh]"
                  alt={selectedTrip.images[selectedImageIndex].caption}
                />
                
                {/* Image Caption */}
                {selectedTrip.images[selectedImageIndex].caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                    <p className="text-white text-sm text-center">
                      {selectedTrip.images[selectedImageIndex].caption}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-2">
                {selectedTrip.images.map((image, index) => (
                  <motion.button
                    key={image.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(index);
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index 
                        ? "border-rose-500 scale-110" 
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image.src}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12 pt-6 border-t border-gray-200"
        >
          <p className="text-gray-600 text-sm">
            📸 {trips.length} amazing trips documented • 
            🌍 {new Set(trips.map(trip => trip.location)).size} destinations explored
          </p>
        </motion.div>
      </div>
    </div>
  );
}