"use client";

import { useState } from "react";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import FeaturedPackages from "../components/FeaturedPackages";
import TrendingPackages from "../components/TrendingPackages";
import FilterAndPackages from "../components/FilterAndPackages";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/Newsletter";
import TravelOfferMarquee from "@/components/TravelOfferMarquee";

export default function Home() {
  const [category, setCategory] = useState("all");

  return (
    <div className="min-h-screen bg-white">
      
      <HeroSection />
       <TravelOfferMarquee />
      <CategorySection category={category} setCategory={setCategory} />
      <FeaturedPackages />
      <TrendingPackages />
      <FilterAndPackages />
      <Testimonials />
      <WhyChooseUs />
      <Newsletter />
    </div>
  );
}