"use client";

import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Paper,
  Chip,
  alpha,
  useTheme,
  Button,
  Card,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Rating,
  Fab,
  Tabs,
  Tab,
  Avatar,
  Stack,
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from '@mui/material';

import { 
  LocalOffer,
  Search,
  FilterList,
  TrendingUp,
  Share,
  Navigation,
  Hotel,
  Groups,
  BeachAccess,
  Landscape,
  TempleHindu,
  Park,
  Waves,
  Terrain,
  LocalFireDepartment,
  EmojiEvents,
  Security,
  SupportAgent
} from '@mui/icons-material';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// ------------------- THEME CONFIGURATION -------------------
let theme = createTheme({
  palette: {
    primary: {
      main: '#0C3C8C', // --primary-blue
      light: '#1D4ED8', // --bright-blue
    },
    secondary: {
      main: '#F97316', // --accent-orange
      light: '#FB923C', // --light-orange
    },
    background: {
      default: '#F8F9FA', // --bg-light
    },
    text: {
      primary: '#1E293B', // --text-dark
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

// ------------------- PACKAGE CARD COMPONENT -------------------
const PackageCard = ({ data, featured, delay = 0 }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          }
        }}
      >
        {/* Discount Badge */}
        {data.discount && (
          <Chip
            label={`${data.discount}% OFF`}
            color="secondary"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 2,
              fontWeight: 'bold'
            }}
          />
        )}

        {/* Featured Badge */}
        {featured && (
          <Chip
            icon={<LocalFireDepartment />}
            label="Featured"
            color="primary"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              zIndex: 2,
              fontWeight: 'bold'
            }}
          />
        )}

        {/* Image */}
        <Box
          sx={{
            height: 200,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.primary.main,
            fontSize: 48
          }}
        >
          {data.image ? (
            <img 
              src={data.image} 
              alt={data.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          ) : (
            <Landscape />
          )}
        </Box>

        {/* Content */}
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {data.location}
            </Typography>
          </Box>

          {/* Rating */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={data.rating} readOnly size="small" />
            <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
              ({data.reviews} reviews)
            </Typography>
          </Box>

          {/* Highlights */}
          <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 0.5 }}>
            {data.highlights.slice(0, 3).map((highlight, index) => (
              <Chip
                key={index}
                label={highlight}
                size="small"
                variant="outlined"
                sx={{ fontSize: '0.7rem' }}
              />
            ))}
          </Stack>

          {/* Footer */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Starting from
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6" color="primary" fontWeight="bold">
                  ₹{data.price.toLocaleString()}
                </Typography>
                {data.originalPrice && (
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                    ₹{data.originalPrice.toLocaleString()}
                  </Typography>
                )}
              </Box>
              <Typography variant="caption" color="text.secondary">
                {data.duration}
              </Typography>
            </Box>
            
            <Button 
              variant="contained" 
              size="small"
              sx={{ borderRadius: 2 }}
            >
              View Details
            </Button>
          </Box>
        </Box>
      </Card>
    </motion.div>
  );
};

// ------------------- TAB PANEL -------------------
function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`package-tabpanel-${index}`}
      aria-labelledby={`package-tab-${index}`}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

