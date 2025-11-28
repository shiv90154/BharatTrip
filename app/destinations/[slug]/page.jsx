"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------
// 🔥 SAMPLE DATA (same as before)
// ---------------------------------------------
const destinationDetails = {
  kashmir: {
    title: "Kashmir - Paradise on Earth",
    slug: "kashmir",
    icon: "🏔️",
    flag: "🇮🇳",
    rating: "4.8",
    price: "299",
    description: "Experience the breathtaking beauty of Dal Lake, Mughal gardens, and snow-capped Himalayas in the crown jewel of India.",
    detailedDescription: "Kashmir, often called 'Paradise on Earth', is a region of stunning natural beauty. From the serene Dal Lake with its iconic shikara rides to the majestic Himalayan peaks, every moment in Kashmir is magical. The region boasts beautiful Mughal gardens, ancient temples, and vibrant local markets. In winter, it transforms into a snowy wonderland perfect for skiing and snowboarding.",
    duration: "5-7 Days",
    groupSize: "2-12",
    temperature: "15°C",
    category: "hills",
    featured: true,
    images: ["🏔️", "🛶", "🌸", "⛷️"],
    highlights: [
      "Shikara ride on Dal Lake",
      "Visit Mughal Gardens",
      "Gulmarg skiing experience",
      "Pahalgam valley trekking",
      "Local handicraft shopping"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", description: "Check into houseboat, Shikara ride on Dal Lake" },
      { day: 2, title: "Mughal Gardens", description: "Visit Nishat Bagh, Shalimar Bagh, and Chashme Shahi" },
      { day: 3, title: "Gulmarg Adventure", description: "Gondola ride, skiing, and snow activities" },
      { day: 4, title: "Pahalgam Exploration", description: "Betaab Valley, Aru Valley, and Lidder River" },
      { day: 5, title: "Local Culture", description: "Visit local markets, handicraft centers" }
    ],
    inclusions: [
      "Accommodation in 3-star hotels",
      "Daily breakfast and dinner",
      "All transportation included",
      "Sightseeing as per itinerary",
      "Tour guide services"
    ],
    exclusions: [
      "Airfare to/from Srinagar",
      "Personal expenses",
      "Travel insurance",
      "Optional activities"
    ],
    bestTime: "March to October",
    difficulty: "Easy",
    reviews: [
      { name: "Priya Sharma", rating: 5, comment: "Absolutely magical experience! The houseboat stay was unforgettable.", date: "2024-01-15" },
      { name: "Rahul Verma", rating: 4, comment: "Beautiful destination, great food, and excellent service.", date: "2024-01-10" }
    ]
  },
  manali: {
    title: "Manali - Adventure Capital",
    slug: "manali",
    icon: "⛷️",
    flag: "🇮🇳",
    rating: "4.6",
    price: "199",
    description: "Thrilling adventures in the Himalayas with skiing, trekking, and stunning mountain vistas in this popular hill station.",
    detailedDescription: "Manali is a breathtaking hill station nestled in the mountains of Himachal Pradesh. Known as the adventure capital of India, it offers everything from skiing and snowboarding in winter to trekking, paragliding, and river rafting in summer. The town is surrounded by towering peaks, lush green valleys, and gushing rivers, making it a perfect destination for nature lovers and adventure enthusiasts alike.",
    duration: "4-6 Days",
    groupSize: "2-8",
    temperature: "12°C",
    category: "adventure",
    featured: true,
    images: ["⛰️", "🚵", "🏞️", "🎿"],
    highlights: [
      "Skiing in Solang Valley",
      "Visit Hadimba Temple",
      "Old Manali exploration",
      "River rafting in Beas",
      "Rohtang Pass visit"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Manali", description: "Check into hotel, explore Mall Road" },
      { day: 2, title: "Adventure Day", description: "Skiing in Solang Valley, paragliding" },
      { day: 3, title: "Cultural Exploration", description: "Hadimba Temple, Vashisht Hot Springs" },
      { day: 4, title: "Mountain Pass", description: "Visit Rohtang Pass, snow activities" }
    ],
    inclusions: [
      "Accommodation in comfortable hotels",
      "All meals included",
      "Adventure activity equipment",
      "Local transportation",
      "Experienced guide"
    ],
    exclusions: [
      "Travel to/from Manali",
      "Personal shopping",
      "Additional activities",
      "Travel insurance"
    ],
    bestTime: "October to June",
    difficulty: "Moderate",
    reviews: [
      { name: "Amit Patel", rating: 5, comment: "Amazing adventure activities! Solang Valley was incredible.", date: "2024-01-12" },
      { name: "Sneha Reddy", rating: 4, comment: "Beautiful scenery and great food. Would visit again!", date: "2024-01-08" }
    ]
  },
  goa: {
    title: "Goa - Beach Paradise",
    slug: "goa",
    icon: "🏖️",
    flag: "🇮🇳",
    rating: "4.5",
    price: "179",
    description: "Sun-kissed beaches, Portuguese architecture, and vibrant nightlife in India's ultimate coastal destination.",
    detailedDescription: "Goa is India's smallest state but biggest tourist destination, famous for its pristine beaches, Portuguese heritage, and vibrant nightlife. From the calm waters of South Goa to the bustling beaches of North Goa, there's something for every traveler. Explore ancient churches, enjoy water sports, savor delicious seafood, and experience the unique blend of Indian and Portuguese cultures.",
    duration: "3-5 Days",
    groupSize: "2-10",
    temperature: "28°C",
    category: "beach",
    featured: false,
    images: ["🏖️", "🏛️", "🎉", "🛥️"],
    highlights: [
      "Beach hopping across North & South Goa",
      "Water sports and dolphin watching",
      "Portuguese heritage sites",
      "Nightlife and beach parties",
      "Local seafood cuisine"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Goa", description: "Check into beach resort, explore nearby beaches" },
      { day: 2, title: "North Goa Exploration", description: "Visit Calangute, Baga, Anjuna beaches" },
      { day: 3, title: "South Goa Relaxation", description: "Palolem, Colva beaches, water sports" },
      { day: 4, title: "Cultural Heritage", description: "Old Goa churches, Portuguese architecture" }
    ],
    inclusions: [
      "Beach resort accommodation",
      "Breakfast included",
      "Beach transfers",
      "Water sports equipment",
      "Local guide"
    ],
    exclusions: [
      "Airfare to Goa",
      "Alcohol and parties",
      "Additional water sports",
      "Personal expenses"
    ],
    bestTime: "November to February",
    difficulty: "Easy",
    reviews: [
      { name: "Rohit Kumar", rating: 5, comment: "Best beach vacation ever! Amazing nightlife and food.", date: "2024-01-20" },
      { name: "Neha Singh", rating: 4, comment: "Beautiful beaches and great resorts. Perfect for relaxation.", date: "2024-01-18" }
    ]
  },
  kerala: {
    title: "Kerala - God's Own Country",
    slug: "kerala",
    icon: "🛶",
    flag: "🇮🇳",
    rating: "4.7",
    price: "249",
    description: "Serene backwaters, lush tea plantations, and rich cultural heritage in this tropical paradise of South India.",
    detailedDescription: "Kerala, known as 'God's Own Country', is a tropical paradise with diverse landscapes including serene backwaters, lush hill stations, and pristine beaches. Experience the unique houseboat stays in Alleppey, explore the tea plantations of Munnar, witness traditional Kathakali performances, and enjoy Ayurvedic treatments in this wellness-focused destination.",
    duration: "6-8 Days",
    groupSize: "2-6",
    temperature: "26°C",
    category: "cultural",
    featured: true,
    images: ["🛶", "🌿", "🏞️", "💃"],
    highlights: [
      "Houseboat cruise in backwaters",
      "Tea plantation tour in Munnar",
      "Kathakali cultural show",
      "Ayurvedic wellness treatments",
      "Wildlife sanctuary visit"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kochi", description: "Check into hotel, explore Fort Kochi" },
      { day: 2, title: "Munnar Hills", description: "Tea plantation visit, Echo Point" },
      { day: 3, title: "Backwaters", description: "Houseboat cruise, village tours" },
      { day: 4, title: "Cultural Experience", description: "Kathakali show, Ayurvedic massage" },
      { day: 5, title: "Wildlife", description: "Periyar Wildlife Sanctuary" }
    ],
    inclusions: [
      "Luxury houseboat stay",
      "All meals included",
      "Cultural show tickets",
      "Ayurvedic treatment session",
      "Expert local guide"
    ],
    exclusions: [
      "Travel to Kerala",
      "Additional treatments",
      "Personal shopping",
      "Travel insurance"
    ],
    bestTime: "September to March",
    difficulty: "Easy",
    reviews: [
      { name: "Deepa Nair", rating: 5, comment: "The houseboat experience was magical! Truly God's own country.", date: "2024-01-22" },
      { name: "Karthik Menon", rating: 4, comment: "Amazing food and cultural experiences. Loved every moment.", date: "2024-01-19" }
    ]
  }
};
// ---------------------------------------------
// ⚡ REUSABLE ANIMATION VARIANTS
// ---------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

