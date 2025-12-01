const packagesData = [
/* -----------------------------------------------------------
   1) Romantic Gateway to Shimla & Manali – 5N/6D – 29,000
----------------------------------------------------------- */
{
  title: "Romantic Gateway to Shimla & Manali",
  slug: "romantic-shimla-manali-5n6d",
  duration: "5N/6D",
  price: 29000,
  originalPrice: 34000,
  discount: 15,
  rating: 4.7,
  reviews: 112,
  location: "Shimla, Manali",
  category: "honeymoon",
  featured: true,
  tags: ["Couple", "Honeymoon", "Romantic"],

  image: "https://images.unsplash.com/photo-1571407975397-897c5c7ab27c?w=600",
  images: [
    "https://images.unsplash.com/photo-1571407975397-897c5c7ab27c?w=900",
    "https://images.unsplash.com/photo-1519060825752-c4832f2d4d2c?w=900",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900",
    "https://images.unsplash.com/photo-1529881136952-3f64053a45ee?w=900"
  ],

  about:
    "A perfect romantic escape to the hills of Shimla and Manali. Enjoy snow activities, peaceful hill views, and romantic experiences like candlelight dinner & flower decoration.",

  highlights: [
    "Shimla Mall Road & Ridge",
    "Kufri Snow Point",
    "Manali Solang Valley",
    "Flower Bed Decoration",
    "Candle Light Dinner",
    "Private Cab for Transfers"
  ],

  itinerary: [
    {
      day: 1,
      title: "Delhi → Shimla",
      details:
        "Pickup from Delhi & drive to Shimla. Evening Mall Road visit.",
      activities: ["Mall Road", "Local Market", "Check-in"]
    },
    {
      day: 2,
      title: "Shimla Kufri Sightseeing",
      details:
        "Visit Kufri, Himalayan Zoo, Green Valley & Jakhoo Temple.",
      activities: ["Kufri", "Jakhoo Temple", "Zoo Visit"]
    },
    {
      day: 3,
      title: "Shimla → Manali",
      details:
        "Drive through scenic mountains to reach Manali.",
      activities: ["Mountain Drive", "Check-in", "Free Evening"]
    },
    {
      day: 4,
      title: "Manali Solang Valley",
      details:
        "Adventure activities — Paragliding, ATV, Skiing (seasonal).",
      activities: ["Solang Valley", "Adventure Sports"]
    },
    {
      day: 5,
      title: "Manali Local Tour",
      details:
        "Visit Hadimba Temple, Vashisht Temple & Mall Road.",
      activities: ["Hadimba Temple", "Mall Road"]
    },
    {
      day: 6,
      title: "Departure",
      details: "Return to Delhi with romantic memories.",
      activities: ["Breakfast", "Checkout"]
    }
  ],

  inclusions: [
    "5 Nights Hotel Stay",
    "Daily Breakfast & Dinner",
    "Private Cab for Transfers",
    "Flower Decoration (1 Night)",
    "Candle Light Dinner (1 Night)",
    "All Toll & Taxes"
  ],

  exclusions: [
    "Entry Fees",
    "Personal Expenses",
    "Adventure Activity Charges",
    "Lunch"
  ],

  quickFacts: [
    { icon: "🏨", text: "3-Star Hotels" },
    { icon: "❤️", text: "Romantic Setup" },
    { icon: "🚗", text: "Private Cab" }
  ]
},

/* -----------------------------------------------------------
   2) Highlights of Kashmir – Srinagar to Srinagar – 5N/6D
----------------------------------------------------------- */
{
  title: "Highlights of Kashmir (Srinagar to Srinagar)",
  slug: "kashmir-srinagar-5n6d",
  duration: "5N/6D",
  price: 35000,
  originalPrice: 39999,
  discount: 12,
  rating: 4.8,
  reviews: 189,
  category: "mountain",
  location: "Srinagar, Gulmarg, Pahalgam",
  featured: true,
  tags: ["Nature", "Family", "Honeymoon"],

  image: "https://images.unsplash.com/photo-1590663550613-84b8d57b3e2e?w=600",
  images: [
    "https://images.unsplash.com/photo-1598256981667-ffe9c9e8705f?w=900",
    "https://images.unsplash.com/photo-1590663550613-84b8d57b3e2e?w=900",
    "https://images.unsplash.com/photo-1543413065-08e34b2c79cc?w=900",
    "https://images.unsplash.com/photo-1594300955127-95f47df1e630?w=900"
  ],

  about:
    "Experience the top attractions of Kashmir with this 6-day itinerary covering Srinagar, Gulmarg, and Pahalgam.",

  highlights: [
    "Shikara Ride",
    "Gulmarg Gondola Ride",
    "Pahalgam Valleys",
    "Mughal Garden Tour",
    "Houseboat Stay"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar",
      details: "Shikara Ride in Dal Lake.",
      activities: ["Shikara Ride", "Houseboat Stay"]
    },
    {
      day: 2,
      title: "Srinagar Local",
      details: "Visit Mughal Gardens & Shankaracharya Temple.",
      activities: ["Shalimar Bagh", "Nishat Bagh", "Temple Visit"]
    },
    {
      day: 3,
      title: "Gulmarg Trip",
      details: "Full-day excursion for Gondola ride.",
      activities: ["Gondola Ride", "Snow Activities"]
    },
    {
      day: 4,
      title: "Pahalgam Tour",
      details: "Visit Betaab Valley, Aru Valley.",
      activities: ["Valley Visits", "Photography"]
    },
    {
      day: 5,
      title: "Srinagar Day",
      details: "Shopping & leisure.",
      activities: ["Local Market"]
    },
    {
      day: 6,
      title: "Departure",
      details: "Drop to Srinagar Airport.",
      activities: ["Airport Drop"]
    }
  ],

  inclusions: [
    "5 Nights Hotel/Houseboat Stay",
    "Breakfast & Dinner",
    "Gondola Phase 1 Tickets",
    "Private Cab",
    "Shikara Ride"
  ],

  exclusions: [
    "Lunch",
    "Pony Ride",
    "Snow Activity Charges"
  ],

  quickFacts: [
    { icon: "❄️", text: "Snow Paradise" },
    { icon: "🚠", text: "Gondola Ride" }
  ]
},

