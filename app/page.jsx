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
      <section className="relative w-full min-h-[80vh] flex items-center justify-center 
      bg-gradient-to-br from-blue-900 via-blue-700 to-orange-500 text-white overflow-hidden">

        {/* ---- PARALLAX BG ---- */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-20"
        />

        {/* ---- OVERLAY ---- */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {/* ---- CONTENT ---- */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl"
          >
            Discover Incredible <span className="text-orange-400">India</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-lg md:text-2xl mt-4 text-gray-200"
          >
            Explore handpicked destinations & unforgettable travel experiences
          </motion.p>

          {/* ----- SEARCH BOX ----- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 
                focus:ring-2 ring-blue-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {/* Category */}
              <select
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 focus:ring-2 ring-blue-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="beach">Beaches</option>
                <option value="mountain">Mountains</option>
                <option value="cultural">Cultural</option>
                <option value="adventure">Adventure</option>
              </select>

              {/* Button */}
              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold 
                py-3 rounded-xl transition-all"
              >
                Search
              </button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ================== CATEGORY SECTION ================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
          >
            Explore by <span className="text-orange-500">Category</span>
          </motion.h2>

          {/* CATEGORY GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">

            {/* CATEGORY ITEM */}
            {[
              { icon: "🏖️", label: "Beach", count: 2 },
              { icon: "⛰️", label: "Mountain", count: 1 },
              { icon: "🚵‍♂️", label: "Adventure", count: 2 },
              { icon: "🏯", label: "Cultural", count: 1 },
              { icon: "🌊", label: "Backwaters", count: 1 },
              { icon: "🛕", label: "Spiritual", count: 1 },
            ].map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl shadow-md p-5 text-center cursor-pointer 
                border border-gray-100 hover:shadow-xl transition-all"
                onClick={() => setCategory(cat.label.toLowerCase())}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>

                <h3 className="font-semibold text-gray-800">{cat.label}</h3>

                <p className="text-gray-500 text-sm">{cat.count} tours</p>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          {/* Header */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-red-600 text-2xl">📈</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Trending Now
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingPackages.slice(0, 3).map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  {pkg.image ? (
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-blue-200 to-orange-200" />
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

                  {/* Price */}
                  <div className="flex justify-between items-end mt-4">
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

                    <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* ---------------- FILTER SIDEBAR ---------------- */}
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
                    className={`px-3 py-2 rounded-lg text-sm border 
                      ${
                        category === cat.value
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 border-gray-300"
                      }
                    `}
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
                    className={`px-3 py-2 rounded-lg text-sm border 
                      ${
                        duration === item.value
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 border-gray-300"
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
              className="w-full mt-3 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-200 transition"
            >
              Clear Filters
            </button>
          </aside>

          {/* ---------------- PACKAGES LIST ---------------- */}
          <div className="col-span-3">

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {filteredPackages.length} Packages Found
              </h2>

              {/* Sort Dropdown */}
              <select
                className="px-4 py-2 border text-sm rounded-lg shadow-sm hover:border-gray-400"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
                >
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={pkg.image}
                      className="w-full h-full object-cover"
                      alt={pkg.title}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800">{pkg.title}</h3>
                    <p className="text-gray-500 text-sm mb-1">{pkg.location}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
                      ⭐ {pkg.rating}
                      <span className="text-gray-400 text-xs">
                        ({pkg.reviews})
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

                    {/* Price */}
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-gray-500">Starting from</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xl text-blue-600 font-bold">
                            ₹{pkg.price.toLocaleString()}
                          </span>
                          {pkg.originalPrice && (
                            <span className="text-sm line-through text-gray-400">
                              ₹{pkg.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700">
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
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                {/* Avatar */}
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    ) : (
                      t.name.charAt(0)
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-gray-800">{t.name}</h3>
                    <p className="text-gray-500 text-sm">{t.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <span className="text-yellow-500 text-lg mr-1">⭐</span>
                  <span className="font-medium text-gray-700">{t.rating}</span>
                </div>

                {/* Comment */}
                <p className="text-gray-600 italic mb-4">
                  "{t.comment}"
                </p>

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose Bharat Trip?
            </h2>
            <p className="text-gray-500 mt-2">
              We bring unforgettable travel experiences with top-notch services.
            </p>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { icon: "🏆", title: "Award Winning", desc: "Best travel agency 2023" },
              { icon: "🔒", title: "Safe & Secure", desc: "Your safety is our priority" },
              { icon: "💰", title: "Best Prices", desc: "No hidden charges" },
              { icon: "📞", title: "24/7 Support", desc: "We're here anytime" },
              { icon: "🧭", title: "Expert Guides", desc: "Professional local guides" },
              { icon: "🏨", title: "Quality Stays", desc: "Comfortable accommodations" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border bg-gray-50 hover:shadow-lg transition-all text-center"
              >
                {/* Icon */}
                <div className="text-4xl mb-3">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
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
              <button className="px-8 py-3 rounded-xl bg-white text-blue-700 font-semibold hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}