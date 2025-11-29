"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Star,
  Users,
  Heart,
  Share,
  Bookmark,
  Phone,
  MessageCircle,
  Shield,
  Award,
  CheckCircle,
  Clock,
  Utensils,
  Car,
  Hotel,
  Camera
} from "lucide-react";

// Sample packages data - same as listing page
const packagesData = [
  { 
    title: "Kashmir 5N/6D", 
    image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=500", 
    slug: "kashmir-5n6d", 
    duration: "5N/6D", 
    price: 12999,
    originalPrice: 15999,
    discount: 19,
    rating: 4.8,
    reviews: 124,
    location: "Srinagar, Gulmarg, Pahalgam",
    highlights: ["Houseboat Stay", "Skiing", "Shikara Ride", "Mughal Gardens"],
    featured: true,
    category: "mountain",
    tags: ["Family", "Honeymoon", "Adventure"],
    images: [
      "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800",
      "https://images.unsplash.com/photo-1543413065-08e34b2c79cc?w=800",
      "https://images.unsplash.com/photo-1598256981667-ffe9c9e8705f?w=800",
      "https://images.unsplash.com/photo-1590663550613-84b8d57b3e2e?w=800"
    ],
    about: "Experience the paradise on earth with our carefully curated Kashmir tour. From serene Dal Lake to the majestic Himalayas, this package offers the perfect blend of nature, culture, and adventure.",
    detailedHighlights: [
      "Stay in luxurious houseboats on Dal Lake",
      "Gondola ride in Gulmarg - highest cable car in the world",
      "Shikara ride through floating gardens",
      "Visit to Mughal gardens and apple orchards",
      "Traditional Kashmiri Wazwan dinner",
      "Photography sessions at picturesque locations"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Shikara Ride",
        details: "Arrive at Srinagar airport. Transfer to hotel/houseboat. Evening Shikara ride on Dal Lake witnessing beautiful sunset. Overnight stay.",
        activities: ["Airport Pickup", "Hotel Check-in", "Shikara Ride"]
      },
      {
        day: 2,
        title: "Srinagar Local Sightseeing",
        details: "Visit Mughal Gardens - Shalimar Bagh, Nishat Bagh, and Chashme Shahi. Afternoon visit to Shankaracharya Temple. Overnight stay.",
        activities: ["Mughal Gardens", "Temple Visit", "Local Market"]
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg Excursion",
        details: "Full day excursion to Gulmarg. Enjoy Gondola ride (cable car) to Phase 1 and Phase 2. Adventure activities available. Return to Srinagar for overnight stay.",
        activities: ["Gondola Ride", "Adventure Sports", "Mountain Views"]
      },
      {
        day: 4,
        title: "Srinagar to Pahalgam",
        details: "Drive to Pahalgam through beautiful countryside. Visit Betaab Valley and Aru Valley. Optional pony ride available. Overnight stay in Pahalgam.",
        activities: ["Valley Visits", "Pony Ride", "River Rafting"]
      },
      {
        day: 5,
        title: "Pahalgam Exploration",
        details: "Full day to explore Pahalgam. Visit Lidder River, Chandanwari, and enjoy nature walks. Photography opportunities abound.",
        activities: ["Nature Walk", "Photography", "River Side"]
      },
      {
        day: 6,
        title: "Departure",
        details: "After breakfast, check out from hotel and transfer to Srinagar airport for departure with beautiful memories.",
        activities: ["Breakfast", "Airport Drop"]
      }
    ],
    inclusions: [
      "5 Nights accommodation in 3-star hotels/houseboats",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Shikara ride for 2 hours",
      "Gulmarg Gondola ride tickets",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare/train tickets",
      "Lunch during the tour",
      "Adventure activities charges",
      "Personal expenses",
      "Travel insurance"
    ],
    quickFacts: [
      { icon: <Hotel className="w-4 h-4" />, text: "Luxury Stays" },
      { icon: <Utensils className="w-4 h-4" />, text: "Meals Included" },
      { icon: <Car className="w-4 h-4" />, text: "Private Transport" },
      { icon: <Camera className="w-4 h-4" />, text: "Photo Opportunities" },
      { icon: <Shield className="w-4 h-4" />, text: "Safe & Secure" },
      { icon: <Award className="w-4 h-4" />, text: "Best Price" }
    ]
  },
  { 
    title: "Goa Beach Tour", 
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500", 
    slug: "goa-tour", 
    duration: "3N/4D", 
    price: 8999,
    originalPrice: 11999,
    discount: 25,
    rating: 4.5,
    reviews: 89,
    location: "North Goa, South Goa",
    highlights: ["Beach Parties", "Water Sports", "Portuguese Heritage", "Nightlife"],
    featured: false,
    category: "beach",
    tags: ["Party", "Beach", "Youth"],
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      "https://images.unsplash.com/photo-1520250497596-4c4d0b072b66?w=800"
    ],
    about: "Experience the vibrant beaches and Portuguese heritage of Goa. From beach parties to water sports, this package offers the perfect coastal getaway with sun, sand, and sea.",
    detailedHighlights: [
      "Beach hopping across famous Goan beaches",
      "Water sports activities including parasailing and jet skiing",
      "Portuguese heritage site visits",
      "Dolphin watching tour",
      "Nightlife experience at beach clubs",
      "Local Goan cuisine tasting"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa & Beach Exploration",
        details: "Arrive at Goa airport. Transfer to hotel. Evening visit to Calangute Beach and Baga Beach for sunset views and beach activities.",
        activities: ["Airport Pickup", "Beach Visit", "Sunset Viewing"]
      },
      {
        day: 2,
        title: "North Goa Beaches & Fort Aguada",
        details: "Full day exploring North Goa beaches including Anjuna, Vagator. Visit Fort Aguada and enjoy water sports activities.",
        activities: ["Beach Hopping", "Fort Visit", "Water Sports"]
      },
      {
        day: 3,
        title: "South Goa & Portuguese Heritage",
        details: "Explore South Goa beaches - Palolem, Colva. Visit Old Goa churches and Portuguese heritage sites. Evening cruise on Mandovi River.",
        activities: ["Heritage Tour", "River Cruise", "Beach Relaxation"]
      },
      {
        day: 4,
        title: "Departure",
        details: "After breakfast, check out from hotel and transfer to airport for departure with wonderful memories.",
        activities: ["Breakfast", "Airport Drop"]
      }
    ],
    inclusions: [
      "3 Nights accommodation in 3-star beach resort",
      "Daily breakfast",
      "All transfers and sightseeing by private vehicle",
      "Dolphin watching tour",
      "Mandovi River cruise",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare/train tickets",
      "Lunch and dinner",
      "Water sports charges",
      "Personal expenses",
      "Travel insurance"
    ],
    quickFacts: [
      { icon: <Hotel className="w-4 h-4" />, text: "Beach Resort Stay" },
      { icon: <Utensils className="w-4 h-4" />, text: "Breakfast Included" },
      { icon: <Car className="w-4 h-4" />, text: "Private Transport" },
      { icon: <Camera className="w-4 h-4" />, text: "Photo Opportunities" },
      { icon: <Shield className="w-4 h-4" />, text: "Safe & Secure" },
      { icon: <Award className="w-4 h-4" />, text: "Best Price" }
    ]
  }
];

