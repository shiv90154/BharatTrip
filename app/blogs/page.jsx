"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ----------------------------- BLOG CARD ----------------------------- */

function BlogCard({ data, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Image / Icon */}
      <div className="relative h-52 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center relative">
          <span className="text-6xl z-10">{data.icon}</span>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-purple-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Category */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-white/20">
          {data.category}
        </span>

        {/* Read Time & Views */}
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="bg-black/70 text-white px-3 py-1.5 rounded-full text-xs backdrop-blur-sm">
            ⏱ {data.readTime}
          </span>
          <span className="bg-black/70 text-white px-3 py-1.5 rounded-full text-xs backdrop-blur-sm">
            👁 {data.views}
          </span>
        </div>

        {/* Featured Badge */}
        {data.featured && (
          <span className="absolute bottom-4 left-4 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
            ⭐ Featured
          </span>
        )}

        {/* Hover Read Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30">
            <span className="text-white font-semibold text-lg">Read Article →</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {data.author.charAt(0)}
            </span>
            <span className="font-medium">{data.author}</span>
          </div>
          <span className="bg-gray-100 px-2 py-1 rounded-lg">{data.date}</span>
        </div>

        {/* Title */}
        <Link href={`/blogs/${data.slug}`}>
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
            {data.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {data.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 rounded-lg text-xs text-gray-700 font-medium border border-blue-100 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all duration-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              ❤️ <span className="font-semibold">{data.likes}</span>
            </span>
            <span className="flex items-center gap-1">
              💬 <span className="font-semibold">{data.comments}</span>
            </span>
          </div>
          <span className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-lg">
            ⭐ <span className="font-semibold">{data.rating}</span>
          </span>
        </div>

        {/* Read More Button */}
        <Link
          href={`/blogs/${data.slug}`}
          className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Read Full Article
        </Link>
      </div>
    </motion.article>
  );
}

/* ------------------------- FILTERS COMPONENT ------------------------- */

function BlogFilters({ categories, activeCategory, onCategoryChange, searchTerm, onSearchChange, sortBy, onSortChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/90 rounded-3xl shadow-2xl border border-white/20 mb-12 p-8 backdrop-blur-xl"
    >
      <div className="flex flex-col lg:flex-row gap-6 items-center">

        {/* Search */}
        <div className="flex-1 w-full relative">
          <input
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search destinations, tips, guides..."
            className="w-full pl-14 pr-6 py-4 bg-gray-50/80 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 text-lg placeholder-gray-500"
          />
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400">
            🔍
          </span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((c) => (
            <motion.button
              key={c.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(c.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === c.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 border-2 border-transparent hover:border-blue-200"
              }`}
            >
              <span className="text-xl">{c.icon}</span>
              <span>{c.label}</span>
              {c.count && (
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === c.id ? "bg-white/20" : "bg-gray-200"
                }`}>
                  {c.count}
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Sort */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-6 py-4 bg-gray-50/80 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 appearance-none pr-12 font-medium"
          >
            <option value="newest">📅 Newest First</option>
            <option value="popular">🔥 Most Popular</option>
            <option value="rating">⭐ Top Rated</option>
            <option value="trending">📈 Trending</option>
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            ⬇️
          </span>
        </div>
      </div>
    </motion.div>
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
  const [featuredBlog, setFeaturedBlog] = useState(null);

  const categories = [
    { id: "all", label: "All Blogs", icon: "🌍", count: 15 },
    { id: "destinations", label: "Destinations", icon: "🗺️", count: 6 },
    { id: "guides", label: "Travel Guides", icon: "📖", count: 4 },
    { id: "tips", label: "Travel Tips", icon: "💡", count: 3 },
    { id: "culture", label: "Local Culture", icon: "🎭", count: 2 },
    { id: "adventure", label: "Adventure", icon: "⛰️", count: 3 },
    { id: "food", label: "Food & Dining", icon: "🍛", count: 2 }
  ];

  const sampleBlogs = [
    {
      title: "10 Best Places to Visit in India - 2024 Ultimate Guide",
      slug: "best-places-india",
      excerpt: "Discover breathtaking destinations from the snow-capped Himalayas to the tropical beaches of Goa. Our comprehensive guide covers must-visit spots, hidden gems, and local secrets for the perfect Indian adventure.",
      icon: "🏔️",
      author: "Travel Explorer",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      category: "destinations",
      tags: ["india", "travel", "guide", "himalayas", "beaches"],
      views: "2.4K",
      likes: "130",
      comments: "23",
      rating: "4.8",
      featured: true
    },
    {
      title: "Goa Travel Guide 2024: Beaches, Nightlife & Portuguese Heritage",
      slug: "goa-guide",
      excerpt: "Complete guide to Goa's stunning beaches, vibrant nightlife, and rich Portuguese heritage. Learn about the best time to visit, hidden beaches, and local Goan cuisine.",
      icon: "🏖️",
      author: "Beach Lover",
      date: "Mar 12, 2024",
      readTime: "7 min read",
      category: "guides",
      tags: ["goa", "beach", "nightlife", "portuguese", "food"],
      views: "1.8K",
      likes: "92",
      comments: "14",
      rating: "4.6",
      featured: false
    },
    {
      title: "Budget Travel Tips: How to Explore India for Under ₹1000/Day",
      slug: "budget-india",
      excerpt: "Travel smart with these money-saving hacks! Learn how to find cheap accommodation, local transportation tips, and free activities across India without compromising on experiences.",
      icon: "💰",
      author: "Budget Guru",
      date: "Mar 10, 2024",
      readTime: "5 min read",
      category: "tips",
      tags: ["budget", "hacks", "money", "backpacking", "savings"],
      views: "3.1K",
      likes: "210",
      comments: "30",
      rating: "4.9",
      featured: true
    },
    {
      title: "Himalayan Trekking: Complete Guide to Valley of Flowers",
      slug: "valley-flowers-trek",
      excerpt: "Everything you need to know about trekking the magical Valley of Flowers. Best season, permits, accommodation, and what to expect in this UNESCO World Heritage site.",
      icon: "🚵‍♂️",
      author: "Mountain Expert",
      date: "Mar 8, 2024",
      readTime: "6 min read",
      category: "adventure",
      tags: ["trekking", "himalayas", "flowers", "adventure", "nature"],
      views: "1.2K",
      likes: "78",
      comments: "12",
      rating: "4.7",
      featured: false
    },
    {
      title: "Indian Street Food Tour: Must-Try Dishes in Every Region",
      slug: "indian-street-food",
      excerpt: "From Delhi's chaat to Mumbai's vada pav and Kolkata's kathi rolls - a culinary journey through India's most iconic street foods and where to find them.",
      icon: "🍛",
      author: "Food Explorer",
      date: "Mar 5, 2024",
      readTime: "9 min read",
      category: "food",
      tags: ["food", "streetfood", "culinary", "delhi", "mumbai"],
      views: "2.7K",
      likes: "156",
      comments: "28",
      rating: "4.8",
      featured: true
    },
    {
      title: "Rajasthan's Royal Heritage: Palaces, Forts & Desert Culture",
      slug: "rajasthan-heritage",
      excerpt: "Explore the majestic forts, opulent palaces, and vibrant culture of Rajasthan. Insider tips for experiencing royal hospitality and desert festivals.",
      icon: "🏯",
      author: "Culture Curator",
      date: "Mar 3, 2024",
      readTime: "10 min read",
      category: "culture",
      tags: ["rajasthan", "culture", "palaces", "desert", "royal"],
      views: "1.5K",
      likes: "89",
      comments: "15",
      rating: "4.5",
      featured: false
    },
    {
      title: "Monsoon Travel: Best Places to Visit in Rainy Season",
      slug: "monsoon-travel",
      excerpt: "Don't let rains stop your travel plans! Discover the most beautiful destinations that come alive during monsoon season in India.",
      icon: "🌧️",
      author: "Seasonal Traveler",
      date: "Mar 1, 2024",
      readTime: "4 min read",
      category: "destinations",
      tags: ["monsoon", "seasonal", "rain", "greenery", "waterfalls"],
      views: "980",
      likes: "45",
      comments: "8",
      rating: "4.3",
      featured: false
    },
    {
      title: "Photography Guide: Capturing India's Most Iconic Landmarks",
      slug: "india-photography",
      excerpt: "Professional tips for photographing Taj Mahal, Golden Temple, and other iconic Indian landmarks. Best times, angles, and camera settings.",
      icon: "📸",
      author: "Travel Photographer",
      date: "Feb 28, 2024",
      readTime: "7 min read",
      category: "guides",
      tags: ["photography", "tajmahal", "camera", "landmarks", "tips"],
      views: "1.1K",
      likes: "67",
      comments: "11",
      rating: "4.6",
      featured: false
    }
  ];

  // Loading simulation
  useEffect(() => {
    setTimeout(() => {
      setBlogs(sampleBlogs);
      setFilteredBlogs(sampleBlogs);
      setFeaturedBlog(sampleBlogs.find(blog => blog.featured) || sampleBlogs[0]);
      setLoading(false);
    }, 1500);
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
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (sortBy === "popular") {
      list.sort((a, b) => parseInt(b.views) - parseInt(a.views));
    } else if (sortBy === "rating") {
      list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (sortBy === "trending") {
      // Combination of views, likes and recency
      list.sort((a, b) => {
        const scoreA = parseInt(a.views) + parseInt(a.likes) * 10;
        const scoreB = parseInt(b.views) + parseInt(b.likes) * 10;
        return scoreB - scoreA;
      });
    }

    setFilteredBlogs(list);
  }, [activeCategory, searchTerm, sortBy, blogs]);

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-800">Loading Travel Stories...</h2>
          <p className="text-gray-600 mt-2">Discovering amazing destinations for you</p>
        </motion.div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-2xl text-lg font-semibold mb-6 border border-blue-200/50"
          >
            📝 Travel Insights & Stories
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Travel Blog
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover expert travel guides, local secrets, adventure stories, and practical tips 
            from experienced travelers exploring incredible India and beyond.
          </p>
        </motion.div>

        {/* Featured Blog */}
        {featuredBlog && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl shadow-2xl mb-16 overflow-hidden text-white relative"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-2xl font-bold text-sm">
                    ⭐ FEATURED STORY
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-2xl font-semibold text-sm">
                    {featuredBlog.category}
                  </span>
                </div>

                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  {featuredBlog.title}
                </h2>

                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  {featuredBlog.excerpt}
                </p>

                <div className="flex items-center gap-6 mb-8 text-blue-100">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      👤
                    </span>
                    <span className="font-semibold">{featuredBlog.author}</span>
                  </div>
                  <span>{featuredBlog.date}</span>
                  <span>{featuredBlog.readTime}</span>
                </div>

                <div className="flex gap-4">
                  <Link
                    href={`/blogs/${featuredBlog.slug}`}
                    className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Read Featured Story →
                  </Link>
                  <button className="border-2 border-white/30 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300">
                    ❤️ Save for Later
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center p-12 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="text-8xl bg-white/20 rounded-3xl p-8 backdrop-blur-sm">
                  {featuredBlog.icon}
                </div>
              </div>
            </div>
          </motion.div>
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

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? 'Article' : 'Articles'} Found
          </h2>
          <span className="text-gray-600">
            {activeCategory !== 'all' && `in ${categories.find(c => c.id === activeCategory)?.label}`}
          </span>
        </motion.div>

        {/* Blog List */}
        {filteredBlogs.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredBlogs.map((blog, i) => (
                <BlogCard key={blog.slug} data={blog} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-3xl shadow-lg"
          >
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              No articles found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your search terms or filters to find more amazing travel stories.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchTerm("");
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all"
            >
              Show All Articles
            </button>
          </motion.div>
        )}

        {/* Load More */}
        {filteredBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <button className="bg-white border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
              Load More Articles
            </button>
          </motion.div>
        )}

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl text-white text-center py-16 px-8 shadow-2xl relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-4">
              ✈️ Join Our Travel Community
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Get weekly travel guides, exclusive destination insights, and special offers 
              delivered directly to your inbox. Join 10,000+ passionate travelers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                placeholder="Enter your email address"
                className="px-6 py-4 rounded-2xl text-gray-800 flex-1 text-lg placeholder-gray-500 focus:ring-4 focus:ring-white/20 outline-none"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">
              No spam ever. Unsubscribe anytime with one click.
            </p>
          </div>
        </motion.div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { number: "500+", label: "Travel Articles", icon: "📝" },
            { number: "50K+", label: "Monthly Readers", icon: "👥" },
            { number: "4.9/5", label: "Average Rating", icon: "⭐" },
            { number: "25+", label: "Countries Covered", icon: "🌍" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}