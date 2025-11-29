"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User, Heart } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const pathname = usePathname();

  // Scroll hide / show navbar
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScroll(currentY);
      setScrolled(currentY > 10);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "Destinations", href: "/destinations" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-[9999]"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.95)"
              : "rgba(255,255,255,0.85)",
            backdropFilter: "blur(20px)",
            borderBottom: scrolled
              ? "1px solid rgba(0,0,0,0.08)"
              : "1px solid rgba(255,255,255,0.2)",
            boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
          }}
          transition={{ duration: 0.25 }}
          className="w-full"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="BharatTrip Logo"
                    width={42}
                    height={42}
                    className="rounded-lg"
                  />
                </div>
                <span className="font-bold text-gray-900 text-xl hidden sm:block tracking-tight">
                  BharatTrip
                </span>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
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
                            ? "text-rose-600 font-semibold" 
                            : "text-gray-600 hover:text-gray-900"
                        } transition-colors duration-200`}
                      >
                        {item.label}
                      </span>

                      {active && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 right-0 -bottom-1 h-0.5 bg-rose-600 rounded-full"
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 bg-white text-gray-600 hover:text-gray-900 transition-all duration-200"
              >
                <Search size={16} />
                <span className="text-sm font-medium">Search</span>
              </motion.button>

              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Menu size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[10000] backdrop-blur-sm"
              onClick={() => setSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-[10001]"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 mx-4">
                <div className="flex items-center gap-4 mb-4">
                  <Search size={20} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search destinations, packages, experiences..."
                    className="flex-1 text-lg outline-none placeholder-gray-400"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Esc
                  </button>
                </div>
                <div className="text-sm text-gray-500">
                  Try searching for "Goa beaches", "Himalayan trek", or "Kerala backwaters"
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-[9999] p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="BharatTrip Logo"
                    width={36}
                    height={36}
                    className="rounded-lg"
                  />
                  <span className="font-bold text-gray-900">BharatTrip</span>
                </div>
                <button 
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X size={24} className="text-gray-700" />
                </button>
              </div>

              <div className="space-y-2">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl text-lg font-medium ${
                          active 
                            ? "bg-rose-50 text-rose-600 border border-rose-100" 
                            : "text-gray-700 hover:bg-gray-50"
                        } transition-colors duration-200`}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-rose-600 text-white py-3 rounded-xl font-semibold hover:bg-rose-700 transition-colors"
                >
                  Book Now
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Sign In
                </motion.button>
              </div>
            </motion.div>

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