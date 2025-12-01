"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Sample Data (Simplified)
const destinationDetails = {
  kashmir: {
    title: "Kashmir - Paradise on Earth",
    slug: "kashmir",
    icon: "🏔️",
    flag: "🇮🇳",
    rating: 4.8,
    price: "12,999",
    originalPrice: "16,999",
    discount: 25,
    description: "Experience the breathtaking beauty of Dal Lake, Mughal gardens, and snow-capped Himalayas.",
    detailedDescription: "Kashmir, often called 'Paradise on Earth', offers stunning natural beauty with serene Dal Lake, majestic Himalayan peaks, and beautiful Mughal gardens.",
    duration: "5-7 Days",
    groupSize: "2-12 People",
    temperature: "15°C",
    category: "mountain",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1543413065-08e34b2c79cc?w=600&h=400&fit=crop",
    ],
    highlights: ["Shikara ride on Dal Lake", "Visit Mughal Gardens", "Gulmarg skiing experience"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Check into houseboat, Shikara ride on Dal Lake during sunset",
        activities: ["Airport Pickup", "Houseboat Check-in", "Shikara Ride"],
        duration: "4 hours",
        accommodation: "Deluxe Houseboat"
      }
    ],
    inclusions: ["4 Nights accommodation", "Daily breakfast and dinner", "All transportation"],
    exclusions: ["Airfare", "Personal expenses", "Travel insurance"],
    bestTime: "March to October",
    difficulty: "Easy",
    popularity: 95,
    reviews: [
      {
        name: "Priya Sharma",
        rating: 5,
        comment: "Absolutely magical experience! The houseboat stay was unforgettable.",
        date: "2024-01-15",
        avatar: "👩",
        verified: true
      }
    ],
    amenities: ["🏨 Hotel", "🍽️ Meals", "🚗 Transport"],
    tags: ["Family Friendly", "Honeymoon", "Adventure"]
  },
  // Add other destinations similarly...
};

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Reusable Components
const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}>
          ★
        </span>
      ))}
      <span className="ml-1 text-xs text-gray-600">({rating})</span>
    </div>
  );
};

