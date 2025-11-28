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

export default function PackageDetails() {
  const theme = useTheme();
  const router = useRouter();
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isBookmark, setIsBookmark] = useState(false);

  useEffect(() => {
    // Mock API call - replace with actual API
    const mockData = {
      title: "Kashmir 5N/6D",
      slug: "kashmir-5n6d",
      duration: "5 Nights 6 Days",
      price: 12999,
      originalPrice: 15999,
      discount: 19,
      rating: 4.8,
      reviews: 124,
      location: "Srinagar, Gulmarg, Pahalgam",
      images: [
        "/kashmir.jpg",
        "/kashmir2.jpg",
        "/kashmir3.jpg",
        "/kashmir4.jpg"
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
    };
    
    setData(mockData);
  }, [slug]);

  if (!data) {
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