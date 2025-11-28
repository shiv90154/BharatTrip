"use client";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Home, Explore, LocalOffer, Article, ContactMail } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState(0);

  const tabs = [
    { label: "Home", icon: <Home />, href: "/" },
    { label: "Packages", icon: <LocalOffer />, href: "/packages" },
    { label: "Explore", icon: <Explore />, href: "/destinations" },
    { label: "Blogs", icon: <Article />, href: "/blogs" },
    { label: "Contact", icon: <ContactMail />, href: "/contact" }
  ];

  useEffect(() => {
    const index = tabs.findIndex((t) => t.href === pathname);
    setValue(index !== -1 ? index : 0);
  }, [pathname]);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", md: "none" },
        zIndex: 9999
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(e, newValue) => router.push(tabs[newValue].href)}
        sx={{
          "& .Mui-selected": {
            color: "#F97316",
          }
        }}
      >
        {tabs.map((t, i) => (
          <BottomNavigationAction key={i} label={t.label} icon={t.icon} />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
