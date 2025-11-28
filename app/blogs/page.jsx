"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ----------------------------- BLOG CARD ----------------------------- */

function BlogCard({ data, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
    >
      {/* Image / Icon */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
          <span className="text-5xl">{data.icon}</span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />

        {/* Category */}
        <span className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow">
          {data.category}
        </span>

        {/* Read Time */}
        <span className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
          ⏱ {data.readTime}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>👤 {data.author}</span>
          <span>{data.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition">
          {data.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {data.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 px-2 py-1 rounded-lg text-xs text-gray-700 hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
          <span>👁 {data.views} views</span>
          <span>❤️ {data.likes}</span>
          <span className="text-yellow-500">⭐ {data.rating}</span>
        </div>

        <Link
          href={`/blogs/${data.slug}`}
          className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </motion.article>
  );
}

/* ------------------------- FILTERS COMPONENT ------------------------- */

function BlogFilters({ categories, activeCategory, onCategoryChange, searchTerm, onSearchChange, sortBy, onSortChange }) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-xl border mb-10 p-6 backdrop-blur">
      <div className="flex flex-col lg:flex-row gap-6 items-center">

        {/* Search */}
        <div className="flex-1 w-full relative">
          <input
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search blogs..."
            className="w-full px-12 py-4 bg-gray-50 rounded-xl border focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            🔍
          </span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => onCategoryChange(c.id)}
              className={`px-5 py-3 rounded-xl font-medium transition ${
                activeCategory === c.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-3 bg-gray-50 border rounded-xl focus:ring-blue-500"
        >
          <option value="newest">Newest First</option>
          <option value="popular">Most Viewed</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
    </div>
  );
}

/* --------------------------- MAIN PAGE --------------------------- */

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: "all", label: "All", icon: "🌍" },
    { id: "destinations", label: "Destinations", icon: "🗺️" },
    { id: "guides", label: "Guides", icon: "📖" },
    { id: "tips", label: "Tips", icon: "💡" },
    { id: "culture", label: "Culture", icon: "🎭" },
    { id: "adventure", label: "Adventure", icon: "⛰️" }
  ];

  const sampleBlogs = [
    {
      title: "10 Best Places to Visit in India",
      slug: "best-places-india",
      excerpt: "Discover breathtaking destinations...",
      icon: "🏔️",
      author: "Travel Expert",
      date: "2024-01-10",
      readTime: "8 min",
      category: "destinations",
      tags: ["india", "travel", "guide"],
      views: "2400",
      likes: "130",
      comments: "23",
      rating: "4.8",
      featured: true
    },
    {
      title: "Goa Travel Guide 2024",
      slug: "goa-guide",
      excerpt: "Complete guide about beaches, nightlife...",
      icon: "🏖️",
      author: "Beach Lover",
      date: "2024-01-05",
      readTime: "7 min",
      category: "guides",
      tags: ["goa", "beach", "tips"],
      views: "1800",
      likes: "92",
      comments: "14",
      rating: "4.6"
    },
    {
      title: "Budget Travel Tips in India",
      slug: "budget-india",
      excerpt: "Travel smart with these money-saving hacks...",
      icon: "💰",
      author: "Budget Guru",
      date: "2024-01-03",
      readTime: "5 min",
      category: "tips",
      tags: ["budget", "hacks", "money"],
      views: "3100",
      likes: "210",
      comments: "30",
      rating: "4.9"
    }
  ];

  // Loading simulation
  useEffect(() => {
    setTimeout(() => {
      setBlogs(sampleBlogs);
      setFilteredBlogs(sampleBlogs);
      setLoading(false);
    }, 1000);
  }, []);

  // Filters & Sorting
  useEffect(() => {
    let list = [...blogs];

    if (activeCategory !== "all") {
      list = list.filter((blog) => blog.category === activeCategory);
    }

    if (searchTerm) {
      list = list.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === "popular") {
      list.sort((a, b) => Number(b.views) - Number(a.views));
    }
    if (sortBy === "rating") {
      list.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    setFilteredBlogs(list);
  }, [activeCategory, searchTerm, sortBy, blogs]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center text-xl font-semibold">
        Loading Blogs...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium">
            📝 Travel Insights
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            Explore{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Travel Blogs
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Tips, guides, experiences & inspiration for every traveler.
          </p>
        </div>

        {/* Featured Blog */}
        {filteredBlogs.some((b) => b.featured) && (
          <div className="bg-white rounded-2xl shadow-xl mb-12 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200 text-7xl h-60 lg:h-auto">
              {filteredBlogs.find((b) => b.featured).icon}
            </div>

            <div className="p-10 flex flex-col justify-center">
              <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full w-fit font-medium mb-3">
                ⭐ Featured
              </span>

              <h2 className="text-3xl font-bold mb-4">
                {filteredBlogs.find((b) => b.featured).title}
              </h2>

              <p className="text-gray-600 mb-6">
                {filteredBlogs.find((b) => b.featured).excerpt}
              </p>

              <Link
                href={`/blogs/${filteredBlogs.find((b) => b.featured).slug}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl shadow-lg font-semibold hover:opacity-90 transition w-fit"
              >
                Read Featured →
              </Link>
            </div>
          </div>
        )}

        {/* Filters */}
        <BlogFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, i) => (
            <BlogCard key={blog.slug} data={blog} index={i} />
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center py-14 px-6 shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-4">
            Stay Updated with Travel News
          </h2>
          <p className="text-blue-100 mb-6">
            Get tips, guides & offers directly inside your inbox.
          </p>

          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl text-black flex-1"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
