"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import PackageCard from "./PackageCard";

const FeaturedPackages = () => {
  const featuredPackages = [
    {
      title: "Kerala Backwaters",
      location: "Alleppey, Kerala",
      rating: 4.8,
      reviews: 1247,
      price: 12500,
      originalPrice: 15000,
      duration: "3 Days 2 Nights",
      highlights: ["Houseboat Stay", "Traditional Food", "Village Tour"],
      discount: 15,
      featured: true,
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400",
      category: "cultural"
    },
    {
      title: "Goa Beach Paradise",
      location: "North Goa",
      rating: 4.6,
      reviews: 892,
      price: 8900,
      originalPrice: 11000,
      duration: "4 Days 3 Nights",
      highlights: ["Beach Parties", "Water Sports", "Portuguese Heritage"],
      discount: 20,
      featured: true,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400",
      category: "beach"
    },
    {
      title: "Rajasthan Cultural Tour",
      location: "Jaipur, Udaipur",
      rating: 4.9,
      reviews: 756,
      price: 18900,
      originalPrice: 22000,
      duration: "6 Days 5 Nights",
      highlights: ["Palace Stay", "Desert Safari", "Folk Dance"],
      discount: 14,
      featured: true,
      image: "https://images.unsplash.com/photo-1539590581446-74e33a6e2ab2?w=400",
      category: "cultural"
    }
  ];

  return (
<section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
  <div className="max-w-7xl mx-auto px-4 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Trusted By Travelers Across India
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      <div>
        <div className="text-4xl font-bold">10K+</div>
        <p>Happy Travelers</p>
      </div>

      <div>
        <div className="text-4xl font-bold">120+</div>
        <p>Destinations</p>
      </div>

      <div>
        <div className="text-4xl font-bold">800+</div>
        <p>Trips Completed</p>
      </div>

      <div>
        <div className="text-4xl font-bold">4.8★</div>
        <p>Ratings</p>
      </div>
    </div>

  </div>
</section>



  );
};

export default FeaturedPackages;