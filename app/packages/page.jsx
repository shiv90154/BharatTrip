"use client";

import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Paper,
  Chip,
  alpha,
  useTheme
} from '@mui/material';
import { 
  LocationOn, 
  AccessTime, 
  Star, 
  LocalOffer 
} from '@mui/icons-material';
import PackageCard from "@/components/PackageCard";

export default function Packages() {
  const theme = useTheme();
  
  const packages = [
    { 
      title: "Kashmir 5N/6D", 
      image: "/kashmir.jpg", 
      slug: "kashmir-5n6d", 
      duration: "5N/6D", 
      price: 12999,
      originalPrice: 15999,
      discount: 19,
      rating: 4.8,
      reviews: 124,
      location: "Srinagar, Gulmarg, Pahalgam",
      highlights: ["Houseboat Stay", "Skiing", "Shikara Ride"],
      featured: true
    },
    { 
      title: "Goa Beach Tour", 
      image: "/goa.jpg", 
      slug: "goa-tour", 
      duration: "3N/4D", 
      price: 8999,
      originalPrice: 11999,
      discount: 25,
      rating: 4.5,
      reviews: 89,
      location: "North Goa, South Goa",
      highlights: ["Beach Parties", "Water Sports", "Portuguese Heritage"],
      featured: false
    },
    { 
      title: "Himachal Adventure", 
      image: "/himachal.jpg", 
      slug: "himachal-adventure", 
      duration: "6N/7D", 
      price: 14999,
      originalPrice: 18999,
      discount: 21,
      rating: 4.9,
      reviews: 156,
      location: "Manali, Kasol, Spiti Valley",
      highlights: ["Trekking", "Camping", "Mountain Biking"],
      featured: true
    },
    { 
      title: "Kerala Backwaters", 
      image: "/kerala.jpg", 
      slug: "kerala-backwaters", 
      duration: "4N/5D", 
      price: 10999,
      originalPrice: 13999,
      discount: 21,
      rating: 4.7,
      reviews: 203,
      location: "Alleppey, Munnar, Kochi",
      highlights: ["Houseboat", "Ayurveda", "Tea Plantations"],
      featured: false
    },
    { 
      title: "Rajasthan Cultural", 
      image: "/rajasthan.jpg", 
      slug: "rajasthan-cultural", 
      duration: "7N/8D", 
      price: 17999,
      originalPrice: 21999,
      discount: 18,
      rating: 4.6,
      reviews: 178,
      location: "Jaipur, Udaipur, Jodhpur",
      highlights: ["Palace Stay", "Camel Safari", "Folk Dance"],
      featured: true
    },
    { 
      title: "Ladakh Road Trip", 
      image: "/ladakh.jpg", 
      slug: "ladakh-roadtrip", 
      duration: "8N/9D", 
      price: 21999,
      originalPrice: 25999,
      discount: 15,
      rating: 4.9,
      reviews: 267,
      location: "Leh, Nubra Valley, Pangong",
      highlights: ["Bike Trip", "High Altitude Lakes", "Monasteries"],
      featured: true
    }
  ];

  return (
    <Box 
      sx={{ 
        pt: { xs: 12, md: 14 },
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mb: 8,
            px: 2
          }}
        >
          <Chip 
            label="Explore Destinations" 
            color="primary" 
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2
            }}
          >
            Discover Amazing Packages
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Handpicked experiences with the perfect blend of adventure, culture, and relaxation
          </Typography>
        </Box>

        {/* Packages Grid */}
        <Grid container spacing={3}>
          {packages.map((pkg, index) => (
            <Grid item xs={12} sm={6} lg={4} key={pkg.slug}>
              <PackageCard 
                data={pkg} 
                featured={pkg.featured}
                delay={index * 100}
              />
            </Grid>
          ))}
        </Grid>

        {/* Info Section */}
        <Paper 
          elevation={0}
          sx={{ 
            mt: 8,
            p: 4,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
            borderRadius: 4,
            textAlign: 'center'
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Why Choose Our Packages?
          </Typography>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {[
              { icon: <Star color="primary" />, text: "Best Price Guarantee" },
              { icon: <LocationOn color="secondary" />, text: "Verified Stays" },
              { icon: <AccessTime color="success" />, text: "Flexible Dates" },
              { icon: <LocalOffer color="warning" />, text: "Easy Cancellation" }
            ].map((item, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  {item.icon}
                  <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}