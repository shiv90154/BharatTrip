"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Route } from "next";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Award,
  ChevronRight
} from "lucide-react";

interface SearchInputProps {
  icon: React.ReactNode;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
}

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  location: string;
  rating: number;
}

/* SLIDER IMAGES */
const slides: Slide[] = [
  { id: 1, image: "/slider/1.avif", title: "Majestic Himalayas", subtitle: "Snow-capped peaks, deep valleys and breathtaking adventure", location: "Himachal Pradesh", rating: 4.9 },
  { id: 2, image: "/slider/2.avif", title: "Golden Desert Nights", subtitle: "Royal dunes, camel safaris & magical starlit evenings", location: "Rajasthan", rating: 4.7 },
  { id: 3, image: "/slider/3.avif", title: "Kerala Backwater Bliss", subtitle: "Luxury houseboats sailing on calm palm-fringed waters", location: "Kerala", rating: 4.8 },
  { id: 4, image: "/slider/4.avif", title: "Timeless Heritage", subtitle: "Ancient temples, rich culture & historical wonders", location: "Tamil Nadu", rating: 4.9 },
  { id: 5, image: "/slider/5.avif", title: "Tropical Beach Paradise", subtitle: "Golden shores, crystal-clear waters & serenity", location: "Goa", rating: 4.6 },
  { id: 6, image: "/slider/6.avif", title: "Mystical Northeast", subtitle: "Waterfalls, clouds & untouched natural beauty", location: "Meghalaya", rating: 4.8 },
  { id: 7, image: "/slider/7.avif", title: "Royal Forts & Palaces", subtitle: "Walk through India's grand royal past", location: "Jaipur", rating: 4.7 }
];

/* HERO SLIDER */
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [hover]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

          <div className="absolute bottom-24 left-10 text-white max-w-xl">
            <h3 className="text-4xl font-bold drop-shadow">{slides[current].title}</h3>
            <p className="mt-2 text-lg text-gray-200">{slides[current].subtitle}</p>
            <div className="flex items-center gap-2 mt-3">
              <Star size={18} className="text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-300">{slides[current].rating}</span>
              <span className="mx-1 text-gray-300">•</span>
              <span className="text-gray-300">{slides[current].location}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 w-10 rounded-full transition-all ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* HERO HEADING */
const HeroContent = () => (
  <div className="relative z-20 text-center px-6 max-w-4xl">
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
      <Award size={16} className="text-amber-300" />
      <span className="text-white text-sm">Award Winning Travel Experiences</span>
    </div>

    <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
      Discover{" "}
      <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-transparent bg-clip-text">
        Incredible
      </span>{" "}
      India
    </h1>

    <p className="text-gray-200 mt-4 text-lg">
      Curated journeys across India's most breathtaking destinations.
    </p>
  </div>
);

/* SEARCH SECTION */
const SearchSection = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    travelers: "2"
  });

  const SearchInput = ({
    icon,
    placeholder,
    value,
    onChange,
    type = "text"
  }: SearchInputProps) => (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
        {icon}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-amber-500"
      />
    </div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      router.push("/packages" as Route); // ✅ TypeScript FIX
      setLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      className="relative z-20 max-w-4xl w-full mt-10 px-4"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          <div className="md:col-span-3">
            <SearchInput
              icon={<MapPin size={20} />}
              placeholder="Destination"
              value={form.destination}
              onChange={(v) => setForm({ ...form, destination: v })}
            />
          </div>

          <div className="md:col-span-2">
            <SearchInput
              icon={<Calendar size={20} />}
              placeholder="Check in"
              type="date"
              value={form.checkIn}
              onChange={(v) => setForm({ ...form, checkIn: v })}
            />
          </div>

          <div className="md:col-span-2">
            <SearchInput
              icon={<Calendar size={20} />}
              placeholder="Check out"
              type="date"
              value={form.checkOut}
              onChange={(v) => setForm({ ...form, checkOut: v })}
            />
          </div>

          <div className="md:col-span-2">
            <SearchInput
              icon={<Users size={20} />}
              placeholder="Travelers"
              value={form.travelers}
              onChange={(v) => setForm({ ...form, travelers: v })}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-white rounded-lg flex items-center justify-center gap-2 font-semibold"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Search size={20} /> Search <ChevronRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

/* MAIN EXPORT */
const HeroSection = () => (
  <section className="relative w-full min-h-screen flex items-center justify-center">
    <HeroSlider />

    <div className="relative z-20 flex flex-col items-center text-center mt-24">
      <HeroContent />
      <SearchSection />
    </div>
  </section>
);

export default HeroSection;
