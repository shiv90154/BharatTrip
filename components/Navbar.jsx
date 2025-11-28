"use client";

import { 
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  alpha,
  Typography
} from '@mui/material';

import {
  Home,
  Explore,
  LocalOffer,
  Article,
  ContactMail,
  Person,
  Menu,
  Close
} from '@mui/icons-material';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const customTheme = {
  primaryBlue: '#0C3C8C',
  brightBlue: '#1D4ED8',
  accentOrange: '#F97316',
  lightOrange: '#FB923C',
  bgLight: '#FFFFFF',
  textDark: '#1E293B'
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", href: "/", label: "Home", icon: <Home fontSize="small" /> },
    { id: "packages", href: "/packages", label: "Packages", icon: <LocalOffer fontSize="small" /> },
    { id: "destinations", href: "/destinations", label: "Explore", icon: <Explore fontSize="small" /> },
    { id: "blogs", href: "/blogs", label: "Blogs", icon: <Article fontSize="small" /> },
    { id: "contact", href: "/contact", label: "Contact", icon: <ContactMail fontSize="small" /> }
  ];

  const getActiveTab = () => {
    if (pathname === '/') return "home";
    const match = navItems.find(item => pathname.startsWith(item.href));
    return match?.id || "home";
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeTab = getActiveTab();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: alpha(customTheme.bgLight, 0.98),
          color: customTheme.textDark,
          backdropFilter: "blur(20px)",
          boxShadow: scrolled ? 2 : 0,
          transition: "all 0.3s ease",
          py: 1.2
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            
            {/* LOGO */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: customTheme.primaryBlue,
                    color: "white",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    mr: 2
                  }}
                >
                  BT
                </Box>

                <Typography 
                  variant="h6" 
                  sx={{ fontWeight: "bold", color: customTheme.primaryBlue }}
                >
                  BharatTrip
                </Typography>
              </Box>
            </Link>

            {/* DESKTOP MENU */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navItems.map((item) => (
                <Link href={item.href} key={item.id} style={{ textDecoration: "none" }}>
                  <Button
                    startIcon={item.icon}
                    sx={{
                      color: activeTab === item.id ? customTheme.brightBlue : customTheme.textDark,
                      backgroundColor: activeTab === item.id ? alpha(customTheme.brightBlue, 0.1) : "transparent",
                      "&:hover": {
                        backgroundColor: alpha(customTheme.brightBlue, 0.15),
                      },
                      borderRadius: 2,
                      px: 3
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}

              <Button
                variant="contained"
                sx={{
                  backgroundColor: customTheme.accentOrange,
                  "&:hover": { backgroundColor: customTheme.lightOrange }
                }}
              >
                Book Now
              </Button>
            </Box>

            {/* MOBILE MENU ICON */}
            <IconButton sx={{ display: { md: "none" }}} onClick={() => setOpen(true)}>
              {open ? <Close /> : <Menu />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 3, background: customTheme.primaryBlue, height: "100%" }}>
          <Typography variant="h6" color="white" mb={2}>BharatTrip</Typography>

          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.id}
                component={Link}
                href={item.href}
                onClick={() => setOpen(false)}
                sx={{
                  borderRadius: 2,
                  color: "white",
                  "&:hover": { backgroundColor: alpha("#fff", 0.2) }
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Toolbar />
    </>
  );
}
