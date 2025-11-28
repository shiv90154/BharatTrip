"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const pathname = usePathname();

  // Scroll hide / show navbar (NO BLINK)
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 80) {
        setShowNav(false); // hide
      } else {
        setShowNav(true); // show
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
              ? "rgba(255,255,255,0.9)"
              : "rgba(255,255,255,0.2)",
            backdropFilter: "blur(16px)",
            borderBottom: scrolled
              ? "1px solid rgba(0,0,0,0.1)"
              : "1px solid rgba(255,255,255,0.2)",
          }}
          transition={{ duration: 0.25 }}
          className="w-full"
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
                <span className="font-extrabold text-gray-800 text-xl hidden sm:block tracking-wide">
                  BharatTrip
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.07 }}
                      className="relative font-medium cursor-pointer"
                    >
                      <span
                        className={`${
                          active ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {item.label}
                      </span>

                      {active && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 right-0 -bottom-1 h-[3px] bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-lg shadow-lg font-semibold"
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
        </motion.div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-[9999] p-6"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setOpen(false)}>
                  <X size={28} className="text-gray-700" />
                </button>
              </div>

              <div className="space-y-6">
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
                        className={`text-lg font-medium ${
                          active ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  );
                })}

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-lg font-semibold"
                >
                  Book Now
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
