"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Sample detailed blog data
const blogDetails = {
  "best-places-india": {
    title: "10 Best Places to Visit in India - Ultimate Travel Guide 2024",
    slug: "best-places-india",
    excerpt: "Discover the most breathtaking destinations across India, from the snow-capped Himalayas to the tropical beaches of Goa.",
    icon: "🏔️",
    author: "Travel Explorer",
    authorBio: "Seasoned traveler with 10+ years exploring India's hidden gems and popular destinations.",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    category: "destinations",
    tags: ["india", "travel", "destinations", "guide", "himalayas", "beaches"],
    views: "2.4K",
    likes: "156",
    comments: "23",
    rating: "4.8",
    featured: true,
    content: `
      <h2>Introduction</h2>
      <p>India, with its incredible diversity of landscapes, cultures, and experiences, offers something for every type of traveler. From the snow-capped peaks of the Himalayas to the sun-kissed beaches of the south, this comprehensive guide covers the 10 must-visit destinations in India for 2024.</p>

      <h2>1. Kashmir - Paradise on Earth</h2>
      <p>Nestled in the Himalayan mountains, Kashmir is often called "Paradise on Earth" for good reason. The stunning Dal Lake, Mughal gardens, and snow-covered peaks create a magical atmosphere that's hard to match.</p>
      <p><strong>Best Time to Visit:</strong> March to October</p>
      <p><strong>Must-Do Activities:</strong> Shikara ride on Dal Lake, visit Gulmarg for skiing, explore Mughal gardens</p>

      <h2>2. Goa - Beach Paradise</h2>
      <p>Goa's pristine beaches, Portuguese heritage, and vibrant nightlife make it India's ultimate coastal destination. Whether you're looking for relaxation or adventure, Goa has it all.</p>
      <p><strong>Best Time to Visit:</strong> November to February</p>
      <p><strong>Must-Do Activities:</strong> Beach hopping, water sports, explore Old Goa churches</p>

      <h2>3. Kerala - God's Own Country</h2>
      <p>Kerala's serene backwaters, lush tea plantations, and rich cultural heritage make it a tropical paradise. The houseboat stays in Alleppey are an experience of a lifetime.</p>
      <p><strong>Best Time to Visit:</strong> September to March</p>
      <p><strong>Must-Do Activities:</strong> Houseboat cruise, tea plantation tour, Ayurvedic treatments</p>

      <h2>4. Rajasthan - Land of Kings</h2>
      <p>Experience royal heritage in Rajasthan's majestic palaces, desert forts, and vibrant cities. The state's rich history and colorful culture will leave you mesmerized.</p>

      <h2>5. Varanasi - Spiritual Capital</h2>
      <p>As one of the world's oldest living cities, Varanasi offers a profound spiritual experience along the sacred Ganges River.</p>

      <h2>Travel Tips for India</h2>
      <ul>
        <li>Plan according to seasons - India has diverse climate zones</li>
        <li>Book accommodations in advance during peak seasons</li>
        <li>Try local cuisine but be mindful of street food hygiene</li>
        <li>Respect local customs and dress modestly at religious sites</li>
        <li>Consider hiring local guides for better cultural insights</li>
      </ul>

      <h2>Conclusion</h2>
      <p>India's diversity is its greatest strength as a travel destination. Whether you're seeking adventure, relaxation, culture, or spirituality, you'll find it in this incredible country. Start planning your Indian adventure today!</p>
    `,
    relatedBlogs: ["goa-guide", "budget-travel-tips", "indian-culture-guide"]
  },
  "goa-guide": {
    title: "Goa Travel Guide: Beaches, Nightlife & Portuguese Heritage",
    slug: "goa-guide",
    excerpt: "Everything you need to know about planning the perfect Goa trip. From hidden beaches to Portuguese architecture.",
    icon: "🏖️",
    author: "Beach Lover",
    authorBio: "Goa resident and travel writer specializing in beach destinations and coastal culture.",
    date: "Jan 12, 2024",
    readTime: "6 min read",
    category: "guides",
    tags: ["goa", "beach", "nightlife", "portuguese", "travel-guide"],
    views: "1.8K",
    likes: "98",
    comments: "15",
    rating: "4.6",
    featured: true,
    content: `
      <h2>Welcome to Goa</h2>
      <p>Goa, India's smallest state, packs a powerful punch when it comes to tourism. With its unique blend of Indian and Portuguese cultures, stunning beaches, and vibrant nightlife, it's no wonder why millions visit each year.</p>

      <h2>Best Beaches in Goa</h2>
      <h3>North Goa Beaches</h3>
      <p><strong>Calangute Beach:</strong> The most popular beach, great for water sports and beach shacks.</p>
      <p><strong>Baga Beach:</strong> Known for its nightlife and water sports.</p>
      <p><strong>Anjuna Beach:</strong> Famous for its Wednesday flea market and trance parties.</p>

      <h3>South Goa Beaches</h3>
      <p><strong>Palolem Beach:</strong> Serene crescent-shaped beach perfect for relaxation.</p>
      <p><strong>Colva Beach:</strong> Wide sandy beach with beautiful sunset views.</p>
      <p><strong>Agonda Beach:</strong> Quiet and peaceful, ideal for solitude seekers.</p>

      <h2>Portuguese Heritage</h2>
      <p>Goa's 450 years of Portuguese rule have left a lasting architectural and cultural legacy:</p>
      <ul>
        <li><strong>Basilica of Bom Jesus:</strong> UNESCO World Heritage site containing St. Francis Xavier's relics</li>
        <li><strong>Se Cathedral:</strong> One of the largest churches in Asia</li>
        <li><strong>Fort Aguada:</strong> 17th-century Portuguese fort with lighthouse</li>
      </ul>

      <h2>Goan Cuisine</h2>
      <p>Don't miss these Goan delicacies:</p>
      <ul>
        <li><strong>Fish Curry Rice:</strong> The staple food of Goa</li>
        <li><strong>Pork Vindaloo:</strong> Spicy vinegar-based curry</li>
        <li><strong>Bebinca:</strong> Traditional layered dessert</li>
        <li><strong>Feni:</strong> Local liquor made from cashew or coconut</li>
      </ul>

      <h2>Practical Information</h2>
      <p><strong>Best Time to Visit:</strong> November to February</p>
      <p><strong>Getting Around:</strong> Rent a scooter or bike for maximum flexibility</p>
      <p><strong>Accommodation:</strong> Range from luxury resorts to budget hostels</p>
    `,
    relatedBlogs: ["best-places-india", "monsoon-travel", "budget-travel-tips"]
  }
};

