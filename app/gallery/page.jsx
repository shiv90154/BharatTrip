"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X, ChevronLeft, ChevronRight, MapPin, Heart, Share2, Download, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  // Enhanced images with unique URLs and proper keys
  const images = [
    { 
      id: 1,
      src: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800", 
      category: "mountains", 
      title: "Himalayan Peaks", 
      location: "Himachal Pradesh",
      likes: 1247,
      featured: true
    },
    { 
      id: 2,
      src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800", 
      category: "beaches", 
      title: "Goa Beaches", 
      location: "Goa",
      likes: 892,
      featured: false
    },
    { 
      id: 3,
      src: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800", 
      category: "cultural", 
      title: "Kerala Backwaters", 
      location: "Kerala",
      likes: 1567,
      featured: true
    },
    { 
      id: 4,
      src: "https://images.unsplash.com/photo-1539590581446-74e33a6e2ab2?w=800", 
      category: "cultural", 
      title: "Rajasthan Heritage", 
      location: "Rajasthan",
      likes: 2034,
      featured: true
    },
    { 
      id: 5,
      src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800", 
      category: "mountains", 
      title: "Ladakh Landscape", 
      location: "Ladakh",
      likes: 1890,
      featured: true
    },
    { 
      id: 6,
      src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800", 
      category: "beaches", 
      title: "Andaman Islands", 
      location: "Andaman",
      likes: 1456,
      featured: false
    },
    { 
      id: 7,
      src: "https://images.unsplash.com/photo-1598257008675-7b708b103b1a?w=800", 
      category: "spiritual", 
      title: "Varanasi Ghats", 
      location: "Uttar Pradesh",
      likes: 978,
      featured: false
    },
    { 
      id: 8,
      src: "https://images.unsplash.com/photo-1574362849221-71cad6d6fb34?w=800", 
      category: "mountains", 
      title: "Manali Valley", 
      location: "Himachal Pradesh",
      likes: 1321,
      featured: false
    },
    { 
      id: 9,
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", 
      category: "wildlife", 
      title: "North East Forests", 
      location: "Assam",
      likes: 765,
      featured: false
    },
    { 
      id: 10,
      src: "https://images.unsplash.com/photo-1594736797933-d0f05c5bd04e?w=800", 
      category: "spiritual", 
      title: "Rishikesh Sunset", 
      location: "Uttarakhand",
      likes: 1109,
      featured: false
    },
    { 
      id: 11,
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800", 
      category: "beaches", 
      title: "Kovalam Coast", 
      location: "Kerala",
      likes: 834,
      featured: false
    },
    { 
      id: 12,
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800", 
      category: "cultural", 
      title: "Taj Mahal", 
      location: "Uttar Pradesh",
      likes: 2876,
      featured: true
    },
  ];

  const categories = [
    { id: "all", name: "All Photos", count: images.length, icon: "🌍" },
    { id: "mountains", name: "Mountains", count: images.filter(img => img.category === "mountains").length, icon: "⛰️" },
    { id: "beaches", name: "Beaches", count: images.filter(img => img.category === "beaches").length, icon: "🏖️" },
    { id: "cultural", name: "Cultural", count: images.filter(img => img.category === "cultural").length, icon: "🏛️" },
    { id: "spiritual", name: "Spiritual", count: images.filter(img => img.category === "spiritual").length, icon: "🛕" },
    { id: "wildlife", name: "Wildlife", count: images.filter(img => img.category === "wildlife").length, icon: "🐘" }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loadedImages, setLoadedImages] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [likedImages, setLikedImages] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  const filteredImages = images.filter(img => {
    const matchesCategory = activeCategory === "all" || img.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
                         img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         img.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
    setSelectedImage(filteredImages[(currentIndex + 1) % filteredImages.length]);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    setSelectedImage(filteredImages[(currentIndex - 1 + filteredImages.length) % filteredImages.length]);
  };

  const handleImageLoad = (src) => {
    setLoadedImages(prev => ({ ...prev, [src]: true }));
  };

  const toggleLike = (imageId, e) => {
    e.stopPropagation();
    setLikedImages(prev => ({
      ...prev,
      [imageId]: !prev[imageId]
    }));
  };

  const getCategoryColor = (category) => {
    const colors = {
      mountains: "from-green-500 to-emerald-600",
      beaches: "from-blue-400 to-cyan-500",
      cultural: "from-amber-500 to-orange-500",
      spiritual: "from-purple-500 to-indigo-500",
      wildlife: "from-brown-500 to-amber-600",
      all: "from-gray-500 to-gray-600"
    };
    return colors[category] || "from-gray-500 to-gray-600";
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
            📸 Visual Journey
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Incredible India</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore the breathtaking beauty and diverse landscapes of India through our curated collection of stunning photographs
          </p>
        </motion.div>

        {/* Enhanced Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 w-full relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search photos by title or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-4 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all duration-300 text-gray-700 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Filter Button - Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-6 py-4 bg-gray-100 text-gray-700 rounded-2xl font-medium"
            >
              <Filter size={20} />
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
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? "bg-rose-600 text-white shadow-lg shadow-rose-500/25"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm">{category.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
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
                className="lg:hidden mt-4 overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setShowFilters(false);
                      }}
                      className={`p-3 rounded-xl text-center transition-all ${
                        activeCategory === category.id
                          ? "bg-rose-600 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className="text-lg mb-1">{category.icon}</div>
                      <div className="text-xs font-medium">{category.name}</div>
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
            className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200"
          >
            <span className="text-gray-700 font-medium text-sm">
              Showing <span className="text-rose-600 font-bold">{filteredImages.length}</span> photos
            </span>
            {activeCategory !== 'all' && (
              <span className="text-gray-500 text-xs">
                in {categories.find(c => c.id === activeCategory)?.name}
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Enhanced Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id} 
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
                }}
                className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Loading Skeleton */}
                  {!loadedImages[image.src] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse z-10" />
                  )}
                  
                  {/* Image */}
                  <Image
                    src={image.src}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={image.title}
                    onLoad={() => handleImageLoad(image.src)}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {image.featured && (
                      <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                        ⭐ Featured
                      </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-linear-to-r ${getCategoryColor(image.category)} backdrop-blur-sm`}>
                      {image.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => toggleLike(image.id, e)} 
                      className={`p-2 rounded-full backdrop-blur-sm border ${
                        likedImages[image.id] 
                          ? "bg-rose-500 text-white border-rose-500" 
                          : "bg-white/20 text-white border-white/30"
                      }`}
                    >
                      <Heart size={16} className={likedImages[image.id] ? "fill-current" : ""} />
                    </motion.button>
                  </motion.div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg mb-1">{image.title}</h3>
                    <div className="flex items-center gap-1 text-white/90 text-sm">
                      <MapPin size={14} />
                      <span>{image.location}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 text-white/80 text-sm">
                        <Heart size={14} className={likedImages[image.id] ? "fill-rose-400 text-rose-400" : ""} />
                        <span>{image.likes + (likedImages[image.id] ? 1 : 0)}</span>
                      </div>
                      <div className="text-white/80 text-sm flex items-center gap-1">
                        <ZoomIn size={14} />
                        <span>View</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-3xl shadow-lg border border-gray-100"
          >
            <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-rose-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">No photos found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your search terms or select a different category to discover more amazing photos.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchTerm("");
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Show All Photos
            </button>
          </motion.div>
        )}

        {/* Enhanced Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </motion.button>

              {/* Navigation Arrows */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* Action Buttons */}
              <div className="absolute top-6 left-6 z-10 flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(selectedImage.id, e);
                  }}
                  className={`p-3 rounded-full backdrop-blur-sm border ${
                    likedImages[selectedImage.id] 
                      ? "bg-rose-500 text-white border-rose-500" 
                      : "bg-white/20 text-white border-white/30"
                  }`}
                >
                  <Heart size={20} className={likedImages[selectedImage.id] ? "fill-current" : ""} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadImage(selectedImage.src, selectedImage.title);
                  }}
                  className="p-3 rounded-full backdrop-blur-sm bg-white/20 text-white border border-white/30"
                >
                  <Download size={20} />
                </motion.button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-black/50 rounded-full px-4 py-2 text-sm">
                {currentIndex + 1} / {filteredImages.length}
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
                  src={selectedImage.src}
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-2xl object-contain max-h-[80vh]"
                  alt={selectedImage.title}
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-white/80">
                      <MapPin size={16} />
                      <span>{selectedImage.location}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(selectedImage.category)}`}>
                      {selectedImage.category}
                    </span>
                    <div className="flex items-center gap-1 text-white/80">
                      <Heart size={14} className={likedImages[selectedImage.id] ? "fill-rose-400 text-rose-400" : ""} />
                      <span>{selectedImage.likes + (likedImages[selectedImage.id] ? 1 : 0)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600 text-sm">
            📸 {images.length} beautiful moments captured across India • 
            ❤️ {Object.values(likedImages).filter(Boolean).length} liked by you
          </p>
        </motion.div>
      </div>
    </div>
  );
}