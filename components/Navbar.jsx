"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  User,
  Heart,
  MapPin,
  LogOut,
  Settings,
  Phone,
  MessageCircle,
  ChevronDown,
  Sparkles,
} from "lucide-react";

import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const userMenuRef = useRef(null);

  // -----------------------------
  // ⭐ ULTRA PREMIUM NAV ITEMS
  // -----------------------------
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "We Provide", href: "/we-provide" },
    { label: "Destinations", href: "/destinations" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
    { label: "Career Opportunity", href: "/career" },   // ⭐ Added Premiumly
    { label: "Contact", href: "/contact" },
  ];

  // -----------------------------
  // ⭐ SMART NAVBAR (hide on scroll down)
  // -----------------------------
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setScrolled(currentY > 10);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -----------------------------
  // ⭐ Close user menu when clicked outside
  // -----------------------------
  useEffect(() => {
    const handler = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };
  return (
    <>
      {/* ============================
          ⭐ NAVBAR MAIN WRAPPER
      ============================== */}
      <motion.nav
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-[9999]"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.97)"
              : "rgba(255,255,255,0.85)",
            backdropFilter: "blur(20px)",
            borderBottom: scrolled
              ? "1px solid rgba(0,0,0,0.08)"
              : "1px solid rgba(255,255,255,0.2)",
            boxShadow: scrolled ? "0 4px 25px rgba(0,0,0,0.08)" : "none",
          }}
          transition={{ duration: 0.25 }}
          className="w-full"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            
            {/* --------------------------------------  
                ⭐ LOGO 
            --------------------------------------- */}
<Link href="/" className="flex-shrink-0">
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-3 cursor-pointer"
  >
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
      <Image
        src="/logo.png"
        alt="BharatTrip Logo"
        fill
        priority
        className="object-contain"
      />
    </div>

    <span className="font-bold text-gray-900 text-lg sm:text-xl tracking-tight lg:hidden">
      BharatTrip
    </span>
  </motion.div>