/* -----------------------------------------------------------
   3) Kashmir – Jammu to Jammu – 5N/6D
----------------------------------------------------------- */
{
  title: "Highlights of Kashmir (Jammu to Jammu)",
  slug: "kashmir-jammu-5n6d",
  duration: "5N/6D",
  price: 35000,
  originalPrice: 40000,
  discount: 12,
  rating: 4.7,
  reviews: 164,
  category: "mountain",
  location: "Jammu, Patnitop, Srinagar, Gulmarg",

  image: "https://images.unsplash.com/photo-1625246333195-78ea0b990e66?w=600",
  images: [
    "https://images.unsplash.com/photo-1625246333195-78ea0b990e66?w=900",
    "https://images.unsplash.com/photo-1587675147295-3687b4e06b4e?w=900",
    "https://images.unsplash.com/photo-1571474004509-03b63a745df9?w=900"
  ],

  about:
    "Start your Kashmir trip from Jammu with stops like Patnitop before heading to Srinagar, Pahalgam & Gulmarg.",

  highlights: ["Patnitop", "Houseboat Stay", "Gulmarg Valley"],

  itinerary: [
    { day: 1, title: "Jammu → Patnitop", details: "Visit Nathatop." },
    { day: 2, title: "Patnitop → Srinagar", details: "Dal Lake evening." },
    { day: 3, title: "Srinagar Tour", details: "Mughal Gardens." },
    { day: 4, title: "Gulmarg Trip", details: "Snow activities." },
    { day: 5, title: "Pahalgam", details: "Valley visits." },
    { day: 6, title: "Return to Jammu", details: "Departure." }
  ],

  inclusions: [
    "5 Nights Stay",
    "Cab Transport",
    "Breakfast & Dinner"
  ],

  exclusions: ["Entry Fees", "Lunch", "Adventure Activities"],

  quickFacts: [
    { icon: "🏔️", text: "Himalayan Views" }
  ]
},

/* -----------------------------------------------------------
   4) Charming Shimla & Manali – Honeymoon – 5N/6D
----------------------------------------------------------- */
{
  title: "Charming Shimla & Manali (Honeymoon)",
  slug: "charming-shimla-manali-5n6d",
  duration: "5N/6D",
  price: 30000,
  originalPrice: 34000,
  discount: 12,
  rating: 4.8,
  reviews: 210,
  category: "honeymoon",
  featured: true,
  location: "Shimla, Manali",
  tags: ["Couple", "Romantic", "Luxury"],

  image: "https://images.unsplash.com/photo-1519060825752-c4832f2d4d2c?w=600",
  images: [
    "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=900",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900",
    "https://images.unsplash.com/photo-1529881136952-3f64053a45ee?w=900"
  ],

  about:
    "The most loved North India honeymoon package featuring romantic decorations & beautiful hill destinations.",

  highlights: [
    "Candle Light Dinner",
    "Flower Decoration",
    "Solang Valley",
    "Kufri Tour"
  ],

  itinerary: [
    { day: 1, title: "Delhi → Shimla", details: "Welcome & check-in." },
    { day: 2, title: "Kufri Trip", details: "Adventure activities." },
    { day: 3, title: "Shimla → Manali", details: "Scenic drive." },
    { day: 4, title: "Solang Valley", details: "Adventure day." },
    { day: 5, title: "Local Manali", details: "Temples & Mall Road." },
    { day: 6, title: "Departure", details: "Back to Delhi." }
  ],

  inclusions: [
    "Honeymoon Room Decoration",
    "Candle Light Dinner",
    "Private Cab",
    "5 Nights Stay"
  ],

  exclusions: ["Lunch", "Entry Fees", "Adventure Charges"],

  quickFacts: [{ icon: "💐", text: "Honeymoon Special" }]
},