const ImageGallery = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <div className="space-y-3">
      <motion.div
        key={selectedImage}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gray-100"
      >
        <img
          src={images[selectedImage]}
          alt="Destination"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative rounded-lg overflow-hidden h-16 transition-all duration-300 ${
              selectedImage === index 
                ? "ring-2 ring-rose-500 scale-105" 
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const BookingModal = ({ destination, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    checkIn: "", checkOut: "", guests: 2, rooms: 1, specialRequests: ""
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">Book {destination.title}</h3>
                <p className="text-gray-600 text-sm">Complete your booking details</p>
              </div>
              <button onClick={onClose} className="text-xl hover:text-red-500 transition-colors">
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Check-in</label>
                  <input type="date" className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Check-out</label>
                  <input type="date" className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Guests</label>
                  <select className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500">
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Rooms</label>
                  <select className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500">
                    {[1,2,3,4].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Room' : 'Rooms'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Special Requests</label>
                <textarea rows={2} placeholder="Any special requirements..." className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-rose-500" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full bg-rose-600 text-white rounded-lg py-3 font-semibold text-sm hover:bg-rose-700 transition-colors">
                🎒 Proceed to Payment - ₹{destination.price}
              </button>
              <button className="w-full border border-gray-300 text-gray-700 rounded-lg py-3 font-semibold text-sm hover:border-rose-500 transition-colors">
                💬 Contact for Customization
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main Page Component
export default function DestinationSlugPage() {
  const params = useParams();
  const slug = params.slug;

  const [destination, setDestination] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    if (slug && destinationDetails[slug]) {
      setDestination(destinationDetails[slug]);
    }
  }, [slug]);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <div className="text-4xl mb-3">🌍</div>
          <h2 className="text-xl font-bold mb-3">Destination Not Found</h2>
          <Link href="/destinations" className="inline-block bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-rose-700 transition-colors">
            Browse All Destinations
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div initial="hidden" animate="show" variants={staggerContainer} className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* Breadcrumb */}
        <motion.nav variants={fadeUp} className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/destinations" className="hover:text-rose-600 transition-colors">Destinations</Link>
          <span>›</span>
          <span className="font-semibold text-gray-900">{destination.title}</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.section variants={fadeUp} className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            
            {/* Image Gallery */}
            <ImageGallery images={destination.images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />

            {/* Right Content */}
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {destination.discount}% OFF
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      ⭐ {destination.rating} Rating
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">{destination.title}</h1>
                  <p className="text-gray-600 text-sm flex items-center gap-3">
                    <span>{destination.flag}</span>
                    <span>•</span>
                    <span className="capitalize">{destination.category}</span>
                    <span>•</span>
                    <span>🔥 {destination.popularity}% Popular</span>
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">{destination.detailedDescription}</p>

              {/* Quick Stats */}
              <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Duration", value: destination.duration, icon: "⏱️", color: "blue" },
                  { label: "Price", value: `₹${destination.price}`, original: `₹${destination.originalPrice}`, icon: "💰", color: "green" },
                  { label: "Group Size", value: destination.groupSize, icon: "👥", color: "purple" },
                  { label: "Best Time", value: destination.bestTime, icon: "🌤️", color: "orange" },
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeUp} className={`p-3 bg-${stat.color}-50 rounded-lg border-l-4 border-${stat.color}-500`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{stat.icon}</span>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{stat.value}</div>
                        {stat.original && <div className="text-xs text-gray-500 line-through">{stat.original}</div>}
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {destination.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setIsBookingModalOpen(true)}
                  className="flex-1 bg-rose-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-rose-700 transition-colors"
                >
                  🎒 Book Now - ₹{destination.price}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 text-sm hover:border-rose-500 hover:text-rose-600 transition-colors"
                >
                  📞 Instant Callback
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Tabs */}
        <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-lg overflow-hidden">
          
          {/* Tab Header */}
          <div className="border-b flex overflow-x-auto">
            {[
              { id: "overview", icon: "📖", label: "Overview" },
              { id: "itinerary", icon: "🗓️", label: "Itinerary" },
              { id: "highlights", icon: "⭐", label: "Highlights" },
              { id: "inclusions", icon: "🎁", label: "Inclusions" },
              { id: "reviews", icon: "💬", label: `Reviews (${destination.reviews.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-3 flex items-center justify-center gap-2 font-semibold border-b-2 transition-all min-w-max text-sm ${
                  activeTab === tab.id 
                    ? "border-rose-600 text-rose-600 bg-rose-50" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <motion.div variants={staggerContainer} className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <motion.div variants={fadeUp}>
                        <h3 className="text-xl font-bold mb-4">About This Destination</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{destination.detailedDescription}</p>
                      </motion.div>
                      <motion.div variants={fadeUp}>
                        <h4 className="text-lg font-semibold mb-3">Why Travelers Love This</h4>
                        <div className="space-y-3">
                          {destination.highlights.slice(0, 4).map((highlight, index) => (
                            <motion.div key={index} variants={fadeUp} className="flex items-start gap-3 p-3 bg-rose-50 rounded-lg">
                              <span className="text-rose-600 text-lg mt-0.5">✨</span>
                              <span className="font-medium text-sm">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Itinerary Tab */}
                {activeTab === "itinerary" && (
                  <div className="space-y-4">
                    {destination.itinerary.map((day, index) => (
                      <motion.div key={day.day} variants={fadeUp} className="p-4 bg-rose-50 rounded-lg border-l-4 border-rose-500">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-rose-600 text-white rounded-lg flex flex-col items-center justify-center font-bold">
                              <span className="text-xs">DAY</span>
                              <span className="text-sm">{day.day}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-gray-900">{day.title}</h4>
                              <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full text-xs font-medium">{day.duration}</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-3">{day.description}</p>
                            <div className="text-xs text-gray-600"><strong>Accommodation:</strong> {day.accommodation}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Highlights Tab */}
                {activeTab === "highlights" && (
                  <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.highlights.map((highlight, index) => (
                      <motion.div key={index} variants={fadeUp} className="p-4 bg-rose-50 rounded-lg border border-rose-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">{highlight}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Inclusions Tab */}
                {activeTab === "inclusions" && (
                  <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <motion.div variants={fadeUp}>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">✅ What's Included</h4>
                        <ul className="space-y-2">
                          {destination.inclusions.map((item, idx) => (
                            <motion.li key={idx} variants={fadeUp} className="flex items-start gap-2 text-green-700 text-sm">
                              <span className="text-green-500 mt-0.5">✓</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    <motion.div variants={fadeUp}>
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">❌ What's Not Included</h4>
                        <ul className="space-y-2">
                          {destination.exclusions.map((item, idx) => (
                            <motion.li key={idx} variants={fadeUp} className="flex items-start gap-2 text-red-700 text-sm">
                              <span className="text-red-500 mt-0.5">✗</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Reviews Tab */}
                {activeTab === "reviews" && (
                  <motion.div variants={staggerContainer} className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold">Traveler Reviews</h3>
                        <p className="text-gray-600 text-sm">What our guests say about their experience</p>
                      </div>
                      <div className="text-center bg-rose-50 rounded-lg p-3">
                        <div className="text-xl font-bold text-rose-600">{destination.rating}</div>
                        <RatingStars rating={destination.rating} />
                        <div className="text-xs text-gray-600 mt-1">{destination.reviews.length} reviews</div>
                      </div>
                    </div>

                    {destination.reviews.map((review, idx) => (
                      <motion.div key={idx} variants={fadeUp} className="p-4 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {review.avatar}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                              <div className="flex items-center gap-2">
                                <RatingStars rating={review.rating} />
                                {review.verified && (
                                  <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded text-xs font-medium">
                                    ✅ Verified
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Related Destinations */}
        <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h3 className="text-xl font-bold mb-4">You May Also Like</h3>
          <p className="text-gray-600 text-sm mb-4">Similar destinations you might love</p>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.values(destinationDetails).filter((d) => d.slug !== destination.slug).slice(0, 4).map((related, i) => (
              <motion.div key={related.slug} variants={fadeUp} whileHover={{ y: -4, scale: 1.02 }} className="bg-gray-50 rounded-lg p-4 cursor-pointer shadow hover:shadow-md border border-gray-200 transition-all duration-300">
                <Link href={`/destinations/${related.slug}`}>
                  <div className="text-center text-4xl mb-3">{related.icon}</div>
                  <h4 className="font-bold text-gray-900 text-center text-sm mb-2">{related.title.split(" - ")[0]}</h4>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1">⭐ {related.rating}</span>
                    <span className="font-bold text-rose-600">₹{related.price}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 text-center">{related.duration} • {related.groupSize}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal destination={destination} isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

      {/* Floating Booking CTA */}
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-3 flex items-center gap-3">
          <div>
            <div className="font-bold text-gray-900 text-sm">₹{destination.price}</div>
            <div className="text-xs text-gray-500 line-through">₹{destination.originalPrice}</div>
          </div>
          <button onClick={() => setIsBookingModalOpen(true)} className="bg-rose-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-rose-700 transition-colors">
            Book Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}