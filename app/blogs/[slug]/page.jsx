"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const blogDetails = {
  "best-places-india": {
    title: "10 Best Places to Visit in India - Ultimate Travel Guide 2024",
    slug: "best-places-india",
    excerpt: "Discover India's most breathtaking destinations—from snow-capped Himalayas to tropical beaches of Goa and cultural wonders of Rajasthan.",
    icon: "🏔️",
    author: "Travel Explorer",
    authorBio: "Seasoned traveler with 10+ years exploring India's hidden gems and top destinations. Passionate about sustainable tourism.",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    category: "destinations",
    tags: ["india", "travel", "guide", "himalayas", "beaches", "culture"],
    views: "2.4K",
    likes: "156",
    comments: "23",
    rating: "4.8",
    featured: true,
    content: `
      <h2>Introduction to India's Diversity</h2>
      <p>India is a land of incredible diversity, offering everything from snow-capped mountains to tropical beaches, ancient temples to modern cities. This guide covers the 10 must-visit destinations for 2024.</p>

      <h2>1. Kashmir - Paradise on Earth</h2>
      <p>Nestled in the Himalayas, Kashmir offers stunning landscapes with Dal Lake, Mughal gardens, and picturesque snow-capped mountains. Don't miss Shikara rides and staying in houseboats.</p>

      <h2>2. Goa - Tropical Beach Paradise</h2>
      <p>Famous for its golden beaches, Portuguese heritage, and vibrant nightlife. Explore North Goa for parties and South Goa for serene beaches.</p>

      <h2>3. Rajasthan - Royal Heritage</h2>
      <p>Experience royal palaces, desert safaris, and colorful culture in cities like Jaipur, Udaipur, and Jodhpur.</p>

      <h2>Essential Travel Tips</h2>
      <ul>
        <li><strong>Best Time to Visit:</strong> October to March for most regions</li>
        <li><strong>Transportation:</strong> Use trains for long distances, local transport for cities</li>
        <li><strong>Accommodation:</strong> Book in advance during peak season</li>
        <li><strong>Food:</strong> Try local street food but be cautious with water</li>
      </ul>

      <h2>Budget Planning</h2>
      <p>India can be traveled on various budgets. Budget travelers can manage with ₹1000-2000 per day, while luxury travel can cost ₹5000+ per day.</p>

      <h2>Conclusion</h2>
      <p>India offers endless opportunities for exploration and discovery. Whether you seek adventure, relaxation, or cultural immersion, you'll find it here.</p>
    `,
    relatedBlogs: ["goa-guide", "budget-india", "rajasthan-heritage"],
  },
  "goa-guide": {
    title: "Goa Travel Guide: Beaches, Nightlife & Portuguese Culture",
    slug: "goa-guide",
    excerpt: "Everything you need to know about planning the perfect Goa vacation - from stunning beaches to Portuguese heritage and delicious cuisine.",
    icon: "🏖️",
    author: "Beach Lover",
    authorBio: "Travel writer living in Goa for 6+ years. Expert in Goan culture and hidden beach spots.",
    date: "Mar 12, 2024",
    readTime: "6 min read",
    category: "guides",
    tags: ["goa", "beach", "nightlife", "portuguese", "food"],
    views: "1.8K",
    likes: "98",
    comments: "15",
    rating: "4.6",
    featured: true,
    content: `
      <h2>Welcome to Goa - India's Beach Paradise</h2>
      <p>Goa is more than just beaches - it's a unique blend of Indian and Portuguese cultures, offering something for every traveler.</p>

      <h2>Best Beaches in Goa</h2>
      <ul>
        <li><strong>Calangute Beach:</strong> Most popular, great for water sports</li>
        <li><strong>Anjuna Beach:</strong> Famous for Wednesday flea market</li>
        <li><strong>Palolem Beach:</strong> Serene and picturesque</li>
        <li><strong>Agonda Beach:</strong> Quiet and peaceful</li>
      </ul>

      <h2>Portuguese Heritage</h2>
      <p>Explore Old Goa's churches, Fontainhas Latin Quarter, and Portuguese-style architecture throughout the state.</p>

      <h2>Goan Cuisine Must-Tries</h2>
      <p>Don't miss Fish Curry Rice, Pork Vindaloo, Goan Sausages, Bebinca dessert, and Feni - the local liquor.</p>

      <h2>Nightlife & Entertainment</h2>
      <p>From beach shacks to nightclubs, Goa offers vibrant nightlife. North Goa is more party-oriented while South Goa is relaxed.</p>
    `,
    relatedBlogs: ["best-places-india", "indian-street-food"],
  },
  "budget-india": {
    title: "Budget Travel Tips: How to Explore India for Under ₹1000/Day",
    slug: "budget-india",
    excerpt: "Smart money-saving hacks for budget travelers - accommodation, transport, food, and activities across India.",
    icon: "💰",
    author: "Budget Guru",
    authorBio: "Backpacked across India for 2 years on a tight budget. Expert in affordable travel solutions.",
    date: "Mar 10, 2024",
    readTime: "5 min read",
    category: "tips",
    tags: ["budget", "hacks", "backpacking", "savings", "accommodation"],
    views: "3.1K",
    likes: "210",
    comments: "30",
    rating: "4.9",
    featured: true,
    content: `
      <h2>Budget Travel in India - It's Possible!</h2>
      <p>India is one of the most budget-friendly destinations in the world. Here's how to make your money last longer.</p>

      <h2>Accommodation Hacks</h2>
      <ul>
        <li>Hostels: ₹300-500 per night</li>
        <li>Guesthouses: ₹500-800 per night</li>
        <li>Homestays: Great for authentic experience</li>
        <li>Dormitories in religious places: Often free or very cheap</li>
      </ul>

      <h2>Transportation Savings</h2>
      <p>Use overnight trains and buses to save on accommodation. Local transport is incredibly affordable.</p>

      <h2>Food & Dining</h2>
      <p>Street food and local restaurants offer delicious meals for ₹50-150. Avoid touristy restaurants.</p>

      <h2>Free & Cheap Activities</h2>
      <p>Many temples, parks, and beaches are free. Walking tours and local markets cost nothing to explore.</p>
    `,
    relatedBlogs: ["best-places-india", "goa-guide"],
  }
};

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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
    }, 600);
  }, [slug]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800">Loading Article...</h2>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white pt-20 flex flex-col items-center justify-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Article Not Found</h2>
        <Link
          href="/blogs"
          className="text-rose-600 font-semibold hover:text-rose-700 transition-colors"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2 text-sm text-gray-500 mb-8"
        >
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/blogs" className="hover:text-rose-600 transition-colors">Blogs</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium truncate">{blog.title}</span>
        </motion.nav>

        {/* BLOG HERO CARD */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 mb-8"
        >
          {/* Hero Icon Image */}
          <div className="bg-gradient-to-br from-rose-100 to-orange-100 h-40 sm:h-48 flex justify-center items-center text-5xl sm:text-6xl">
            {blog.icon}
          </div>

          {/* BLOG CONTENT HEADER */}
          <div className="p-6">
            {/* Meta */}
            <div className="flex flex-wrap justify-between text-sm text-gray-600 mb-4 gap-2">
              <div className="flex items-center space-x-3">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-rose-600">
                  ⭐ {blog.rating}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span>👁 {blog.views}</span>
                <span>❤️ {blog.likes}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
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
                  className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium border border-gray-100"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-3 border-t border-gray-100 pt-6 flex-wrap">
              {/* Like */}
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition text-sm ${
                  isLiked
                    ? "bg-rose-50 text-rose-700 border border-rose-200"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                ❤️ {isLiked ? 'Liked' : 'Like'}
              </button>

              {/* Bookmark */}
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition text-sm ${
                  isBookmarked
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {isBookmarked ? "🔖 Saved" : "📑 Save"}
              </button>

              {/* SHARE */}
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="px-4 py-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 flex items-center gap-2 text-sm border border-gray-200"
                >
                  📤 Share
                </button>

                <AnimatePresence>
                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute mt-2 bg-white border border-gray-200 shadow-lg rounded-xl p-2 z-20 min-w-32"
                    >
                      <button
                        onClick={() => share("twitter")}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm"
                      >
                        🐦 Twitter
                      </button>
                      <button
                        onClick={() => share("facebook")}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm"
                      >
                        📘 Facebook
                      </button>
                      <button
                        onClick={() => share("linkedin")}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm"
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
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl mt-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex justify-center items-center text-white font-bold">
                {blog.author[0]}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{blog.author}</h4>
                <p className="text-sm text-gray-600 mt-1">{blog.authorBio}</p>
              </div>
            </motion.div>
          </div>
        </motion.article>

        {/* MAIN CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-8 prose prose-lg max-w-none border border-gray-100"
        >
          <div 
            className="prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed 
                       prose-ul:text-gray-600 prose-li:leading-relaxed prose-strong:text-gray-900
                       prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                       prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                       prose-ul:mt-4 prose-ul:mb-6 prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </motion.div>

        {/* RELATED BLOGS */}
        {relatedBlogs.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-8 border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-gray-900">📚 Related Articles</h3>

            <div className="grid md:grid-cols-2 gap-4">
              {relatedBlogs.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blogs/${r.slug}`}
                  className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-all duration-300 flex gap-4 border border-gray-100"
                >
                  <div className="text-2xl flex-shrink-0">{r.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                      {r.title}
                    </h4>
                    <div className="text-xs text-gray-600 flex items-center gap-2">
                      ⭐ {r.rating} • {r.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* NEWSLETTER CTA */}
        <div className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl p-6 sm:p-8 text-center text-white shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Enjoyed this article?
          </h3>
          <p className="text-rose-100 mb-6 text-sm">
            Subscribe for weekly travel insights directly in your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl text-gray-900 flex-1 text-sm placeholder-gray-500 focus:ring-2 focus:ring-white/20 outline-none"
            />
            <button className="bg-white text-rose-600 px-6 py-3 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}