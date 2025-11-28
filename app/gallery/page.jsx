"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const images = [
    { src: "/gallery/g1.avif", category: "mountains", title: "Himalayan Peaks" },
    { src: "/gallery/g2.avif", category: "beaches", title: "Goa Beaches" },
    { src: "/gallery/g3.avif", category: "cultural", title: "Traditional Festival" },
    { src: "/gallery/g4.avif", category: "wildlife", title: "National Park" },
    { src: "/gallery/g5.avif", category: "adventure", title: "Trekking Trail" },
    { src: "/gallery/g6.avif", category: "cultural", title: "Ancient Temple" },
    { src: "/gallery/g7.avif", category: "beaches", title: "Sunset Beach" },
    { src: "/gallery/g8.avif", category: "mountains", title: "Valley View" },
    { src: "/gallery/g9.avif", category: "wildlife", title: "Elephant Safari" },
    { src: "/gallery/g10.avif", category: "adventure", title: "River Rafting" },
    { src: "/gallery/g11.avif", category: "cultural", title: "Local Market" },
  ];

  const categories = ["all", "mountains", "beaches", "cultural", "wildlife", "adventure"];

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loadedImages, setLoadedImages] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

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
    setSelectedImage(filteredImages[(currentIndex + 1) % filteredImages.length].src);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    setSelectedImage(filteredImages[(currentIndex - 1 + filteredImages.length) % filteredImages.length].src);
  };

  const handleImageLoad = (src) => {
    setLoadedImages(prev => ({ ...prev, [src]: true }));
  };

  const getCategoryColor = (category) => {
    const colors = {
      mountains: "from-green-500 to-emerald-700",
      beaches: "from-blue-400 to-cyan-600",
      cultural: "from-orange-400 to-red-500",
      wildlife: "from-brown-500 to-amber-700",
      adventure: "from-purple-500 to-pink-600",
      all: "from-gray-500 to-gray-700"
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 md:px-14 py-10">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Incredible India</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the breathtaking beauty and diverse landscapes of India through our visual journey
        </p>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category
                ? `text-white bg-gradient-to-r ${getCategoryColor(category)} shadow-lg`
                : "text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Image Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
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
                setSelectedImage(image.src);
                setCurrentIndex(filteredImages.findIndex(img => img.src === image.src));
              }}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {!loadedImages[image.src] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse z-10" />
                )}
                <Image
                  src={image.src}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={image.title}
                  onLoad={() => handleImageLoad(image.src)}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(image.category)}`}>
                    {image.category}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg drop-shadow-lg">{image.title}</h3>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                    </svg>
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
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">📷</div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">No images found</h3>
          <p className="text-gray-500">Try selecting a different category</p>
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
            <button
              className="absolute top-6 right-6 z-10 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-black/50 rounded-full px-4 py-2 text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 5 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl object-contain max-h-[80vh]"
                alt={filteredImages[currentIndex]?.title || "Gallery Image"}
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                <h3 className="text-white text-xl font-bold mb-2">
                  {filteredImages[currentIndex]?.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(filteredImages[currentIndex]?.category)}`}>
                    {filteredImages[currentIndex]?.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center mt-16 pt-8 border-t border-gray-200"
      >
        <p className="text-gray-600">
          📸 {filteredImages.length} beautiful moments captured across India
        </p>
      </motion.div>
    </div>
  );
}