/* -----------------------------------------------------------
   5) Beautiful Himachal Honeymoon – 8N/9D
----------------------------------------------------------- */
{
  title: "Beautiful Himachal Honeymoon",
  slug: "beautiful-himachal-honeymoon-8n9d",
  duration: "8N/9D",
  price: 42000,
  originalPrice: 48000,
  discount: 13,
  rating: 4.9,
  reviews: 155,
  location: "Shimla, Manali, Dharamshala, Dalhousie",
  category: "honeymoon",
  featured: true,

  image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600",
  images: [
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900",
    "https://images.unsplash.com/photo-1545324418-6f69b45137ab?w=900",
    "https://images.unsplash.com/photo-1544511916-0148ccdeb877?w=900"
  ],

  about:
    "A long romantic journey covering the best locations of Himachal—perfect for couples who want a relaxed & scenic hill holiday.",

  highlights: ["Khajjiar", "Solang", "Romantic Decor", "Dalai Lama Temple"],

  itinerary: [
    { day: 1, title: "Delhi → Shimla" },
    { day: 2, title: "Kufri Trip" },
    { day: 3, title: "Shimla → Manali" },
    { day: 4, title: "Solang Valley" },
    { day: 5, title: "Manali → Dharamshala" },
    { day: 6, title: "Dharamshala Tour" },
    { day: 7, title: "Dharamshala → Dalhousie" },
    { day: 8, title: "Khajjiar Trip" },
    { day: 9, title: "Departure" }
  ],

  inclusions: [
    "8 Nights Stay",
    "Breakfast & Dinner",
    "All Transfers",
    "Flower Decoration & Candlelight Dinner"
  ],

  exclusions: ["Lunch", "Entry Tickets"],

  quickFacts: [{ icon: "❤️", text: "Long Honeymoon Trip" }]
},

/* -----------------------------------------------------------
   6) Exotic Manali by Volvo – 3N/4D
----------------------------------------------------------- */
{
  title: "Exotic Manali by Volvo",
  slug: "exotic-manali-volvo-3n4d",
  duration: "3N/4D",
  price: 26000,
  originalPrice: 30000,
  discount: 13,
  rating: 4.5,
  reviews: 98,
  category: "mountain",
  featured: false,
  location: "Manali",

  image: "https://images.unsplash.com/photo-1544282030-9b1420d027dc?w=600",
  images: [
    "https://images.unsplash.com/photo-1544282030-9b1420d027dc?w=900",
    "https://images.unsplash.com/photo-1517260739337-6799d1406a48?w=900",
    "https://images.unsplash.com/photo-1520437621716-3f7b1d3c3b40?w=900"
  ],

  about:
    "A budget-friendly Manali tour with Volvo transfers and comfortable stay.",

  highlights: ["Solang Valley", "Mall Road", "Hadimba Temple"],

  itinerary: [
    { day: 1, title: "Delhi → Manali (Volvo)" },
    { day: 2, title: "Manali Local Tour" },
    { day: 3, title: "Solang Valley Trip" },
    { day: 4, title: "Return to Delhi" }
  ],

  inclusions: [
    "Volvo Tickets",
    "3 Nights Stay",
    "Breakfast & Dinner"
  ],

  exclusions: ["Adventure Activities", "Lunch"],

  quickFacts: [{ icon: "🚌", text: "Volvo Travel" }]
},

