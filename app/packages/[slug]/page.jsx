"use client";

import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Paper, 
  Chip,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Rating,
  Stepper,
  Step,
  StepLabel,
  AppBar,
  Toolbar,
  IconButton,
  Fab,
  useTheme,
  alpha
} from '@mui/material';
import { 
  ArrowBack, 
  LocationOn, 
  AccessTime, 
  Star, 
  People,
  LocalOffer,
  Security,
  CheckCircle,
  Hotel,
  Restaurant,
  DirectionsCar,
  CameraAlt,
  Favorite,
  Share,
  Bookmark,
  WhatsApp,
  Phone
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

// Mock packages data - in real app, this would come from API/database
const packages = [
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
    highlights: [
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
    highlights: [
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
    ]
  },
  // Add more packages with similar structure...
  { 
    title: "Himachal Adventure", 
    image: "https://images.unsplash.com/photo-1574362849221-71cad6d6fb34?w=500", 
    slug: "himachal-adventure", 
    duration: "6N/7D", 
    price: 14999,
    originalPrice: 18999,
    discount: 21,
    rating: 4.9,
    reviews: 156,
    location: "Manali, Kasol, Spiti Valley",
    highlights: ["Trekking", "Camping", "Mountain Biking", "River Rafting"],
    featured: true,
    category: "adventure",
    tags: ["Adventure", "Trekking", "Extreme"],
    images: [
      "https://images.unsplash.com/photo-1574362849221-71cad6d6fb34?w=800",
      "https://images.unsplash.com/photo-1503614478377-5cee3227f41c?w=800",
      "https://images.unsplash.com/photo-1464822759849-e41f2bcaceb2?w=800",
      "https://images.unsplash.com/photo-1464822759849-e41f2bcaceb2?w=800"
    ],
    about: "Adventure-packed tour through the majestic Himalayas of Himachal Pradesh. Experience trekking, camping, and thrilling activities in the lap of nature.",
    highlights: [
      "Trekking through Himalayan trails",
      "Camping under the stars",
      "River rafting in Beas River",
      "Mountain biking adventures",
      "Visit to ancient monasteries",
      "Hot water springs experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        details: "Arrive at Bhuntar Airport. Transfer to Manali. Evening leisure time to explore Mall Road and local markets.",
        activities: ["Airport Pickup", "Market Visit", "Hotel Check-in"]
      },
      {
        day: 2,
        title: "Manali Local Sightseeing",
        details: "Visit Hadimba Temple, Vashisht Hot Water Springs, and Tibetan Monastery. Afternoon free for adventure activities.",
        activities: ["Temple Visit", "Hot Springs", "Adventure Sports"]
      },
      {
        day: 3,
        title: "Solang Valley Adventure",
        details: "Full day at Solang Valley for adventure activities - paragliding, zorbing, and cable car rides.",
        activities: ["Paragliding", "Zorbing", "Cable Car"]
      },
      {
        day: 4,
        title: "Manali to Kasol",
        details: "Drive to Kasol through beautiful valleys. Evening trek to nearby villages and experience local culture.",
        activities: ["Scenic Drive", "Village Trek", "Cultural Experience"]
      },
      {
        day: 5,
        title: "Kasol to Kheerganga Trek",
        details: "Trek to Kheerganga through beautiful trails. Overnight camping with bonfire and stargazing.",
        activities: ["Trekking", "Camping", "Bonfire"]
      },
      {
        day: 6,
        title: "Return to Manali",
        details: "Return trek to Kasol and drive back to Manali. Evening free for shopping and relaxation.",
        activities: ["Return Trek", "Shopping", "Relaxation"]
      },
      {
        day: 7,
        title: "Departure",
        details: "After breakfast, check out and transfer to airport for departure.",
        activities: ["Breakfast", "Airport Drop"]
      }
    ],
    inclusions: [
      "6 Nights accommodation in hotels and camps",
      "All meals during trekking days",
      "All transfers and sightseeing",
      "Trekking equipment",
      "Adventure activity charges",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare/train tickets",
      "Personal adventure gear",
      "Personal expenses",
      "Travel insurance"
    ]
  }
];

