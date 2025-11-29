"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------
// 🔥 ENHANCED SAMPLE DATA
// ---------------------------------------------
const destinationDetails = {

  /* -------------------------------------------------------------
     KASHMIR
  --------------------------------------------------------------*/
  kashmir: {
    title: "Kashmir - Paradise on Earth",
    slug: "kashmir",
    icon: "🏔️",
    flag: "🇮🇳",
    rating: 4.8,
    price: 299,
    originalPrice: 399,
    discount: 25,
    description:
      "Experience the breathtaking beauty of Dal Lake, Mughal gardens, and snow-capped Himalayas in the crown jewel of India.",
    detailedDescription:
      "Kashmir, often called 'Paradise on Earth', is a region of stunning natural beauty. From the serene Dal Lake with its iconic shikara rides to the majestic Himalayan peaks, every moment in Kashmir is magical. The region boasts beautiful Mughal gardens, ancient temples, and vibrant local markets. In winter, it transforms into a snowy wonderland perfect for skiing and snowboarding.",
    duration: "5-7 Days",
    groupSize: "2-12",
    temperature: "15°C",
    category: "hills",
    featured: true,

    images: [
      "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543413065-08e34b2c79cc?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598256981667-ffe9c9e8705f?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590663550613-84b8d57b3e2e?w=900&h=600&fit=crop"
    ],

    highlights: [
      "Shikara ride on Dal Lake",
      "Visit Mughal Gardens",
      "Gulmarg skiing experience",
      "Pahalgam valley trekking",
      "Local handicraft shopping",
      "Traditional Kashmiri cuisine"
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Check into houseboat, Shikara ride on Dal Lake during sunset",
        activities: ["Airport Pickup", "Houseboat Check-in", "Shikara Ride", "Sunset Viewing"],
        duration: "4 hours",
        accommodation: "Deluxe Houseboat"
      },
      {
        day: 2,
        title: "Mughal Gardens Tour",
        description: "Visit Nishat Bagh, Shalimar Bagh, and Chashme Shahi gardens",
        activities: ["Garden Tour", "Photography", "Local Lunch", "Cultural Show"],
        duration: "6 hours",
        accommodation: "Deluxe Houseboat"
      },
      {
        day: 3,
        title: "Gulmarg Adventure",
        description: "Gondola ride to Apharwat Peak, skiing and snow activities",
        activities: ["Gondola Ride", "Skiing", "Snowboarding", "Mountain Views"],
        duration: "8 hours",
        accommodation: "Mountain Resort"
      },
      {
        day: 4,
        title: "Pahalgam Exploration",
        description: "Explore Betaab Valley, Aru Valley, and Lidder River",
        activities: ["Valley Trek", "River Rafting", "Pony Ride", "Nature Walk"],
        duration: "7 hours",
        accommodation: "Valley Resort"
      },
      {
        day: 5,
        title: "Local Culture & Departure",
        description: "Visit local markets, handicraft centers, and departure",
        activities: ["Market Visit", "Shopping", "Airport Drop"],
        duration: "5 hours",
        accommodation: "N/A"
      }
    ],

    inclusions: [
      "4 Nights accommodation in premium hotels & houseboats",
      "Daily breakfast and dinner",
      "All transportation in private AC vehicle",
      "Sightseeing as per itinerary",
      "Professional tour guide services",
      "Shikara ride for 2 hours",
      "All applicable taxes"
    ],

    exclusions: [
      "Airfare to/from Srinagar",
      "Personal expenses and tips",
      "Travel insurance",
      "Optional activities",
      "Lunch during tours"
    ],

    bestTime: "March to October",
    difficulty: "Easy",
    popularity: 95,
    bookedCount: 1247,

    reviews: [
      {
        name: "Priya Sharma",
        rating: 5,
        comment:
          "Absolutely magical experience! The houseboat stay was unforgettable and the shikara ride during sunset was breathtaking.",
        date: "2024-01-15",
        avatar: "👩",
        verified: true
      },
      {
        name: "Rahul Verma",
        rating: 4,
        comment:
          "Beautiful destination, great food, and excellent service. The Gulmarg gondola ride was the highlight!",
        date: "2024-01-10",
        avatar: "👨",
        verified: true
      },
      {
        name: "Anita Desai",
        rating: 5,
        comment: "Perfect family vacation! Kids loved the snow activities and we enjoyed the peaceful Dal Lake.",
        date: "2024-01-08",
        avatar: "👩",
        verified: true
      }
    ],

    amenities: ["🏨 Hotel", "🍽️ Meals", "🚗 Transport", "🗣️ Guide", "📷 Photo Spots", "🎯 Activities"],
    tags: ["Family Friendly", "Honeymoon", "Adventure", "Cultural", "Photography"]
  },

  /* -------------------------------------------------------------
     MANALI
  --------------------------------------------------------------*/
  manali: {
    title: "Manali - Adventure Capital",
    slug: "manali",
    icon: "⛷️",
    flag: "🇮🇳",
    rating: 4.6,
    price: 8999,
    originalPrice: 12999,
    discount: 30,
    description:
      "Thrilling adventures await in the Himalayas with skiing, trekking, paragliding, and breathtaking mountain views.",
    detailedDescription:
      "Manali is one of India's most loved adventure destinations. Surrounded by pine forests, apple orchards, and snow-capped mountains, it offers everything from peaceful village strolls to high-adrenaline activities like paragliding and river rafting. Solang Valley and Rohtang Pass attract thrill-seekers each year. Local cafes, riverside camps, and yoga retreats make Manali perfect for both adventure lovers and peace seekers.",
    duration: "4-6 Days",
    groupSize: "2-8",
    temperature: "12°C",
    category: "adventure",
    featured: true,

    images: [
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563191799-1c19df3e06c5?w=900&h=600&fit=crop"
    ],

    highlights: [
      "Skiing in Solang Valley",
      "River rafting in Beas River",
      "Paragliding in Solang",
      "Visit Hidimba Temple",
      "Explore Old Manali cafes",
      "Snow adventure at Rohtang Pass"
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival & Local Manali Tour",
        description:
          "Hotel check-in, local sightseeing including Hadimba Temple, Vashisht hot springs and Mall Road.",
        activities: ["Hotel Check-in", "Hadimba Temple Visit", "Mall Road Shopping", "Cafe Hopping"],
        duration: "5 hours",
        accommodation: "Mountain View Hotel"
      },
      {
        day: 2,
        title: "Solang Valley Adventure",
        description: "Skiing, paragliding, ATV rides and snow play.",
        activities: ["Skiing", "Paragliding", "ATV Ride", "Snow Play"],
        duration: "7 hours",
        accommodation: "Mountain View Hotel"
      },
      {
        day: 3,
        title: "Rohtang Pass (If Open)",
        description:
          "Snow-capped mountains, glaciers, and breathtaking scenic views, perfect for adventure lovers.",
        activities: ["Snow Activities", "Photography", "Mountain Exploration"],
        duration: "8 hours",
        accommodation: "Mountain Resort"
      },
      {
        day: 4,
        title: "Kullu & River Rafting",
        description: "Drive to Kullu, enjoy professional rafting and visit Shawl Factory.",
        activities: ["River Rafting", "Shawl Factory Tour", "Local Shopping"],
        duration: "6 hours",
        accommodation: "Hotel or Departure"
      }
    ],

    inclusions: [
      "3 Nights hotel stay",
      "Daily breakfast and dinner",
      "Private vehicle for sightseeing",
      "Solang Valley adventure activities (basic package)",
      "Professional trip leader",
      "All toll taxes"
    ],

    exclusions: [
      "Rohtang Permit Fees",
      "Skiing / Paragliding cost",
      "Personal expenses",
      "Lunch meals",
      "Travel insurance"
    ],

    bestTime: "April to June, October to February",
    difficulty: "Moderate",
    popularity: 92,
    bookedCount: 982,

    reviews: [
      {
        name: "Amit Kumar",
        rating: 5,
        comment: "Best adventure trip! Solang Valley skiing experience was unforgettable.",
        date: "2024-02-10",
        avatar: "👨",
        verified: true
      },
      {
        name: "Sneha Patil",
        rating: 4,
        comment: "Loved the snow! Rohtang Pass was heavenly.",
        date: "2024-01-22",
        avatar: "👩",
        verified: true
      }
    ],

    amenities: ["🏨 Hotel", "🍽️ Meals", "🚗 Transport", "🎿 Skiing", "📸 Views", "🎢 Adventure Sports"],
    tags: ["Adventure", "Snow", "Family Trip", "Backpacking", "Nature"]
  },

  /* -------------------------------------------------------------
     GOA
  --------------------------------------------------------------*/
  goa: {
    title: "Goa - Beach Paradise",
    slug: "goa",
    icon: "🏖️",
    flag: "🇮🇳",
    rating: 4.5,
    price: 7999,
    originalPrice: 10999,
    discount: 27,
    description:
      "Sun-kissed beaches, vibrant nightlife, Portuguese heritage, and delicious seafood await in India's party capital.",
    detailedDescription:
      "Goa is India's most iconic beach destination known for its golden sands, vibrant nightlife, water sports, churches, and laid-back tropical vibe. Whether you're seeking relaxation, adventure, or a party retreat, Goa offers it all. North Goa is famous for beaches and nightlife, while South Goa offers luxury resorts and peaceful coastlines.",
    duration: "3-5 Days",
    groupSize: "2-10",
    temperature: "28°C",
    category: "beach",
    featured: false,

    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532619187606-7a5fa146db3f?w=900&h=600&fit=crop"
    ],

    highlights: [
      "Beach Parties",
      "Water Sports",
      "Portuguese Architecture",
      "Seafood",
      "Nightlife",
      "Cruise Experience"
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival & North Goa Beaches",
        description: "Visit Baga, Calangute & Candolim beaches.",
        activities: ["Beach Walk", "Water Sports", "Night Clubs"],
        duration: "6 hours",
        accommodation: "Beach Resort"
      },
      {
        day: 2,
        title: "South Goa Exploration",
        description: "Visit Colva, Palolem and heritage churches.",
        activities: ["Church Tour", "Boat Cruise", "Photography"],
        duration: "7 hours",
        accommodation: "Beach Resort"
      },
      {
        day: 3,
        title: "Adventure & Departure",
        description: "Parasailing / ATV / Jet Skiing and local shopping.",
        activities: ["Parasailing", "ATV Ride", "Seafood Lunch", "Shopping"],
        duration: "5 hours",
        accommodation: "N/A"
      }
    ],

    inclusions: [
      "2 Nights resort stay",
      "Breakfast included",
      "Airport transfers",
      "North & South Goa tour",
      "Boat cruise ticket",
      "All taxes"
    ],

    exclusions: ["Meals except breakfast", "Personal expenses", "Water sports charges", "Entry fees"],

    bestTime: "October to March",
    difficulty: "Easy",
    popularity: 89,
    bookedCount: 1105,

    reviews: [
      {
        name: "Pooja Singh",
        rating: 5,
        comment: "Best beach vacation ever! Loved the vibes of Baga Beach.",
        date: "2024-03-01",
        avatar: "👩",
        verified: true
      },
      {
        name: "Nishant Roy",
        rating: 4,
        comment: "Amazing nightlife and great seafood.",
        date: "2024-02-18",
        avatar: "👨",
        verified: true
      }
    ],

    amenities: ["🏖️ Beach", "⛵ Cruise", "🍹 Bar", "🍽️ Meals", "🚌 Transport"],
    tags: ["Beach", "Party", "Couple", "Friends", "Nightlife"]
  },

  /* -------------------------------------------------------------
     KERALA
  --------------------------------------------------------------*/
  kerala: {
    title: "Kerala - God's Own Country",
    slug: "kerala",
    icon: "🛶",
    flag: "🇮🇳",
    rating: 4.7,
    price: 11999,
    originalPrice: 15999,
    discount: 25,
    description:
      "Cruise through tranquil backwaters, explore lush tea plantations, and experience rich cultural traditions.",
    detailedDescription:
      "Kerala is known for its enchanting backwaters, tropical greenery, hill stations, ayurvedic wellness, and rich cultural heritage. From houseboat cruises to scenic Munnar tea plantations, Kerala offers a rejuvenating and peaceful travel experience.",
    duration: "6-8 Days",
    groupSize: "2-6",
    temperature: "26°C",
    category: "cultural",
    featured: true,

    images: [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1601292477599-2cc12ba97f1e?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598091373367-5a9c707fc92c?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583267746892-6f4ff7bcac28?w=900&h=600&fit=crop"
    ],

    highlights: ["Houseboat Cruise", "Ayurveda", "Tea Gardens", "Kathakali", "Backwaters", "Beaches"],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        description: "Fort Kochi sightseeing and marine drive.",
        activities: ["Chinese Fishing Nets", "Dutch Palace", "Local Market"],
        duration: "5 hours",
        accommodation: "City Hotel"
      },
      {
        day: 2,
        title: "Munnar Tea Estate Tour",
        description: "Visit tea gardens, waterfalls and scenic points.",
        activities: ["Tea Museum", "Photo Spots", "Waterfalls"],
        duration: "7 hours",
        accommodation: "Hill Resort"
      },
      {
        day: 3,
        title: "Thekkady Wildlife",
        description: "Periyar wildlife boat ride and spice garden visit.",
        activities: ["Boat Safari", "Spice Museum", "Cultural Show"],
        duration: "6 hours",
        accommodation: "Forest Resort"
      },
      {
        day: 4,
        title: "Alleppey Backwater Cruise",
        description: "Private houseboat stay with meals.",
        activities: ["Houseboat Cruise", "Village Tour", "Sunset View"],
        duration: "8 hours",
        accommodation: "Houseboat"
      },
      {
        day: 5,
        title: "Kovalam Beach Visit",
        description: "Relax at the beautiful white-sand beaches.",
        activities: ["Beach Walk", "Ayurveda Massage", "Shopping"],
        duration: "5 hours",
        accommodation: "Beach Resort"
      }
    ],

    inclusions: [
      "5 Nights hotel/houseboat stay",
      "Breakfast + all meals on houseboat",
      "Private Cab",
      "Backwater cruise",
      "Periyar boat safari",
      "All taxes"
    ],

    exclusions: ["Airfare", "Lunch except houseboat", "Optional shows", "Personal expenses"],

    bestTime: "October to February",
    difficulty: "Easy",
    popularity: 93,
    bookedCount: 1308,

    reviews: [
      {
        name: "Sonal Gupta",
        rating: 5,
        comment: "Houseboat stay was the best experience of my life.",
        date: "2024-02-12",
        avatar: "👩",
        verified: true
      }
    ],

    amenities: ["🛶 Houseboat", "🍽️ Meals", "🏞️ Nature", "🛺 Cab", "🎭 Cultural Shows"],
    tags: ["Nature", "Relaxation", "Couple", "Backwater"]
  },

  /* -------------------------------------------------------------
     RAJASTHAN
  --------------------------------------------------------------*/
  rajasthan: {
    title: "Rajasthan - Royal Heritage",
    slug: "rajasthan",
    icon: "🏯",
    flag: "🇮🇳",
    rating: 4.8,
    price: 15999,
    originalPrice: 20999,
    discount: 24,
    description:
      "Walk through the land of kings with majestic forts, opulent palaces, desert safaris, and vibrant cultural experiences.",
    detailedDescription:
      "Rajasthan is a land of royalty featuring magnificent forts, palaces, vibrant culture, camel safaris, and colorful markets. Cities like Jaipur, Jodhpur, Udaipur, and Jaisalmer attract travelers from across the world for their historical charm and cultural richness.",
    duration: "7-9 Days",
    groupSize: "2-8",
    temperature: "32°C",
    category: "cultural",
    featured: true,

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1596178065887-1198d43a2489?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589739902977-e78e3a6ca624?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599151805105-0e05b9070e28?w=900&h=600&fit=crop"
    ],

    highlights: ["Palace Stay", "Camel Safari", "Folk Dance", "Desert Camp", "Forts", "Lakes"],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        description: "Visit City Palace, Jantar Mantar & Hawa Mahal.",
        activities: ["Sightseeing", "Street Food", "Shopping"],
        duration: "6 hours",
        accommodation: "Heritage Hotel"
      },
      {
        day: 2,
        title: "Amber Fort & Nahargarh",
        description: "Elephant ride and hilltop views.",
        activities: ["Elephant Ride", "Photography", "Light Show"],
        duration: "7 hours",
        accommodation: "Heritage Hotel"
      },
      {
        day: 3,
        title: "Drive to Jodhpur",
        description: "Visit Mehrangarh Fort.",
        activities: ["Fort Tour", "Local Market"],
        duration: "6 hours",
        accommodation: "City Hotel"
      },
      {
        day: 4,
        title: "Udaipur Lakes",
        description: "Boat ride at Lake Pichola.",
        activities: ["Boat Ride", "Palace Tour", "Cultural Show"],
        duration: "5 hours",
        accommodation: "Lake View Hotel"
      }
    ],

    inclusions: [
      "Heritage hotel stays",
      "Breakfast included",
      "Private vehicle",
      "Guided tours",
      "Boat ride",
      "Camel safari"
    ],

    exclusions: ["Monument entry fees", "Lunch/dinner", "Personal expenses"],

    bestTime: "October to March",
    difficulty: "Easy",
    popularity: 97,
    bookedCount: 1450,

    reviews: [
      {
        name: "Rohit Mehra",
        rating: 5,
        comment: "Royal experience! Loved the desert camp and cultural show.",
        date: "2024-02-02",
        avatar: "👨",
        verified: true
      }
    ],

    amenities: ["🏯 Palace", "🐪 Safari", "🍽️ Meals", "🚗 Transport"],
    tags: ["Heritage", "Royal", "Culture", "History", "Couple"]
  },

  /* -------------------------------------------------------------
     ANDAMAN
  --------------------------------------------------------------*/
  andaman: {
    title: "Andaman Islands - Tropical Escape",
    slug: "andaman",
    icon: "🏝️",
    flag: "🇮🇳",
    rating: 4.9,
    price: 18999,
    originalPrice: 24999,
    discount: 24,
    description:
      "Pristine beaches, crystal-clear waters, and incredible marine life make this the perfect tropical getaway.",
    detailedDescription:
      "The Andaman Islands offer crystal-clear waters, white-sand beaches, stunning coral reefs, and exotic marine life. Perfect for honeymooners, families, and adventure enthusiasts, Andaman is famous for scuba diving, snorkeling, and luxurious island stays.",
    duration: "5-7 Days",
    groupSize: "2-6",
    temperature: "27°C",
    category: "beach",
    featured: false,

    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b4f863093fdc?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560251180-1b1de9d40ba4?w=900&h=600&fit=crop"
    ],

    highlights: ["Scuba Diving", "Beach Camping", "Coral Reefs", "Snorkeling", "Island Hopping"],

    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair",
        description: "Visit Cellular Jail and Corbyn’s Cove.",
        activities: ["Light Show", "Sightseeing"],
        duration: "5 hours",
        accommodation: "City Hotel"
      },
      {
        day: 2,
        title: "Havelock Island Trip",
        description: "Radhanagar Beach visit.",
        activities: ["Beach Time", "Photography"],
        duration: "6 hours",
        accommodation: "Beach Resort"
      },
      {
        day: 3,
        title: "Scuba Diving",
        description: "Dive in crystal-clear waters.",
        activities: ["Scuba", "Snorkeling"],
        duration: "7 hours",
        accommodation: "Beach Resort"
      }
    ],

    inclusions: [
      "3 Nights hotel stay",
      "Breakfast included",
      "Ferry transfers",
      "Snorkeling session",
      "Guide charges"
    ],

    exclusions: ["Scuba diving charges", "Meals", "Optional tours"],

    bestTime: "October to May",
    difficulty: "Moderate",
    popularity: 98,
    bookedCount: 1670,

    reviews: [
      {
        name: "Aisha Rahman",
        rating: 5,
        comment: "The best beaches in India. Scuba diving was heavenly.",
        date: "2024-03-05",
        avatar: "👩",
        verified: true
      }
    ],

    amenities: ["🏝️ Beach", "⛵ Ferry", "🍽️ Meals", "🏨 Resort"],
    tags: ["Beach", "Honeymoon", "Adventure", "Island"]
  },

  /* -------------------------------------------------------------
     LADAKH
  --------------------------------------------------------------*/
  ladakh: {
    title: "Ladakh - Mountain Desert",
    slug: "ladakh",
    icon: "🚵",
    flag: "🇮🇳",
    rating: 4.9,
    price: 21999,
    originalPrice: 27999,
    discount: 22,
    description:
      "High-altitude adventure with breathtaking landscapes, ancient monasteries, and challenging treks in the Himalayas.",
    detailedDescription:
      "Ladakh offers dramatic landscapes, high-altitude passes, crystal-clear lakes, ancient monasteries, and the ultimate adventure experience. Famous for Pangong Lake, Nubra Valley, Magnetic Hill, and Khardung La Pass.",
    duration: "8-10 Days",
    groupSize: "2-4",
    temperature: "8°C",
    category: "adventure",
    featured: true,

    images: [
      "https://images.unsplash.com/photo-1524492412937-b4f863093fdc?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544739313-65c2b4c79c3d?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1557821552-17105176677f?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4c3f?w=900&h=600&fit=crop"
    ],

    highlights: ["Bike Trip", "High Altitude Lakes", "Monasteries", "Trekking", "Camping"],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh",
        description:
          "Rest for high-altitude acclimatization and explore local markets.",
        activities: ["Acclimatization", "Sightseeing"],
        duration: "4 hours",
        accommodation: "Hotel"
      },
      {
        day: 2,
        title: "Shanti Stupa & Local Tour",
        description: "Visit Shanti Stupa, Leh Palace and Hall of Fame.",
        activities: ["Stupa Visit", "Photography"],
        duration: "6 hours",
        accommodation: "Hotel"
      },
      {
        day: 3,
        title: "Nubra Valley Trip",
        description: "Drive via Khardung La Pass.",
        activities: ["Mountain Drive", "Photography"],
        duration: "7 hours",
        accommodation: "Desert Camp"
      }
    ],

    inclusions: ["Hotel Stay", "Breakfast & Dinner", "Bike/Traveller", "Permits", "Camping"],

    exclusions: ["Flight", "Meals", "Bike damage fees"],

    bestTime: "June to September",
    difficulty: "Hard",
    popularity: 99,
    bookedCount: 1874,

    reviews: [
      {
        name: "Siddharth",
        rating: 5,
        comment: "Once in a lifetime experience. Pangong is unreal!",
        date: "2024-04-02",
        avatar: "👨",
        verified: true
      }
    ],

    amenities: ["🏔️ Mountains", "🚵 Bike", "🔥 Camp", "🍽️ Meals"],
    tags: ["Adventure", "Biking", "Trekking", "Camping"]
  },

  /* -------------------------------------------------------------
     VARANASI
  --------------------------------------------------------------*/
  varanasi: {
    title: "Varanasi - Spiritual Capital",
    slug: "varanasi",
    icon: "🛕",
    flag: "🇮🇳",
    rating: 4.4,
    price: 6999,
    originalPrice: 9999,
    discount: 30,
    description:
      "Experience ancient spiritual rituals, sacred Ganga Aarti, and the timeless culture of India's oldest living city.",
    detailedDescription:
      "Varanasi, the spiritual heart of India, is known for its ghats, temples, rituals, and ancient heritage. Witnessing Ganga Aarti is one of the most divine experiences.",
    duration: "2-4 Days",
    groupSize: "1-8",
    temperature: "30°C",
    category: "spiritual",
    featured: false,

    images: [
      "https://images.unsplash.com/photo-1589308078052-6123d87f1fd8?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562335678-6a7ab4cc73f2?w=900&h=600&fit=crop"
    ],

    highlights: ["Ganga Aarti", "Temple Tour", "Boat Ride", "Yoga"],

    itinerary: [
      {
        day: 1,
        title: "Arrival & Ghat Visit",
        description: "Evening Aarti at Dashashwamedh Ghat.",
        activities: ["Aarti", "Boat Ride"],
        duration: "4 hours",
        accommodation: "City Hotel"
      },
      {
        day: 2,
        title: "Temple Tour",
        description: "Visit Kashi Vishwanath Temple & BHU.",
        activities: ["Temple Visit", "Local Market"],
        duration: "6 hours",
        accommodation: "City Hotel"
      }
    ],

    inclusions: ["Hotel Stay", "Breakfast", "Boat Ride", "Local Guide"],

    exclusions: ["Entry Fees", "Lunch", "Personal Expenses"],

    bestTime: "October to March",
    difficulty: "Easy",
    popularity: 88,
    bookedCount: 760,

    reviews: [
      {
        name: "Riya Sen",
        rating: 5,
        comment: "Ganga Aarti was mesmerizing!",
        date: "2024-03-10",
        avatar: "👩",
        verified: true
      }
    ],

    amenities: ["🛕 Temple", "🛶 Boat", "🍽️ Food"],
    tags: ["Spiritual", "Culture", "Pilgrimage"]
  },

  /* -------------------------------------------------------------
     RISHIKESH
  --------------------------------------------------------------*/
  rishikesh: {
    title: "Rishikesh - Yoga Capital",
    slug: "rishikesh",
    icon: "🧘",
    flag: "🇮🇳",
    rating: 4.6,
    price: 5999,
    originalPrice: 8999,
    discount: 33,
    description:
      "Find your inner peace with yoga, meditation, and adventure sports in the foothills of the Himalayas.",
    detailedDescription:
      "Rishikesh is world-famous for yoga, meditation, river rafting, spiritual ashrams, and peaceful Himalayan views. Perfect for both adventure and inner healing.",
    duration: "3-5 Days",
    groupSize: "1-10",
    temperature: "22°C",
    category: "spiritual",
    featured: false,

    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&h=600&fit=crop"
    ],

    highlights: ["Yoga Retreat", "River Rafting", "Meditation", "Temples"],

    itinerary: [
      {
        day: 1,
        title: "Arrival & Ghat Visit",
        description: "Triveni Ghat aarti.",
        activities: ["Aarti", "Sightseeing"],
        duration: "4 hours",
        accommodation: "Yoga Ashram"
      },
      {
        day: 2,
        title: "Yoga & Meditation",
        description: "Morning yoga, lunch, and rafting.",
        activities: ["Yoga", "Meditation", "Rafting"],
        duration: "6 hours",
        accommodation: "Ashram"
      }
    ],

    inclusions: ["Ashram Stay", "Breakfast & Dinner", "Yoga Sessions", "Rafting"],

    exclusions: ["Lunch", "Personal expenses"],

    bestTime: "September to April",
    difficulty: "Easy",
    popularity: 90,
    bookedCount: 910,

    reviews: [
      {
        name: "Harshit",
        rating: 5,
        comment: "Perfect place to relax and connect spiritually.",
        date: "2024-02-05",
        avatar: "👨",
        verified: true
      }
    ],

    amenities: ["🧘 Yoga", "🛶 Rafting", "🌄 Nature"],
    tags: ["Yoga", "Peace", "Meditation", "Adventure"]
  }

};