export default function PackageDetail() {
  const router = useRouter();
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const packageData = packagesData.find(pkg => pkg.slug === slug);
      setData(packageData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading amazing experience...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Package Not Found</h2>
          <Link href="/packages" className="text-rose-600 hover:text-rose-700 font-medium">
            ← Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back</span>
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bookmark
                  size={20}
                  className={isBookmarked ? "fill-rose-600 text-rose-600" : "text-gray-600"}
                />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden mb-6">
              <div className="relative h-80 w-full">
                <img
                  src={data.images[currentImage]}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Thumbnails */}
              <div className="flex gap-2 p-4 overflow-x-auto">
                {data.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className="flex-shrink-0"
                  >
                    <img
                      src={img}
                      alt={`${data.title} ${index + 1}`}
                      className={`w-20 h-16 object-cover rounded-lg transition-all ${
                        currentImage === index
                          ? "ring-2 ring-rose-600"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Package Header */}
            <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <span className="inline-block bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                    Bestseller
                  </span>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                    {data.title}
                  </h1>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{data.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{data.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-rose-600 text-rose-600" />
                      <span className="font-medium">{data.rating}</span>
                      <span>({data.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end mb-2">
                    <Users size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {Math.floor(Math.random() * 200) + 50} people booked
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-rose-600">
                  ₹{data.price.toLocaleString()}
                </span>
                {data.originalPrice > data.price && (
                  <>
                    <span className="text-xl line-through text-gray-400">
                      ₹{data.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-full text-sm font-medium">
                      Save {data.discount}%
                    </span>
                  </>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {data.about}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">✨ Package Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.detailedHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-rose-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">📅 Detailed Itinerary</h2>
              <div className="space-y-6">
                {data.itinerary.map((day) => (
                  <div key={day.day} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        {day.day}
                      </div>
                      <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-6">
                      <h3 className="font-semibold text-gray-800 mb-2">{day.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {day.details}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {day.activities.map((activity, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs border border-gray-200"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Book This Package</h2>

              <div className="mb-4">
                <span className="text-2xl font-bold text-rose-600">
                  ₹{data.price.toLocaleString()}
                </span>
                <span className="text-gray-600 text-sm ml-2">per person</span>
              </div>

              <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-semibold mb-3 transition-colors">
                Book Now
              </button>

              <button className="w-full border border-green-500 text-green-600 hover:bg-green-50 py-3 rounded-lg font-semibold mb-3 transition-colors flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </button>

              <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Phone size={18} />
                Call for Inquiry
              </button>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-semibold mb-3 text-gray-800">What's Included</h3>
                <div className="space-y-2">
                  {data.inclusions.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold mt-4 mb-3 text-gray-800">Not Included</h3>
                <div className="space-y-2">
                  {data.exclusions.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-2xl p-6 mt-6 border border-gray-100">
              <h3 className="font-semibold mb-4 text-gray-800">Quick Facts</h3>
              <div className="space-y-3">
                {data.quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-rose-600">
                      {fact.icon}
                    </div>
                    <span className="text-sm text-gray-600">{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
          <Heart size={20} />
          Book Now
        </button>
      </div>
    </div>
  );
}