/* -----------------------------------------------------------
   7) Rajasthan MICE Tour – 8N/9D
----------------------------------------------------------- */
{
  title: "Rajasthan MICE Tour",
  slug: "rajasthan-mice-tour-8n9d",
  duration: "8N/9D",
  price: 46000,
  originalPrice: 52000,
  discount: 12,
  rating: 4.7,
  reviews: 120,
  category: "corporate",
  featured: true,
  location: "Jaipur, Bikaner, Jaisalmer, Jodhpur",

  image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=600",
  images: [
    "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=900",
    "https://images.unsplash.com/photo-1603264041193-18e2f8f4e3a9?w=900",
    "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=900"
  ],

  about:
    "Perfect corporate Rajasthan tour designed for business groups, events & corporate meetings combined with leisure travel.",

  highlights: ["Corporate Events", "Desert Camp", "Fort Visits"],

  itinerary: [
    { day: 1, title: "Jaipur Arrival" },
    { day: 2, title: "Jaipur Sightseeing" },
    { day: 3, title: "Jaipur → Bikaner" },
    { day: 4, title: "Bikaner → Jaisalmer" },
    { day: 5, title: "Jaisalmer Desert Camp" },
    { day: 6, title: "Jaisalmer → Jodhpur" },
    { day: 7, title: "Jodhpur Fort Tour" },
    { day: 8, title: "Corporate Evening Event" },
    { day: 9, title: "Departure" }
  ],

  inclusions: [
    "Conference Hall",
    "Corporate Event Setup",
    "8 Nights Stay",
    "Breakfast & Dinner"
  ],

  exclusions: ["Alcohol", "Personal Expenses"],

  quickFacts: [{ icon: "🏢", text: "Corporate Group Trip" }]
}
,
/* -----------------------------------------------------------
   8) Romantic Escape – Manali & Dharamshala – 5N/6D – 38000
----------------------------------------------------------- */
{
  title: "Romantic Escape Manali & Dharamshala",
  slug: "romantic-manali-dharamshala-5n6d",
  duration: "5N/6D",
  price: 38000,
  originalPrice: 42000,
  discount: 10,
  rating: 4.6,
  reviews: 142,
  category: "honeymoon",
  featured: true,
  location: "Manali, Dharamshala",
  tags: ["Couple", "Romantic", "Honeymoon"],

  image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=600",
  images: [
    "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=900",
    "https://images.unsplash.com/photo-1544511916-0148ccdeb877?w=900",
    "https://images.unsplash.com/photo-1545324418-6f69b45137ab?w=900"
  ],

  about:
    "A romantic journey through beautiful destinations like Solang Valley and Dharamshala monasteries with perfect peaceful vibes.",

  highlights: [
    "Solang Valley Adventure",
    "Tea Gardens in Dharamshala",
    "Monasteries Visit",
    "Romantic Room Decoration"
  ],

  itinerary: [
    { day: 1, title: "Delhi → Manali (Volvo/Private)", details: "Reach Manali." },
    { day: 2, title: "Manali Local", details: "Hadimba, Club House, Mall Road." },
    { day: 3, title: "Solang Valley", details: "Adventure sports." },
    { day: 4, title: "Manali → Dharamshala", details: "Scenic mountain drive." },
    { day: 5, title: "Dharamshala Tour", details: "Dalai Lama Temple & Tea Gardens." },
    { day: 6, title: "Departure", details: "Return journey." }
  ],

  inclusions: ["5 Nights Stay", "Breakfast & Dinner", "Private Cab"],
  exclusions: ["Entry Fees", "Adventure Charges"],
  quickFacts: [{ icon: "🌄", text: "Romantic Hill Escape" }]
},

/* -----------------------------------------------------------
   9) Adventurous Jaisalmer, Jodhpur & Udaipur – 6D – 41000
----------------------------------------------------------- */
{
  title: "Adventurous Jaisalmer, Jodhpur & Udaipur",
  slug: "jaisalmer-jodhpur-udaipur-6d",
  duration: "6D",
  price: 41000,
  originalPrice: 46000,
  discount: 11,
  rating: 4.8,
  reviews: 167,
  category: "cultural",
  featured: true,
  location: "Jaisalmer, Jodhpur, Udaipur",
  tags: ["Culture", "Adventure", "Family"],

  image: "https://images.unsplash.com/photo-1603264041193-18e2f8f4e3a9?w=600",
  images: [
    "https://images.unsplash.com/photo-1603264041193-18e2f8f4e3a9?w=900",
    "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=900",
    "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=900"
  ],

  about:
    "A stunning Rajasthan tour filled with history, culture, forts, palaces, and desert adventure in Jaisalmer.",

  highlights: [
    "Desert Camp Stay",
    "Camel Safari",
    "Mehrangarh Fort",
    "Udaipur City Palace",
    "Boat Ride at Lake Pichola"
  ],

  itinerary: [
    { day: 1, title: "Arrival Jodhpur", details: "Mehrangarh Fort tour." },
    { day: 2, title: "Jodhpur → Jaisalmer", details: "Sightseeing enroute." },
    { day: 3, title: "Jaisalmer Fort & Desert", details: "Camel safari & camp night." },
    { day: 4, title: "Jaisalmer → Udaipur", details: "Drive to Udaipur." },
    { day: 5, title: "Udaipur Tour", details: "City Palace, Lake Pichola." },
    { day: 6, title: "Departure", details: "Return home." }
  ],

  inclusions: [
    "5 Nights Stay",
    "Breakfast & Dinner",
    "Desert Camp with Cultural Show"
  ],

  exclusions: ["Lunch", "Monument Tickets"],
  quickFacts: [{ icon: "🏜️", text: "Rajasthan Desert Experience" }]
},

