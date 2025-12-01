"use client";

import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-16 bg-linear-to-r from-rose-600 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Get Exclusive Travel Deals
          </h2>
          <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
            Subscribe to receive special offers, destination inspiration, and early access to new experiences
          </p>

          {/* Newsletter Form */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-rose-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
            />
            <button className="px-6 py-3 bg-white text-rose-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm">
              Subscribe
            </button>
          </div>
          
          <p className="text-rose-200 text-xs mt-3">
            No spam, unsubscribe at any time
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;