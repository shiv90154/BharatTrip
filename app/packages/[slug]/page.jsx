"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bookmark,
  Share,
  MapPin,
  Calendar,
  Star,
  Users,  
  Heart,
} from "lucide-react";

import packagesData from "../../../data/packagesData";

import PackageGallery from "@/components/packages/PackageGallery";
import Itinerary from "@/components/packages/Itinerary";
import BookingCard from "@/components/packages/BookingCard";
import QuickFacts from "@/components/packages/QuickFacts";

export default function PackageDetail() {
  const router = useRouter();
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const packageData = packagesData.find((pkg) => pkg.slug === slug);
      setData(packageData || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [slug]);

  // -------------------------
  // Loading State UI
  // -------------------------
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-gray-600 text-sm">
            Loading amazing experience...
          </p>
        </div>
      </div>
    );
  }

  // -------------------------
  // Invalid Package UI
  // -------------------------
  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Package Not Found
          </h2>
          <Link
            href="/packages"
            className="text-rose-600 hover:text-rose-700 font-medium text-sm"
          >
            ← Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  // Fallbacks (100% error-free)
  const highlights = data.detailedHighlights || data.highlights || [];
  const itinerary = data.itinerary || [];
  const quickFacts = data.quickFacts || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors text-sm"
            >
              <ArrowLeft size={18} />
              <span className="font-medium">Back</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bookmark
                  size={18}
                  className={
                    isBookmarked
                      ? "fill-rose-600 text-rose-600"
                      : "text-gray-600"
                  }
                />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* -------------------------
              LEFT SIDE (MAIN CONTENT)
          -------------------------- */}
          <div className="lg:col-span-2 space-y-4">
            <PackageGallery images={data.images || []} title={data.title} />

            {/* Package Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-4 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-3">
                <div className="flex-1">
                  {data.featured && (
                    <span className="inline-block bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-medium mb-2">
                      Bestseller
                    </span>
                  )}

                  <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                    {data.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{data.location}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{data.duration}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-rose-600 text-rose-600"
                      />
                      <span className="font-medium">{data.rating}</span>
                      <span>({data.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end mb-1">
                    <Users size={14} className="text-gray-400" />
                    <span className="text-xs text-gray-600">
                      {Math.floor(Math.random() * 200) + 50} people booked
                    </span>
                  </div>
                </div>
              </div>

              {/* PRICE */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-rose-600">
                  ₹{data.price.toLocaleString()}
                </span>

                {data.originalPrice > data.price && (
                  <>
                    <span className="text-lg line-through text-gray-400">
                      ₹{data.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-full text-xs font-medium">
                      Save {data.discount}%
                    </span>
                  </>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                {data.about}
              </p>
            </motion.div>

            {/* -------------------------
                HIGHLIGHTS
            -------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-4 border border-gray-100"
            >
              <h2 className="text-base font-semibold mb-3 text-gray-800">
                ✨ Package Highlights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <Heart
                      size={16}
                      className="text-rose-600 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* -------------------------
                ITINERARY (SAFE VERSION)
            -------------------------- */}
            <Itinerary itinerary={itinerary} />
          </div>

          {/* -------------------------
              RIGHT SIDEBAR
          -------------------------- */}
          <div className="lg:col-span-1 space-y-4">
            <BookingCard data={data} />
            <QuickFacts quickFacts={quickFacts} />
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-4 right-4 z-30">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-1 text-sm"
        >
          <Heart size={16} />
          Book Now
        </motion.button>
      </div>
    </div>
  );
}
