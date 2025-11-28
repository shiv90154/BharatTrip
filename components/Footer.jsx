"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const links = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const destinations = [
    "Goa Beaches",
    "Himachal Pradesh",
    "Kerala Backwaters",
    "Rajasthan Heritage",
    "Ladakh Adventure",
  ];

  const socials = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed Successfully!");
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0A1D3A] to-[#0E2A4D] text-white pt-16 pb-8 mt-16 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/footer-pattern.svg')] opacity-10 bg-cover"></div>

      {/* Light Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="relative z-20 max-w-7xl mx-auto px-6"
      >
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center shadow-xl">
                <span className="text-xl font-extrabold">BT</span>
              </div>
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
                BharatTrip
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Explore India like never before—mountains, beaches, culture, and adventure.
              Trusted by 10,000+ travelers.
            </p>

            <div className="flex gap-3 mt-5">
              {socials.map((s, i) => (
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  key={i}
                  href={s.href}
                  className="p-2 rounded-lg bg-white/10 hover:bg-orange-500 transition text-white shadow-md"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-gray-300 hover:text-white transition flex items-center gap-2"
                  >
                    • {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Top Destinations</h3>
            <ul className="space-y-2">
              {destinations.map((d) => (
                <li key={d}>
                  <span className="text-gray-300 hover:text-white transition cursor-pointer">
                    • {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>

            <div className="space-y-4 text-gray-200">

              <div className="flex gap-3">
                <MapPin className="text-orange-400" />
                <p>Kehloor Bhawan Shakti Vihar, Panthghati - 171009</p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-orange-400" />
                <div>
                  <Link href="tel:+918894322900" className="hover:text-white">
                    +91 88943 22900
                  </Link>
                  <br />
                  <Link href="tel:+918894323900" className="hover:text-white">
                    +91 88943 23900
                  </Link>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="text-orange-400" />
                <Link href="mailto:info@bharattrip.net" className="hover:text-white">
                  info@bharattrip.net
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/10">
              <h4 className="font-bold text-white mb-2">Subscribe for Offers</h4>

              <form onSubmit={handleSubscribe} className="flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 p-3 bg-white/20 text-white placeholder-white rounded-xl outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  type="submit"
                  className="ml-2 bg-orange-500 hover:bg-orange-600 p-3 rounded-xl text-white shadow-lg"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-10"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>© 2025 BharatTrip. All Rights Reserved.</p>

          <div className="flex gap-5 mt-3 md:mt-0">
            {["Privacy Policy", "Terms of Use", "Cookies"].map((x) => (
              <Link key={x} href="#" className="hover:text-white">
                {x}
              </Link>
            ))}
          </div>
        </div>

        {/* Floating WhatsApp */}
     
      </motion.div>
    </footer>
  );
}
