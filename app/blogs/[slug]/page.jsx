"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------------------------
   SAMPLE BLOG DATA (API SIMULATION)
-------------------------------------- */

const blogDetails = {
  "best-places-india": {
    title: "10 Best Places to Visit in India - Ultimate Travel Guide 2024",
    slug: "best-places-india",
    excerpt:
      "Discover India's most breathtaking destinations—from snow-capped Himalayas to tropical beaches.",
    icon: "🏔️",
    author: "Travel Explorer",
    authorBio:
      "Seasoned traveler with 10+ years exploring India's hidden gems and top destinations.",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    category: "destinations",
    tags: ["india", "travel", "guide", "himalayas", "beaches"],
    views: "2.4K",
    likes: "156",
    comments: "23",
    rating: "4.8",
    featured: true,
    content: `
      <h2>Introduction</h2>
      <p>India is a land of incredible diversity...</p>

      <h2>1. Kashmir - Paradise on Earth</h2>
      <p>Kashmir offers Dal Lake, Mughal gardens, and picturesque snow mountains...</p>

      <h2>2. Goa - Beach Paradise</h2>
      <p>Goa offers stunning beaches, Portuguese heritage, and nightlife...</p>

      <h2>Travel Tips</h2>
      <ul>
        <li>Plan by season</li>
        <li>Try local cuisine</li>
        <li>Hire local guides</li>
      </ul>

      <h2>Conclusion</h2>
      <p>India has endless beauty—mountains, beaches, culture, spirituality.</p>
    `,
    relatedBlogs: ["goa-guide"],
  },

  "goa-guide": {
    title: "Goa Travel Guide: Beaches, Nightlife & Portuguese Culture",
    slug: "goa-guide",
    excerpt:
      "Everything you need to know about planning the perfect Goa vacation.",
    icon: "🏖️",
    author: "Beach Lover",
    authorBio: "Travel writer living in Goa for 6+ years. Beach addict.",
    date: "Jan 12, 2024",
    readTime: "6 min read",
    category: "guides",
    tags: ["goa", "beach", "nightlife", "heritage"],
    views: "1.8K",
    likes: "98",
    comments: "15",
    rating: "4.6",
    featured: true,
    content: `
      <h2>Welcome to Goa</h2>
      <p>Goa has the best beaches in India...</p>

      <h2>Best Beaches</h2>
      <ul>
        <li>Calangute Beach</li>
        <li>Anjuna Beach</li>
        <li>Palolem Beach</li>
      </ul>

      <h2>Goan Cuisine</h2>
      <p>Don't miss Vindaloo, Goan curry, Bebinca...</p>
    `,
    relatedBlogs: ["best-places-india"],
  },
};

/* -------------------------------------
        MAIN BLOG DETAIL PAGE
-------------------------------------- */

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Load blog
  useEffect(() => {
    setTimeout(() => {
      const b = blogDetails[slug];
      if (b) {
        setBlog(b);
        setRelatedBlogs(
          b.relatedBlogs
            .map((s) => blogDetails[s])
            .filter((e) => e !== undefined)
        );
      }
      setLoading(false);
    }, 700);
  }, [slug]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center text-xl font-semibold text-gray-700">
        Loading Blog...
      </div>
    );

  if (!blog)
    return (
      <div className="text-center py-40 text-gray-600">
        <h2 className="text-3xl font-bold mb-4">Blog Not Found</h2>
        <Link
          href="/blogs"
          className="text-blue-600 font-semibold underline"
        >
          Back to Blogs
        </Link>
      </div>
    );

  /* SHARE MENU HANDLER */
  const share = (platform) => {
    const url = window.location.href;
    const text = blog.title;

    const links = {
      twitter: `https://twitter.com/share?text=${text}&url=${url}`,
      facebook: `https://facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(links[platform], "_blank");
    setShowShareMenu(false);
  };

  /* -------------------------------------
            MAIN RETURN UI
  -------------------------------------- */

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2 text-sm text-gray-500 mb-6"
        >
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>›</span>
          <Link href="/blogs" className="hover:text-blue-600">Blogs</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">{blog.title}</span>
        </motion.nav>

        {/* BLOG HERO CARD */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Hero Icon Image */}
          <div className="bg-gradient-to-br from-blue-200 to-purple-200 h-60 flex justify-center items-center text-8xl">
            {blog.icon}
          </div>

          {/* BLOG CONTENT HEADER */}
          <div className="p-8">

            {/* Meta */}
            <div className="flex flex-wrap justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-4">
                <span>👤 {blog.author}</span>
                <span>•</span>
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-yellow-500">⭐ {blog.rating}</span>
                <span>👁 {blog.views}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {blog.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-4 border-y py-4">

              {/* Bookmark */}
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
                  isBookmarked
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {isBookmarked ? "🔖 Saved" : "📑 Save"}
              </button>

              {/* Like */}
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-2">
                ❤️ Like ({blog.likes})
              </button>

              {/* SHARE */}
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-2"
                >
                  📤 Share
                </button>

                <AnimatePresence>
                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute mt-2 bg-white border shadow-lg rounded-xl p-2 z-20"
                    >
                      <button
                        onClick={() => share("twitter")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
                      >
                        🐦 Twitter
                      </button>
                      <button
                        onClick={() => share("facebook")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
                      >
                        📘 Facebook
                      </button>
                      <button
                        onClick={() => share("linkedin")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
                      >
                        💼 LinkedIn
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* AUTHOR CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl mt-6"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex justify-center items-center text-white text-xl font-bold">
                {blog.author[0]}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{blog.author}</h4>
                <p className="text-sm text-gray-600">{blog.authorBio}</p>
              </div>
            </motion.div>
          </div>
        </motion.article>

        {/* MAIN CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12 prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* RELATED BLOGS */}
        {relatedBlogs.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">📚 Related Articles</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedBlogs.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blogs/${r.slug}`}
                  className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 hover:shadow-lg transition flex gap-4"
                >
                  <div className="text-3xl">{r.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {r.title}
                    </h4>
                    <div className="text-sm text-gray-600 flex items-center gap-2">
                      ⭐ {r.rating} • {r.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* NEWSLETTER CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Enjoyed this article?
          </h3>
          <p className="text-blue-100 mb-6">
            Subscribe for weekly travel insights directly in your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl text-gray-900 flex-1"
            />
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
