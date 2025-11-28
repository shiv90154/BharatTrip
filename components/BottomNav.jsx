"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Mountain, Map, BookOpen, PhoneCall } from "lucide-react";
import { GalleryVerticalEnd } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

const tabs = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Packages", icon: Mountain, href: "/packages" },
  { label: "Explore", icon: Map, href: "/destinations" },
{ label: "Gallery", icon: GalleryVerticalEnd, href: "/gallery" },
  { label: "Blogs", icon: BookOpen, href: "/blogs" },
  { label: "Contact", icon: PhoneCall, href: "/contact" },
];


  const active = tabs.findIndex((t) => t.href === pathname);

  // HANDLE HIDE / SHOW ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY) {
        // user scrolling down → hide navbar
        setShowNav(false);
      } else {
        // user scrolls up → show navbar
        setShowNav(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      animate={{ y: showNav ? 0 : 90 }} // hides smoothly
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden"
    >
      <div className="bg-white/80 backdrop-blur-xl border-t border-gray-200 shadow-lg">
        <div className="flex justify-between px-4 py-2">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = i === active;

            return (
              <button
                key={i}
                onClick={() => router.push(tab.href)}
                className="flex flex-col items-center w-full py-1"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.15 : 1,
                    color: isActive ? "#2563eb" : "#64748b",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={22} />
                </motion.div>

                <span
                  className={`text-xs mt-1 ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-500"
                  }`}
                >
                  {tab.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-6 h-1 bg-blue-600 rounded-full mt-1"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