export default function BlogDetail() {
  const params = useParams();
  const slug = params.slug;
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      if (slug && blogDetails[slug]) {
        setBlog(blogDetails[slug]);
        
        // Get related blogs
        const related = blogDetails[slug].relatedBlogs
          .map(relatedSlug => blogDetails[relatedSlug])
          .filter(Boolean);
        setRelatedBlogs(related);
      }
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [slug]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded-xl mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h2>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
            <Link href="/blogs" className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-200">
              Browse All Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
          <span>›</span>
          <Link href="/blogs" className="hover:text-blue-600 transition-colors duration-200">Blogs</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">{blog.title}</span>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 flex items-center justify-center text-8xl">
            {blog.icon}
          </div>

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <span>👤</span>
                  <span>{blog.author}</span>
                </span>
                <span>•</span>
                <span>{blog.date}</span>
                <span>•</span>
                <span>⏱️ {blog.readTime}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1 text-yellow-500">
                  <span>⭐</span>
                  <span>{blog.rating}</span>
                </span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center space-x-1 text-gray-500">
                  <span>👁️</span>
                  <span>{blog.views}</span>
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 py-4 border-t border-b border-gray-200">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isBookmarked 
                    ? 'bg-yellow-50 text-yellow-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{isBookmarked ? '🔖' : '📑'}</span>
                <span>{isBookmarked ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={() => {
                  // Like functionality
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <span>❤️</span>
                <span>Like ({blog.likes})</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <span>📤</span>
                  <span>Share</span>
                </button>

                {showShareMenu && (
                  <div className="absolute top-12 left-0 bg-white rounded-xl shadow-lg border border-gray-200 p-2 z-10">
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <span>🐦</span>
                      <span>Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <span>📘</span>
                      <span>Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <span>💼</span>
                      <span>LinkedIn</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Author Bio */}
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl mt-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                {blog.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{blog.author}</h4>
                <p className="text-sm text-gray-600">{blog.authorBio}</p>
              </div>
            </div>
          </div>
        </article>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            💬 Comments ({blog.comments})
          </h3>
          
          <div className="space-y-6">
            {/* Sample Comment */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-600 flex-shrink-0">
                R
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Rahul Sharma</h4>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-700 mb-2">
                  Great article! I've been to 7 out of these 10 places and completely agree with your recommendations.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <button className="hover:text-blue-600 transition-colors duration-200">👍 12</button>
                  <button className="hover:text-blue-600 transition-colors duration-200">Reply</button>
                </div>
              </div>
            </div>

            {/* Add Comment Form */}
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Add a Comment</h4>
              <textarea 
                placeholder="Share your thoughts..."
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              ></textarea>
              <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-200">
                Post Comment
              </button>
            </div>
          </div>
        </div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              📚 Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/blogs/${relatedBlog.slug}`}
                  className="block p-4 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{relatedBlog.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                        {relatedBlog.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{relatedBlog.readTime}</span>
                        <span>•</span>
                        <span>⭐ {relatedBlog.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Enjoyed this article?
          </h3>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for more travel insights and destination guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}