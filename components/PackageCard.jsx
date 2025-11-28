"use client";

import { 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Box, 
  Chip,
  Rating,
  IconButton,
  useTheme,
  alpha
} from '@mui/material';
import { 
  Favorite, 
  FavoriteBorder, 
  LocationOn, 
  AccessTime,
  People,
  FlashOn
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PackageCard({ data, featured, delay = 0 }) {
  const theme = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Ensure fallback values (fix for highlights undefined)
  const highlights = data?.highlights ?? [];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease-in-out',
          borderRadius: 3,
          overflow: 'visible',
          background: featured 
            ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`
            : 'background.paper',
          border: featured ? `2px solid ${alpha(theme.palette.primary.main, 0.2)}` : 'none',
          boxShadow: featured 
            ? `0 8px 32px ${alpha(theme.palette.primary.main, 0.1)}`
            : '0 4px 20px rgba(0,0,0,0.08)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: featured 
              ? `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`
              : '0 12px 30px rgba(0,0,0,0.15)',
          }
        }}
      >
        {/* Image Section */}
        <Box sx={{ position: 'relative', pt: 2, px: 2 }}>
          {featured && (
            <Chip 
              icon={<FlashOn />}
              label="Featured" 
              color="primary" 
              size="small"
              sx={{ 
                position: 'absolute',
                top: 16,
                left: 16,
                zIndex: 2,
                fontWeight: 'bold'
              }}
            />
          )}
          
          {data?.discount > 0 && (
            <Chip 
              label={`${data.discount}% OFF`} 
              color="error" 
              size="small"
              sx={{ 
                position: 'absolute',
                top: 16,
                right: 16,
                zIndex: 2,
                fontWeight: 'bold'
              }}
            />
          )}

          <CardMedia
            component="img"
            height="200"
            image={data?.image}
            alt={data?.title}
            sx={{ 
              borderRadius: 2,
              objectFit: 'cover'
            }}
          />

          <IconButton
            sx={{
              position: 'absolute',
              bottom: -20,
              right: 16,
              backgroundColor: theme.palette.background.paper,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              '&:hover': {
                backgroundColor: theme.palette.background.paper,
                transform: 'scale(1.1)'
              }
            }}
            onClick={handleFavorite}
          >
            {isFavorite ? (
              <Favorite color="error" />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3, pt: 4 }}>
          {/* Title and Rating */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                fontWeight: 'bold',
                lineHeight: 1.2,
                pr: 1
              }}
            >
              {data?.title}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <Rating value={data?.rating} size="small" readOnly />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                ({data?.reviews})
              </Typography>
            </Box>
          </Box>

          {/* Location */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
            <LocationOn color="primary" fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              {data?.location}
            </Typography>
          </Box>

          {/* Duration */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
            <AccessTime color="secondary" fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              {data?.duration}
            </Typography>
          </Box>

          {/* Highlights */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Highlights:
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {highlights.map((highlight, index) => (
                <Chip
                  key={index}
                  label={highlight}
                  size="small"
                  variant="outlined"
                  sx={{ 
                    fontSize: '0.7rem',
                    height: 24
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Price Section */}
          <Box sx={{ mt: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Box>
                <Typography 
                  variant="h5" 
                  component="div" 
                  sx={{ 
                    fontWeight: 'bold',
                    color: 'primary.main'
                  }}
                >
                  ₹{data?.price?.toLocaleString()}
                </Typography>

                {data?.originalPrice > data?.price && (
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      textDecoration: 'line-through',
                      color: 'text.disabled'
                    }}
                  >
                    ₹{data.originalPrice.toLocaleString()}
                  </Typography>
                )}
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <People fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {Math.floor(Math.random() * 50) + 10} booked
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>

        {/* Button */}
        <CardActions sx={{ p: 3, pt: 0 }}>
          <Button
            component={Link}
            href={`/packages/${data?.slug}`}
            variant="contained"
            fullWidth
            size="large"
            sx={{
              borderRadius: 2,
              py: 1.5,
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.3)}`,
              },
              transition: 'all 0.3s ease'
            }}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
