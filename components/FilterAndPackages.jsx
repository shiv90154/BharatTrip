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
      slug: "goa-beach",
      title: "Goa Beach Tour",
      location: "North Goa",
      rating: 4.5,
      reviews: 567,
      price: 8900,
      duration: "4 Days 3 Nights",
      highlights: ["Beach Hopping", "Water Sports", "Nightlife"],
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400",
      category: "beach"
    },
    {
      slug: "ladakh-bike",
      title: "Ladakh Bike Trip",
      location: "Leh, Ladakh",
      rating: 4.9,
      reviews: 892,
      price: 28900,
      duration: "8 Days 7 Nights",
      highlights: ["Bike Rental", "High Altitude", "Lakes"],
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400",
      category: "adventure"
    },
    {
      slug: "kerala-backwaters",
      title: "Kerala Backwaters",
      location: "Alleppey, Kerala",
      rating: 4.8,
      reviews: 1247,
      price: 12500,
      duration: "3 Days 2 Nights",
      highlights: ["Houseboat", "Ayurveda", "Village Life"],
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400",
      category: "cultural"
    },
    {
      slug: "varanasi-spiritual",
      title: "Varanasi Spiritual Journey",
      location: "Varanasi, UP",
      rating: 4.7,
      reviews: 423,
      price: 7800,
      duration: "3 Days 2 Nights",
      highlights: ["Ganga Aarti", "Temple Tour", "Boat Ride"],
      image: "https://images.unsplash.com/photo-1591393223703-3fe2e2e6d08a?w=400",
      category: "spiritual"
    },
    {
      slug: "darjeeling-tea",
      title: "Darjeeling Tea Estate",
      location: "Darjeeling, WB",
      rating: 4.6,
      reviews: 389,
      price: 11200,
      duration: "4 Days 3 Nights",
      highlights: ["Tea Estate", "Toy Train", "Sunrise View"],
      image: "https://images.unsplash.com/photo-1547489435-79b65d8d57df?w=400",
      category: "mountain"
    },
    {
      slug: "kashmir-tulip",
      title: "Kashmir Tulip Garden",
      location: "Srinagar, Kashmir",
      rating: 4.9,
      reviews: 678,
      price: 16700,
      duration: "5 Days 4 Nights",
      highlights: ["Houseboat", "Tulip Garden", "Shikara Ride"],
      image: "https://images.unsplash.com/photo-1570547999337-8fbab6f92c4c?w=400",
      category: "cultural"
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