"use client";

import {
  Plane, Bus, Car, Train, Ship, Utensils, Hotel, Map,
  Compass, Camera, Heart, Users, Mountain, Calendar,
  Headphones, ShieldCheck, Star, Sparkles, CheckCircle,
  Globe, Award, Clock, Zap, ArrowRight, MapPin, Coffee,
  Wifi, Luggage, CreditCard, Phone, MessageCircle
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function WeProvidePage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Transport Booking",
      subtitle: "Seamless travel across all transport modes",
      description: "From flights to cruises, we handle all your transportation needs.",
      icon: <Plane className="text-[#FF385C]" size={26} />,
      gradient: "from-blue-500 to-cyan-500",
      items: [
        { icon: <Plane size={18} className="text-blue-500" />, text: "Flight Booking" },
        { icon: <Bus size={18} className="text-green-500" />, text: "Bus Booking" },
        { icon: <Car size={18} className="text-purple-500" />, text: "Taxi & Cab Service" },
        { icon: <Train size={18} className="text-orange-500" />, text: "Train Reservations" },
        { icon: <Ship size={18} className="text-teal-500" />, text: "Cruise Booking" },
      ],
      features: ["Instant Confirmation", "Free Cancellation", "24/7 Support"]
    },
    {
      title: "Trip Planning",
      subtitle: "Your journey, perfectly crafted",
      description: "Personalized itineraries built for your budget & comfort.",
      icon: <Map className="text-[#FF385C]" size={26} />,
      gradient: "from-green-500 to-emerald-500",
      items: [
        { icon: <Hotel size={18} className="text-rose-500" />, text: "Hotel & Resorts" },
        { icon: <Utensils size={18} className="text-amber-500" />, text: "Meal Plans" },
        { icon: <Calendar size={18} className="text-blue-500" />, text: "Day-by-Day Plans" },
        { icon: <MapPin size={18} className="text-green-500" />, text: "Sightseeing" },
        { icon: <Camera size={18} className="text-purple-500" />, text: "Photo Tours" },
      ],
      features: ["Local Experiences", "Flexible Planning", "Real-time Updates"]
    },
    {
      title: "Travel Assistance",
      subtitle: "Support when you need it most",
      description: "Dedicated support team available anytime during your trip.",
      icon: <Headphones className="text-[#FF385C]" size={26} />,
      gradient: "from-purple-500 to-pink-500",
      items: [
        { icon: <Headphones size={18} className="text-blue-500" />, text: "24/7 Support" },
        { icon: <ShieldCheck size={18} className="text-green-500" />, text: "Safety Guidance" },
        { icon: <Compass size={18} className="text-amber-500" />, text: "Local Guides" },
        { icon: <Users size={18} className="text-purple-500" />, text: "Personal Manager" },
        { icon: <Heart size={18} className="text-rose-500" />, text: "Customer Care" },
      ],
      features: ["Emergency Help", "Multi-language", "Travel Insurance"]
    },
    {
      title: "Special Experiences",
      subtitle: "Memories that last forever",
      description: "Adventure, luxury and custom travel experiences for all.",
      icon: <Sparkles className="text-[#FF385C]" size={26} />,
      gradient: "from-orange-500 to-red-500",
      items: [
        { icon: <Mountain size={18} className="text-emerald-500" />, text: "Adventure Trips" },
        { icon: <Heart size={18} className="text-rose-500" />, text: "Honeymoon" },
        { icon: <Users size={18} className="text-blue-500" />, text: "Family Trips" },
        { icon: <Star size={18} className="text-yellow-500" />, text: "Luxury Stays" },
        { icon: <Globe size={18} className="text-cyan-500" />, text: "Custom Experiences" },
      ],
      features: ["Premium Services", "Local Immersion", "Flexible Options"]
    },
  ];

  const quickFeatures = [
    { icon: <ShieldCheck size={18} />, text: "Verified Stays" },
    { icon: <CreditCard size={18} />, text: "Secure Payment" },
    { icon: <Zap size={18} />, text: "Instant Booking" },
    { icon: <Wifi size={18} />, text: "Free Travel Wi-Fi" },
    { icon: <Luggage size={18} />, text: "Luggage Help" },
    { icon: <Coffee size={18} />, text: "Complimentary Services" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#FF385C] to-[#FF5A5F] text-white py-16 px-4 text-center">
        <span className="text-sm bg-white/20 px-4 py-1 rounded-full inline-flex gap-2 items-center mb-4">
          <Sparkles size={14} />
          Trusted by 50,000+ Travelers
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Everything You Need
          <span className="block text-yellow-100">For Perfect Travel</span>
        </h1>

        <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto">
          Complete travel solutions with seamless booking and personalized experiences.
        </p>

        <div className="flex gap-4 mt-6 justify-center flex-wrap">
          <Link href="/contact">
            <button className="bg-white text-[#FF385C] px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-md">
              <MessageCircle size={18} />
              Plan Your Trip
            </button>
          </Link>
          <Link href="tel:+918894322900">
            <button className="border border-white px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-2">
              <Phone size={18} />
              Call Expert
            </button>
          </Link>
        </div>
      </section>

      {/* QUICK FEATURES */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
          {quickFeatures.map((f, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border shadow-sm text-center">
              <div className="p-2 bg-[#FF385C]/10 rounded-lg inline-block mb-2">
                {f.icon}
              </div>
              <p className="text-sm font-medium">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          Complete Travel Solutions
        </h2>
        <p className="text-gray-600 text-center text-sm sm:text-base max-w-2xl mx-auto mb-10">
          From booking to experience, we handle every detail with care.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white rounded-3xl shadow-md border hover:shadow-xl transition-all"
            >
              {/* Header */}
              <div className={`p-6 text-white bg-gradient-to-r ${service.gradient} rounded-t-3xl`}>
                <div className="flex gap-3 items-center mb-3">
                  <div className="bg-white/20 p-2 rounded-xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm opacity-90">{service.description}</p>
              </div>

              {/* Features */}
              <div className="p-4 flex flex-wrap gap-2 border-b">
                {service.features.map((f, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-gray-100 rounded-full flex items-center gap-1">
                    <CheckCircle size={12} className="text-green-500" />
                    {f}
                  </span>
                ))}
              </div>

              {/* Items */}
              <div className="p-6 space-y-3">
                {service.items.map((item, i2) => (
                  <div key={i2} className="flex gap-3 items-center p-2 rounded-lg hover:bg-gray-50">
                    <div className="p-2 bg-gray-100 rounded-lg">{item.icon}</div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {hoveredCard === index && (
                <div className="p-4 text-right">
                  <Link href="/contact">
                    <button className="bg-[#FF385C] text-white px-5 py-2 rounded-xl text-sm font-medium flex items-center gap-2 ml-auto">
                      Get Started
                      <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#FF385C] to-[#FF5A5F] text-white py-14 px-4 text-center">
        <span className="text-sm bg-white/20 px-4 py-1 rounded-full inline-flex gap-2 items-center">
          <Zap size={14} />
          Limited Time Offers
        </span>

        <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-2">
          Ready to Create
          <span className="block text-yellow-100">Unforgettable Memories?</span>
        </h2>

        <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto mb-6">
          Get personalized recommendations & exclusive deals from our experts.
        </p>

        <Link href="/contact">
          <button className="bg-white text-[#FF385C] px-7 py-3 rounded-xl font-semibold shadow-lg flex items-center gap-2 mx-auto">
            <MessageCircle size={18} />
            Start Planning
          </button>
        </Link>

        <p className="text-white/70 text-xs mt-4 flex justify-center items-center gap-2">
          <Clock size={14} />
          Avg response time: 15 minutes
        </p>
      </section>
    </div>
  );
}
