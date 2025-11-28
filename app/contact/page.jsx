"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ThemeProvider,
  createTheme,

  Container,
  Grid,
  Typography,
  Box,

  Card,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  alpha,
  useTheme,
  CircularProgress,
  Stack,

} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Chat,
  Person,
  LocalPostOffice,
  Smartphone,
  Subject,
  Message,
  Backpack,
  Send,
  CheckCircle,
  Star
} from '@mui/icons-material';

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
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});


export default function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    package: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        package: ""
      });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: <Phone />,
      title: "Call Us",
      details: ["+91-8894322900", "+91-8894323900"],
      action: "Call now",
      link: "tel:+918894322900",
      color: theme.palette.primary.main
    },
    {
      icon: <Email />,
      title: "Email Us",
      details: ["info@bharattrip.net", "support@bharattrip.net"],
      action: "Send email",
      link: "mailto:info@bharattrip.net",
      color: theme.palette.secondary.main
    },
    {
      icon: <LocationOn />,
      title: "Visit Us",
      details: ["Kehloor Bhawan Shakti Vihar", "Panthghati, Pin - 171009"],
      action: "Get directions",
      link: "https://maps.google.com",
      color: theme.palette.primary.light
    },
    {
      icon: <Chat />,
      title: "WhatsApp",
      details: ["Quick responses", "24/7 support"],
      action: "Start chat",
      link: "https://wa.me/918894322900",
      color: '#25D366'
    }
  ];

  const packages = [
    "General Inquiry",
    "Himachal Adventure",
    "Goa Beach Package",
    "Kerala Backwaters",
    "Rajasthan Heritage",
    "Ladakh Expedition",
    "Custom Tour"
  ];

  const stats = [
    { number: "500+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "24/7", label: "Support" },
    { number: "5⭐", label: "Rating" }
  ];

  const faqs = [
    "How soon will I get a response?",
    "Do you offer custom tour packages?",
    "What's included in the package price?",
    "Can I modify my booking after confirmation?"
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.03)} 100%)`,
          pt: { xs: 16, md: 20 },
          pb: 8
        }}
      >
        <Container maxWidth="lg">
          
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              icon={<Chat />}
              label="Get in Touch"
              sx={{ 
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                mb: 3,
                px: 1
              }}
            />
            
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Lets Plan Your{" "}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Dream Trip
              </Box>
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              Have questions about your next adventure? We were here to help you create unforgettable memories in incredible India.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            
            {/* Contact Information */}
            <Grid item xs={12} lg={4}>
              <Stack spacing={3}>
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index}
                    sx={{ 
                      p: 3,
                      transition: 'all 0.3s ease',
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                        borderColor: alpha(theme.palette.primary.main, 0.3)
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: alpha(method.color, 0.1),
                          color: method.color,
                          flexShrink: 0
                        }}
                      >
                        {method.icon}
                      </Box>
                      
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {method.title}
                        </Typography>
                        
                        {method.details.map((detail, idx) => (
                          <Typography 
                            key={idx} 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ mb: 0.5 }}
                          >
                            {detail}
                          </Typography>
                        ))}
                        
                        <Link 
                          href={method.link}
                          target="_blank"
                          style={{ textDecoration: 'none' }}
                        >
                          <Button
                            variant="text"
                            sx={{ 
                              mt: 1,
                              color: method.color,
                              fontWeight: 600,
                              px: 0,
                              '&:hover': {
                                backgroundColor: 'transparent',
                                transform: 'translateX(4px)'
                              },
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {method.action}
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </Card>
                ))}

                {/* Quick Stats */}
                <Card 
                  sx={{ 
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    color: 'white',
                    p: 4
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Why Choose Us?
                  </Typography>
                  
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    {stats.map((stat, index) => (
                      <Grid item xs={6} key={index}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h5" fontWeight="bold">
                            {stat.number}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.9 }}>
                            {stat.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </Stack>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} lg={8}>
              <Card 
                sx={{ 
                  background: alpha('#fff', 0.8),
                  backdropFilter: 'blur(20px)',
                  overflow: 'hidden'
                }}
              >
                {/* Success Message */}
                {isSubmitted && (
                  <Box
                    sx={{
                      background: `linear-gradient(135deg, #4CAF50 0%, #45a049 100%)`,
                      color: 'white',
                      p: 4,
                      textAlign: 'center'
                    }}
                  >
                    <CheckCircle sx={{ fontSize: 48, mb: 2 }} />
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      Thank You!
                    </Typography>
                    <Typography>
                      We've received your message and will get back to you within 24 hours.
                    </Typography>
                  </Box>
                )}

                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Send us a Message
                  </Typography>
                  
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Fill out the form below and our travel experts will help you plan the perfect trip.
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      {/* Name Field */}
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          InputProps={{
                            startAdornment: <Person sx={{ color: 'text.secondary', mr: 1 }} />
                          }}
                          placeholder="Enter your full name"
                        />
                      </Grid>

                      {/* Email Field */}
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          InputProps={{
                            startAdornment: <LocalPostOffice sx={{ color: 'text.secondary', mr: 1 }} />
                          }}
                          placeholder="your.email@example.com"
                        />
                      </Grid>

                      {/* Phone Field */}
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          InputProps={{
                            startAdornment: <Smartphone sx={{ color: 'text.secondary', mr: 1 }} />
                          }}
                          placeholder="+91 00000 00000"
                        />
                      </Grid>

                      {/* Package Field */}
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <InputLabel>Interested Package</InputLabel>
                          <Select
                            name="package"
                            value={formData.package}
                            onChange={handleChange}
                            label="Interested Package"
                            startAdornment={<Backpack sx={{ color: 'text.secondary', mr: 1 }} />}
                          >
                            <MenuItem value="">
                              <em>Select a package</em>
                            </MenuItem>
                            {packages.map((pkg, index) => (
                              <MenuItem key={index} value={pkg}>{pkg}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      {/* Subject Field */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          InputProps={{
                            startAdornment: <Subject sx={{ color: 'text.secondary', mr: 1 }} />
                          }}
                          placeholder="What's this regarding?"
                        />
                      </Grid>

                      {/* Message Field */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          multiline
                          rows={6}
                          InputProps={{
                            startAdornment: <Message sx={{ color: 'text.secondary', mr: 1, mt: 1, alignSelf: 'flex-start' }} />
                          }}
                          placeholder="Tell us about your dream vacation, preferences, and any special requirements..."
                        />
                      </Grid>

                      {/* Submit Button */}
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={{
                            py: 2,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            fontSize: '1.1rem',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {isSubmitting ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CircularProgress size={20} color="inherit" />
                              Processing...
                            </Box>
                          ) : (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Send />
                              Send Message
                            </Box>
                          )}
                        </Button>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          textAlign="center"
                        >
                          We typically respond within 2-4 hours during business hours.
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Card>

              {/* FAQ Section */}
              <Card 
                sx={{ 
                  mt: 3,
                  p: 3,
                  background: alpha('#fff', 0.8),
                  backdropFilter: 'blur(20px)'
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Star color="primary" />
                  Frequently Asked Questions
                </Typography>
                
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {faqs.map((faq, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2,
                        color: 'text.secondary',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: 'text.primary'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: theme.palette.primary.main,
                          flexShrink: 0
                        }}
                      />
                      <Typography variant="body2">
                        {faq}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}