/* -----------------------------------------------------------
   10) Magical Udaipur Trip – 3N/4D – 35000
----------------------------------------------------------- */
{
  title: "Magical Udaipur Trip",
  slug: "magical-udaipur-3n4d",
  duration: "3N/4D",
  price: 35000,
  originalPrice: 39000,
  discount: 10,
  rating: 4.6,
  reviews: 143,
  category: "cultural",
  featured: true,
  location: "Udaipur",
  tags: ["Cultural", "Luxury", "Family"],

  image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
  images: [
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=900",
    "https://images.unsplash.com/photo-1603264041193-18e2f8f4e3a9?w=900",
    "https://images.unsplash.com/photo-1545324418-6f69b45137ab?w=900"
  ],

  about:
    "Explore the city of lakes with royal palaces, beautiful viewpoints, and traditional Rajasthani culture.",

  highlights: [
    "City Palace",
    "Lake Pichola Boat Ride",
    "Saheliyon Ki Bari",
    "Karni Mata Ropeway"
  ],

  itinerary: [
    { day: 1, title: "Udaipur Arrival", details: "Boat ride in evening." },
    { day: 2, title: "City Palace Tour", details: "Palaces & museums." },
    { day: 3, title: "Local & Cultural Tour", details: "Gardens & ropeway." },
    { day: 4, title: "Departure", details: "Goodbye Udaipur." }
  ],

  inclusions: ["3 Nights Stay", "Breakfast", "City Tour"],
  exclusions: ["Boat Tickets", "Lunch"],
  quickFacts: [{ icon: "🏰", text: "City of Lakes" }]
},

/* -----------------------------------------------------------
   11) Jaipur–Ranthambore–Pushkar–Jodhpur – 6N/7D – 45000
----------------------------------------------------------- */
{
  title: "Jaipur–Ranthambore–Pushkar–Jodhpur",
  slug: "jaipur-ranthambore-pushkar-jodhpur-6n7d",
  duration: "6N/7D",
  price: 45000,
  originalPrice: 51000,
  discount: 12,
  rating: 4.7,
  reviews: 176,
  category: "cultural",
  featured: false,
  location: "Jaipur, Ranthambore, Pushkar, Jodhpur",
  tags: ["Wildlife", "Culture", "Family"],

  image: "https://images.unsplash.com/photo-1599661046289-01848e9a3f09?w=600",
  images: [
    "https://images.unsplash.com/photo-1599661046289-01848e9a3f09?w=900",
    "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=900",
    "https://images.unsplash.com/photo-1603264041193-18e2f8f4e3a9?w=900"
  ],

  about:
    "Experience Jaipur’s royalty, Ranthambore’s wildlife safari, Pushkar’s spirituality, and Jodhpur’s heritage.",

  highlights: [
    "Tiger Safari",
    "Pushkar Lake",
    "Brahma Temple",
    "Mehrangarh Fort",
    "Amber Fort"
  ],

  itinerary: [
    { day: 1, title: "Jaipur Arrival", details: "Amber Fort & Hawa Mahal." },
    { day: 2, title: "Jaipur City Tour", details: "Jantar Mantar, City Palace." },
    { day: 3, title: "Jaipur → Ranthambore", details: "Evening free." },
    { day: 4, title: "Ranthambore Safari", details: "Tiger spotting." },
    { day: 5, title: "Ranthambore → Pushkar", details: "Temple visit." },
    { day: 6, title: "Pushkar → Jodhpur", details: "Mehrangarh Fort." },
    { day: 7, title: "Departure", details: "Drop at station/airport." }
  ],

  inclusions: [
    "6 Nights Stay",
    "Safari Jeep",
    "Breakfast & Dinner"
  ],

  exclusions: ["Lunch", "Monument Fees"],
  quickFacts: [{ icon: "🐅", text: "Tiger Safari Included" }]
},

