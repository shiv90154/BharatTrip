"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import PackageCard from "@/components/packages/PackageCard";
import FilterSection from "@/components/packages/FilterSection";
import MobileFilters from "@/components/packages/MobileFilters";
import TrustBadges from "@/components/packages/TrustBadges";

// Sample data
export const packages = [
  {
    title: "Romantic Gateway to Shimla & Manali",
    image: "/packages/RomanticGatewaytoShimla&Manali.avif",
    slug: "romantic-shimla-manali-5n6d",
    duration: "5N/6D",
    price: 29000,
    originalPrice: 34000,
    discount: 15,
    rating: 4.7,
    reviews: 112,
    location: "Shimla, Manali",
    highlights: ["Kufri", "Mall Road", "Solang Valley", "Hadimba Temple"],
    featured: true,
    category: "honeymoon",
    tags: ["Couple", "Honeymoon", "Romantic"]
  },

  {
    title: "Highlights of Kashmir (Srinagar to Srinagar)",
    image: "/packages/HighlightsOfKashmir(SrinagartoSrinagar).avif",
    slug: "kashmir-srinagar-5n6d",
    duration: "5N/6D",
    price: 35000,
    originalPrice: 39999,
    discount: 12,
    rating: 4.8,
    reviews: 189,
    location: "Srinagar, Gulmarg, Pahalgam",
    highlights: ["Shikara Ride", "Gulmarg Gondola", "Mughal Gardens"],
    featured: true,
    category: "mountain",
    tags: ["Family", "Nature", "Honeymoon"]
  },

  {
    title: "Highlights of Kashmir (Jammu to Jammu)",
    image: "/packages/HighlightsofKashmir(JammutoJammu).avif",
    slug: "kashmir-jammu-5n6d",
    duration: "5N/6D",
    price: 35000,
    originalPrice: 40000,
    discount: 12,
    rating: 4.7,
    reviews: 164,
    location: "Jammu, Patnitop, Srinagar, Gulmarg",
    highlights: ["Patnitop", "Houseboat Stay", "Valleys"],
    featured: false,
    category: "mountain",
    tags: ["Family", "Nature", "Adventure"]
  },

  {
    title: "Charming Shimla & Manali (Honeymoon)",
    image: "/packages/CharmingShimla&Manali(Honeymoon.avif",
    slug: "charming-shimla-manali-5n6d",
    duration: "5N/6D",
    price: 30000,
    originalPrice: 34000,
    discount: 12,
    rating: 4.8,
    reviews: 210,
    location: "Shimla, Manali",
    highlights: ["Candle Light Dinner", "Flower Decoration", "Solang Valley"],
    featured: true,
    category: "honeymoon",
    tags: ["Honeymoon", "Couple", "Romantic"]
  },

  {
    title: "Beautiful Himachal Honeymoon",
    image: "/packages/BeautifulHimachalHoneymoon.avif",
    slug: "beautiful-himachal-honeymoon-8n9d",
    duration: "8N/9D",
    price: 42000,
    originalPrice: 48000,
    discount: 13,
    rating: 4.9,
    reviews: 155,
    location: "Shimla, Manali, Dharamshala, Dalhousie",
    highlights: ["Khajjiar", "Solang", "Romantic Decor"],
    featured: true,
    category: "honeymoon",
    tags: ["Romantic", "Honeymoon", "Luxury"]
  },

  {
    title: "Exotic Manali by Volvo",
    image: "/packages/ExoticManalibyVolvo.avif",
    slug: "exotic-manali-volvo-3n4d",
    duration: "3N/4D",
    price: 26000,
    originalPrice: 30000,
    discount: 13,
    rating: 4.5,
    reviews: 98,
    location: "Manali",
    highlights: ["Solang Valley", "Mall Road", "Hadimba Temple"],
    featured: false,
    category: "mountain",
    tags: ["Budget", "Family", "Volvo Trip"]
  },

  {
    title: "Rajasthan MICE Tour",
    image: "/packages/RajasthanMICETour.avif",
    slug: "rajasthan-mice-tour-8n9d",
    duration: "8N/9D",
    price: 46000,
    originalPrice: 52000,
    discount: 12,
    rating: 4.7,
    reviews: 120,
    location: "Jaipur, Bikaner, Jaisalmer, Jodhpur",
    highlights: ["Corporate Events", "Desert Camp", "Fort Visits"],
    featured: true,
    category: "corporate",
    tags: ["Corporate", "Luxury", "Group"]
  },

  {
    title: "Romantic Escape Manali & Dharamshala",
    image: "/packages/RomanticEscapeManali&Dharamshala.avif",
    slug: "romantic-manali-dharamshala-5n6d",
    duration: "5N/6D",
    price: 38000,
    originalPrice: 42000,
    discount: 10,
    rating: 4.6,
    reviews: 142,
    location: "Manali, Dharamshala",
    highlights: ["Tea Gardens", "Monasteries", "Solang Valley"],
    featured: true,
    category: "honeymoon",
    tags: ["Couple", "Romantic", "Honeymoon"]
  },

  {
    title: "Adventurous Jaisalmer, Jodhpur & Udaipur",
    image: "/packages/AdventurousJaisalmerJodhpur&Udaipur.avif",
    slug: "jaisalmer-jodhpur-udaipur-6d",
    duration: "6D",
    price: 41000,
    originalPrice: 46000,
    discount: 11,
    rating: 4.8,
    reviews: 167,
    location: "Jaisalmer, Jodhpur, Udaipur",
    highlights: ["Camel Safari", "Desert Camp", "City Palace Udaipur"],
    featured: true,
    category: "cultural",
    tags: ["Adventure", "Culture", "Family"]
  },

  {
    title: "Magical Udaipur Trip",
    image: "/packages/MagicalUdaipurTrip.avif",
    slug: "magical-udaipur-3n4d",
    duration: "3N/4D",
    price: 35000,
    originalPrice: 39000,
    discount: 10,
    rating: 4.6,
    reviews: 143,
    location: "Udaipur",
    highlights: ["City Palace", "Lake Pichola", "Boat Ride"],
    featured: true,
    category: "cultural",
    tags: ["Family", "Luxury", "Cultural"]
  },

  {
    title: "Jaipur–Ranthambore–Pushkar–Jodhpur",
    image: "/packages/Jaipur–Ranthambore–Pushkar–Jodhpur.avif",
    slug: "jaipur-ranthambore-pushkar-jodhpur-6n7d",
    duration: "6N/7D",
    price: 45000,
    originalPrice: 51000,
    discount: 12,
    rating: 4.7,
    reviews: 176,
    location: "Jaipur, Ranthambore, Pushkar, Jodhpur",
    highlights: ["Tiger Safari", "Brahma Temple", "Mehrangarh Fort"],
    featured: false,
    category: "cultural",
    tags: ["Wildlife", "Culture", "Family"]
  },

  {
    title: "Stunning Kashmir Getaway",
    image: "/packages/StunningKashmirGetaway.avif",
    slug: "stunning-kashmir-3n4d",
    duration: "3N/4D",
    price: 20000,
    originalPrice: 25000,
    discount: 20,
    rating: 4.8,
    reviews: 220,
    location: "Srinagar, Gulmarg",
    highlights: ["Shikara Ride", "Mughal Gardens"],
    featured: true,
    category: "mountain",
    tags: ["Budget", "Family", "Nature"]
  },

  {
    title: "Kashmir Deluxe Tour",
    image: "/packages/KashmirDeluxeTour.avif",
    slug: "kashmir-deluxe-4n5d",
    duration: "4N/5D",
    price: 30000,
    originalPrice: 36000,
    discount: 17,
    rating: 4.8,
    reviews: 198,
    location: "Srinagar, Sonmarg, Gulmarg",
    highlights: ["Deluxe Hotels", "Gondola", "Shikara"],
    featured: true,
    category: "mountain",
    tags: ["Luxury", "Family", "Nature"]
  },

  {
    title: "Kashmir Delight with Valley of Milk",
    image: "/packages/KashmirDelightwithValleyofMilk.avif",
    slug: "kashmir-valley-of-milk-6n7d",
    duration: "6N/7D",
    price: 38000,
    originalPrice: 43000,
    discount: 12,
    rating: 4.7,
    reviews: 174,
    location: "Srinagar, Pahalgam, Gurez",
    highlights: ["Gurez Valley", "Bukit Top", "Shikara"],
    featured: true,
    category: "mountain",
    tags: ["Nature", "Adventure", "Family"]
  },

  {
    title: "Majestic Uttarakhand Tour",
    image: "/packages/MajesticUttarakhandTour.avif",
    slug: "majestic-uttarakhand-nainital-corbett-5n6d",
    duration: "5N/6D",
    price: 30000,
    originalPrice: 34000,
    discount: 12,
    rating: 4.6,
    reviews: 136,
    location: "Nainital, Corbett",
    highlights: ["Corbett Safari", "Naini Lake", "Mall Road"],
    featured: false,
    category: "mountain",
    tags: ["Family", "Wildlife", "Hill Station"]
  },

  {
    title: "Mysterious Mussoorie Escape",
    image: "/packages/MysteriousMussoorieEscape.avif",
    slug: "mussoorie-3n4d",
    duration: "3N/4D",
    price: 28000,
    originalPrice: 31000,
    discount: 10,
    rating: 4.5,
    reviews: 102,
    location: "Mussoorie",
    highlights: ["Kempty Falls", "Camel Back Road", "Mall Road"],
    featured: false,
    category: "mountain",
    tags: ["Family", "Friends", "Budget"]
  },

  {
    title: "Mystic Nainital Retreat",
    image: "/packages/MysticNainitalRetre.avif",
    slug: "nainital-3n4d",
    duration: "3N/4D",
    price: 20000,
    originalPrice: 23000,
    discount: 13,
    rating: 4.6,
    reviews: 128,
    location: "Nainital",
    highlights: ["Boating", "Snow View Point", "Hanuman Garhi"],
    featured: false,
    category: "mountain",
    tags: ["Family", "Budget", "Nature"]
  },

  {
    title: "Essence of Kerala",
    image: "/packages/EssenceofKerala.avif",
    slug: "essence-kerala-3n4d",
    duration: "3N/4D",
    price: 18000,
    originalPrice: 23000,
    discount: 20,
    rating: 4.7,
    reviews: 164,
    location: "Munnar, Alleppey",
    highlights: ["Houseboat", "Tea Gardens"],
    featured: true,
    category: "cultural",
    tags: ["Family", "Relaxation", "Nature"]
  },

  {
    title: "Captivating Kerala",
    image: "/packages/CaptivatingKerala.avif",
    slug: "captivating-kerala-5n6d",
    duration: "5N/6D",
    price: 27000,
    originalPrice: 32000,
    discount: 16,
    rating: 4.8,
    reviews: 198,
    location: "Munnar, Thekkady, Alleppey",
    highlights: ["Tea Plantations", "Houseboat", "Ayurveda"],
    featured: true,
    category: "cultural",
    tags: ["Relaxing", "Family", "Nature"]
  },

  {
    title: "Kerala Offbeat Tour",
    image: "/packages/KeralaOffbeatTou.avif",
    slug: "kerala-offbeat-4n5d",
    duration: "4N/5D",
    price: 31000,
    originalPrice: 35000,
    discount: 11,
    rating: 4.6,
    reviews: 142,
    location: "Varkala, Wayanad, Alleppey",
    highlights: ["Beaches", "Waterfalls", "Caves"],
    featured: false,
    category: "cultural",
    tags: ["Adventure", "Nature", "Relaxing"]
  }
];

