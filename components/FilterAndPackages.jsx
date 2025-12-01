"use client";

import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import PackagesGrid from "./PackagesGrid";

const FilterAndPackages = () => {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const packages = [
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
  }
  ];

  const categories = [
    { value: "all", label: "All", count: packages.length, icon: "🌍" },
    { value: "beach", label: "Beach", count: 2, icon: "🏖️" },
    { value: "mountain", label: "Mountain", count: 2, icon: "⛰️" },
    { value: "cultural", label: "Cultural", count: 3, icon: "🎭" },
    { value: "adventure", label: "Adventure", count: 1, icon: "🚵‍♂️" },
    { value: "spiritual", label: "Spiritual", count: 1, icon: "🛕" }
  ];

  // Filter packages based on criteria
  const filteredPackages = packages.filter(pkg => {
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    const matchesCategory = category === "all" || pkg.category === category;
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesPrice && matchesCategory && matchesSearch;
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
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <FilterSidebar 
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        
        <PackagesGrid 
          sortedPackages={sortedPackages}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setPriceRange={setPriceRange}
          setCategory={setCategory}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </section>
  );
};

export default FilterAndPackages;