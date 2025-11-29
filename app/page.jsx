"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const featuredRef = useRef(null);
  
  // Background images for hero slider
  const bgImages = [
    "https://images.unsplash.com/photo-1526491109672-74740652b963?w=1200",
    "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200",
    "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1200",
    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  // Mock data
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
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400"
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
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400"
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
      image: "https://images.unsplash.com/photo-1539590581446-74e33a6e2ab2?w=400"
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
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400"
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
      image: "https://images.unsplash.com/photo-1574362849221-71cad6d6fb34?w=400"
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
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400"
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
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 4.9,
      comment: "Amazing experience! The Kerala backwaters tour was breathtaking. The houseboat stay and local food were exceptional.",
      package: "Kerala Backwaters",
      avatar: ""
    },
    {
      name: "Rahul Verma",
      location: "Delhi",
      rating: 4.8,
      comment: "Ladakh bike trip was the adventure of a lifetime! Well organized, great guides, and stunning landscapes.",
      package: "Ladakh Adventure",
      avatar: ""
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad",
      rating: 4.7,
      comment: "Rajasthan heritage tour exceeded expectations. The palace stays and cultural shows were unforgettable.",
      package: "Rajasthan Cultural",
      avatar: ""
    }
  ];

  // State for filters
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [duration, setDuration] = useState("all");
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Categories for filter
  const categories = [
    { value: "all", label: "All", count: packages.length },
    { value: "beach", label: "Beach", count: 2 },
    { value: "mountain", label: "Mountain", count: 1 },
    { value: "cultural", label: "Cultural", count: 2 },
    { value: "adventure", label: "Adventure", count: 1 }
  ];

  // Filter packages based on criteria
  const filteredPackages = packages.filter(pkg => {
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    const matchesCategory = category === "all" || pkg.category === category;
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesPrice && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* ================== HERO SECTION WITH SLIDER ================== */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden text-white">
        {/* BACKGROUND SLIDES */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${bgImages[current]})`,
              }}
            />
          </AnimatePresence>
        </div>

        {/* GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

        {/* CONTENT */}
        <div className="relative z-20 max-w-4xl text-center px-6">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          >
            Discover Incredible <span className="text-orange-400">India</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-2xl mt-4 text-gray-200 max-w-2xl mx-auto"
          >
            Explore handpicked destinations & unforgettable travel experiences.
          </motion.p>

          {/* SEARCH BOX */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="mt-10 bg-white/15 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Input */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-800 focus:ring-2 ring-orange-400 outline-none shadow-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Select */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">🧭</span>
                <select
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-800 focus:ring-2 ring-orange-400 shadow-md outline-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="beach">🏖️ Beaches</option>
                  <option value="mountain">⛰️ Mountains</option>
                  <option value="cultural">🎭 Cultural</option>
                  <option value="adventure">🚵 Adventure</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-all">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================== CATEGORY SECTION ================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-14"
          >
            Explore by <span className="text-orange-500">Category</span>
          </motion.h2>

          {/* CATEGORY GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: "🏖️", label: "Beach", count: 2, color: "from-blue-100 to-blue-50" },
              { icon: "⛰️", label: "Mountain", count: 1, color: "from-green-100 to-green-50" },
              { icon: "🚵‍♂️", label: "Adventure", count: 2, color: "from-orange-100 to-orange-50" },
              { icon: "🏯", label: "Cultural", count: 1, color: "from-yellow-100 to-yellow-50" },
              { icon: "🌊", label: "Backwaters", count: 1, color: "from-indigo-100 to-indigo-50" },
              { icon: "🛕", label: "Spiritual", count: 1, color: "from-purple-100 to-purple-50" },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`rounded-2xl p-6 text-center cursor-pointer border border-gray-200 shadow-md bg-gradient-to-br ${cat.color} hover:shadow-xl transition-all`}
                onClick={() => setCategory(cat.label.toLowerCase())}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-gray-800 text-lg">{cat.label}</h3>
                <p className="text-gray-600 text-sm mt-1">{cat.count} tours</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== FEATURED PACKAGES ================== */}
      <section className="py-20 bg-white" ref={featuredRef}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              🌟 Featured Packages
            </h2>
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
              🔥 Most Popular
            </span>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100"
              >
                {/* Discount */}
                {pkg.discount && (
                  <span className="absolute top-4 right-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold z-10">
                    {pkg.discount}% OFF
                  </span>
                )}

                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{pkg.location}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-medium text-gray-700">{pkg.rating}</span>
                    <span className="text-xs text-gray-500">({pkg.reviews} reviews)</span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 border border-gray-300 rounded-full text-xs text-gray-600"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Price Section */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-gray-500">Starting from</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-blue-600">
                          ₹{pkg.price.toLocaleString()}
                        </span>
                        {pkg.originalPrice && (
                          <span className="text-sm line-through text-gray-400">
                            ₹{pkg.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{pkg.duration}</p>
                    </div>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== TRENDING NOW ================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-red-600 text-2xl">🔥</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              Trending <span className="text-orange-600">Now</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{pkg.location}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-medium text-gray-700">{pkg.rating}</span>
                    <span className="text-xs text-gray-500">({pkg.reviews} reviews)</span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 border border-gray-300 rounded-full text-xs text-gray-600"
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
                        <span className="text-xl font-bold text-blue-600">
                          ₹{pkg.price.toLocaleString()}
                        </span>
                        {pkg.originalPrice && (
                          <span className="text-sm line-through text-gray-400">
                            ₹{pkg.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{pkg.duration}</p>
                    </div>

                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== FILTER + PACKAGES GRID ================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* FILTER SIDEBAR */}
          <aside className="hidden md:block p-6 bg-gray-50 rounded-2xl shadow-md sticky top-24 h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>🔍</span> Filters
            </h2>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>₹0</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setCategory(cat.value)}
                    className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                      category === cat.value
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {cat.label} ({cat.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Duration</h3>
              <div className="flex flex-col gap-2">
                {[
                  { value: "all", label: "Any Duration" },
                  { value: "short", label: "1–3 Days" },
                  { value: "medium", label: "4–6 Days" },
                  { value: "long", label: "7+ Days" },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setDuration(item.value)}
                    className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                      duration === item.value
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
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
              className="w-full py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Clear Filters
            </button>
          </aside>

          {/* PACKAGES LIST */}
          <div className="col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {filteredPackages.length} Packages Found
              </h2>

              <select className="px-4 py-2 border text-sm rounded-lg shadow-sm hover:border-gray-400">
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                >
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={pkg.image}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      alt={pkg.title}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800">{pkg.title}</h3>
                    <p className="text-gray-500 text-sm mb-1">{pkg.location}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-sm mb-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-medium">{pkg.rating}</span>
                      <span className="text-gray-400 text-xs">({pkg.reviews})</span>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 border border-gray-300 rounded-full text-xs text-gray-600"
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
                          <span className="text-xl text-blue-600 font-bold">
                            ₹{pkg.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredPackages.length === 0 && (
              <div className="text-center py-20 bg-gray-50 rounded-2xl mt-8">
                <h3 className="text-xl font-semibold text-gray-600">
                  No matching packages found.
                </h3>
                <button
                  onClick={() => {
                    setPriceRange([0, 50000]);
                    setDuration("all");
                    setCategory("all");
                    setSearchTerm("");
                  }}
                  className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================== TESTIMONIALS ================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What Our Travelers Say
            </h2>
            <p className="text-gray-600 mt-2">
              Real stories from people who explored India with us
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                {/* Avatar */}
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-gray-800">{t.name}</h3>
                    <p className="text-gray-500 text-sm">{t.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  <span className="font-medium text-gray-700">{t.rating}</span>
                </div>

                {/* Comment */}
                <p className="text-gray-600 italic mb-4">"{t.comment}"</p>

                {/* Package Tag */}
                <span className="text-sm px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                  {t.package}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== WHY CHOOSE US ================== */}
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
  <div className="max-w-7xl mx-auto px-4">
    {/* Enhanced Heading */}
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
        <span>✨</span>
        Why Travel With Us
      </div>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
        Why Choose Bharat Trip?
      </h2>
      <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
        We're committed to making your Indian travel experience unforgettable with 
        premium services, local expertise, and unmatched hospitality.
      </p>
    </motion.div>

    {/* Enhanced Feature Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { 
          icon: "🏆", 
          title: "Award Winning Service", 
          desc: "Recognized as India's Best Travel Agency 2023 with 50,000+ happy travelers",
          gradient: "from-yellow-50 to-orange-50",
          border: "border-yellow-200",
          iconBg: "bg-gradient-to-br from-yellow-400 to-orange-400"
        },
        { 
          icon: "🛡️", 
          title: "Safe & Secure", 
          desc: "Your safety is our top priority with 24/7 emergency support and verified partners",
          gradient: "from-green-50 to-emerald-50",
          border: "border-green-200",
          iconBg: "bg-gradient-to-br from-green-500 to-emerald-500"
        },
        { 
          icon: "💎", 
          title: "Best Value", 
          desc: "Premium experiences at unbeatable prices with no hidden charges guaranteed",
          gradient: "from-blue-50 to-cyan-50",
          border: "border-blue-200",
          iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
        },
        { 
          icon: "🌙", 
          title: "24/7 Support", 
          desc: "Round-the-clock customer care in multiple languages for seamless travel",
          gradient: "from-purple-50 to-pink-50",
          border: "border-purple-200",
          iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
        },
        { 
          icon: "🧭", 
          title: "Expert Local Guides", 
          desc: "Certified local guides with deep cultural knowledge and storytelling skills",
          gradient: "from-red-50 to-rose-50",
          border: "border-red-200",
          iconBg: "bg-gradient-to-br from-red-500 to-rose-500"
        },
        { 
          icon: "🏨", 
          title: "Curated Stays", 
          desc: "Handpicked accommodations blending comfort, culture, and authentic experiences",
          gradient: "from-indigo-50 to-violet-50",
          border: "border-indigo-200",
          iconBg: "bg-gradient-to-br from-indigo-500 to-violet-500"
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          transition={{ 
            duration: 0.6, 
            delay: i * 0.1,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true, margin: "-50px" }}
          className={`relative p-8 rounded-3xl bg-gradient-to-br ${item.gradient} border ${item.border} 
                     shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-50"></div>
          
          {/* Animated Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/50 to-transparent 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full">
          </div>

          {/* Icon Container */}
          <motion.div 
            className={`relative w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center 
                       text-white text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
          >
            {item.icon}
          </motion.div>

          {/* Content */}
          <div className="relative">
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {item.desc}
            </p>
          </div>

          {/* Hover Indicator */}
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md">
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Stats Section */}
    <motion.div 
      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
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
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {stat.number}
          </div>
          <div className="text-gray-600 text-sm mt-2 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>

    {/* CTA Button */}
    <motion.div 
      className="text-center mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 
                        text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl 
                        transform hover:scale-105 transition-all duration-300 group">
        <span>Start Your Journey</span>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
      
      <p className="text-gray-500 text-sm mt-4">
        Join 50,000+ travelers who trusted us with their Indian adventures
      </p>
    </motion.div>
  </div>
</section>

      {/* ================== NEWSLETTER SECTION ================== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-orange-500 text-white py-14 px-6 text-center shadow-xl">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Get Travel Deals & Offers
            </h2>

            <p className="text-lg opacity-90 mb-8">
              Subscribe to get exclusive offers directly in your inbox
            </p>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto">
              {/* Input */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:ring-4 focus:ring-orange-300 outline-none"
              />

              {/* Button */}
              <button className="px-8 py-3 rounded-xl bg-white text-blue-700 font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}