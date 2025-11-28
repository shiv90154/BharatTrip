"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
  const featuredRef = useRef(null);
  
  // Mock data - you should replace with actual data
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
      image: "/kerala.jpg"
    }
    // Add more packages...
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
      image: "/ladakh.jpg"
    }
    // Add more packages...
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
      image: "/goa.jpg",
      category: "beach"
    }
    // Add more packages...
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 4.9,
      comment: "Amazing experience! The Kerala backwaters tour was breathtaking.",
      package: "Kerala Backwaters",
      avatar: ""
    }
    // Add more testimonials...
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
    { value: "cultural", label: "Cultural", count: 1 },
    { value: "adventure", label: "Adventure", count: 2 }
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
    <>
      {/* ================== HERO SECTION ================== */}
   <section className="relative w-full min-h-[85vh] flex items-center justify-center 
bg-linear-to-br from-blue-900 via-blue-700 to-orange-500 text-white overflow-hidden">

  {/* PARALLAX BG */}
  <motion.div
    initial={{ scale: 1.3, opacity: 0 }}
    animate={{ scale: 1, opacity: 0.35 }}
    transition={{ duration: 1.8, ease: "easeOut" }}
    className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center"
  />

  {/* CINEMATIC OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

  {/* FLOATING PARTICLES */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute w-3 h-3 bg-white/60 rounded-full top-20 left-40 blur-xl animate-pulse"></div>
    <div className="absolute w-2 h-2 bg-orange-300 rounded-full bottom-32 right-48 blur-md animate-ping"></div>
    <div className="absolute w-2.5 h-2.5 bg-blue-300 rounded-full top-1/2 left-1/3 blur-md animate-bounce"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-20 max-w-4xl text-center px-6">

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_5px_40px_rgba(0,0,0,0.8)]"
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
      className="mt-10 bg-white/15 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl border border-white/20
      hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] transition-all"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search Input */}
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-800 
            focus:ring-2 ring-orange-400 outline-none shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Select */}
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl">🧭</span>
          <select
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-800 
            focus:ring-2 ring-orange-400 shadow-md outline-none"
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
        <button
          className="relative w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold
          py-3 rounded-xl shadow-lg transition-all overflow-hidden"
        >
          <span className="relative z-10">Search</span>

          {/* Shine Effect */}
          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] 
          transition-all duration-700 skew-x-[20deg]"></span>
        </button>
      </div>
    </motion.div>

  </div>