/* -----------------------------------------------------------
   12) Stunning Kashmir – 3N/4D – 20000
----------------------------------------------------------- */
{
  title: "Stunning Kashmir Getaway",
  slug: "stunning-kashmir-3n4d",
  duration: "3N/4D",
  price: 20000,
  originalPrice: 25000,
  discount: 20,
  rating: 4.8,
  reviews: 220,
  category: "mountain",
  featured: true,
  location: "Srinagar, Gulmarg",
  tags: ["Budget", "Family", "Nature"],

  image: "https://images.unsplash.com/photo-1571474004509-03b63a745df9?w=600",
  images: [
    "https://images.unsplash.com/photo-1571474004509-03b63a745df9?w=900",
    "https://images.unsplash.com/photo-1594300955127-95f47df1e630?w=900",
    "https://images.unsplash.com/photo-1598256981667-ffe9c9e8705f?w=900"
  ],

  about:
    "A short and sweet Kashmir experience including Srinagar and Gulmarg — perfect for budget travellers.",

  highlights: [
    "Shikara Ride",
    "Mughal Gardens",
    "Gulmarg Meadows"
  ],

  itinerary: [
    { day: 1, title: "Arrival Srinagar & Shikara Ride" },
    { day: 2, title: "Srinagar Local" },
    { day: 3, title: "Gulmarg Excursion" },
    { day: 4, title: "Departure" }
  ],

  inclusions: ["3 Nights Stay", "Cab", "Breakfast & Dinner"],
  exclusions: ["Lunch", "Gondola Tickets"],
  quickFacts: [{ icon: "🛶", text: "Shikara Experience" }]
},

/* -----------------------------------------------------------
   13) Kashmir Deluxe – 4N/5D – 30000
----------------------------------------------------------- */
{
  title: "Kashmir Deluxe Tour",
  slug: "kashmir-deluxe-4n5d",
  duration: "4N/5D",
  price: 30000,
  originalPrice: 36000,
  discount: 17,
  rating: 4.8,
  reviews: 198,
  category: "mountain",
  featured: true,
  location: "Srinagar, Sonmarg, Gulmarg",
  tags: ["Luxury", "Family", "Nature"],

  image: "https://images.unsplash.com/photo-1587675147295-3687b4e06b4e?w=600",
  images: [
    "https://images.unsplash.com/photo-1587675147295-3687b4e06b4e?w=900",
    "https://images.unsplash.com/photo-1598256981667-ffe9c9e8705f?w=900",
    "https://images.unsplash.com/photo-1571474004509-03b63a745df9?w=900"
  ],

  about:
    "A luxury Kashmir tour with premium hotels, houseboat stay, and top destinations — Gulmarg, Sonmarg & Srinagar.",

  highlights: [
    "Deluxe Houseboat Stay",
    "Gondola Ride",
    "Sonmarg Valley"
  ],

  itinerary: [
    { day: 1, title: "Arrival Srinagar & Houseboat" },
    { day: 2, title: "Sonmarg Day Trip" },
    { day: 3, title: "Gulmarg Excursion" },
    { day: 4, title: "Srinagar Local" },
    { day: 5, title: "Departure" }
  ],

  inclusions: ["4 Nights Deluxe Stay", "Cab", "Breakfast & Dinner"],
  exclusions: ["Lunch", "Horse/Pony Ride"],
  quickFacts: [{ icon: "🏨", text: "Deluxe Hotels" }]
},

/* -----------------------------------------------------------
   14) Kashmir Delight with Valley of Milk – 6N/7D – 38000
----------------------------------------------------------- */
{
  title: "Kashmir Delight with Valley of Milk",
  slug: "kashmir-valley-of-milk-6n7d",
  duration: "6N/7D",
  price: 38000,
  originalPrice: 43000,
  discount: 12,
  rating: 4.7,
  reviews: 174,
  category: "mountain",
  featured: true,
  location: "Srinagar, Pahalgam, Gurez",
  tags: ["Adventure", "Nature", "Family"],

  image: "https://images.unsplash.com/photo-1594300955127-95f47df1e630?w=600",
  images: [
    "https://images.unsplash.com/photo-1594300955127-95f47df1e630?w=900",
    "https://images.unsplash.com/photo-1598256981667-ffe9c9e8705f?w=900",
    "https://images.unsplash.com/photo-1590663550613-84b8d57b3e2e?w=900"
  ],

  about:
    "Explore the untouched beauty of Gurez Valley, also called the Valley of Milk — a paradise rarely visited by tourists.",

  highlights: [
    "Gurez Valley",
    "Habba Khatoon Peak",
    "Pahalgam Valleys",
    "Shikara Ride"
  ],

  itinerary: [
    { day: 1, title: "Arrival Srinagar & Shikara Ride" },
    { day: 2, title: "Pahalgam Trip" },
    { day: 3, title: "Aru & Betaab Valley" },
    { day: 4, title: "Srinagar → Gurez", details: "Beautiful drive." },
    { day: 5, title: "Gurez Exploration", details: "Peaks & rivers." },
    { day: 6, title: "Return to Srinagar" },
    { day: 7, title: "Departure" }
  ],

  inclusions: [
    "6 Nights Stay",
    "Breakfast & Dinner",
    "Private Cab"
  ],

  exclusions: ["Lunch", "Activity Fees"],
  quickFacts: [{ icon: "🏔️", text: "Offbeat Kashmir" }]
},
/* -----------------------------------------------------------
   15) Majestic Uttarakhand – Nainital & Corbett – 5N/6D – 30000
----------------------------------------------------------- */
{
  title: "Majestic Uttarakhand with Nainital & Corbett",
  slug: "majestic-uttarakhand-nainital-corbett-5n6d",
  duration: "5N/6D",
  price: 30000,
  originalPrice: 34000,
  discount: 12,
  rating: 4.6,
  reviews: 136,
  category: "mountain",
  featured: false,
  location: "Nainital, Corbett",
  tags: ["Family", "Wildlife", "Hill Station"],

  image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600",
  images: [
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    "https://images.unsplash.com/photo-1585139495640-312a5f56e97b?w=900"
  ],

  about:
    "A refreshing trip covering Nainital's lakes and Jim Corbett's thrilling wildlife safari — perfect for families.",

  highlights: [
    "Corbett Jeep Safari",
    "Naini Lake Boating",
    "Snow View Point",
    "Nainital Zoo"
  ],

  itinerary: [
    { day: 1, title: "Arrival Nainital", details: "Evening lake view." },
    { day: 2, title: "Nainital Local Tour", details: "Zoo, Ropeway, Viewpoints." },
    { day: 3, title: "Bhimtal, Sattal, Naukuchiatal", details: "Lake hopping day." },
    { day: 4, title: "Nainital → Corbett", details: "Check-in to resort." },
    { day: 5, title: "Corbett Safari", details: "Thrilling jungle ride." },
    { day: 6, title: "Departure" }
  ],

  inclusions: [
    "5 Nights Stay",
    "Breakfast & Dinner",
    "Jeep Safari",
    "Private Cab"
  ],

  exclusions: ["Lunch", "Entry Tickets"],
  quickFacts: [{ icon: "🐅", text: "Wildlife Safari" }]
},

