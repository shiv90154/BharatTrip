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
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Image / Icon */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-rose-100 via-orange-100 to-amber-100 flex items-center justify-center relative">
          <span className="text-5xl z-10">{data.icon}</span>
          
          {/* Featured Badge */}
          {data.featured && (
            <span className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
              ⭐ Featured
            </span>
          )}
        </div>

        {/* Category */}
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-white/20">
          {data.category}
        </span>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Hover Read Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
            <span className="text-white font-semibold text-sm">Read Article →</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-medium">{data.date}</span>
            <span>•</span>
            <span>{data.readTime}</span>
          </div>
          <span className="flex items-center gap-1 bg-rose-50 text-rose-700 px-2 py-1 rounded-lg text-xs">
            ⭐ {data.rating}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blogs/${data.slug}`}>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-rose-600 transition-colors duration-300 line-clamp-2 leading-tight">
            {data.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
          {data.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {data.author.charAt(0)}
          </span>
          <span className="text-sm text-gray-600">{data.author}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-50 px-2 py-1 rounded-lg text-xs text-gray-600 font-medium border border-gray-100 hover:bg-rose-50 hover:text-rose-700 cursor-pointer transition-all duration-300"
            >
              #{tag}
            </span>
          ))}
          {data.tags.length > 2 && (
            <span className="bg-gray-50 px-2 py-1 rounded-lg text-xs text-gray-500 font-medium">
              +{data.tags.length - 2}
            </span>
          )}
        </div>

        {/* Bottom Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs">
              👁 {data.views}
            </span>
            <span className="flex items-center gap-1 text-xs">
              ❤️ {data.likes}
            </span>
          </div>
          <Link
            href={`/blogs/${data.slug}`}
            className="text-rose-600 font-medium text-sm hover:text-rose-700 transition-colors"
          >
            Read More →
          </Link>
        </div>
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
      className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-12 p-6"
    >
      <div className="flex flex-col lg:flex-row gap-6 items-center">

        {/* Search */}
        <div className="flex-1 w-full relative">
          <input
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search travel guides, tips, destinations..."
            className="w-full pl-12 pr-6 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition-all duration-300 text-sm placeholder-gray-500"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <motion.button
              key={c.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(c.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                activeCategory === c.id
                  ? "bg-rose-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">{c.icon}</span>
              <span>{c.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Sort */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition-all duration-300 appearance-none pr-10 font-medium text-sm"
          >
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
            <option value="rating">Top Rated</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
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
    { id: "all", label: "All", icon: "🌍" },
    { id: "destinations", label: "Destinations", icon: "🗺️" },
    { id: "guides", label: "Guides", icon: "📖" },
    { id: "tips", label: "Tips", icon: "💡" },
    { id: "culture", label: "Culture", icon: "🎭" },
    { id: "adventure", label: "Adventure", icon: "⛰️" },
    { id: "food", label: "Food", icon: "🍛" }
  ];

  const sampleBlogs = [
    {
      title: "10 Best Places to Visit in India - 2024 Ultimate Guide",
      slug: "best-places-india",
      excerpt: "Discover breathtaking destinations from the snow-capped Himalayas to the tropical beaches of Goa. Our comprehensive guide covers must-visit spots, hidden gems, and local secrets.",
      icon: "🏔️",
      author: "Travel Explorer",
      date: "Mar 15, 2024",
      readTime: "8 min",
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
      readTime: "7 min",
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
      excerpt: "Travel smart with these money-saving hacks! Learn how to find cheap accommodation, local transportation tips, and free activities across India.",
      icon: "💰",
      author: "Budget Guru",
      date: "Mar 10, 2024",
      readTime: "5 min",
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
      excerpt: "Everything you need to know about trekking the magical Valley of Flowers. Best season, permits, accommodation, and what to expect in this UNESCO site.",
      icon: "🚵‍♂️",
      author: "Mountain Expert",
      date: "Mar 8, 2024",
      readTime: "6 min",
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
      readTime: "9 min",
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
      readTime: "10 min",
      category: "culture",
      tags: ["rajasthan", "culture", "palaces", "desert", "royal"],
      views: "1.5K",
      likes: "89",
      comments: "15",
      rating: "4.5",
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
      <div className="min-h-screen bg-white pt-24 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-800">Loading Travel Stories...</h2>
          <p className="text-gray-600 mt-2">Discovering amazing destinations for you</p>
        </motion.div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
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
            className="inline-block px-4 py-2 bg-rose-50 text-rose-700 rounded-xl text-sm font-medium mb-6 border border-rose-100"
          >
            📝 Travel Insights & Stories
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Travel Blog
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
            className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl shadow-lg mb-16 overflow-hidden text-white relative"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-xl font-semibold text-sm">
                    ⭐ FEATURED
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-xl font-semibold text-sm">
                    {featuredBlog.category}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {featuredBlog.title}
                </h2>

                <p className="text-rose-100 text-sm mb-6 leading-relaxed">
                  {featuredBlog.excerpt}
                </p>

                <div className="flex items-center gap-4 mb-6 text-rose-100 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">
                      👤
                    </span>
                    <span className="font-medium">{featuredBlog.author}</span>
                  </div>
                  <span>{featuredBlog.date}</span>
                  <span>{featuredBlog.readTime}</span>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/blogs/${featuredBlog.slug}`}
                    className="bg-white text-rose-600 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-all duration-300 shadow-lg"
                  >
                    Read Featured Story →
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center p-8 bg-gradient-to-br from-rose-400 to-orange-400">
                <div className="text-6xl bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
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
          className="flex justify-between items-center mb-6"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? 'Article' : 'Articles'} Found
          </h2>
          <span className="text-gray-600 text-sm">
            {activeCategory !== 'all' && `in ${categories.find(c => c.id === activeCategory)?.label}`}
          </span>
        </motion.div>

        {/* Blog List */}
        {filteredBlogs.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
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
            className="text-center py-16 bg-gray-50 rounded-2xl"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              No articles found
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
              Try adjusting your search terms or filters to find more amazing travel stories.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchTerm("");
              }}
              className="bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-rose-600 transition-all shadow-sm"
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
            className="text-center mt-12"
          >
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold text-sm hover:border-rose-500 hover:text-rose-600 transition-all duration-300 shadow-sm">
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
          className="mt-20 bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl text-white text-center py-12 px-6 shadow-lg relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">
              ✈️ Join Our Travel Community
            </h2>
            <p className="text-rose-100 text-sm mb-6 leading-relaxed">
              Get weekly travel guides, exclusive destination insights, and special offers 
              delivered directly to your inbox. Join 10,000+ passionate travelers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-xl text-gray-800 flex-1 text-sm placeholder-gray-500 focus:ring-2 focus:ring-white/20 outline-none"
              />
              <button className="bg-white text-rose-600 px-6 py-3 rounded-xl font-semibold text-sm shadow-sm hover:scale-105 transition-all duration-300">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-rose-200 text-xs mt-3">
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
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
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-lg font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}