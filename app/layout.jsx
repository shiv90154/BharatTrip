"use client";

import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import "./globals.css";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  // Show Back-To-Top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* SEO BASICS */}
        <title>BharatTrip – Explore India Packages, Destinations & Travel Blogs</title>
        <meta name="description" content="Plan your next trip across India with BharatTrip. Explore packages, destinations, travel blogs & more." />
        <meta name="theme-color" content="#2563eb" />
      </head>

      <body className="bg-white text-gray-900 overflow-x-hidden">

        {/* GLOBAL NAV */}
        <Navbar />

        {/* PAGE TRANSITION WRAPPER */}
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="min-h-screen pb-24"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        {/* MOBILE BOTTOM NAV */}
        <BottomNav />

        {/* GLOBAL FOOTER */}
        <Footer />

        {/* FLOATING WHATSAPP BUTTON */}
        <Link
          href="https://wa.me/918894322900"
          target="_blank"
          className="fixed bottom-24 right-5 md:right-8 bg-green-500 p-4 rounded-full shadow-2xl z-[999]"
        >
          <MessageCircle size={28} className="text-white" />
        </Link>

        {/* BACK TO TOP BUTTON */}
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 left-5 md:left-8 bg-gray-800 p-3 rounded-full shadow-lg text-white z-[999]"
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </body>
    </html>
  );
}
