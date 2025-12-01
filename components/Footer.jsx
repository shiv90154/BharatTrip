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
    { icon: <Facebook size={15} />, href: "#", name: "Facebook" },
    { icon: <Instagram size={15} />, href: "#", name: "Instagram" },
    { icon: <Twitter size={15} />, href: "#", name: "Twitter" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.08 } }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 2500);
      setEmail("");
    }
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 pt-12 pb-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={stagger}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">

          {/* BRAND */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-rose-500 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xs">BT</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">BharatTrip</h2>
                <p className="text-xs text-gray-600">Explore Incredible India</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Discover authentic Indian experiences with curated travel packages —
              from mountains to beaches.
            </p>

            <div className="flex gap-2">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.05 }}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 transition"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xs font-semibold mb-3 uppercase tracking-wide text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-1.5">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-rose-500 transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DESTINATIONS */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xs font-semibold mb-3 uppercase tracking-wide text-gray-900">
              Destinations
            </h3>
            <ul className="space-y-1.5">
              {destinations.map((d) => (
                <li key={d.name}>
                  <Link
                    href={d.href}
                    className="text-gray-600 hover:text-rose-500 transition text-sm"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT + NEWSLETTER */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xs font-semibold mb-3 uppercase tracking-wide text-gray-900">
              Contact & Updates
            </h3>

            <div className="space-y-2 text-gray-600 text-sm mb-4">
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-rose-500" />
                <Link href="tel:+918894322900" className="hover:text-rose-500">
                  +91 88943 22900
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={13} className="text-rose-500" />
                <Link href="mailto:info@bharattrip.net" className="hover:text-rose-500">
                  info@bharattrip.net
                </Link>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-rose-500 mt-0.5" />
                <p className="text-xs">Kehloor Bhawan Shakti Vihar, Panthghati - 171009</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2 text-sm">
                Get Travel Updates
              </h4>

              <AnimatePresence mode="wait">
                {isSubscribed ? (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-green-600 text-sm text-center py-1"
                  >
                    Thanks for subscribing!
                  </motion.p>
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
                      className="flex-1 p-2 bg-white border border-gray-300 text-sm rounded-lg outline-none focus:ring-1 focus:ring-rose-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="p-2 bg-rose-500 hover:bg-rose-600 rounded-lg text-white"
                    >
                      <Send size={15} />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs gap-3">
          <p>© 2025 BharatTrip. All rights reserved.</p>

          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={11} className="text-rose-500" />
            <span>in India</span>
          </div>

       <div className="flex gap-4">
  {[
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookies", href: "/cookies" }
  ].map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="hover:text-rose-500 transition"
    >
      {item.name}
    </Link>
  ))}
</div>

        </div>
      </motion.div>
    </footer>
  );
}