/* -----------------------------------------------------------
   16) Mysterious Mussoorie – 3N/4D – 28000
----------------------------------------------------------- */
{
  title: "Mysterious Mussoorie Escape",
  slug: "mussoorie-3n4d",
  duration: "3N/4D",
  price: 28000,
  originalPrice: 31000,
  discount: 10,
  rating: 4.5,
  reviews: 102,
  category: "mountain",
  featured: false,
  location: "Mussoorie",
  tags: ["Family", "Friends", "Budget"],

  image: "https://images.unsplash.com/photo-1599661046781-968e0fafd1cd?w=600",
  images: [
    "https://images.unsplash.com/photo-1599661046781-968e0fafd1cd?w=900",
    "https://images.unsplash.com/photo-1462651567147-aa679fd1cfaf?w=900",
    "https://images.unsplash.com/photo-1603787666785-00e4a5a5a20c?w=900"
  ],

  about:
    "A short and refreshing break to the Queen of Hills — Mussoorie. Great views, waterfalls, markets, and peaceful nature.",

  highlights: [
    "Kempty Falls",
    "Gun Hill",
    "Camel Back Road",
    "Mall Road"
  ],

  itinerary: [
    { day: 1, title: "Arrival Mussoorie", details: "Mall Road stroll." },
    { day: 2, title: "Mussoorie Sightseeing", details: "Kempty & viewpoints." },
    { day: 3, title: "Local Tour", details: "Waterfalls & ropeway." },
    { day: 4, title: "Departure" }
  ],

  inclusions: ["3 Nights Stay", "Breakfast", "Transport"],
  exclusions: ["Ropeway Tickets", "Lunch"],
  quickFacts: [{ icon: "⛰️", text: "Queen of Hills" }]
},

/* -----------------------------------------------------------
   17) Mystic Nainital – 3N/4D – 20000
----------------------------------------------------------- */
{
  title: "Mystic Nainital Retreat",
  slug: "nainital-3n4d",
  duration: "3N/4D",
  price: 20000,
  originalPrice: 23000,
  discount: 13,
  rating: 4.6,
  reviews: 128,
  category: "mountain",
  featured: false,
  location: "Nainital",
  tags: ["Family", "Budget", "Nature"],

  image: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=600",
  images: [
    "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=900",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900",
    "https://images.unsplash.com/photo-1507823957032-1037ee7bf2d4?w=900"
  ],

  about:
    "Spend peaceful days in Nainital’s scenic surroundings, lakes, and viewpoints. A perfect budget-friendly getaway.",

  highlights: ["Boating", "Snow View Point", "Naina Devi Temple"],

  itinerary: [
    { day: 1, title: "Arrival & Mall Road" },
    { day: 2, title: "Nainital Local" },
    { day: 3, title: "Lake Tour" },
    { day: 4, title: "Departure" }
  ],

  inclusions: ["Hotel Stay", "Breakfast", "Cab"],
  exclusions: ["Entry Fees", "Lunch"],
  quickFacts: [{ icon: "🚤", text: "Lake Paradise" }]
},

