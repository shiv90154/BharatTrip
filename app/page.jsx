"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Search, MapPin, Calendar, Users, Star, ChevronLeft, ChevronRight, Heart, Shield, Award, Clock, Globe } from "lucide-react";

export default function Home() {
  const featuredRef = useRef(null);
  
  // Enhanced background images for hero slider
  const bgImages = [
    "https://images.unsplash.com/photo-1526491109672-74740652b963?w=1200",
    "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200",
    "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1200",
    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200",
  ];

  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide background with manual control
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % bgImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + bgImages.length) % bgImages.length);
  };

  // Mock data - Enhanced with more details
  const featuredPackages = [
    {
      title: "Kerala Backwaters",
      location: "Alleppey, Kerala",
      rating: 4.8,
      reviews: 1247,
      price: 12500,
      originalPrice: 15000,
      duration: "3 Days 2 Nights",
      highlights: ["Houseboat Stay", "Traditional Food", "Village Tour"],
      discount: 15,
      featured: true,
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400",
      category: "cultural"
    },
    {
      title: "Goa Beach Paradise",
      location: "North Goa",
      rating: 4.6,
      reviews: 892,
      price: 8900,
      originalPrice: 11000,
      duration: "4 Days 3 Nights",
      highlights: ["Beach Parties", "Water Sports", "Portuguese Heritage"],
      discount: 20,
      featured: true,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400",
      category: "beach"
    },
    {
      title: "Rajasthan Cultural Tour",
      location: "Jaipur, Udaipur",
      rating: 4.9,
      reviews: 756,
      price: 18900,
      originalPrice: 22000,
      duration: "6 Days 5 Nights",
      highlights: ["Palace Stay", "Desert Safari", "Folk Dance"],
      discount: 14,
      featured: true,
      image: "https://images.unsplash.com/photo-1539590581446-74e33a6e2ab2?w=400",
      category: "cultural"
    }
  ];

  const trendingPackages = [
    {
      title: "Ladakh Adventure",
      location: "Leh, Ladakh",
      rating: 4.9,
      reviews: 892,
      price: 28900,
      originalPrice: 32000,
      duration: "7 Days 6 Nights",
      highlights: ["Pangong Lake", "Nubra Valley", "Magnetic Hill"],
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
      category: "adventure"
    },
    {
      title: "Shimla Manali Escape",
      location: "Himachal Pradesh",
      rating: 4.7,
      reviews: 634,
      price: 15600,
      originalPrice: 18500,
      duration: "5 Days 4 Nights",
      highlights: ["Snow Views", "Adventure Sports", "Local Markets"],
      image: "https://images.unsplash.com/photo-1574362849221-71cad6d6fb34?w=400",
      category: "mountain"
    },
    {
      title: "Andaman Island Tour",
      location: "Port Blair, Havelock",
      rating: 4.8,
      reviews: 523,
      price: 22400,
      originalPrice: 26000,
      duration: "6 Days 5 Nights",
      highlights: ["Scuba Diving", "Beach Camping", "Coral Reefs"],
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400",
      category: "beach"
    }
  ];

  const packages = [
    {
      slug: "goa-beach",
      title: "Goa Beach Tour",
      location: "North Goa",
      rating: 4.5,
      reviews: 567,
      price: 8900,
      duration: "4 Days 3 Nights",
      highlights: ["Beach Hopping", "Water Sports", "Nightlife"],
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400",
      category: "beach"
    },
    {
      slug: "ladakh-bike",
      title: "Ladakh Bike Trip",
      location: "Leh, Ladakh",
      rating: 4.9,
      reviews: 892,
      price: 28900,
      duration: "8 Days 7 Nights",
      highlights: ["Bike Rental", "High Altitude", "Lakes"],
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
      category: "adventure"
    },
    {
      slug: "kerala-backwaters",
      title: "Kerala Backwaters",
      location: "Alleppey, Kerala",
      rating: 4.8,
      reviews: 1247,
      price: 12500,
      duration: "3 Days 2 Nights",
      highlights: ["Houseboat", "Ayurveda", "Village Life"],
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400",
      category: "cultural"
    },
    {
      slug: "varanasi-spiritual",
      title: "Varanasi Spiritual Journey",
      location: "Varanasi, UP",
      rating: 4.7,
      reviews: 423,
      price: 7800,
      duration: "3 Days 2 Nights",
      highlights: ["Ganga Aarti", "Temple Tour", "Boat Ride"],
      image: "https://images.unsplash.com/photo-1591393223703-3fe2e2e6d08a?w=400",
      category: "spiritual"
    },
    {
      slug: "darjeeling-tea",
      title: "Darjeeling Tea Estate",
      location: "Darjeeling, WB",
      rating: 4.6,
      reviews: 389,
      price: 11200,
      duration: "4 Days 3 Nights",
      highlights: ["Tea Estate", "Toy Train", "Sunrise View"],
      image: "https://images.unsplash.com/photo-1547489435-79b65d8d57df?w=400",
      category: "mountain"
    },
    {
      slug: "kashmir-tulip",
      title: "Kashmir Tulip Garden",
      location: "Srinagar, Kashmir",
      rating: 4.9,
      reviews: 678,
      price: 16700,
      duration: "5 Days 4 Nights",
      highlights: ["Houseboat", "Tulip Garden", "Shikara Ride"],
      image: "https://images.unsplash.com/photo-1570547999337-8fbab6f92c4c?w=400",
      category: "cultural"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 4.9,
      comment: "Amazing experience! The Kerala backwaters tour was breathtaking. The houseboat stay and local food were exceptional.",
      package: "Kerala Backwaters",
      avatar: "PS",
      travelDate: "March 2024"
    },
    {
      name: "Rahul Verma",
      location: "Delhi",
      rating: 4.8,
      comment: "Ladakh bike trip was the adventure of a lifetime! Well organized, great guides, and stunning landscapes.",
      package: "Ladakh Adventure",
      avatar: "RV",
      travelDate: "June 2024"
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad",
      rating: 4.7,
      comment: "Rajasthan heritage tour exceeded expectations. The palace stays and cultural shows were unforgettable.",
      package: "Rajasthan Cultural",
      avatar: "AP",
      travelDate: "January 2024"
    }
  ];

  // State for filters
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [duration, setDuration] = useState("all");
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  // Categories for filter
  const categories = [
    { value: "all", label: "All", count: packages.length, icon: "🌍" },
    { value: "beach", label: "Beach", count: 2, icon: "🏖️" },
    { value: "mountain", label: "Mountain", count: 2, icon: "⛰️" },
    { value: "cultural", label: "Cultural", count: 3, icon: "🎭" },
    { value: "adventure", label: "Adventure", count: 1, icon: "🚵‍♂️" },
    { value: "spiritual", label: "Spiritual", count: 1, icon: "🛕" }
  ];

  // Filter packages based on criteria
  const filteredPackages = packages.filter(pkg => {
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    const matchesCategory = category === "all" || pkg.category === category;
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesPrice && matchesCategory && matchesSearch;
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
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* ================== ENHANCED HERO SECTION ================== */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
        {/* Background Slides with Manual Controls */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${bgImages[current]})`,
              }}
            />
          </AnimatePresence>
        </div>

        {/* Slide Controls */}
        <button
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {bgImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/20" />

        {/* CONTENT */}
        <div className="relative z-20 max-w-6xl w-full px-6">
          {/* Enhanced Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl">
              Discover Incredible{" "}
              <span className="text-rose-400 bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                India
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-xl md:text-2xl mt-6 text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Experience handcrafted journeys through India's most breathtaking destinations
            </motion.p>
          </motion.div>

          {/* ENHANCED SEARCH BOX */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.3 }}
            className="bg-white/15 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              {/* Destination */}
              <div className="md:col-span-3">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-800 focus:ring-2 ring-rose-400 outline-none"
                  />
                </div>
              </div>

              {/* Check-in */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    placeholder="Check in"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-800 focus:ring-2 ring-rose-400 outline-none"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    placeholder="Check out"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-800 focus:ring-2 ring-rose-400 outline-none"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="md:col-span-3">
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    placeholder="Travelers"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-800 focus:ring-2 ring-rose-400 outline-none"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="md:col-span-2">
                <button className="w-full h-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Search size={20} />
                  Search
                </button>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12 text-gray-200"
          >
            <div className="flex items-center gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={20} />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span className="font-medium">50K+ Travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="font-medium">500+ Destinations</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================== ENHANCED CATEGORY SECTION ================== */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore by <span className="text-rose-600">Category</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover India's diverse landscapes and experiences through our carefully curated categories
            </p>
          </motion.div>

          {/* CATEGORY GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategory(cat.value)}
                className={`p-4 rounded-2xl text-center cursor-pointer border-2 transition-all ${
                  category === cat.value
                    ? "bg-rose-600 text-white border-rose-600 shadow-lg"
                    : "bg-white text-gray-800 border-gray-200 hover:border-rose-300 hover:shadow-md"
                }`}
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{cat.label}</h3>
                <p className="text-xs opacity-75">{cat.count} tours</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ================== ENHANCED FEATURED PACKAGES ================== */}
      <section className="py-20 bg-white" ref={featuredRef}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Featured Packages
              </h2>
              <p className="text-gray-600 mt-2">Handpicked experiences for unforgettable journeys</p>
            </div>
            <span className="bg-rose-100 text-rose-600 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
              <Star size={16} className="fill-rose-600" />
              Most Popular
            </span>
          </motion.div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 group"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Discount Badge */}
                  {pkg.discount && (
                    <span className="absolute top-4 right-4 bg-rose-600 text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold z-10">
                      {pkg.discount}% OFF
                    </span>
                  )}

                  {/* Favorite Button */}
                  <button className="absolute top-4 left-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all">
                    <Heart size={16} className="text-gray-600 hover:text-rose-600" />
                  </button>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-800 flex-1">{pkg.title}</h3>
                    <div className="flex items-center gap-1 bg-rose-50 text-rose-600 px-2 py-1 rounded-full text-xs font-medium">
                      <Star size={12} className="fill-rose-600" />
                      {pkg.rating}
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                    <MapPin size={14} />
                    {pkg.location}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Price Section */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Starting from</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-rose-600">
                          ₹{pkg.price.toLocaleString()}
                        </span>
                        {pkg.originalPrice && (
                          <span className="text-sm line-through text-gray-400">
                            ₹{pkg.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{pkg.duration}</p>
                    </div>

                    <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== ENHANCED TRENDING NOW ================== */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50/30">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="p-3 bg-rose-100 rounded-2xl">
              <div className="w-6 h-6 bg-gradient-to-r from-rose-600 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">🔥</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Trending Now
              </h2>
              <p className="text-gray-600 mt-1">Most booked experiences this season</p>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                    <MapPin size={14} />
                    {pkg.location}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-700">{pkg.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({pkg.reviews} reviews)</span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-gray-500">Starting from</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-rose-600">
                          ₹{pkg.price.toLocaleString()}
                        </span>
                        {pkg.originalPrice && (
                          <span className="text-sm line-through text-gray-400">
                            ₹{pkg.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{pkg.duration}</p>
                    </div>

                    <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== ENHANCED FILTER + PACKAGES GRID ================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* FILTER SIDEBAR */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block p-6 bg-gray-50 rounded-3xl shadow-sm border border-gray-100 sticky top-24 h-fit"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Search size={20} />
              Filters
            </h2>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-4">Price Range</h3>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full accent-rose-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₹0</span>
                <span className="font-semibold text-rose-600">₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setCategory(cat.value)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm border transition-colors ${
                      category === cat.value
                        ? "bg-rose-600 text-white border-rose-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{cat.icon}</span>
                      {cat.label}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      category === cat.value ? "bg-white/20" : "bg-gray-100"
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setPriceRange([0, 50000]);
                setDuration("all");
                setCategory("all");
                setSearchTerm("");
              }}
              className="w-full py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            >
              Clear All Filters
            </button>
          </motion.aside>

          {/* PACKAGES LIST */}
          <div className="col-span-3">
            {/* Results Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8 flex-wrap gap-4"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {sortedPackages.length} Packages Found
                </h2>
                <p className="text-gray-600 mt-1">Explore our curated collection of Indian experiences</p>
              </div>

              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl text-sm bg-white focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </motion.div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-100 group"
                >
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={pkg.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={pkg.title}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{pkg.title}</h3>
                    <p className="text-gray-500 text-sm mb-2 flex items-center gap-1">
                      <MapPin size={14} />
                      {pkg.location}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-gray-700">{pkg.rating}</span>
                      </div>
                      <span className="text-gray-400 text-sm">({pkg.reviews} reviews)</span>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Starting from</p>
                        <span className="text-xl text-rose-600 font-bold">
                          ₹{pkg.price.toLocaleString()}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{pkg.duration}</p>
                      </div>
                      <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {sortedPackages.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 bg-gray-50 rounded-3xl mt-8"
              >
                <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={32} className="text-rose-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No matching packages found
                </h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Try adjusting your filters or search terms to find more options
                </p>
                <button
                  onClick={() => {
                    setPriceRange([0, 50000]);
                    setDuration("all");
                    setCategory("all");
                    setSearchTerm("");
                  }}
                  className="px-8 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors font-medium"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ================== ENHANCED TESTIMONIALS ================== */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50/30">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Travelers Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real stories from people who explored India with us
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={index < Math.floor(t.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}
                    />
                  ))}
                  <span className="text-sm font-medium text-gray-700 ml-2">{t.rating}</span>
                </div>

                {/* Comment */}
                <p className="text-gray-600 mb-6 leading-relaxed">"{t.comment}"</p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{t.name}</h3>
                    <p className="text-gray-500 text-sm">{t.location}</p>
                    <p className="text-gray-400 text-xs">{t.travelDate}</p>
                  </div>
                </div>

                {/* Package Tag */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm px-3 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-full">
                    {t.package}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== ENHANCED WHY CHOOSE US ================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Enhanced Heading */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              Why Travel With Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose BharatTrip?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              We're committed to making your Indian travel experience unforgettable with 
              premium services, local expertise, and unmatched hospitality.
            </p>
          </motion.div>

          {/* Enhanced Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Award className="w-6 h-6" />,
                title: "Award Winning", 
                desc: "Recognized as India's Best Travel Agency 2023",
                color: "from-yellow-50 to-amber-50",
                border: "border-yellow-200"
              },
              { 
                icon: <Shield className="w-6 h-6" />,
                title: "Safe & Secure", 
                desc: "24/7 emergency support and verified partners",
                color: "from-green-50 to-emerald-50",
                border: "border-green-200"
              },
              { 
                icon: <Clock className="w-6 h-6" />,
                title: "24/7 Support", 
                desc: "Round-the-clock customer care in multiple languages",
                color: "from-blue-50 to-cyan-50",
                border: "border-blue-200"
              },
              { 
                icon: <Globe className="w-6 h-6" />,
                title: "500+ Destinations", 
                desc: "Wide network across incredible India",
                color: "from-purple-50 to-violet-50",
                border: "border-purple-200"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} border ${item.border} shadow-sm hover:shadow-md transition-all`}
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-rose-600">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div 
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { number: "50K+", label: "Happy Travelers" },
              { number: "500+", label: "Destinations" },
              { number: "24/7", label: "Support" },
              { number: "98%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================== ENHANCED NEWSLETTER SECTION ================== */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Exclusive Travel Deals
            </h2>
            <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to receive special offers, destination inspiration, and early access to new experiences
            </p>

            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-rose-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-rose-200 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}