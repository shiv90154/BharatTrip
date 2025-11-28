"use client";

import { motion } from "framer-motion";
import PackageCard from "@/components/PackageCard";

export default function Packages() {

  const packages = [
    { 
      title: "Kashmir 5N/6D", 
      image: "/kashmir.jpg", 
      slug: "kashmir-5n6d", 
      duration: "5N/6D", 
      price: 12999,
      originalPrice: 15999,
      discount: 19,
      rating: 4.8,
      reviews: 124,
      location: "Srinagar, Gulmarg, Pahalgam",
      highlights: ["Houseboat Stay", "Skiing", "Shikara Ride"],
      featured: true
    },
    { 
      title: "Goa Beach Tour", 
      image: "/goa.jpg", 
      slug: "goa-tour", 
      duration: "3N/4D", 
      price: 8999,
      originalPrice: 11999,
      discount: 25,
      rating: 4.5,
      reviews: 89,
      location: "North Goa, South Goa",
      highlights: ["Beach Parties", "Water Sports", "Portuguese Heritage"],
      featured: false
    },
    { 
      title: "Himachal Adventure", 
      image: "/himachal.jpg", 
      slug: "himachal-adventure", 
      duration: "6N/7D", 
      price: 14999,
      originalPrice: 18999,
      discount: 21,
      rating: 4.9,
      reviews: 156,
      location: "Manali, Kasol, Spiti Valley",
      highlights: ["Trekking", "Camping", "Mountain Biking"],
      featured: true
    },
    { 
      title: "Kerala Backwaters", 
      image: "/kerala.jpg", 
      slug: "kerala-backwaters", 
      duration: "4N/5D", 
      price: 10999,
      originalPrice: 13999,
      discount: 21,
      rating: 4.7,
      reviews: 203,
      location: "Alleppey, Munnar, Kochi",
      highlights: ["Houseboat", "Ayurveda", "Tea Plantations"],
      featured: false
    },
    { 
      title: "Rajasthan Cultural", 
      image: "/rajasthan.jpg", 
      slug: "rajasthan-cultural", 
      duration: "7N/8D", 
      price: 17999,
      originalPrice: 21999,
      discount: 18,
      rating: 4.6,
      reviews: 178,
      location: "Jaipur, Udaipur, Jodhpur",
      highlights: ["Palace Stay", "Camel Safari", "Folk Dance"],
      featured: true
    },
    { 
      title: "Ladakh Road Trip", 
      image: "/ladakh.jpg", 
      slug: "ladakh-roadtrip", 
      duration: "8N/9D", 
      price: 21999,
      originalPrice: 25999,
      discount: 15,
      rating: 4.9,
      reviews: 267,
      location: "Leh, Nubra Valley, Pangong",
      highlights: ["Bike Trip", "High Altitude Lakes", "Monasteries"],
      featured: true
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm">
            Explore Destinations
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Discover Amazing Packages
          </h1>

          <p className="max-w-xl mx-auto text-gray-600 text-lg mt-3">
            Handpicked experiences with adventure, culture and relaxation.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PackageCard data={pkg} />
            </motion.div>
          ))}
        </div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 p-10 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-2xl shadow-lg text-center backdrop-blur"
        >
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Packages?</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { text: "Best Price Guarantee", icon: "⭐" },
              { text: "Verified Stays", icon: "📍" },
              { text: "Flexible Dates", icon: "⏱️" },
              { text: "Easy Cancellation", icon: "🏷️" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-4 rounded-xl bg-white shadow text-center"
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="mt-2 font-semibold text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
