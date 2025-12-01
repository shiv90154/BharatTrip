"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const PackageGallery = ({ images, title }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="relative h-64 md:h-80 w-full">
        <motion.img
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={images[currentImage]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image Thumbnails */}
      <div className="flex gap-2 p-3 overflow-x-auto">
        {images.map((img, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentImage(index)}
            className="flex-shrink-0"
          >
            <img
              src={img}
              alt={`${title} ${index + 1}`}
              className={`w-16 h-12 object-cover rounded-lg transition-all ${
                currentImage === index
                  ? "ring-2 ring-rose-600"
                  : "opacity-60 hover:opacity-100"
              }`}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default PackageGallery;