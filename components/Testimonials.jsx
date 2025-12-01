"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 4.9,
      comment: "Amazing experience! The Kerala backwaters tour was breathtaking. The houseboat stay and local food were exceptional.",
      package: "Kerala Backwaters",
      avatar: "PS",
      travelDate: "March 2024"
    },
    {
      name: "Rahul Verma",
      location: "Delhi",
      rating: 4.8,
      comment: "Ladakh bike trip was the adventure of a lifetime! Well organized, great guides, and stunning landscapes.",
      package: "Ladakh Adventure",
      avatar: "RV",
      travelDate: "June 2024"
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad",
      rating: 4.7,
      comment: "Rajasthan heritage tour exceeded expectations. The palace stays and cultural shows were unforgettable.",
      package: "Rajasthan Cultural",
      avatar: "AP",
      travelDate: "January 2024"
    }
  ];

  return (
    <section className="py-16 bg-linear-to-br from-gray-50 to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Travelers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from people who explored India with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className={index < Math.floor(t.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}
                  />
                ))}
                <span className="text-sm font-medium text-gray-700 ml-2">{t.rating}</span>
              </div>

              {/* Comment */}
              <p className="text-gray-600 mb-4 leading-relaxed">"{t.comment}"</p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-r from-rose-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  {t.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.location}</p>
                  <p className="text-gray-400 text-xs">{t.travelDate}</p>
                </div>
              </div>

              {/* Package Tag */}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <span className="text-xs px-2 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-full">
                  {t.package}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;