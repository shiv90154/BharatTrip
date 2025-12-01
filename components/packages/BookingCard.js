"use client";

import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Phone } from "lucide-react";

const BookingCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm sticky top-24"
    >
      <h2 className="text-base font-semibold mb-3 text-gray-800">Book This Package</h2>

      <div className="mb-3">
        <span className="text-xl font-bold text-rose-600">
          ₹{data.price.toLocaleString()}
        </span>
        <span className="text-gray-600 text-xs ml-1">per person</span>
      </div>

      <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-lg font-semibold mb-2 transition-colors text-sm">
        Book Now
      </button>

      <button className="w-full border border-green-500 text-green-600 hover:bg-green-50 py-2 rounded-lg font-semibold mb-2 transition-colors flex items-center justify-center gap-1 text-sm">
        <MessageCircle size={16} />
        Chat on WhatsApp
      </button>

      <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-1 text-sm">
        <Phone size={16} />
        Call for Inquiry
      </button>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <h3 className="font-semibold mb-2 text-gray-800 text-sm">What's Included</h3>
        <div className="space-y-1">
          {data.inclusions.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
              <span className="text-xs text-gray-600">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="font-semibold mt-3 mb-2 text-gray-800 text-sm">Not Included</h3>
        <div className="space-y-1">
          {data.exclusions.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-gray-400 flex-shrink-0" />
              <span className="text-xs text-gray-400">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BookingCard;