const categories = [
  { id: "all", name: "All Packages", count: packages.length, icon: "🌍" },
  { id: "adventure", name: "Adventure", count: packages.filter(pkg => pkg.category === "adventure").length, icon: "🚵‍♂️" },
  { id: "cultural", name: "Cultural", count: packages.filter(pkg => pkg.category === "cultural").length, icon: "🏯" },
  { id: "beach", name: "Beach", count: packages.filter(pkg => pkg.category === "beach").length, icon: "🏖️" },
  { id: "mountain", name: "Mountain", count: packages.filter(pkg => pkg.category === "mountain").length, icon: "⛰️" }
];

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [durationFilter, setDurationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  // Get all unique tags
  const allTags = [...new Set(packages.flatMap(pkg => pkg.tags))];

  // Filter packages based on active filters
  const filteredPackages = packages.filter(pkg => {
    const matchesCategory = activeCategory === "all" || pkg.category === activeCategory;
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Duration filter logic
    let matchesDuration = true;
    if (durationFilter === "short") matchesDuration = parseInt(pkg.duration) <= 4;
    else if (durationFilter === "medium") matchesDuration = parseInt(pkg.duration) > 4 && parseInt(pkg.duration) <= 6;
    else if (durationFilter === "long") matchesDuration = parseInt(pkg.duration) > 6;

    // Tags filter
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => pkg.tags.includes(tag));

    return matchesCategory && matchesPrice && matchesSearch && matchesDuration && matchesTags;
  });

  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "popular":
        return b.reviews - a.reviews;
      default: // featured
        return (b.featured === a.featured) ? 0 : b.featured ? -1 : 1;
    }
  });

  // Reset all filters
  const resetFilters = () => {
    setActiveCategory("all");
    setPriceRange([0, 50000]);
    setDurationFilter("all");
    setSearchTerm("");
    setSelectedTags([]);
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium mb-4"
          >
            ✈️ Explore Incredible Destinations
          </motion.span>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Travel Packages
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed text-sm">
            Discover handpicked experiences with perfect blend of adventure, culture, and relaxation across incredible India
          </p>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative bg-white rounded-lg shadow-sm border border-gray-200 p-1">
              <div className="flex items-center gap-1">
                <Search className="ml-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search destinations, activities..."
                  className="flex-1 py-2 px-2 text-gray-700 placeholder-gray-500 bg-transparent outline-none text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-3 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-xs"
                >
                  <Filter size={16} />
                  Filters
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSection
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              durationFilter={durationFilter}
              setDurationFilter={setDurationFilter}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              allTags={allTags}
              resetFilters={resetFilters}
            />
          </div>

          {/* Mobile Filters */}
          <MobileFilters
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {sortedPackages.length} {sortedPackages.length === 1 ? 'Package' : 'Packages'} Found
                </h2>
                <p className="text-gray-600 text-xs mt-1">
                  {activeCategory !== "all" && `in ${categories.find(c => c.id === activeCategory)?.name}`}
                  {selectedTags.length > 0 && ` • ${selectedTags.length} travel style${selectedTags.length > 1 ? 's' : ''} selected`}
                </p>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-3">
                <span className="text-gray-600 text-xs hidden sm:block">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-3 py-2 pr-6 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-1 focus:ring-rose-400 focus:border-transparent text-xs"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="popular">Most Popular</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                </div>
              </div>
            </motion.div>

            {/* Active Filters */}
            {(activeCategory !== "all" || selectedTags.length > 0 || durationFilter !== "all") && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-1 mb-4"
              >
                {activeCategory !== "all" && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-xs">
                    {categories.find(c => c.id === activeCategory)?.name}
                    <button onClick={() => setActiveCategory("all")}>×</button>
                  </span>
                )}
                {selectedTags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    {tag}
                    <button onClick={() => setSelectedTags(prev => prev.filter(t => t !== tag))}>×</button>
                  </span>
                ))}
                {durationFilter !== "all" && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    {durationFilter} trips
                    <button onClick={() => setDurationFilter("all")}>×</button>
                  </span>
                )}
              </motion.div>
            )}

            {/* Packages Grid */}
            {sortedPackages.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
              >
                <AnimatePresence>
                  {sortedPackages.map((pkg, index) => (
                    <PackageCard key={pkg.slug} data={pkg} index={index} />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* Empty State */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-xl"
              >
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search size={20} className="text-rose-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  No packages found
                </h3>
                <p className="text-gray-600 mb-4 max-w-md mx-auto leading-relaxed text-sm">
                  Try adjusting your filters or search terms to discover amazing travel packages.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors font-semibold text-xs"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}

            {/* Load More Button */}
            {sortedPackages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-8"
              >
                <button className="px-4 py-2 border border-rose-600 text-rose-600 rounded-lg font-semibold hover:bg-rose-600 hover:text-white transition-all text-xs">
                  Load More Packages
                </button>
              </motion.div>
            )}

            {/* Trust Badges Section */}
            <div className="mt-8">
              <TrustBadges />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}