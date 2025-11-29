"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {   Home, 
  Layers, 

  Image as ImageIcon, 
  BookOpen, 
  Phone  } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

const tabs = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Packages", icon: Layers, href: "/packages" },

  { label: "Gallery", icon: ImageIcon, href: "/gallery" },
  { label: "Blogs", icon: BookOpen, href: "/blogs" },
  { label: "Contact", icon: Phone, href: "/contact" },
];

  const active = tabs.findIndex((t) => t.href === pathname);

  // Handle hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      animate={{ y: showNav ? 0 : 90 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[9999] md:hidden mx-4"
    >
      <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg">
        <div className="flex justify-between px-2 py-2">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = i === active;

            return (
              <button
                key={i}
                onClick={() => router.push(tab.href)}
                className="flex flex-col items-center w-16 py-1"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    color: isActive ? "#e11d48" : "#64748b",
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <Icon size={20} />
                  {isActive && (
                    <motion.div
                      layoutId="bottomNavActive"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-rose-600 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </motion.div>

                <span
                  className={`text-xs mt-1 ${
                    isActive ? "text-rose-600 font-semibold" : "text-gray-500"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}