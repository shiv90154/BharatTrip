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