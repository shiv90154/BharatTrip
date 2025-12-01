"use client";

import { motion } from "framer-motion";
import { Filter, Shield } from "lucide-react";

const FilterSection = ({
  categories,
  activeCategory,
  setActiveCategory,
  priceRange,
  setPriceRange,
  durationFilter,
  setDurationFilter,
  selectedTags,
  setSelectedTags,
  allTags,
  resetFilters
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-24 max-h-[80vh] overflow-y-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-gray-800 flex items-center gap-2">
          <Filter size={18} />
          Filters
        </h2>
        <button
          onClick={resetFilters}
          className="text-xs text-rose-600 hover:text-rose-700 font-medium"
        >
          Reset All
        </button>
      </div>

      {/* Categories */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-2 text-sm">Categories</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-all border text-xs ${
                activeCategory === category.id
                  ? 'bg-rose-50 border-rose-200 text-rose-700'
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </div>
              <span className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${
                activeCategory === category.id ? 'bg-rose-100 text-rose-700' : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-2 text-sm">Price Range</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="50000"
            step="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
          />
          <div className="flex justify-between text-xs text-gray-600">
            <span>₹0</span>
            <span className="font-medium text-rose-600">₹{priceRange[1].toLocaleString()}+</span>
          </div>
        </div>
      </div>

      {/* Duration */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-2 text-sm">Duration</h3>
        <div className="grid grid-cols-2 gap-1">
          {[
            { value: "all", label: "Any", icon: "🌎" },
            { value: "short", label: "Short", icon: "📅" },
            { value: "medium", label: "Medium", icon: "🗓️" },
            { value: "long", label: "Long", icon: "📆" }
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setDurationFilter(item.value)}
              className={`p-2 rounded-lg border transition-all text-center text-xs ${
                durationFilter === item.value
                  ? 'bg-rose-50 border-rose-200 text-rose-700'
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className="text-sm mb-0.5">{item.icon}</div>
              <div className="font-medium">{item.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-2 text-sm">Travel Style</h3>
        <div className="flex flex-wrap gap-1">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTags(prev =>
                  prev.includes(tag)
                    ? prev.filter(t => t !== tag)
                    : [...prev, tag]
                );
              }}
              className={`px-2 py-1 rounded text-xs font-medium transition-all border ${
                selectedTags.includes(tag)
                  ? 'bg-rose-600 text-white border-rose-600'
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-3 border border-rose-100"
      >
        <div className="flex items-center gap-2 mb-2">
          <Shield className="text-rose-600" size={16} />
          <h3 className="font-semibold text-gray-800 text-xs">Book with Confidence</h3>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          Best price guarantee, free cancellation, and 24/7 customer support.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FilterSection;