"use client";

import { motion } from "framer-motion";
import { Award, Shield, Star, Clock } from "lucide-react";

const TrustBadges = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-4 shadow-sm border border-rose-100"
    >
      <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">
        Why Book With BharatTrip?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { icon: <Award className="w-4 h-4" />, title: "Best Price", desc: "Guaranteed lowest prices" },
          { icon: <Shield className="w-4 h-4" />, title: "Secure Booking", desc: "SSL encrypted payments" },
          { icon: <Star className="w-4 h-4" />, title: "4.8/5 Rating", desc: "From 5000+ travelers" },
          { icon: <Clock className="w-4 h-4" />, title: "24/7 Support", desc: "Always here to help" }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-100"
          >
            <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 mx-auto mb-2">
              {item.icon}
            </div>
            <h3 className="font-medium text-gray-800 mb-1 text-xs">{item.title}</h3>
            <p className="text-xs text-gray-600 leading-tight">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TrustBadges;