// ---------------------------------------------
// ⚡ MAIN PAGE COMPONENT
// ---------------------------------------------
export default function DestinationSlugPage() {
  const params = useParams();
  const slug = params.slug;

  const [destination, setDestination] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Load data
  useEffect(() => {
    if (slug && destinationDetails[slug]) {
      setDestination(destinationDetails[slug]);
    }
  }, [slug]);

  // ---------------------------------------
  // ❌ NOT FOUND UI
  // ---------------------------------------
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="text-6xl mb-3">❌</div>
          <h2 className="text-2xl font-bold">Destination Not Found</h2>
          <Link href="/destinations" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-xl">
            Browse Destinations
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* -------------------------------------
          🧭 BREADCRUMB
        -------------------------------------- */}
        <motion.nav variants={fadeUp} className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>›</span>
          <Link href="/destinations" className="hover:text-blue-600">Destinations</Link>
          <span>›</span>
          <span className="font-semibold text-gray-900">{destination.title}</span>
        </motion.nav>

        {/* -------------------------------------
          🎆 HERO SECTION
        -------------------------------------- */}
        <motion.section variants={fadeUp} className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* IMAGE GALLERY */}
            <motion.div variants={fadeUp} className="space-y-4">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-8xl"
              >
                {destination.images[selectedImage]}
              </motion.div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {destination.images.map((img, index) => (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-xl h-20 flex items-center justify-center text-3xl 
                      bg-gradient-to-br from-blue-50 to-purple-50 
                      ${selectedImage === index ? "ring-2 ring-blue-500 scale-105" : ""}`}
                  >
                    {img}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div variants={fadeUp} className="space-y-6">

              {/* TITLE */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold">{destination.title}</h1>
                  <p className="text-gray-600 flex items-center gap-3 mt-1">
                    ⭐ {destination.rating} • {destination.flag} • {destination.category}
                  </p>
                </div>
                <span className="text-5xl">{destination.icon}</span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-700 text-lg">
                {destination.detailedDescription}
              </p>

              {/* QUICK STATS */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { label: "Duration", value: destination.duration, color: "blue" },
                  { label: "Price", value: "$" + destination.price, color: "green" },
                  { label: "Group Size", value: destination.groupSize, color: "purple" },
                  { label: "Avg Temp", value: destination.temperature, color: "orange" },
                ].map((stat, i) => (
                  <motion.div key={i} variants={scaleIn} className={`p-4 bg-${stat.color}-50 rounded-xl text-center`}>
                    <div className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsBookingModalOpen(true)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold shadow-md"
                >
                  🎒 Book This Package
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:text-blue-600 hover:border-blue-500"
                >
                  💖 Save for Later
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* -------------------------------------
          📑 TABS
        -------------------------------------- */}
        <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg">

          {/* TAB HEADER */}
          <div className="border-b flex overflow-x-auto">
            {[
              { id: "overview", icon: "📖", label: "Overview" },
              { id: "itinerary", icon: "🗓️", label: "Itinerary" },
              { id: "highlights", icon: "⭐", label: "Highlights" },
              { id: "inclusions", icon: "🎁", label: "Inclusions" },
              { id: "reviews", icon: "💬", label: "Reviews" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 flex items-center gap-2 font-medium border-b-2 transition-all 
                  ${activeTab === tab.id ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* ----------------------
                  OVERVIEW TAB
                ----------------------- */}
                {activeTab === "overview" && (
                  <motion.div variants={staggerContainer}>

                    <motion.div variants={fadeUp} className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">About This Destination</h3>
                      <p className="text-gray-700">{destination.detailedDescription}</p>
                    </motion.div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <motion.div variants={fadeUp}>
                        <h4 className="text-lg font-semibold mb-3">Quick Facts</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between py-2 border-b text-gray-700">
                            <span>Best Time</span>
                            <span>{destination.bestTime}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b text-gray-700">
                            <span>Difficulty</span>
                            <span>{destination.difficulty}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b text-gray-700">
                            <span>Category</span>
                            <span className="capitalize">{destination.category}</span>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <h4 className="text-lg font-semibold mb-3">Why Choose This?</h4>
                        <ul className="space-y-3">
                          {destination.highlights.slice(0, 4).map((h, i) => (
                            <motion.li
                              key={i}
                              variants={fade}
                              className="flex items-center gap-3"
                            >
                              <span className="text-green-500 text-xl">✓</span>
                              <span>{h}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* ----------------------
                  ITINERARY TAB
                ----------------------- */}
                {activeTab === "itinerary" && (
                  <div className="space-y-4">
                    {destination.itinerary.map((day) => (
                      <motion.div
                        key={day.day}
                        variants={fadeUp}
                        className="p-5 bg-gray-50 rounded-xl flex gap-4"
                      >
                        <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {day.day}
                        </div>

                        <div>
                          <h4 className="font-semibold">{day.title}</h4>
                          <p className="text-gray-600">{day.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* ----------------------
                  HIGHLIGHTS TAB
                ----------------------- */}
                {activeTab === "highlights" && (
                  <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.highlights.map((h, i) => (
                      <motion.div
                        variants={scaleIn}
                        key={i}
                        className="p-4 bg-blue-50 rounded-xl flex items-center gap-3"
                      >
                        <span className="text-blue-500 text-xl">✨</span>
                        <span>{h}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* ----------------------
                  INCLUSIONS TAB
                ----------------------- */}
                {activeTab === "inclusions" && (
                  <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div variants={fadeUp}>
                      <h4 className="text-lg font-semibold text-green-600">Included</h4>
                      <ul className="space-y-2 mt-3">
                        {destination.inclusions.map((i, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <span className="text-green-600">✓</span>
                            <span>{i}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <h4 className="text-lg font-semibold text-red-600">Not Included</h4>
                      <ul className="space-y-2 mt-3">
                        {destination.exclusions.map((i, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <span className="text-red-600">✗</span>
                            <span>{i}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                )}

                {/* ----------------------
                  REVIEWS TAB
                ----------------------- */}
                {activeTab === "reviews" && (
                  <motion.div variants={staggerContainer} className="space-y-6">
                    {destination.reviews.map((review, idx) => (
                      <motion.div key={idx} variants={fadeUp} className="p-5 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center font-bold">
                              {review.name[0]}
                            </div>
                            <div>
                              <h4 className="font-semibold">{review.name}</h4>
                              <p className="text-yellow-500">{Array(review.rating).fill("⭐").join("")}</p>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* -------------------------------------
          🔗 RELATED DESTINATIONS
        -------------------------------------- */}
        <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg p-8 mt-12">
          <h3 className="text-xl font-semibold mb-6">You May Also Like</h3>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {Object.values(destinationDetails)
              .filter((d) => d.slug !== destination.slug)
              .slice(0, 4)
              .map((related, i) => (
                <motion.div
                  key={related.slug}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 p-5 rounded-xl cursor-pointer shadow hover:shadow-lg"
                >
                  <Link href={`/destinations/${related.slug}`}>
                    <div className="text-center text-5xl">{related.icon}</div>
                    <p className="font-semibold mt-3">{related.title.split(" - ")[0]}</p>
                    <p className="text-gray-600 text-sm flex justify-between mt-2">
                      ⭐ {related.rating}
                      <span>${related.price}</span>
                    </p>
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>

      {/* -------------------------------------
        🎉 BOOKING MODAL WITH ANIMATION
      -------------------------------------- */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            key="bookingModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl max-w-md w-full shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Book {destination.title}</h3>
                <button onClick={() => setIsBookingModalOpen(false)}>✕</button>
              </div>

              <div className="space-y-4">
                <input type="date" className="w-full border rounded-xl p-3" />

                <textarea
                  rows={3}
                  placeholder="Special requests..."
                  className="w-full border rounded-xl p-3"
                />

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl py-4 font-semibold">
                  Proceed to Payment
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
