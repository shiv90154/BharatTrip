"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import PackageCard from "./PackageCard";

const PackagesGrid = ({ 
  sortedPackages, 
  sortBy, 
  setSortBy, 
  setPriceRange, 
  setCategory, 
  setSearchTerm 
}) => {
  return (
    <div className="col-span-3">
      {/* Results Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-6 flex-wrap gap-3"
      >
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {sortedPackages.length} Packages Found
          </h2>
          <p className="text-gray-600 mt-1">Explore our curated collection of Indian experiences</p>
        </div>

        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-rose-400 focus:border-transparent"
        >
          <option value="popular">Most Popular</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </motion.div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {sortedPackages.map((pkg, index) => (
          <PackageCard key={pkg.slug} pkg={pkg} index={index} />
        ))}
      </div>

      {/* Empty State */}
      {sortedPackages.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 bg-gray-50 rounded-2xl mt-6"
        >
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={24} className="text-rose-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No matching packages found
          </h3>
          <p className="text-gray-500 mb-4 max-w-md mx-auto">
            Try adjusting your filters or search terms to find more options
          </p>
          <button
            onClick={() => {
              setPriceRange([0, 50000]);
              setCategory("all");
              setSearchTerm("");
            }}
            className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors font-medium"
          >
            Reset All Filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default PackagesGrid;