</Link>


            {/* --------------------------------------  
                ⭐ DESKTOP NAVIGATION
            --------------------------------------- */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative font-medium cursor-pointer"
                    >
                      <span
                        className={`${
                          active 
                            ? "text-[#FF385C] font-semibold"
                            : "text-gray-600 hover:text-gray-900"
                        } transition-colors duration-200 text-base`}
                      >
                        {item.label}
                      </span>

                      {active && (
                        <motion.div
                          layoutId="desktopNavUnderline"
                          className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#FF385C] rounded-full"
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* --------------------------------------  
                ⭐ RIGHT SIDE BUTTONS (Desktop)
            --------------------------------------- */}
            <div className="hidden md:flex items-center gap-3">
              
              {/* ❤️ Wishlist */}
              <Link href="/wishlist">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Heart size={20} className="text-gray-700" />
                </motion.button>
              </Link>

              {/* 🔍 Search */}
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white hover:border-gray-400 text-gray-600 hover:text-gray-900 transition-all"
              >
                <Search size={18} />
                <span className="text-sm font-medium">Search</span>
              </motion.button>

              {/* 🔔 User Menu */}
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 bg-white text-gray-700 transition-all min-w-[130px]"
                  >
                    <div className="w-7 h-7 bg-[#FF385C] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {user.name?.[0].toUpperCase() || "U"}
                    </div>
                    <span className="text-sm font-medium truncate max-w-[90px]">
                      {user.name || user.email?.split("@")[0]}
                    </span>
                    <ChevronDown size={16} className={`${userMenuOpen ? "rotate-180" : ""} transition`} />
                  </motion.button>

                  {/* USER DROPDOWN */}
                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        className="absolute right-0 mt-3 w-60 bg-white shadow-xl border border-gray-200 rounded-xl p-2 z-50"
                      >
                        {/* User Info */}
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="font-semibold text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>

                        <Link href="/profile">
                          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                            <User size={16} className="text-blue-500" />
                            My Profile
                          </button>
                        </Link>

                        <Link href="/wishlist">
                          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                            <Heart size={16} className="text-rose-500" />
                            My Wishlist
                          </button>
                        </Link>

                        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                          <Settings size={16} className="text-gray-600" />
                          Account Settings
                        </button>

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-1"></div>

                        {/* Logout */}
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                        >
                          <LogOut size={16} />
                          Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAuthModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-[#FF385C] text-white hover:bg-[#FF5A5F] transition-all"
                >
                  Login
                </motion.button>
              )}

              {/* 📞 Call Expert */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.location.href = "tel:+918894322900"}
                className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600"
              >
                <Phone size={18} />
              </motion.button>

            </div>

            {/* --------------------------------------  
                ⭐ MOBILE MENU TOGGLE
            --------------------------------------- */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu size={26} className="text-gray-700" />
            </motion.button>

          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-16 sm:h-20"></div>
      {/* ============================
          ⭐ AUTH MODAL
      ============================== */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />

      {/* ============================
          ⭐ SEARCH MODAL OVERLAY
      ============================== */}
      <AnimatePresence>
        {searchOpen && (
          <>
            {/* Background Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[10000]"
              onClick={() => setSearchOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[10001] px-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-7">

                {/* SEARCH INPUT */}
                <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-3 shadow-sm">
                  <Search size={20} className="text-gray-400" />

                  <input
                    type="text"
                    placeholder="Search destinations, packages, experiences..."
                    className="flex-1 text-lg outline-none bg-transparent placeholder-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && searchQuery.trim()) {
                        router.push(`/packages?search=${encodeURIComponent(searchQuery.trim())}`);
                        setSearchOpen(false);
                        setSearchQuery("");
                      }
                    }}
                    autoFocus
                  />

                  <button
                    onClick={() => setSearchOpen(false)}
                    className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                  >
                    Esc
                  </button>
                </div>

                {/* QUICK SEARCH */}
                <div className="mt-5">
                  <p className="text-sm text-gray-500 font-medium mb-2">Quick Search</p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Goa Beaches",
                      "Kerala Backwaters",
                      "Rajasthan Tour",
                      "Honeymoon Packages",
                      "Ladakh Bikes",
                      "Kashmir Paradise",
                      "Manali Trip",
                      "Ayodhya Ram Mandir"
                    ].map((term) => (
                      <button
                        key={term}
                        onClick={() => {
                          router.push(`/packages?search=${encodeURIComponent(term)}`);
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* ============================
          ⭐ MOBILE DRAWER MENU
      ============================== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Slide Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl z-[9999] p-5 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/logo.png"
                      fill
                      alt="BharatTrip Logo"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h2 className="font-bold text-xl text-gray-800 tracking-tight">
                    BharatTrip
                  </h2>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <X size={26} className="text-gray-600" />
                </button>
              </div>

              {/* User Info Box */}
              {user ? (
                <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl p-5 mb-6 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-lg font-bold">
                      {user.name?.charAt(0).toUpperCase() ?? user.email?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-lg leading-tight">{user.name}</p>
                      <p className="text-white/80 text-sm">{user.email}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 p-4 rounded-xl shadow-sm mb-6">
                  <p className="text-gray-700 text-sm mb-3">Sign in to access your wishlist & bookings</p>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setAuthModalOpen(true);
                    }}
                    className="w-full bg-rose-600 text-white py-3 rounded-xl font-semibold hover:bg-rose-700 transition"
                  >
                    Sign In
                  </button>
                </div>
              )}

              {/* Navigation Links */}
              <nav className="flex-1 space-y-2 overflow-y-auto pr-1">
                {[
                  { label: "Home", href: "/" },
                  { label: "Packages", href: "/packages" },
                  { label: "Destinations", href: "/destinations" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Blogs", href: "/blogs" },
                  { label: "We Provide", href: "/we-provide" },
                  { label: "Career Opportunity", href: "/career" }, // ⭐ Added
                  { label: "Contact Us", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    <motion.div
                      whileTap={{ scale: 0.97 }}
                      className={`p-4 rounded-xl text-lg font-medium ${
                        pathname === item.href
                          ? "bg-rose-50 text-rose-600 border border-rose-200"
                          : "text-gray-700 hover:bg-gray-100"
                      } transition flex items-center gap-3`}
                    >
                      <Sparkles size={18} className="text-rose-500" />
                      {item.label}
                    </motion.div>
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* Bottom Buttons */}
              <div className="space-y-3">
                {/* Contact Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => window.location.href = "tel:+918894322900"}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <Phone size={20} /> Call
                  </button>

                  <button
                    onClick={() => window.open("https://wa.me/918894322900", "_blank")}
                    className="flex-1 bg-green-400 hover:bg-green-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <MessageCircle size={20} /> WhatsApp
                  </button>
                </div>

                {/* Wishlist */}
                <Link href="/wishlist">
                  <button
                    onClick={() => setOpen(false)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <Heart size={18} className="text-rose-500" /> Wishlist
                  </button>
                </Link>

                {/* Logout */}
                {user && (
                  <button
                    onClick={handleLogout}
                    className="w-full border border-red-300 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-50 transition flex items-center justify-center gap-2"
                  >
                    <LogOut size={18} /> Sign Out
                  </button>
                )}
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[9998]"
            />
          </>
        )}
      </AnimatePresence>
          </>
  );
}
