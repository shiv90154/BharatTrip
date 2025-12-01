"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Itinerary = ({ itinerary }) => {
  // Full safety check – prevents all errors
  if (!Array.isArray(itinerary)) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-4 border border-gray-100"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-800">📅 Detailed Itinerary</h2>
        <p className="text-gray-500 text-sm">Itinerary not available.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-4 border border-gray-100"
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-800">📅 Detailed Itinerary</h2>
      <div className="space-y-4">
        {itinerary.map((day) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-semibold text-xs">
                {day.day}
              </div>
              <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
            </div>

            <div className="flex-1 pb-4">
              <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                {day.title}
              </h3>

              <p className="text-gray-600 text-xs mb-2 leading-relaxed">
                {day.details}
              </p>

              {/* SAFE ACTIVITIES — no more errors */}
              <div className="flex flex-wrap gap-1">
                {(day.activities || []).map((activity, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs border border-gray-200"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Itinerary;