// ------------------- MAIN COMPONENT -------------------
export default function Packages() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [duration, setDuration] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const featuredRef = useRef(null);

  // ---------------- PACKAGE DATA ----------------
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
      featured: true,
      category: "mountain",
      trending: true
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
      featured: false,
      category: "beach",
      trending: true
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
      featured: true,
      category: "adventure",
      trending: false
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
      featured: false,
      category: "backwaters",
      trending: true
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
      featured: true,
      category: "cultural",
      trending: false
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
      featured: true,
      category: "adventure",
      trending: true
    },
    { 
      title: "Andaman Island Escape", 
      image: "/andaman.jpg", 
      slug: "andaman-escape", 
      duration: "4N/5D", 
      price: 18999,
      originalPrice: 22999,
      discount: 17,
      rating: 4.8,
      reviews: 145,
      location: "Havelock, Neil Island, Port Blair",
      highlights: ["Scuba Diving", "White Sand Beaches", "Cellular Jail"],
      featured: false,
      category: "beach",
      trending: true
    },
    { 
      title: "Varanasi Spiritual Journey", 
      image: "/varanasi.jpg", 
      slug: "varanasi-spiritual", 
      duration: "2N/3D", 
      price: 6999,
      originalPrice: 8999,
      discount: 22,
      rating: 4.4,
      reviews: 98,
      location: "Varanasi, Sarnath",
      highlights: ["Ganga Aarti", "Boat Ride", "Temple Visits"],
      featured: false,
      category: "spiritual",
      trending: false
    }
  ];

  // ---------------- CATEGORY ICON FIX ----------------
  const categories = [
    { icon: <BeachAccess />, label: "Beach", value: "beach", count: 2 },
    { icon: <Terrain />, label: "Mountain", value: "mountain", count: 1 },
    { icon: <Landscape />, label: "Adventure", value: "adventure", count: 2 },
    { icon: <TempleHindu />, label: "Cultural", value: "cultural", count: 1 },
    { icon: <Waves />, label: "Backwaters", value: "backwaters", count: 1 },
    { icon: <Park />, label: "Spiritual", value: "spiritual", count: 1 }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      comment: "The Kashmir package was absolutely breathtaking! The houseboat stay was unforgettable.",
      avatar: "/avatar1.jpg",
      package: "Kashmir 5N/6D"
    },
    {
      name: "Rahul Verma",
      location: "Delhi",
      rating: 4,
      comment: "Goa trip was fantastic! Amazing nightlife and beaches!",
      avatar: "/avatar2.jpg",
      package: "Goa Beach Tour"
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      rating: 5,
      comment: "Ladakh road trip was the adventure of a lifetime!",
      avatar: "/avatar3.jpg",
      package: "Ladakh Road Trip"
    }
  ];

  // ---------------- FILTER LOGIC ----------------
  const filteredPackages = packages.filter(pkg => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      pkg.price >= priceRange[0] && pkg.price <= priceRange[1];

    const matchesCategory =
      category === "all" || pkg.category === category;

    const matchesDuration =
      duration === "all" ||
      (duration === "short" && parseInt(pkg.duration) <= 3) ||
      (duration === "medium" && parseInt(pkg.duration) > 3 && parseInt(pkg.duration) <= 6) ||
      (duration === "long" && parseInt(pkg.duration) > 6);

    return matchesSearch && matchesPrice && matchesCategory && matchesDuration;
  });

  const featuredPackages = packages.filter(pkg => pkg.featured);
  const trendingPackages = packages.filter(pkg => pkg.trending);

  const handleTabChange = (e, newValue) => setTabValue(newValue);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          pt: { xs: 8, md: 10 },
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.03)} 100%)`
        }}
      >
        {/* ---------------- HERO SECTION ---------------- */}
        <Box 
          sx={{ 
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.9)} 0%, ${alpha(theme.palette.secondary.main, 0.7)} 100%)`,
            color: 'white',
            py: { xs: 8, md: 12 },
            mb: 8
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  textAlign: 'center', 
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                Discover Incredible India
              </Typography>

              <Typography 
                variant="h5" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 4, 
                  opacity: 0.9,
                  fontSize: { xs: '1.1rem', md: '1.5rem' }
                }}
              >
                Explore handpicked destinations with unforgettable experiences
              </Typography>

              {/* ---- SEARCH BAR ---- */}
              <Paper 
                sx={{ 
                  p: { xs: 2, md: 3 }, 
                  maxWidth: 1000, 
                  mx: 'auto',
                  background: alpha('#fff', 0.95),
                  backdropFilter: 'blur(20px)'
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      placeholder="Search destinations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e?.target?.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth>
                      <InputLabel>Category</InputLabel>
                      <Select
                        value={category}
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <MenuItem value="all">All Categories</MenuItem>
                        {categories.map((cat) => (
                          <MenuItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth>
                      <InputLabel>Duration</InputLabel>
                      <Select
                        value={duration}
                        label="Duration"
                        onChange={(e) => setDuration(e.target.value)}
                      >
                        <MenuItem value="all">Any Duration</MenuItem>
                        <MenuItem value="short">1–3 Days</MenuItem>
                        <MenuItem value="medium">4–6 Days</MenuItem>
                        <MenuItem value="long">7+ Days</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={2}>
                    <Button 
                      variant="contained" 
                      fullWidth 
                      size="large" 
                      sx={{ 
                        py: 1.5,
                        height: '56px'
                      }}
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Container>
        </Box>

        {/* ---------------- CATEGORIES SECTION ---------------- */}
        <Container maxWidth="xl">
          <Box sx={{ mb: 8 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: "bold", 
                textAlign: "center", 
                mb: 4,
                fontSize: { xs: '1.75rem', md: '2.125rem' }
              }}
            >
              Explore by Category
            </Typography>

            <Grid container spacing={2}>
              {categories.map((category) => (
                <Grid item xs={6} sm={4} md={2} key={category.value}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Card
                      sx={{
                        textAlign: "center",
                        p: 2,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        height: '100%',
                        "&:hover": {
                          background: `linear-gradient(135deg, ${alpha(
                            theme.palette.primary.main,
                            0.1
                          )} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                        },
                      }}
                    >
                      <Box sx={{ color: "primary.main", mb: 1, fontSize: '2.5rem' }}>
                        {category.icon}
                      </Box>

                      <Typography fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        {category.label}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {category.count} tours
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* ---------------- FEATURED SLIDER ---------------- */}
          <Box ref={featuredRef} sx={{ mb: 10 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: { xs: '1.75rem', md: '2.125rem' } }}>
                🌟 Featured Packages
              </Typography>

              <Chip 
                icon={<LocalFireDepartment />} 
                label="Most Popular" 
                color="primary" 
              />
            </Box>

            <Box sx={{ 
              display: "flex", 
              overflowX: "auto", 
              gap: 3, 
              pb: 2,
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none'
            }}>
              {featuredPackages.map((pkg, index) => (
                <Box key={pkg.slug} sx={{ minWidth: { xs: 300, sm: 350 } }}>
                  <PackageCard 
                    data={pkg} 
                    featured={true} 
                    delay={index * 100} 
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* ---------------- TRENDING NOW ---------------- */}
          <Box sx={{ mb: 8 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
              <TrendingUp color="error" sx={{ mr: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: { xs: '1.75rem', md: '2.125rem' } }}>
                Trending Now
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {trendingPackages.slice(0, 3).map((pkg, index) => (
                <Grid item xs={12} md={4} key={pkg.slug}>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <PackageCard data={pkg} featured={false} delay={index * 100} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* ---------------- MAIN FILTER + PACKAGES GRID ---------------- */}
          <Grid container spacing={4}>
            {/* FILTER SIDEBAR */}
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, position: "sticky", top: 90, display: { xs: 'none', md: 'block' } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <FilterList sx={{ mr: 1 }} />
                  <Typography variant="h6" fontWeight="bold">
                    Filters
                  </Typography>
                </Box>

                {/* --- PRICE RANGE --- */}
                <Box sx={{ mb: 4 }}>
                  <Typography fontWeight="bold">Price Range</Typography>

                  <Slider
                    value={priceRange}
                    onChange={(e, newValue) => setPriceRange(newValue)}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(v) => `₹${v}`}
                    min={0}
                    max={50000}
                    step={1000}
                    sx={{ mt: 2 }}
                  />

                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                    <Typography variant="body2">₹{priceRange[0]}</Typography>
                    <Typography variant="body2">₹{priceRange[1]}</Typography>
                  </Box>
                </Box>

                {/* --- CATEGORY FILTER --- */}
                <Box sx={{ mb: 4 }}>
                  <Typography fontWeight="bold">Categories</Typography>

                  <Stack spacing={1} sx={{ mt: 2 }}>
                    {categories.map((cat) => (
                      <Chip
                        key={cat.value}
                        label={`${cat.label} (${cat.count})`}
                        variant={category === cat.value ? "filled" : "outlined"}
                        color={category === cat.value ? "primary" : "default"}
                        onClick={() => setCategory(cat.value)}
                        sx={{ justifyContent: 'flex-start' }}
                      />
                    ))}
                  </Stack>
                </Box>

                {/* --- DURATION FILTER --- */}
                <Box sx={{ mb: 4 }}>
                  <Typography fontWeight="bold">Duration</Typography>

                  <Stack spacing={1} sx={{ mt: 2 }}>
                    {[
                      { value: "all", label: "Any Duration" },
                      { value: "short", label: "1–3 Days" },
                      { value: "medium", label: "4–6 Days" },
                      { value: "long", label: "7+ Days" },
                    ].map((item) => (
                      <Chip
                        key={item.value}
                        label={item.label}
                        variant={duration === item.value ? "filled" : "outlined"}
                        color={duration === item.value ? "primary" : "default"}
                        onClick={() => setDuration(item.value)}
                        sx={{ justifyContent: 'flex-start' }}
                      />
                    ))}
                  </Stack>
                </Box>

                {/* CLEAR FILTERS */}
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => {
                    setPriceRange([0, 50000]);
                    setDuration("all");
                    setCategory("all");
                    setSearchTerm("");
                  }}
                >
                  Clear Filters
                </Button>
              </Paper>

              {/* MOBILE FILTER BUTTON */}
              <Button
                variant="outlined"
                startIcon={<FilterList />}
                fullWidth
                sx={{ display: { xs: 'flex', md: 'none' }, mb: 2 }}
              >
                Show Filters
              </Button>
            </Grid>

            {/* ---------- PACKAGES GRID ---------- */}
            <Grid item xs={12} md={9}>
              {/* RESULTS HEADER */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <Typography variant="h5" fontWeight="bold">
                  {filteredPackages.length} Packages Found
                </Typography>

                <FormControl sx={{ minWidth: 200 }} size="small">
                  <Select defaultValue="popular">
                    <MenuItem value="popular">Most Popular</MenuItem>
                    <MenuItem value="price-low">Price: Low → High</MenuItem>
                    <MenuItem value="price-high">Price: High → Low</MenuItem>
                    <MenuItem value="rating">Highest Rated</MenuItem>
                    <MenuItem value="duration">Duration</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* TABS */}
              <Paper sx={{ mb: 4, display: { xs: 'none', sm: 'block' } }}>
                <Tabs 
                  value={tabValue} 
                  onChange={handleTabChange} 
                  centered
                  sx={{
                    '& .MuiTab-root': {
                      fontSize: { xs: '0.8rem', md: '0.875rem' },
                      minWidth: { xs: 80, md: 120 }
                    }
                  }}
                >
                  <Tab label="All Packages" />
                  <Tab label="Featured" />
                  <Tab label="Budget Friendly" />
                  <Tab label="Luxury" />
                </Tabs>
              </Paper>

              {/* MOBILE TABS */}
              <Box sx={{ mb: 4, display: { xs: 'block', sm: 'none' } }}>
                <Select
                  value={tabValue}
                  onChange={(e) => setTabValue(e.target.value)}
                  fullWidth
                >
                  <MenuItem value={0}>All Packages</MenuItem>
                  <MenuItem value={1}>Featured</MenuItem>
                  <MenuItem value={2}>Budget Friendly</MenuItem>
                  <MenuItem value={3}>Luxury</MenuItem>
                </Select>
              </Box>

              {/* TAB CONTENT */}
              <TabPanel value={tabValue} index={0}>
                <Grid container spacing={3}>
                  {filteredPackages.map((pkg, index) => (
                    <Grid item xs={12} sm={6} lg={4} key={pkg.slug}>
                      <PackageCard
                        data={pkg}
                        featured={pkg.featured}
                        delay={index * 100}
                      />
                    </Grid>
                  ))}
                </Grid>

                {/* Empty State */}
                {filteredPackages.length === 0 && (
                  <Paper sx={{ p: 8, textAlign: "center", mt: 4 }}>
                    <Typography variant="h6" color="text.secondary">
                      No packages found matching your search.
                    </Typography>
                    <Button 
                      variant="contained" 
                      sx={{ mt: 2 }}
                      onClick={() => {
                        setPriceRange([0, 50000]);
                        setDuration("all");
                        setCategory("all");
                        setSearchTerm("");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </Paper>
                )}
              </TabPanel>
            </Grid>
          </Grid>

          {/* ---------------- TESTIMONIALS ---------------- */}
          <Box sx={{ my: 12 }}>
            <Typography 
              variant="h4"
              sx={{ 
                fontWeight: "bold", 
                textAlign: "center", 
                mb: 6,
                fontSize: { xs: '1.75rem', md: '2.125rem' }
              }}
            >
              What Our Travelers Say
            </Typography>

            <Grid container spacing={4}>
              {testimonials.map((t, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Card sx={{ p: 3, height: "100%" }}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Avatar 
                          sx={{ 
                            mr: 2,
                            bgcolor: theme.palette.primary.main,
                            width: 50,
                            height: 50
                          }}
                        >
                          {t.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography fontWeight="bold">{t.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {t.location}
                          </Typography>
                        </Box>
                      </Box>

                      <Rating value={t.rating} readOnly size="small" sx={{ mb: 2 }} />

                      <Typography variant="body2" sx={{ mb: 2, fontStyle: "italic" }}>
                        "{t.comment}"
                      </Typography>

                      <Chip label={t.package} color="primary" variant="outlined" size="small" />
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* ---------------- WHY CHOOSE US ---------------- */}
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              mb: 8,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.primary.main,
                0.05
              )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
            }}
          >
            <Typography 
              variant="h4"
              sx={{ 
                fontWeight: "bold", 
                textAlign: "center", 
                mb: 6,
                fontSize: { xs: '1.75rem', md: '2.125rem' }
              }}
            >
              Why Choose Bharat Trip?
            </Typography>

            <Grid container spacing={4}>
              {[
                { icon: <EmojiEvents />, title: "Award Winning", desc: "Best travel agency 2023" },
                { icon: <Security />, title: "Safe & Secure", desc: "Your safety is our priority" },
                { icon: <LocalOffer />, title: "Best Prices", desc: "No hidden charges" },
                { icon: <SupportAgent />, title: "24/7 Support", desc: "We're here anytime" },
                { icon: <Groups />, title: "Expert Guides", desc: "Professional local guides" },
                { icon: <Hotel />, title: "Quality Stays", desc: "Comfortable accommodations" }
              ].map((feature, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Box sx={{ textAlign: "center", p: 2 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        color: theme.palette.primary.main,
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      }}
                    >
                      {feature.icon}
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      {feature.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {feature.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* ---------------- NEWSLETTER ---------------- */}
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: "center",
              borderRadius: 4,
              color: "white",
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: "bold", 
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2.125rem' }
              }}
            >
              Get Travel Deals & Offers
            </Typography>

            <Typography sx={{ mb: 4, opacity: 0.9 }}>
              Subscribe to get exclusive offers in your inbox
            </Typography>

            <Box sx={{ display: "flex", maxWidth: 400, mx: "auto", flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
              <TextField
                placeholder="Enter your email"
                variant="outlined"
                fullWidth
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                }}
              />

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                  minWidth: { xs: 'auto', sm: 120 }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Paper>
        </Container>

        {/* ---------------- FLOATING BUTTONS ---------------- */}
        <Fab
          color="primary"
          sx={{ 
            position: "fixed", 
            bottom: 24, 
            right: 24,
            display: { xs: 'none', sm: 'flex' }
          }}
          onClick={scrollToFeatured}
        >
          <Navigation />
        </Fab>

        <Fab
          variant="extended"
          color="secondary"
          sx={{ 
            position: "fixed", 
            bottom: 24, 
            left: 24,
            display: { xs: 'none', sm: 'flex' }
          }}
        >
          <Share sx={{ mr: 1 }} />
          Share
        </Fab>

        {/* MOBILE FLOATING ACTION BUTTON */}
        <Fab
          color="primary"
          sx={{ 
            position: "fixed", 
            bottom: 16, 
            right: 16,
            display: { xs: 'flex', sm: 'none' }
          }}
          onClick={scrollToFeatured}
        >
          <Navigation />
        </Fab>
      </Box>
    </ThemeProvider>
  );
}