/* -----------------------------------------------------------
   18) Essence of Kerala – 3N/4D – 18000
----------------------------------------------------------- */
{
  title: "Essence of Kerala",
  slug: "essence-kerala-3n4d",
  duration: "3N/4D",
  price: 18000,
  originalPrice: 23000,
  discount: 20,
  rating: 4.7,
  reviews: 164,
  category: "cultural",
  featured: true,
  location: "Munnar, Alleppey",
  tags: ["Family", "Relaxation", "Nature"],

  image: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=600",
  images: [
    "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=900",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900",
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3a2?w=900"
  ],

  about:
    "Explore the lush hills of Munnar and relax in the backwaters of Alleppey with a houseboat experience.",

  highlights: [
    "Houseboat Stay",
    "Tea Gardens",
    "Waterfalls",
    "Backwater Cruise"
  ],

  itinerary: [
    { day: 1, title: "Arrival Kochi → Munnar", details: "Waterfalls enroute." },
    { day: 2, title: "Munnar Sightseeing", details: "Tea plantations & views." },
    { day: 3, title: "Munnar → Alleppey", details: "Houseboat stay." },
    { day: 4, title: "Departure" }
  ],

  inclusions: [
    "3 Nights Stay",
    "Breakfast",
    "Backwater Cruise"
  ],

  exclusions: ["Lunch", "Entry Tickets"],
  quickFacts: [{ icon: "⛵", text: "Backwater Experience" }]
},

/* -----------------------------------------------------------
   19) Captivating Kerala – 5N/6D – 27000
----------------------------------------------------------- */
{
  title: "Captivating Kerala",
  slug: "captivating-kerala-5n6d",
  duration: "5N/6D",
  price: 27000,
  originalPrice: 32000,
  discount: 16,
  rating: 4.8,
  reviews: 198,
  category: "cultural",
  featured: true,
  location: "Munnar, Thekkady, Alleppey",
  tags: ["Relaxing", "Family", "Nature"],

  image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600",
  images: [
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900",
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3a2?w=900",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900"
  ],

  about:
    "A perfect Kerala experience — Munnar's hills, Thekkady wildlife, and Alleppey’s peaceful backwaters.",

  highlights: [
    "Munnar Tea Gardens",
    "Thekkady Wildlife",
    "Houseboat",
    "Spice Plantations"
  ],

  itinerary: [
    { day: 1, title: "Arrival Kochi → Munnar" },
    { day: 2, title: "Full Day Munnar Sightseeing" },
    { day: 3, title: "Munnar → Thekkady" },
    { day: 4, title: "Thekkady → Alleppey" },
    { day: 5, title: "Backwaters & Relax" },
    { day: 6, title: "Departure" }
  ],

  inclusions: ["5 Nights Stay", "Cab", "Breakfast"],
  exclusions: ["Lunch", "Entry Tickets"],
  quickFacts: [{ icon: "🌴", text: "Hills + Backwaters" }]
},

/* -----------------------------------------------------------
   20) Kerala Offbeat Tour – 4N/5D – 31000
----------------------------------------------------------- */
{
  title: "Kerala Offbeat Tour",
  slug: "kerala-offbeat-4n5d",
  duration: "4N/5D",
  price: 31000,
  originalPrice: 35000,
  discount: 11,
  rating: 4.6,
  reviews: 142,
  category: "cultural",
  featured: false,
  location: "Varkala, Wayanad, Alleppey",
  tags: ["Adventure", "Nature", "Relaxing"],

  image: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=600",
  images: [
    "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=900",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900",
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3a2?w=900"
  ],

  about:
    "Explore the lesser-known wonders of Kerala — Varkala’s cliff beaches, Wayanad’s waterfalls & Alleppey backwaters.",

  highlights: [
    "Varkala Cliff Beach",
    "Wayanad Waterfalls",
    "Caves & Viewpoints",
    "Backwater Cruise"
  ],

  itinerary: [
    { day: 1, title: "Arrival Trivandrum → Varkala" },
    { day: 2, title: "Varkala Sightseeing" },
    { day: 3, title: "Varkala → Wayanad" },
    { day: 4, title: "Wayanad → Alleppey" },
    { day: 5, title: "Departure" }
  ],

  inclusions: ["4 Nights Stay", "Cab", "Breakfast"],
  exclusions: ["Lunch", "Adventure Activities"],
  quickFacts: [{ icon: "🌊", text: "Offbeat Kerala" }]
}

]; // END PART 4
export default packagesData;
