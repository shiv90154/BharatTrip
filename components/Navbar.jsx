"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// Clean SVG icons without installing any library
const Icon = {
  home: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 9l9-6 9 6v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H9v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    </svg>
  ),
  explore: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 6-3 8-8 3 3-8z"/>
    </svg>
  ),
  package: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 7l9 4 9-4M3 7l9-4 9 4M3 7v10l9 4 9-4V7"/>
    </svg>
  ),
  blog: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 19h16M4 5h16H4zm4 7h8"/>
    </svg>
  ),
  contact: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  user: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm6 8a6 6 0 0 0-12 0"/>
    </svg>
  ),
  menu: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  ),
  close: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M6 6l12 12M6 18L18 6"/>
    </svg>
  )
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", href: "/", label: "Home", icon: Icon.home },
    { id: "packages", href: "/packages", label: "Packages", icon: Icon.package },
    { id: "destinations", href: "/destinations", label: "Explore", icon: Icon.explore },
    { id: "blogs", href: "/blogs", label: "Blogs", icon: Icon.blog },
    { id: "contact", href: "/contact", label: "Contact", icon: Icon.contact }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentTab = navItems.find(
      (item) =>
        item.href === currentPath ||
        currentPath.startsWith(item.href + "/")
    );
    if (currentTab) setActiveTab(currentTab.id);
  }, []);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => setActiveTab("home")}
          >
            <div className="text-3xl font-extrabold text-blue-600">BharatTrip</div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  activeTab === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow">
              Book Now
            </button>

            <button className="p-2 rounded-full bg-gray-200">
              {Icon.user}
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-3 bg-gray-200 rounded-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? Icon.close : Icon.menu}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 z-40 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-xl z-50 transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col space-y-6 pt-24">

          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-4 text-lg px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                setActiveTab(item.id);
                setOpen(false);
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
            Book Your Trip
          </button>
        </div>
      </div>

      {/* SPACING FOR FIXED NAV */}
      <div className="h-20"></div>
    </>
  );
}
