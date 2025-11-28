"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "Destinations", href: "/destinations" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
          backdropFilter: "blur(16px)",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/logo.png"
                alt="BharatTrip Logo"
                width={45}
                height={45}
                className="rounded-md"
              />
              <span className="font-bold text-gray-800 text-xl hidden sm:block">
                BharatTrip
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-5 py-2 rounded-lg shadow-md"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-700"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-50 p-6"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button onClick={() => setOpen(false)}>
                <X size={28} className="text-gray-700" />
              </button>
            </div>

            <div className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  <motion.div
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center text-lg font-medium text-gray-700 hover:text-blue-600"
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-lg"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}
  