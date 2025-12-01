"use client";

import { motion } from "framer-motion";
import CareerForm from "@/components/forms/CareerForm";
import { BriefcaseIcon, HeartIcon, SparklesIcon } from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: BriefcaseIcon,
    title: "Flexible Opportunities",
    description: "Work with leading travel brands and creators"
  },
  {
    icon: HeartIcon,
    title: "Passionate Community",
    description: "Join a team that loves travel and innovation"
  },
  {
    icon: SparklesIcon,
    title: "Growth Focused",
    description: "Scale your business and personal brand"
  }
];

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <span className="text-2xl">🚀</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career & Collaboration Opportunities
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join Bharat Trip's growing ecosystem of travel enthusiasts, creators, and service providers.
            Let's build amazing travel experiences together.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Active Partners</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Destinations</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Travelers Served</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <CareerForm />
        </motion.div>
      </div>
    </div>
  );
}