export default function PackageDetails() {
  const theme = useTheme();
  const router = useRouter();
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isBookmark, setIsBookmark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      const packageData = packages.find(pkg => pkg.slug === slug);
      
      if (packageData) {
        setData(packageData);
      } else {
        // Handle package not found
        console.error('Package not found');
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" color="primary">
            Loading amazing experience...
          </Typography>
        </motion.div>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <Typography variant="h4" color="error">
          Package Not Found
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => router.push('/')}
          startIcon={<ArrowBack />}
        >
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.03)} 100%)`
      }}
    >
      {/* Sticky Header */}
      <AppBar 
        position="sticky" 
        color="transparent"
        elevation={0}
        sx={{ 
          backdropFilter: 'blur(20px)',
          backgroundColor: alpha(theme.palette.background.paper, 0.8),
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => router.back()}
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            {data.title}
          </Typography>
          <IconButton onClick={() => setIsBookmark(!isBookmark)}>
            {isBookmark ? <Bookmark color="primary" /> : <Bookmark />}
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} lg={8}>
            {/* Image Gallery */}
            <Paper 
              elevation={0}
              sx={{ 
                borderRadius: 3, 
                overflow: 'hidden', 
                mb: 4,
                position: 'relative'
              }}
            >
              <Box 
                component="img"
                src={data.images[currentImage]}
                alt={data.title}
                sx={{
                  width: '100%',
                  height: 400,
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              
              {/* Image Thumbnails */}
              <Box sx={{ display: 'flex', p: 2, gap: 1, overflowX: 'auto' }}>
                {data.images.map((img, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={img}
                    alt={`${data.title} ${index + 1}`}
                    onClick={() => setCurrentImage(index)}
                    sx={{
                      width: 80,
                      height: 60,
                      objectFit: 'cover',
                      borderRadius: 1,
                      cursor: 'pointer',
                      opacity: currentImage === index ? 1 : 0.6,
                      border: currentImage === index ? `2px solid ${theme.palette.primary.main}` : 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        opacity: 1
                      }
                    }}
                  />
                ))}
              </Box>
            </Paper>

            {/* Package Header */}
            <Paper elevation={0} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box>
                  <Chip label="Bestseller" color="primary" sx={{ mb: 2 }} />
                  <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {data.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body1" color="text.secondary">
                        {data.location}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTime color="secondary" sx={{ mr: 1 }} />
                      <Typography variant="body1" color="text.secondary">
                        {data.duration}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ textAlign: 'right' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mb: 1 }}>
                    <Rating value={data.rating} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({data.reviews} reviews)
                    </Typography>
                  </Box>
                  <People color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    {Math.floor(Math.random() * 200) + 50} people booked
                  </Typography>
                </Box>
              </Box>

              {/* Price Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  ₹{data.price.toLocaleString()}
                </Typography>
                {data.originalPrice > data.price && (
                  <>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        textDecoration: 'line-through',
                        color: 'text.disabled'
                      }}
                    >
                      ₹{data.originalPrice.toLocaleString()}
                    </Typography>
                    <Chip 
                      label={`Save ${data.discount}%`} 
                      color="error" 
                      size="small"
                    />
                  </>
                )}
              </Box>

              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {data.about}
              </Typography>
            </Paper>

            {/* Highlights */}
            <Paper elevation={0} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                ✨ Package Highlights
              </Typography>
              <Grid container spacing={2}>
                {data.highlights.map((highlight, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <CheckCircle color="primary" sx={{ mr: 2, mt: 0.5, flexShrink: 0 }} />
                      <Typography variant="body1">
                        {highlight}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Itinerary */}
            <Paper elevation={0} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                📅 Detailed Itinerary
              </Typography>
              
              <Stepper orientation="vertical" sx={{ mb: 4 }}>
                {data.itinerary.map((day) => (
                  <Step key={day.day} active>
                    <StepLabel>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Day {day.day}: {day.title}
                      </Typography>
                    </StepLabel>
                    <Box sx={{ ml: 4, mb: 3 }}>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {day.details}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {day.activities.map((activity, index) => (
                          <Chip
                            key={index}
                            label={activity}
                            size="small"
                            variant="outlined"
                            color="primary"
                          />
                        ))}
                      </Box>
                    </Box>
                  </Step>
                ))}
              </Stepper>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} lg={4}>
            {/* Booking Card */}
            <Paper 
              elevation={4}
              sx={{ 
                position: 'sticky',
                top: 100,
                borderRadius: 3,
                overflow: 'hidden',
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`
              }}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Book This Package
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    ₹{data.price.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    per person
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    py: 1.5,
                    mb: 2,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.3)}`,
                    }
                  }}
                >
                  Book Now
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  size="large"
                  startIcon={<WhatsApp />}
                  sx={{
                    py: 1.5,
                    mb: 2,
                    borderRadius: 2,
                    fontWeight: 'bold'
                  }}
                >
                  Chat on WhatsApp
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  size="large"
                  startIcon={<Phone />}
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'bold'
                  }}
                >
                  Call for Inquiry
                </Button>
              </Box>

              <Divider />

              {/* Inclusions & Exclusions */}
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  What's Included
                </Typography>
                <List dense>
                  {data.inclusions.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
                  Not Included
                </Typography>
                <List dense>
                  {data.exclusions.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle color="disabled" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} sx={{ color: 'text.disabled' }} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Paper>

            {/* Quick Info Card */}
            <Paper sx={{ p: 3, borderRadius: 3, mt: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Quick Facts
              </Typography>
              {[
                { icon: <Hotel />, text: "Luxury Stays" },
                { icon: <Restaurant />, text: "Meals Included" },
                { icon: <DirectionsCar />, text: "Private Transport" },
                { icon: <CameraAlt />, text: "Photo Opportunities" },
                { icon: <Security />, text: "Safe & Secure" },
                { icon: <LocalOffer />, text: "Best Price" }
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ mr: 2, color: 'primary.main' }}>
                    {item.icon}
                  </Box>
                  <Typography variant="body2">
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Floating Action Button */}
      <Fab
        variant="extended"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          px: 3,
          fontWeight: 'bold',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
        }}
      >
        <Favorite sx={{ mr: 1 }} />
        Book Now
      </Fab>
    </Box>
  );
}