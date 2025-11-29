"use client";

import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import "./globals.css";

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

  // Form values
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    dates: "",
    travelers: "",
    budget: "",
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
          budget: "",
          message: "",
        });
        setOpenPopup(false);
      } else {
        alert(`❌ Failed to send enquiry: ${data.error || 'Please try again'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
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
            
            {/* Ping Animation */}
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

        {/* COMPACT PLAN YOUR TRIP BUTTON */}
        <motion.button
          onClick={() => setOpenPopup(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-40 right-4 md:right-6 bg-gradient-to-r from-rose-600 to-rose-500 text-white px-4 py-3 md:px-5 md:py-4 rounded-full shadow-2xl font-semibold z-[999] border border-rose-400"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 md:w-5 md:h-5" fill="white" />
            <span className="text-xs md:text-sm">Plan Trip</span>
          </div>
        </motion.button>

        {/* COMPACT & RESPONSIVE POPUP FORM */}
        <AnimatePresence>
          {openPopup && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenPopup(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000]"
              />

              {/* Compact Popup Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ 
                  duration: 0.25, 
                  ease: "easeOut" 
                }}
                className="
                  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-white border border-gray-200 shadow-2xl
                  rounded-2xl p-0 w-[90%] max-w-sm md:max-w-md z-[1001]
                  overflow-hidden max-h-[85vh] overflow-y-auto
                "
              >
                {/* Compact Header */}
                <div className="bg-gradient-to-r from-rose-600 to-rose-500 p-4 text-white relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setOpenPopup(false)}
                    className="absolute top-3 right-3 w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <X size={16} className="text-white" />
                  </button>

                  <div className="text-center pr-8">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6" fill="white" />
                    </div>
                    <h2 className="text-lg font-bold mb-1">
                      Plan Your Trip ✈️
                    </h2>
                    <p className="text-rose-100 text-xs opacity-90">
                      Get personalized itinerary
                    </p>
                  </div>
                </div>

                {/* Compact Form Content */}
                <div className="p-4">
                  <form onSubmit={submitForm} className="space-y-3">
                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        required
                        className="w-full pl-10 pr-3 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all duration-200 placeholder-gray-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email *"
                        required
                        className="w-full pl-10 pr-3 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all duration-200 placeholder-gray-500"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="Phone *"
                        className="w-full pl-10 pr-3 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all duration-200 placeholder-gray-500"
                      />
                    </div>

                    {/* Destination & Dates Row */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          placeholder="Destination"
                          className="w-full pl-9 pr-2 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all duration-200 placeholder-gray-500"
                        />
                      </div>

                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          name="dates"
                          value={form.dates}
                          onChange={handleChange}
                          placeholder="Dates"
                          className="w-full pl-9 pr-2 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all duration-200 placeholder-gray-500"
                        />
                      </div>
                    </div>

                    {/* Travelers & Budget Row */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <select
                          name="travelers"
                          value={form.travelers}
                          onChange={handleChange}
                          className="w-full pl-9 pr-2 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all duration-200 appearance-none text-gray-700"
                        >
                          <option value="">Travelers</option>
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3-4">3-4 People</option>
                          <option value="5+">5+ People</option>
                        </select>
                      </div>

                      <div className="relative">
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full px-3 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all duration-200 appearance-none text-gray-700"
                        >
                          <option value="">Budget</option>
                          <option value="economy">Economy</option>
                          <option value="standard">Standard</option>
                          <option value="premium">Premium</option>
                          <option value="luxury">Luxury</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="2"
                        placeholder="Tell us about your trip..."
                        className="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all duration-200 resize-none placeholder-gray-500"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="
                        w-full bg-gradient-to-r from-rose-600 to-rose-500 
                        hover:from-rose-700 hover:to-rose-600
                        text-white py-3 rounded-lg 
                        font-semibold transition-all duration-200 
                        shadow-lg hover:shadow-xl
                        flex items-center justify-center gap-2 text-sm
                      "
                    >
                      <Heart className="w-4 h-4" fill="white" />
                      Get Itinerary
                    </motion.button>

                    {/* Trust Badge */}
                    <div className="text-center pt-3 border-t border-gray-100">
                      <p className="text-[10px] text-gray-500">
                        🔒 Secure & Private • Response in 2 hours
                      </p>
                    </div>
                  </form>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </body>
    </html>
  );
}