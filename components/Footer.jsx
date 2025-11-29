"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
  Heart
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
  ];

  const destinations = [
    { name: "Goa Beaches", href: "/destinations/goa" },
    { name: "Himachal", href: "/destinations/himachal" },
    { name: "Kerala", href: "/destinations/kerala" },
    { name: "Rajasthan", href: "/destinations/rajasthan" },
  ];

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "Travel Guide", href: "/guide" },
    { name: "Cancellation", href: "/cancellation" },
    { name: "Safety", href: "/safety" },
  ];

  const socials = [
    { 
      icon: <Facebook size={16} />, 
      href: "#", 
      name: "Facebook",
    },
    { 
      icon: <Instagram size={16} />, 
      href: "#", 
      name: "Instagram",
    },
    { 
      icon: <Twitter size={16} />, 
      href: "#", 
      name: "Twitter",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-white text-gray-800 border-t border-gray-200 pt-16 pb-8">
      
      {/* Main Footer Content */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={stagger}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">

          {/* Brand Column */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">BT</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  BharatTrip
                </h2>
                <p className="text-sm text-gray-600">Explore Incredible India</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Discover authentic Indian experiences with curated travel packages. 
              From Himalayan adventures to coastal retreats.
            </p>

            {/* Social Links */}
            <div className="flex gap-2">
              {socials.map((social, i) => (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={i}
                  href={social.href}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-600"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h3 className="text-sm font-semibold mb-4 text-gray-900 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-rose-500 transition-all duration-300 text-sm hover:pl-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations */}
          <motion.div variants={fadeUp}>
            <h3 className="text-sm font-semibold mb-4 text-gray-900 uppercase tracking-wide">
              Destinations
            </h3>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <Link
                    href={destination.href}
                    className="text-gray-600 hover:text-rose-500 transition-all duration-300 text-sm hover:pl-1"
                  >
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div variants={fadeUp}>
            <h3 className="text-sm font-semibold mb-4 text-gray-900 uppercase tracking-wide">
              Contact & Newsletter
            </h3>

            {/* Contact Info */}
            <div className="space-y-3 text-gray-600 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-rose-500" />
                <div>
                  <Link href="tel:+918894322900" className="block hover:text-rose-500 transition-colors">
                    +91 88943 22900
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} className="text-rose-500" />
                <Link href="mailto:info@bharattrip.net" className="hover:text-rose-500 transition-colors">
                  info@bharattrip.net
                </Link>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-rose-500 mt-0.5" />
                <p className="text-xs">
                  Kehloor Bhawan Shakti Vihar, Panthghati - 171009
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2 text-sm">Get Travel Updates</h4>

              <AnimatePresence mode="wait">
                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-2"
                  >
                    <p className="text-green-600 text-sm font-medium">Thank you for subscribing!</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      className="flex-1 p-2 bg-white border border-gray-300 text-gray-800 placeholder-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="p-2 bg-rose-500 hover:bg-rose-600 rounded-lg text-white transition-all duration-300"
                    >
                      <Send size={16} />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 my-8"
        />

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <p>© 2025 BharatTrip. All rights reserved.</p>
            <div className="flex items-center gap-1 text-xs">
              <span>Made with</span>
              <Heart size={12} className="text-rose-500" />
              <span>in India</span>
            </div>
          </div>

          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-rose-500 transition-colors text-xs"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}