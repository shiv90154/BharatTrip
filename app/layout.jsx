"use client";

import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MessageCircle, ArrowUp, X, Calendar, MapPin, User, Phone, Mail, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  // Show Back-To-Top button
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -----------------------------------------
  // ✅ AUTO-POPUP FOR NEW USERS (Opens after 5 sec)
  // -----------------------------------------
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // First-time visitor -> Show popup after 5 seconds
      const timer = setTimeout(() => {
        setOpenPopup(true);
        localStorage.setItem("hasVisited", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  // -----------------------------------------
  // FORM STATE
  // -----------------------------------------
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    dates: "",
    travelers: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("🎉 Enquiry Sent Successfully! Our travel expert will contact you within 2 hours.");
        setForm({
          name: "",
          email: "",
          phone: "",
          destination: "",
          dates: "",
          travelers: "",
          message: "",
        });
        setOpenPopup(false);
      } else {
        alert(`❌ Failed to send enquiry: ${data.error || 'Please try again'}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("❌ Network error! Please check your connection and try again.");
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>BharatTrip – Explore India Packages, Destinations & Travel Blogs</title>
        <meta name="description" content="Plan your next trip across India with BharatTrip." />
        <meta name="theme-color" content="#e11d48" />
      </head>

      <body className="bg-white text-gray-900 overflow-x-hidden">

<AuthProvider>
 

        <Navbar />

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

        <BottomNav />
        <Footer />

        {/* FLOATING WHATSAPP */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-24 right-4 md:right-6 z-[999]"
        >
          <Link
            href="https://wa.me/918894322900"
            target="_blank"
            className="bg-green-500 p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center relative group"
          >
            <MessageCircle size={20} className="text-white" />
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          </Link>
        </motion.div>

        {/* BACK TO TOP */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-24 left-4 md:left-6 bg-rose-600 p-3 md:p-4 rounded-full shadow-2xl text-white z-[999]"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* MANUAL HEART BUTTON */}
        <motion.button
          onClick={() => setOpenPopup(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-40 right-4 md:right-6 bg-rose-600 text-white p-3 rounded-full shadow-2xl font-semibold z-[999] border border-rose-400"
        >
          <Heart className="w-5 h-5" fill="white" />
        </motion.button>

        {/* POPUP FORM */}
        <AnimatePresence>
          {openPopup && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenPopup(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000]"
              />

              {/* Popup Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white rounded-xl shadow-2xl z-[1001] overflow-hidden"
              >
                {/* Header */}
                <div className="bg-rose-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Plan Your Trip</h3>
                    <button
                      onClick={() => setOpenPopup(false)}
                      className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <p className="text-rose-100 text-sm mt-1">Get free itinerary in 2 hours</p>
                </div>

                {/* Form */}
                <div className="p-4">
                  <form onSubmit={submitForm} className="space-y-3">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                    />

                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email *"
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                    />

                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone *"
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                    />

                    <input
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      placeholder="Where do you want to go?"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        name="dates"
                        value={form.dates}
                        onChange={handleChange}
                        placeholder="Travel Dates"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                      />

                      <select
                        name="travelers"
                        value={form.travelers}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                      >
                        <option value="">Travelers</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3-4">3-4 People</option>
                        <option value="5+">5+ People</option>
                      </select>
                    </div>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="2"
                      placeholder="Any special requirements?"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2.5 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Get Free Itinerary
                    </button>
                  </form>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
   
        </AuthProvider>
      </body>
    </html>
  );
}
