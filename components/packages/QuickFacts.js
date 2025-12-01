"use client";

import { motion } from "framer-motion";
import { Hotel, Utensils, Car, Camera, Shield, Award } from "lucide-react";

const QuickFacts = ({ quickFacts }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-4 border border-gray-100"
    >
      <h3 className="font-semibold mb-3 text-gray-800 text-sm">Quick Facts</h3>
      <div className="space-y-2">
        {quickFacts.map((fact, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="text-rose-600">
              {fact.icon}
            </div>
            <span className="text-xs text-gray-600">{fact.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickFacts;