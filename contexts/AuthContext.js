// contexts/AuthContext.js
"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { getWishlist, addToWishlist, removeFromWishlist, isInWishlist, clearWishlist as clearWishlistUtil } from '@/utils/wishlist';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user_data');
    
    if (token && userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Merge guest wishlist with user wishlist on login
      mergeGuestWishlistWithUser(parsedUser.id);
    }
    setLoading(false);
  }, []);

  // Function to merge guest wishlist with user wishlist
  const mergeGuestWishlistWithUser = (userId) => {
    if (typeof window === 'undefined') return;
    
    const guestWishlist = JSON.parse(localStorage.getItem('guest_wishlist') || '[]');
    const userWishlist = JSON.parse(localStorage.getItem(`wishlist_${userId}`) || '[]');
    
    if (guestWishlist.length > 0) {
      // Merge wishlists, avoiding duplicates
      const mergedWishlist = [...userWishlist];
      guestWishlist.forEach(guestItem => {
        const exists = userWishlist.some(userItem => userItem.id === guestItem.id);
        if (!exists) {
          mergedWishlist.push(guestItem);
        }
      });
      
      // Save merged wishlist to user
      localStorage.setItem(`wishlist_${userId}`, JSON.stringify(mergedWishlist));
      
      // Clear guest wishlist
      localStorage.removeItem('guest_wishlist');
    }
  };

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_data', JSON.stringify(userData));
    
    // Merge guest wishlist with user wishlist after login
    mergeGuestWishlistWithUser(userData.id);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    
    // Optionally clear wishlist cache if needed
    // Don't clear wishlist data so user can access it when they log back in
  };

  const updateUser = (updatedUserData) => {
    setUser(updatedUserData);
    localStorage.setItem('user_data', JSON.stringify(updatedUserData));
  };

  // Wishlist methods that are user-aware
  const addToUserWishlist = (packageData) => {
    if (!user) {
      // Add to guest wishlist
      const wishlist = JSON.parse(localStorage.getItem('guest_wishlist') || '[]');
      const exists = wishlist.some(item => item.id === packageData.id);
      if (!exists) {
        wishlist.push(packageData);
        localStorage.setItem('guest_wishlist', JSON.stringify(wishlist));
      }
      return wishlist;
    } else {
      // Add to user wishlist
      const wishlist = JSON.parse(localStorage.getItem(`wishlist_${user.id}`) || '[]');
      const exists = wishlist.some(item => item.id === packageData.id);
      if (!exists) {
        wishlist.push(packageData);
        localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(wishlist));
      }
      return wishlist;
    }
  };

  const removeFromUserWishlist = (packageId) => {
    if (!user) {
      const wishlist = JSON.parse(localStorage.getItem('guest_wishlist') || '[]');
      const updatedWishlist = wishlist.filter(item => item.id !== packageId);
      localStorage.setItem('guest_wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    } else {
      const wishlist = JSON.parse(localStorage.getItem(`wishlist_${user.id}`) || '[]');
      const updatedWishlist = wishlist.filter(item => item.id !== packageId);
      localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(updatedWishlist));
      return updatedWishlist;
    }
  };

  const getUserWishlist = () => {
    if (!user) {
      return JSON.parse(localStorage.getItem('guest_wishlist') || '[]');
    } else {
      return JSON.parse(localStorage.getItem(`wishlist_${user.id}`) || '[]');
    }
  };

  const isPackageInWishlist = (packageId) => {
    if (!user) {
      const wishlist = JSON.parse(localStorage.getItem('guest_wishlist') || '[]');
      return wishlist.some(item => item.id === packageId);
    } else {
      const wishlist = JSON.parse(localStorage.getItem(`wishlist_${user.id}`) || '[]');
      return wishlist.some(item => item.id === packageId);
    }
  };

  const clearUserWishlist = () => {
    if (!user) {
      localStorage.setItem('guest_wishlist', '[]');
    } else {
      localStorage.setItem(`wishlist_${user.id}`, '[]');
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      updateUser,
      loading,
      // Wishlist methods
      addToUserWishlist,
      removeFromUserWishlist,
      getUserWishlist,
      isPackageInWishlist,
      clearUserWishlist
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}