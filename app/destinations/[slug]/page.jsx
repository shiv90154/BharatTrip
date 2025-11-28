"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Sample detailed destination data
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Destination Not Found</h2>
            <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist.</p>
            <Link href="/destinations" className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-200">
              Browse All Destinations
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
          <span>›</span>
          <Link href="/destinations" className="hover:text-blue-600 transition-colors duration-200">Destinations</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">{destination.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-80 flex items-center justify-center text-8xl">
                {destination.images[selectedImage]}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {destination.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl h-20 flex items-center justify-center text-2xl transition-all duration-200 ${
                      selectedImage === index ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'
                    }`}
                  >
                    {image}
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Info */}
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {destination.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span className="flex items-center space-x-1">
                      <span>⭐</span>
                      <span>{destination.rating}/5</span>
                    </span>
                    <span>•</span>
                    <span>{destination.flag}</span>
                    <span>•</span>
                    <span>{destination.category}</span>
                  </div>
                </div>
                <span className="text-4xl">{destination.icon}</span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {destination.detailedDescription}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">{destination.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">${destination.price}</div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">{destination.groupSize}</div>
                  <div className="text-sm text-gray-600">Group Size</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">{destination.temperature}</div>
                  <div className="text-sm text-gray-600">Average Temp</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>🎒</span>
                  <span>Book This Package</span>
                </button>
                <button className="px-6 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>💖</span>
                  <span>Save for Later</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {[
                { id: "overview", label: "Overview", icon: "📖" },
                { id: "itinerary", label: "Itinerary", icon: "🗓️" },
                { id: "highlights", label: "Highlights", icon: "⭐" },
                { id: "inclusions", label: "Inclusions", icon: "✅" },
                { id: "reviews", label: "Reviews", icon: "💬" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">About {destination.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {destination.detailedDescription}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Quick Facts</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Best Time to Visit</span>
                        <span className="font-medium">{destination.bestTime}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Difficulty Level</span>
                        <span className="font-medium">{destination.difficulty}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Category</span>
                        <span className="font-medium capitalize">{destination.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Why Choose This Package?</h4>
                    <ul className="space-y-2">
                      {destination.highlights.slice(0, 4).map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-700">
                          <span className="text-green-500">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "itinerary" && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Tour Itinerary</h3>
                <div className="space-y-4">
                  {destination.itinerary.map((day) => (
                    <div key={day.day} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                        Day {day.day}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{day.title}</h4>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "highlights" && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Package Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                      <span className="text-blue-500 text-lg">✨</span>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "inclusions" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-green-600">What's Included</h4>
                  <ul className="space-y-2">
                    {destination.inclusions.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-700">
                        <span className="text-green-500">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-red-600">What's Not Included</h4>
                  <ul className="space-y-2">
                    {destination.exclusions.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-700">
                        <span className="text-red-500">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Traveler Reviews</h3>
                  <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-semibold">{destination.rating}/5</span>
                    <span className="text-gray-600">({destination.reviews.length} reviews)</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {destination.reviews.map((review, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold">{review.name}</h4>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
                                  ⭐
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Destinations */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6">You Might Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(destinationDetails)
              .filter(d => d.slug !== destination.slug)
              .slice(0, 4)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/destinations/${related.slug}`}
                  className="block bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <div className="text-4xl mb-3 text-center">{related.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{related.title.split(' - ')[0]}</h4>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>⭐ {related.rating}</span>
                    <span>${related.price}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Book {destination.title}</h3>
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Travel Dates</label>
                <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                <textarea 
                  rows="3" 
                  placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Package Price</span>
                  <span className="font-semibold">${destination.price}/person</span>
                </div>
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span>Total Amount</span>
                  <span className="text-blue-600">${destination.price}</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}