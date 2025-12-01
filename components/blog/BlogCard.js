"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCard({ data, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Image / Icon */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-rose-100 via-orange-100 to-amber-100 flex items-center justify-center relative">
          <span className="text-5xl z-10">{data.icon}</span>
          
          {/* Featured Badge */}
          {data.featured && (
            <span className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
              ⭐ Featured
            </span>
          )}
        </div>

        {/* Category */}
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-white/20">
          {data.category}
        </span>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Hover Read Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
            <span className="text-white font-semibold text-sm">Read Article →</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-medium">{data.date}</span>
            <span>•</span>
            <span>{data.readTime}</span>
          </div>
          <span className="flex items-center gap-1 bg-rose-50 text-rose-700 px-2 py-1 rounded-lg text-xs">
            ⭐ {data.rating}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blogs/${data.slug}`}>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-rose-600 transition-colors duration-300 line-clamp-2 leading-tight">
            {data.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
          {data.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {data.author.charAt(0)}
          </span>
          <span className="text-sm text-gray-600">{data.author}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-50 px-2 py-1 rounded-lg text-xs text-gray-600 font-medium border border-gray-100 hover:bg-rose-50 hover:text-rose-700 cursor-pointer transition-all duration-300"
            >
              #{tag}
            </span>
          ))}
          {data.tags.length > 2 && (
            <span className="bg-gray-50 px-2 py-1 rounded-lg text-xs text-gray-500 font-medium">
              +{data.tags.length - 2}
            </span>
          )}
        </div>

        {/* Bottom Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs">
              👁 {data.views}
            </span>
            <span className="flex items-center gap-1 text-xs">
              ❤️ {data.likes}
            </span>
          </div>
          <Link
            href={`/blogs/${data.slug}`}
            className="text-rose-600 font-medium text-sm hover:text-rose-700 transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}