// ---------------------------------------------
// ⚡ ENHANCED ANIMATION VARIANTS
// ---------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

// ---------------------------------------------
// 🎯 REUSABLE COMPONENTS
// ---------------------------------------------
const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating})</span>
    </div>
  );
};

const ImageGallery = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <div className="space-y-4">
      <motion.div
        key={selectedImage}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100"
      >
        <img
          src={images[selectedImage]}
          alt="Destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:scale-110 transition-transform">
            ❤️
          </button>
          <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:scale-110 transition-transform">
            📷
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((img, index) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative rounded-xl overflow-hidden h-20 transition-all duration-300 ${
              selectedImage === index 
                ? "ring-3 ring-blue-500 scale-105 shadow-lg" 
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const BookingModal = ({ destination, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
    rooms: 1,
    specialRequests: ""
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
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold">Book {destination.title}</h3>
                <p className="text-gray-600">Complete your booking details</p>
              </div>
              <button 
                onClick={onClose}
                className="text-2xl hover:text-red-500 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl">
                <p className="text-sm text-gray-600">Total Price</p>
                <p className="text-3xl font-bold text-blue-600">${destination.price}</p>
                <p className="text-sm text-gray-500 line-through">${destination.originalPrice}</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                <p className="text-sm text-gray-600">You Save</p>
                <p className="text-2xl font-bold text-green-600">${destination.originalPrice - destination.price}</p>
                <p className="text-sm text-green-600">{destination.discount}% OFF</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Check-in</label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                    className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Check-out</label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                    className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                    className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Rooms</label>
                  <select
                    value={formData.rooms}
                    onChange={(e) => setFormData({...formData, rooms: parseInt(e.target.value)})}
                    className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[1,2,3,4].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Room' : 'Rooms'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Special Requests</label>
                <textarea
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  placeholder="Any special requirements or preferences..."
                  className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl py-4 font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                🎒 Proceed to Payment - ${destination.price}
              </button>
              
              <button className="w-full border-2 border-gray-300 text-gray-700 rounded-xl py-4 font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                💬 Contact for Customization
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
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
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (slug && destinationDetails[slug]) {
      setDestination(destinationDetails[slug]);
      // Check if favorite from localStorage
      const favorites = JSON.parse(localStorage.getItem('favoriteDestinations') || '[]');
      setIsFavorite(favorites.includes(slug));
    }
  }, [slug]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteDestinations') || '[]');
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter(fav => fav !== slug);
    } else {
      newFavorites = [...favorites, slug];
    }
    
    localStorage.setItem('favoriteDestinations', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">🌍</div>
          <h2 className="text-2xl font-bold mb-4">Destination Not Found</h2>
          <Link 
            href="/destinations" 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Browse All Destinations
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
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* 🧭 BREADCRUMB */}
        <motion.nav variants={fadeUp} className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/destinations" className="hover:text-blue-600 transition-colors">Destinations</Link>
          <span>›</span>
          <span className="font-semibold text-gray-900">{destination.title}</span>
        </motion.nav>

        {/* 🎆 HERO SECTION */}
        <motion.section variants={fadeUp} className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            
            {/* IMAGE GALLERY */}
            <ImageGallery 
              images={destination.images}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />

            {/* RIGHT CONTENT */}
            <div className="space-y-6">
              {/* HEADER */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {destination.discount}% OFF
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ {destination.rating} Rating
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {destination.title}
                  </h1>
                  <p className="text-gray-600 flex items-center gap-4">
                    <span>{destination.flag}</span>
                    <span>•</span>
                    <span className="capitalize">{destination.category}</span>
                    <span>•</span>
                    <span>🔥 {destination.popularity}% Popular</span>
                  </p>
                </div>
                <button
                  onClick={toggleFavorite}
                  className={`text-3xl p-3 rounded-xl transition-all ${
                    isFavorite 
                      ? "text-red-500 bg-red-50" 
                      : "text-gray-400 bg-gray-100 hover:text-red-500"
                  }`}
                >
                  {isFavorite ? "❤️" : "🤍"}
                </button>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {destination.detailedDescription}
              </p>

              {/* QUICK STATS */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { 
                    label: "Duration", 
                    value: destination.duration, 
                    icon: "⏱️",
                    color: "blue" 
                  },
                  { 
                    label: "Price", 
                    value: `$${destination.price}`,
                    original: `$${destination.originalPrice}`,
                    icon: "💰",
                    color: "green" 
                  },
                  { 
                    label: "Group Size", 
                    value: destination.groupSize, 
                    icon: "👥",
                    color: "purple" 
                  },
                  { 
                    label: "Best Time", 
                    value: destination.bestTime, 
                    icon: "🌤️",
                    color: "orange" 
                  },
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    variants={scaleIn}
                    className={`p-4 bg-${stat.color}-50 rounded-xl border-l-4 border-${stat.color}-500`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{stat.icon}</span>
                      <div>
                        <div className="font-bold text-gray-900">{stat.value}</div>
                        {stat.original && (
                          <div className="text-sm text-gray-500 line-through">{stat.original}</div>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {destination.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setIsBookingModalOpen(true)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  🎒 Book Now - ${destination.price}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all"
                >
                  📞 Instant Callback
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 📑 ENHANCED TABS */}
        <motion.div variants={fadeUp} className="bg-white rounded-3xl shadow-lg overflow-hidden">
          
          {/* TAB HEADER */}
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
                className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 font-semibold border-b-2 transition-all min-w-max ${
                  activeTab === tab.id 
                    ? "border-blue-600 text-blue-600 bg-blue-50" 
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.label}
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
                
                {/* OVERVIEW TAB */}
                {activeTab === "overview" && (
                  <motion.div variants={staggerContainer} className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <motion.div variants={fadeUp}>
                        <h3 className="text-2xl font-bold mb-6">About This Destination</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {destination.detailedDescription}
                        </p>
                        
                        <div className="mt-6 grid grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Amenities</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {destination.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                  <span>{amenity.split(' ')[0]}</span>
                                  <span>{amenity.split(' ')[1]}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Quick Facts</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between py-2 border-b">
                                <span className="text-gray-600">Best Time</span>
                                <span className="font-semibold">{destination.bestTime}</span>
                              </div>
                              <div className="flex justify-between py-2 border-b">
                                <span className="text-gray-600">Difficulty</span>
                                <span className="font-semibold">{destination.difficulty}</span>
                              </div>
                              <div className="flex justify-between py-2 border-b">
                                <span className="text-gray-600">Popularity</span>
                                <span className="font-semibold">{destination.popularity}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <h4 className="text-xl font-semibold mb-4">Why Travelers Love This</h4>
                        <div className="space-y-4">
                          {destination.highlights.slice(0, 4).map((highlight, index) => (
                            <motion.div
                              key={index}
                              variants={scaleIn}
                              className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                            >
                              <span className="text-blue-600 text-xl mt-1">✨</span>
                              <span className="font-medium">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* ITINERARY TAB */}
                {activeTab === "itinerary" && (
                  <div className="space-y-6">
                    {destination.itinerary.map((day, index) => (
                      <motion.div
                        key={day.day}
                        variants={fadeUp}
                        className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-l-4 border-blue-500"
                      >
                        <div className="flex gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex flex-col items-center justify-center font-bold">
                              <span className="text-sm">DAY</span>
                              <span className="text-xl">{day.day}</span>
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="text-xl font-bold text-gray-900">{day.title}</h4>
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {day.duration}
                              </span>
                            </div>
                            
                            <p className="text-gray-700 mb-4">{day.description}</p>
                            
                            <div className="mb-4">
                              <h5 className="font-semibold text-gray-900 mb-2">Activities:</h5>
                              <div className="flex flex-wrap gap-2">
                                {day.activities.map((activity, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border"
                                  >
                                    {activity}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div className="text-sm text-gray-600">
                              <strong>Accommodation:</strong> {day.accommodation}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* HIGHLIGHTS TAB */}
                {activeTab === "highlights" && (
                  <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destination.highlights.map((highlight, index) => (
                      <motion.div
                        variants={scaleIn}
                        key={index}
                        className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                            {index + 1}
                          </div>
                          <span className="text-lg font-semibold text-gray-900">{highlight}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* INCLUSIONS TAB */}
                {activeTab === "inclusions" && (
                  <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div variants={fadeUp}>
                      <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                        <h4 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
                          <span>✅</span> What's Included
                        </h4>
                        <ul className="space-y-3">
                          {destination.inclusions.map((item, idx) => (
                            <motion.li
                              key={idx}
                              variants={fadeUp}
                              className="flex items-start gap-3 text-green-700"
                            >
                              <span className="text-green-500 mt-1">✓</span>
                              <span className="font-medium">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                        <h4 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
                          <span>❌</span> What's Not Included
                        </h4>
                        <ul className="space-y-3">
                          {destination.exclusions.map((item, idx) => (
                            <motion.li
                              key={idx}
                              variants={fadeUp}
                              className="flex items-start gap-3 text-red-700"
                            >
                              <span className="text-red-500 mt-1">✗</span>
                              <span className="font-medium">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* REVIEWS TAB */}
                {activeTab === "reviews" && (
                  <motion.div variants={staggerContainer} className="space-y-6">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-2xl font-bold">Traveler Reviews</h3>
                        <p className="text-gray-600">What our guests say about their experience</p>
                      </div>
                      <div className="text-center bg-blue-50 rounded-2xl p-4">
                        <div className="text-3xl font-bold text-blue-600">{destination.rating}</div>
                        <RatingStars rating={destination.rating} />
                        <div className="text-sm text-gray-600 mt-1">{destination.reviews.length} reviews</div>
                      </div>
                    </div>

                    {destination.reviews.map((review, idx) => (
                      <motion.div 
                        key={idx} 
                        variants={fadeUp}
                        className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                              {review.avatar}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">{review.name}</h4>
                              <div className="flex items-center gap-2">
                                <RatingStars rating={review.rating} />
                                {review.verified && (
                                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                                    ✅ Verified
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 🔗 RELATED DESTINATIONS */}
        <motion.div variants={fadeUp} className="bg-white rounded-3xl shadow-lg p-8 mt-12">
          <h3 className="text-2xl font-bold mb-2">You May Also Like</h3>
          <p className="text-gray-600 mb-6">Similar destinations you might love</p>

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
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 cursor-pointer shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
                >
                  <Link href={`/destinations/${related.slug}`}>
                    <div className="text-center text-5xl mb-4">{related.icon}</div>
                    <h4 className="font-bold text-lg text-gray-900 text-center mb-2">
                      {related.title.split(" - ")[0]}
                    </h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1">
                        ⭐ {related.rating}
                      </span>
                      <span className="font-bold text-blue-600">${related.price}</span>
                    </div>
                    <div className="mt-3 text-xs text-gray-500 text-center">
                      {related.duration} • {related.groupSize}
                    </div>
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 🎉 ENHANCED BOOKING MODAL */}
      <BookingModal 
        destination={destination}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* 🎯 FLOATING BOOKING CTA */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 flex items-center gap-4">
          <div>
            <div className="font-bold text-gray-900">${destination.price}</div>
            <div className="text-sm text-gray-500 line-through">${destination.originalPrice}</div>
          </div>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Book Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}