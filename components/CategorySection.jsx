"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const CategorySection = ({ category, setCategory }) => {
  const router = useRouter();

  const categories = [
    { value: "all", label: "All", count: 6, img: "/category/All.avif" },
    { value: "beach", label: "Beach", count: 2, img: "/category/Beach.avif" },
    { value: "mountain", label: "Mountain", count: 2, img: "/category/Mountain.avif" },
    { value: "cultural", label: "Cultural", count: 3, img: "/category/Cultural.avif" },
    { value: "adventure", label: "Adventure", count: 1, img: "/category/Adventure.avif" },
    { value: "spiritual", label: "Spiritual", count: 1, img: "/category/Spiritual.avif" },
  ];

  const handleFilter = (value) => {
    setCategory(value);
    router.push(`/packages?category=${value}`);
  };

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore by <span className="text-rose-600">Category</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover India's diverse landscapes and experiences through curated themes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleFilter(cat.value)}
              className={`rounded-xl overflow-hidden border shadow-sm transition-all cursor-pointer ${
                category === cat.value
                  ? "border-rose-600 ring-2 ring-rose-500"
                  : "border-gray-200 hover:shadow-md"
              }`}
            >
              {/* Image */}
              <div className="w-full h-24 md:h-28 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-all"
                />
              </div>

              {/* Content */}
              <div
                className={`p-2 text-center ${
                  category === cat.value ? "bg-rose-50" : "bg-white"
                }`}
              >
                <h3 className="font-semibold text-sm text-gray-800">
                  {cat.label}
                </h3>
                <p className="text-xs text-gray-500">{cat.count} tours</p>
              </div>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