</section>


      {/* ================== CATEGORY SECTION ================== */}
     <section className="py-20 bg-gray-50 relative overflow-hidden">

  {/* Decorative Gradient Blobs */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200/40 blur-3xl rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-52 h-52 bg-orange-300/40 blur-3xl rounded-full"></div>

  <div className="max-w-6xl mx-auto px-4 relative z-10">

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
          whileHover={{ scale: 1.08, y: -5 }}
          className={`rounded-2xl p-6 text-center cursor-pointer border border-gray-200 
          shadow-md bg-gradient-to-br ${cat.color} 
          hover:shadow-2xl hover:border-orange-300 transition-all backdrop-blur-xl`}
          onClick={() => setCategory(cat.label.toLowerCase())}
        >
          
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: cat.label === "Adventure" ? 8 : 0, scale: 1.2 }}
            className="text-5xl mb-3"
          >
            {cat.icon}
          </motion.div>

          {/* Label */}
          <h3 className="font-semibold text-gray-800 text-lg">
            {cat.label}
          </h3>

          {/* Count */}
          <p className="text-gray-600 text-sm mt-1">
            {cat.count} tours
          </p>

        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ================== FEATURED PACKAGES ================== */}
      <section className="py-16 bg-white" ref={featuredRef}>
        <div className="max-w-6xl mx-auto px-4">

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              🌟 Featured Packages
            </h2>

            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
              🔥 Most Popular
            </span>
          </div>

          {/* Horizontal Slider */}
          <div
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {featuredPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[280px] sm:min-w-[340px] snap-center"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden relative">

                  {/* Discount */}
                  {pkg.discount && (
                    <span className="absolute top-4 right-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full shadow">
                      {pkg.discount}% OFF
                    </span>
                  )}

                  {/* Featured Badge */}
                  {pkg.featured && (
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow flex items-center gap-1">
                      🔥 Featured
                    </span>
                  )}

                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    {pkg.image ? (
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-r from-blue-200 to-orange-200" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">

                    {/* Title */}
                    <h3 className="font-bold text-lg text-gray-800">{pkg.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{pkg.location}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      ⭐ <span className="text-sm font-medium">{pkg.rating}</span>
                      <span className="text-xs text-gray-500">
                        ({pkg.reviews} reviews)
                      </span>
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

                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== TRENDING NOW ================== */}
   <section className="py-20 bg-gray-50 relative">
  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="flex items-center gap-3 mb-10">
      <span className="text-red-600 text-3xl">🔥</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
        Trending <span className="text-orange-600">Now</span>
      </h2>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {trendingPackages.slice(0, 3).map((pkg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
        >
          {/* Discount Badge */}
          {pkg.originalPrice && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md z-20">
              Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
            </div>
          )}

          {/* Wishlist */}
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-red-500 z-20">
            ❤️
          </button>

          {/* Image */}
          <div className="h-52 w-full relative group overflow-hidden">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          {/* CONTENT */}
          <div className="p-5">

            {/* Title + Location */}
            <h3 className="font-bold text-xl text-gray-800 mb-1">
              {pkg.title}
            </h3>
            <p className="text-gray-500 text-sm mb-3">{pkg.location}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              <span className="text-yellow-500 text-lg">⭐</span>
              <span className="font-medium text-gray-700">{pkg.rating}</span>
              <span className="text-xs text-gray-500">({pkg.reviews} reviews)</span>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-4">
              {pkg.highlights.slice(0, 3).map((h, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 border border-gray-300 text-gray-600 text-xs rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Price + Button */}
            <div className="flex justify-between items-end mt-4">
              <div>
                <p className="text-xs text-gray-500">Starting from</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-blue-600">
                    ₹{pkg.price.toLocaleString()}
                  </span>

                  {pkg.originalPrice && (
                    <span className="line-through text-gray-400 text-sm">
                      ₹{pkg.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-500">{pkg.duration}</p>
              </div>

              <button className="bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-700 shadow-md">
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
  <section className="py-20 bg-gray-50 relative">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* ---------------- SIDEBAR FILTERS ---------------- */}
    <aside
      className="hidden md:block sticky top-28 h-fit 
      bg-white/80 backdrop-blur-xl border border-gray-200 
      shadow-xl rounded-2xl p-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-blue-600">🔍</span> Filters
      </h2>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-3">Price Range</h3>

        <input
          type="range"
          min="0"
          max="50000"
          step="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full accent-blue-600"
        />

        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>₹0</span>
          <span className="font-semibold text-blue-600">
            ₹{priceRange[1].toLocaleString()}
          </span>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-3">Category</h3>

        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all 
                ${
                  category === cat.value
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-3">Duration</h3>

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
              className={`px-3 py-2 rounded-lg text-sm border transition-all 
                ${
                  duration === item.value
                    ? "bg-blue-600 text-white border-blue-600 shadow"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }
              `}
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
        className="w-full py-2 rounded-lg border border-gray-400 text-gray-700 
        hover:bg-gray-200 transition font-medium"
      >
        Clear Filters
      </button>
    </aside>

    {/* ---------------- PACKAGES LIST ---------------- */}
    <div className="col-span-3">

      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-gray-800">
          {filteredPackages.length} Packages Found
        </h2>

        <select
          className="px-4 py-2 border border-gray-300 rounded-xl text-sm shadow-sm hover:border-gray-400"
          defaultValue="popular"
        >
          <option value="popular">Most Popular</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Highest Rated</option>
          <option value="duration">Duration</option>
        </select>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg, index) => (
          <motion.div
            key={pkg.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-200"
          >
            {/* Wishlist */}
            <div className="absolute top-4 right-4 z-20">
              <button className="bg-white p-2 rounded-full shadow text-gray-600 hover:text-red-500">
                ❤️
              </button>
            </div>

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={pkg.image}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                alt={pkg.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-800">{pkg.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{pkg.location}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 text-sm mb-3">
                <span className="text-yellow-500 text-lg">⭐</span>
                <span className="font-semibold text-gray-700">{pkg.rating}</span>
                <span className="text-xs text-gray-400">({pkg.reviews})</span>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {pkg.highlights.slice(0, 3).map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-xs text-gray-600"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="text-xs text-gray-500">Starting from</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-blue-600">
                      ₹{pkg.price.toLocaleString()}
                    </span>
                    {pkg.originalPrice && (
                      <span className="line-through text-gray-400 text-sm">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <button className="bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-orange-700 shadow-md">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPackages.length === 0 && (
        <div className="text-center py-20 bg-gray-100 rounded-2xl mt-8 shadow-inner">
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
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  </div>
</section>


      {/* ================== TESTIMONIALS ================== */}
    <section className="py-24 bg-linear-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">

  {/* Background Decorations */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
        What Our Travelers  
        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Love About Us</span>
      </h2>
      <p className="text-gray-600 mt-3 text-lg">
        Real experiences from happy explorers across India ✨
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, y: -8 }}
          className="p-7 bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-white/40 hover:shadow-2xl transition-all"
        >
          
          {/* Avatar */}
          <div className="flex items-center mb-5">
            <motion.div
              whileHover={{ rotate: 5 }}
              className="w-16 h-16 rounded-full overflow-hidden shadow-lg ring-2 ring-blue-300"
            >
              {t.avatar ? (
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              ) : (
                <div className="bg-linear-to-br from-blue-600 to-purple-600 w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                  {t.name.charAt(0)}
                </div>
              )}
            </motion.div>

            <div className="ml-4">
              <h3 className="font-bold text-gray-800 text-lg">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.location}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, idx) => (
              <span
                key={idx}
                className={`text-lg ${
                  idx < t.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ⭐
              </span>
            ))}
          </div>

          {/* Comment */}
          <p className="text-gray-700 italic leading-relaxed mb-4">
            “{t.comment}”
          </p>

          {/* Package Tag */}
          <div className="mt-4">
            <span className="text-sm px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full font-medium">
              {t.package}
            </span>
          </div>

        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* ================== WHY CHOOSE US ================== */}
   <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-200 opacity-30 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
        Why Choose  
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {" "}Bharat Trip?
        </span>
      </h2>
      <p className="text-gray-600 mt-3 text-lg">
        Unforgettable experiences, premium service & trusted expertise.
      </p>
    </div>

    {/* Feature List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

      {[
        { icon: "🏆", title: "Award Winning", desc: "Best travel agency of 2023" },
        { icon: "🔒", title: "Safe & Secure", desc: "Your safety is always first" },
        { icon: "💰", title: "Best Prices", desc: "Transparent pricing, no hidden fees" },
        { icon: "📞", title: "24/7 Support", desc: "We're always here for you" },
        { icon: "🧭", title: "Expert Guides", desc: "Professional local experts" },
        { icon: "🏨", title: "Quality Stays", desc: "Handpicked comfortable hotels" }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -6 }}
          className="p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl transition-all cursor-pointer"
        >

          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-16 h-16 mx-auto mb-5 flex items-center justify-center text-4xl rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner"
          >
            {item.icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
</section>


      {/* ================== NEWSLETTER SECTION ================== */}
  <section className="py-24 relative overflow-hidden">

  {/* Background Glow Effects */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-blue-300/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-56 h-56 bg-orange-300/30 blur-3xl rounded-full"></div>

  {/* Floating Particles */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="animate-pulse w-3 h-3 bg-white/40 rounded-full absolute top-10 left-1/3 blur-sm"></div>
    <div className="animate-pulse w-2 h-2 bg-orange-200 rounded-full absolute top-1/2 left-1/4 blur-sm"></div>
    <div className="animate-pulse w-2.5 h-2.5 bg-blue-200 rounded-full absolute bottom-20 right-1/3 blur-sm"></div>
  </div>

  <div className="max-w-6xl mx-auto px-4 relative z-10">

  <div className="relative overflow-hidden rounded-3xl 
  bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-600
  text-white py-20 px-8 text-center shadow-2xl border border-white/10">

  {/* BG LIGHT EFFECTS */}
  <div className="absolute inset-0">
    {/* Soft Glow Circle */}
    <div className="absolute top-0 left-1/3 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

    {/* Animated Shine */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
      animate-[shine_4s_linear_infinite]"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-xl">
      Get the <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
        Best Travel Deals
      </span>
      <br /> Before Anyone Else
    </h2>

    <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
      Receive exclusive discounts, festive offers, last-minute deals, 
      and early access to our hottest travel packages.
    </p>

    {/* Email Input + Button */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">

      {/* Input Box */}
      <div className="relative w-full group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
          📧
        </span>

        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl
            bg-white/90 text-gray-800 placeholder-gray-500 
            focus:ring-4 focus:ring-yellow-300/40 focus:outline-none shadow-xl
            transition-all group-hover:shadow-2xl"
        />
      </div>

      {/* Subscribe Button */}
      <button
        className="px-10 py-4 text-lg rounded-2xl font-semibold
        bg-gradient-to-r from-yellow-300 to-orange-400
        text-gray-900 shadow-xl hover:shadow-2xl 
        hover:scale-[1.04] active:scale-[0.97]
        transition-all duration-300"
      >
        Subscribe ✈️
      </button>
    </div>

    {/* Note */}
    <p className="mt-6 text-white/80 text-sm">
      Zero spam — only real travel discounts curated for you.
    </p>
  </div>

  {/* KEYFRAME ANIMATION */}
  <style>{`
    @keyframes shine {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
      100% { transform: translateX(200%); }
    }
  `}</style>
</div>


  </div>
</section>

    </>
  );
}