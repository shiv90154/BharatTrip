"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert("Thank you for subscribing!");
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" }
  ];

  const popularDestinations = [
    "Goa Beaches",
    "Himachal Pradesh",
    "Kerala Backwaters",
    "Rajasthan Heritage",
    "Ladakh Adventure"
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" }
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">BT</span>
              </div>
              <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BharatTrip
              </h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover the incredible diversity of India with our curated travel experiences. 
              From Himalayan adventures to coastal retreats, we bring you closer to Indias soul.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-400"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Popular Destinations
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-green-400"></span>
            </h4>
            <ul className="space-y-3">
              {popularDestinations.map((destination) => (
                <li key={destination}>
                  <span className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group cursor-pointer">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                    {destination}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Stay Updated
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-purple-400"></span>
            </h4>
            
            {/* Contact Info */}
            <div className="mb-6 space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Kehloor Bhawan Shakti Vihar<br />
                    Panthghati, Pin - 171009
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <div className="space-y-1">
                  <a href="tel:+918894322900" className="text-gray-300 hover:text-white transition-colors duration-200 block text-sm">
                    +91-8894322900
                  </a>
                  <a href="tel:+918894323900" className="text-gray-300 hover:text-white transition-colors duration-200 block text-sm">
                    +91-8894323900
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">✉️</span>
                <a href="mailto:info@bharattrip.net" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  info@bharattrip.net
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 BharatTrip. All Rights Reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/918894322900"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce"
          aria-label="Chat on WhatsApp"
        >
          <span className="text-xl">💬</span>
        </a>
      </div>
    </footer>
  );
}