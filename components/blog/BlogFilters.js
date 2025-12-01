"use client";

import { motion } from "framer-motion";

export default function BlogFilters({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  searchTerm, 
  onSearchChange, 
  sortBy, 
  onSortChange 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 p-6"
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