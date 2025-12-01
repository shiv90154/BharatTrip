"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

const FilterSidebar = ({ priceRange, setPriceRange, category, setCategory, categories }) => {
  return (
    <motion.aside 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="hidden md:block p-5 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 sticky top-24 h-fit"
    >
      <h2 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
        <Search size={18} />
        Filters
      </h2>

      {/* Price Range */}
      <div className="mb-5">
        <h3 className="font-semibold text-gray-700 mb-3">Price Range</h3>
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
      <div className="mb-5">
        <h3 className="font-semibold text-gray-700 mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm border transition-colors ${
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
          setCategory("all");
        }}
        className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium text-sm"
      >
        Clear All Filters
      </button>
    </motion.aside>
  );
};

export default FilterSidebar;