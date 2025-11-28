"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
  Stack,
  Divider,
  Paper,
  Fab,
  useTheme,
  alpha
} from '@mui/material';

import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Send,
  WhatsApp
} from '@mui/icons-material';

import { useState } from 'react';

export default function Footer() {
  const theme = useTheme();
  const [email, setEmail] = useState("");

  const colors = {
    primaryBlue: "#0C3C8C",
    brightBlue: "#1D4ED8",
    accentOrange: "#F97316",
    lightOrange: "#FB923C",
    bgLight: "#F8F9FA",
    textDark: "#1E293B"
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" }
  ];

  const popularDestinations = [
    "Goa Beaches",
    "Himachal Pradesh",
    "Kerala Backwaters",
    "Rajasthan Heritage",
    "Ladakh Adventure"
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook />, href: "#" },
    { name: "Instagram", icon: <Instagram />, href: "#" },
    { name: "Twitter", icon: <Twitter />, href: "#" },
    { name: "LinkedIn", icon: <LinkedIn />, href: "#" }
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(135deg, ${colors.primaryBlue} 0%, ${colors.brightBlue} 100%)`,
        color: "white",
        mt: "auto",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">

        {/* ---------------- GRID CONTENT ---------------- */}
        <Grid container spacing={6}>

          {/* ------ BRAND + SOCIAL ------ */}
          <Grid item xs={12} md={6} lg={3}>
            <Stack spacing={3}>
              {/* Logo */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 55,
                    height: 55,
                    borderRadius: "12px",
                    backgroundColor: colors.accentOrange,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 18px rgba(0,0,0,0.3)"
                  }}
                >
                  <Typography fontWeight="bold" color="white">BT</Typography>
                </Box>

                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    background: `linear-gradient(45deg, ${colors.lightOrange}, white)`,
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  BharatTrip
                </Typography>
              </Box>

              <Typography color="grey.300">
                Explore India like never before — beaches, mountains,
                culture & adventure. Trusted by 10,000+ travelers.
              </Typography>

              {/* Social Icons */}
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.name}
                    href={social.href}
                    sx={{
                      color: "white",
                      backgroundColor: alpha("#fff", 0.12),
                      "&:hover": {
                        backgroundColor: colors.accentOrange,
                        transform: "scale(1.1)"
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* ------ QUICK LINKS ------ */}
          <Grid item xs={6} sm={4} lg={2}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Quick Links
            </Typography>

            <Stack spacing={1.4}>
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  underline="none"
                  color="grey.300"
                  sx={{
                    "&:hover": { color: "white", pl: 1 },
                    transition: "0.25s"
                  }}
                >
                  • {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* ------ POPULAR DESTINATIONS ------ */}
          <Grid item xs={6} sm={4} lg={2}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Top Destinations
            </Typography>

            <Stack spacing={1.4}>
              {popularDestinations.map((city) => (
                <Typography
                  key={city}
                  color="grey.300"
                  sx={{ "&:hover": { color: "white", pl: 1 }, transition: "0.25s" }}
                >
                  • {city}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* ------ CONTACT & NEWSLETTER ------ */}
          <Grid item xs={12} sm={12} lg={5}>
            <Stack spacing={3}>
              <Typography variant="h6" fontWeight="bold">
                Contact Us
              </Typography>

              {/* INFO */}
              <Stack spacing={1.5}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <LocationOn color="warning" />
                  <Typography color="grey.300">
                    Kehloor Bhawan Shakti Vihar, Panthghati, 171009
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Phone color="warning" />
                  <Stack>
                    <Link href="tel:+918894322900" color="grey.300" underline="none">
                      +91 88943 22900
                    </Link>
                    <Link href="tel:+918894323900" color="grey.300" underline="none">
                      +91 88943 23900
                    </Link>
                  </Stack>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Email color="warning" />
                  <Link href="mailto:info@bharattrip.net" underline="none" color="grey.300">
                    info@bharattrip.net
                  </Link>
                </Box>
              </Stack>

              {/* NEWSLETTER */}
              <Paper
                sx={{
                  p: 3,
                  mt: 1,
                  backgroundColor: alpha("#fff", 0.06),
                  backdropFilter: "blur(10px)",
                  borderRadius: 2
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Subscribe for Updates
                </Typography>

                <Box component="form" onSubmit={handleSubscribe} sx={{ display: "flex", mt: 2 }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Enter email"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      backgroundColor: alpha("#fff", 0.1),
                      borderRadius: 1,
                      input: { color: "white" },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                    sx={{
                      ml: 1,
                      backgroundColor: colors.accentOrange,
                      "&:hover": { backgroundColor: colors.lightOrange }
                    }}
                  >
                    Go
                  </Button>
                </Box>
              </Paper>
            </Stack>
          </Grid>
        </Grid>

        {/* BOTTOM STRIP */}
        <Divider sx={{ my: 4, borderColor: alpha("#fff", 0.2) }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: { xs: "center", md: "left" },
            gap: 2
          }}
        >
          <Typography color="grey.300" variant="body2">
            © 2025 BharatTrip. All Rights Reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            {["Privacy Policy", "Terms", "Cookies"].map((x) => (
              <Link
                key={x}
                href="#"
                underline="none"
                color="grey.300"
                sx={{ "&:hover": { color: "white" } }}
              >
                {x}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* WHATSAPP BUTTON */}
      <Fab
        color="success"
        href="https://wa.me/918894322900"
        target="_blank"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.15)" },
            "100%": { transform: "scale(1)" }
          }
        }}
      >
        <WhatsApp />
      </Fab>
    </Box>
  );
}
