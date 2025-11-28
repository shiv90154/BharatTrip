"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Enhanced BlogCard Component
function BlogCard({ data, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <span className="text-4xl">{data.icon}</span>
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            {data.category}
          </span>
        </div>

        {/* Read Time */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
          ⏱️ {data.readTime}
        </div>

        {/* Hover Action */}
        <div className={`absolute bottom-4 left-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Link
            href={`/blogs/${data.slug}`}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Read More</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span>👤</span>
              <span>{data.author}</span>
            </span>
            <span>•</span>
            <span>{data.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>💬</span>
            <span>{data.comments}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          {data.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {data.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span>👁️</span>
              <span>{data.views} views</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>❤️</span>
              <span>{data.likes}</span>
            </span>
          </div>
          <span className="flex items-center space-x-1 text-yellow-500">
            <span>⭐</span>
            <span>{data.rating}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

// Filter Component
function BlogFilters({ categories, activeCategory, onCategoryChange, searchTerm, onSearchChange, sortBy, onSortChange }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        
        {/* Search Bar */}
        <div className="flex-1 w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
              🔍
            </span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        >
          <option value="newest">Newest First</option>
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  );
}

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: "all", label: "All", icon: "🌍" },
    { id: "destinations", label: "Destinations", icon: "🗺️" },
    { id: "guides", label: "Travel Guides", icon: "📖" },
    { id: "tips", label: "Travel Tips", icon: "💡" },
    { id: "culture", label: "Culture", icon: "🎭" },
    { id: "adventure", label: "Adventure", icon: "⛰️" }
  ];

  // Sample blogs data
  const sampleBlogs = [
    {
      title: "10 Best Places to Visit in India - Ultimate Travel Guide 2024",
      slug: "best-places-india",
      excerpt: "Discover the most breathtaking destinations across India, from the snow-capped Himalayas to the tropical beaches of Goa. Our comprehensive guide covers must-visit spots for every type of traveler.",
      icon: "🏔️",
      author: "Travel Explorer",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      category: "destinations",
      tags: ["india", "travel", "destinations", "guide"],
      views: "2.4K",
      likes: "156",
      comments: "23",
      rating: "4.8",
      featured: true
    },
    {
      title: "Goa Travel Guide: Beaches, Nightlife & Portuguese Heritage",
      slug: "goa-guide",
      excerpt: "Everything you need to know about planning the perfect Goa trip. From hidden beaches to Portuguese architecture, nightlife hotspots to serene backwaters.",
      icon: "🏖️",
      author: "Beach Lover",
      date: "Jan 12, 2024",
      readTime: "6 min read",
      category: "guides",
      tags: ["goa", "beach", "nightlife", "portuguese"],
      views: "1.8K",
      likes: "98",
      comments: "15",
      rating: "4.6",
      featured: true
    },
    {
      title: "Budget Travel Tips: How to Explore India for Under $30/Day",
      slug: "budget-travel-tips",
      excerpt: "Learn how to travel across India without breaking the bank. Accommodation, food, transportation hacks, and hidden gems that won't cost a fortune.",
      icon: "💰",
      author: "Budget Traveler",
      date: "Jan 10, 2024",
      readTime: "5 min read",
      category: "tips",
      tags: ["budget", "tips", "saving", "backpacking"],
      views: "3.2K",
      likes: "210",
      comments: "34",
      rating: "4.9",
      featured: false
    },
    {
      title: "Himalayan Trekking Guide: Best Routes for Beginners to Experts",
      slug: "himalayan-trekking",
      excerpt: "From easy day hikes to challenging multi-day expeditions. Complete guide to trekking in the Indian Himalayas with route details, best seasons, and gear recommendations.",
      icon: "🥾",
      author: "Mountain Expert",
      date: "Jan 8, 2024",
      readTime: "12 min read",
      category: "adventure",
      tags: ["trekking", "himalayas", "adventure", "mountains"],
      views: "1.5K",
      likes: "87",
      comments: "12",
      rating: "4.7",
      featured: false
    },
    {
      title: "Indian Culture & Traditions: A Traveler's Guide to Local Customs",
      slug: "indian-culture-guide",
      excerpt: "Understand India's diverse cultural landscape. From festivals and food to etiquette and religious customs - everything you need to know before you visit.",
      icon: "🎭",
      author: "Culture Enthusiast",
      date: "Jan 5, 2024",
      readTime: "7 min read",
      category: "culture",
      tags: ["culture", "traditions", "festivals", "etiquette"],
      views: "2.1K",
      likes: "134",
      comments: "28",
      rating: "4.5",
      featured: false
    },
    {
      title: "Monsoon Travel in India: Best Places to Visit During Rainy Season",
      slug: "monsoon-travel",
      excerpt: "Don't let the rains stop your travel plans! Discover the most beautiful destinations that come alive during monsoon season in India.",
      icon: "🌧️",
      author: "Seasonal Traveler",
      date: "Jan 3, 2024",
      readTime: "4 min read",
      category: "destinations",
      tags: ["monsoon", "seasonal", "rain", "greenery"],
      views: "1.2K",
      likes: "76",
      comments: "9",
      rating: "4.4",
      featured: false
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setBlogs(sampleBlogs);
      setFilteredBlogs(sampleBlogs);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort blogs
  useEffect(() => {
    let filtered = blogs;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(blog => blog.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort blogs
    switch (sortBy) {
      case "popular":
        filtered = [...filtered].sort((a, b) => parseInt(b.views) - parseInt(a.views));
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      case "newest":
      default:
        filtered = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }

    setFilteredBlogs(filtered);
  }, [activeCategory, searchTerm, sortBy, blogs]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>📝</span>
            <span>Travel Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Travel Blogs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover travel tips, destination guides, cultural insights, and inspiring stories from across India.
          </p>
        </div>

        {/* Featured Blog */}
        {filteredBlogs.filter(blog => blog.featured).length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 lg:h-full flex items-center justify-center text-6xl">
                {filteredBlogs.find(blog => blog.featured)?.icon}
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                  <span>⭐</span>
                  <span>Featured Post</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {filteredBlogs.find(blog => blog.featured)?.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {filteredBlogs.find(blog => blog.featured)?.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <span>By {filteredBlogs.find(blog => blog.featured)?.author}</span>
                  <span>•</span>
                  <span>{filteredBlogs.find(blog => blog.featured)?.date}</span>
                  <span>•</span>
                  <span>{filteredBlogs.find(blog => blog.featured)?.readTime}</span>
                </div>
                <Link
                  href={`/blogs/${filteredBlogs.find(blog => blog.featured)?.slug}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 w-fit"
                >
                  <span>Read Featured Post</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Filters Section */}
        <BlogFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredBlogs.length}</span> blog posts
          </p>
        </div>

        {/* Blogs Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog.slug} data={blog} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No blog posts found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setActiveCategory("all");
                setSearchTerm("");
              }}
              className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Travel Insights
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get weekly travel tips, destination guides, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}