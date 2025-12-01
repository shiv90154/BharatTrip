"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Package,
  MapPin,
  Heart,
  User,
  Search,
  Phone,
  Sparkles
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Get wishlist count from localStorage
  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlistCount(wishlist.length);
    };

    updateWishlistCount();
    
    // Listen for storage changes (from other tabs/windows)
    window.addEventListener('storage', updateWishlistCount);
    
    // Custom event for wishlist updates within same tab
    const handleWishlistUpdate = () => updateWishlistCount();
    window.addEventListener('wishlistUpdated', handleWishlistUpdate);

    return () => {
      window.removeEventListener('storage', updateWishlistCount);
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
    };
  }, []);

  const tabs = [
    { 
      label: "Home", 
      icon: Home, 
      href: "/",
      active: pathname === "/"
    },
    { 
      label: "Packages", 
      icon: Package, 
      href: "/packages",
      active: pathname === "/packages" || pathname.startsWith('/packages/')
    },
    { 
      label: "Explore", 
      icon: MapPin, 
      href: "/destinations",
      active: pathname === "/destinations" || pathname.startsWith('/destinations/')
    },
    { 
      label: "Wishlist", 
      icon: Heart, 
      href: "/wishlist",
      active: pathname === "/wishlist",
      badge: wishlistCount > 0 ? wishlistCount : null
    },
    { 
      label: user ? "Profile" : "Login", 
      icon: User, 
      href: user ? "/profile" : "#",
      active: pathname === "/profile" || pathname === "/login",
      requiresAuth: !user
    },
  ];

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

  const makeCall = () => {
    window.location.href = "tel:+918894322900";
  };

  const handleTabClick = (tab) => {
    if (tab.requiresAuth) {
      // Open auth modal for login/signup
      const event = new CustomEvent('openAuthModal');
      window.dispatchEvent(event);
    } else {
      router.push(tab.href);
    }
  };

  const handleSearchClick = () => {
    // Open search modal
    const event = new CustomEvent('openSearchModal');
    window.dispatchEvent(event);
  };

  return (
    <motion.div
      animate={{ y: showNav ? 0 : 80 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden"
    >
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/80 shadow-2xl">
        <div className="flex justify-between items-stretch px-1 py-2 max-w-md mx-auto">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = tab.active;

            return (
              <motion.button
                key={index}
                onClick={() => handleTabClick(tab)}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center flex-1 min-w-0 py-1 px-1 relative group"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.15 : 1,
                    color: isActive ? "#FF385C" : "#64748b",
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative mb-1"
                >
                  <Icon 
                    size={20} 
                    className={isActive ? "text-[#FF385C]" : "text-gray-600"}
                  />
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="bottomNavActive"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#FF385C] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}

                  {/* Notification Badge */}
                  {tab.badge && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF385C] rounded-full border border-white flex items-center justify-center"
                    >
                      <span className="text-white text-[10px] font-bold">
                        {tab.badge > 9 ? '9+' : tab.badge}
                      </span>
                    </motion.div>
                  )}

                  {/* Sparkle effect for active tab */}
                  {isActive && (
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                      className="absolute -inset-1"
                    >
                      <Sparkles size={12} className="text-[#FF385C] opacity-60" />
                    </motion.div>
                  )}
                </motion.div>

                <motion.span
                  animate={{
                    color: isActive ? "#FF385C" : "#64748b",
                    fontWeight: isActive ? "600" : "500",
                  }}
                  className="text-xs truncate w-full text-center"
                >
                  {tab.label}
                </motion.span>

                {/* Active Background */}
                {isActive && (
                  <motion.div
                    layoutId="bottomNavBackground"
                    className="absolute inset-0 bg-gradient-to-t from-rose-50 to-transparent rounded-xl -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {tab.label}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </motion.button>
            );
          })}
          
          {/* Quick Call Button */}
          <motion.button
            onClick={makeCall}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center py-1 px-2 min-w-0 group relative"
          >
            <motion.div
              animate={{
                color: "#22c55e",
              }}
              className="relative mb-1"
            >
              <Phone size={20} />
              
              {/* Pulsing Effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-green-500 rounded-full -z-10"
              />
            </motion.div>
            
            <span className="text-xs text-green-600 font-medium">Call</span>

            {/* Hover Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Call Expert
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </motion.button>

          {/* Search Button */}
          <motion.button
            onClick={handleSearchClick}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center py-1 px-2 min-w-0 group relative"
          >
            <motion.div
              animate={{
                color: "#3b82f6",
              }}
              className="relative mb-1"
            >
              <Search size={20} />
              
              {/* Subtle glow effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-blue-500 rounded-full -z-10 opacity-20"
              />
            </motion.div>
            
            <span className="text-xs text-blue-600 font-medium">Search</span>

            {/* Hover Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Search Packages
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </motion.button>
        </div>
        
        {/* Safe area for iOS */}
        <div className="h-1 bg-transparent" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-full left-0 right-0 h-4 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
    </motion.div>
  );
}