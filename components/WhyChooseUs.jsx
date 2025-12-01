"use client";

import { motion } from "framer-motion";
import { Award, Shield, Clock, Globe } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    { 
      icon: <Award className="w-5 h-5" />,
      title: "Award Winning", 
      desc: "Recognized as India's Best Travel Agency 2023",
      color: "from-yellow-50 to-amber-50",
      border: "border-yellow-200"
    },
    { 
      icon: <Shield className="w-5 h-5" />,
      title: "Safe & Secure", 
      desc: "24/7 emergency support and verified partners",
      color: "from-green-50 to-emerald-50",
      border: "border-green-200"
    },
    { 
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Support", 
      desc: "Round-the-clock customer care in multiple languages",
      color: "from-blue-50 to-cyan-50",
      border: "border-blue-200"
    },
    { 
      icon: <Globe className="w-5 h-5" />,
      title: "500+ Destinations", 
      desc: "Wide network across incredible India",
      color: "from-purple-50 to-violet-50",
      border: "border-purple-200"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Travelers" },
    { number: "500+", label: "Destinations" },
    { number: "24/7", label: "Support" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award size={14} />
            Why Travel With Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose BharatTrip?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to making your Indian travel experience unforgettable with 
            premium services, local expertise, and unmatched hospitality.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-4 rounded-xl bg-gradient-to-br ${item.color} border ${item.border} shadow-sm hover:shadow-md transition-all`}
            >
              <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3 text-rose-600">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;