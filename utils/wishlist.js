// utils/wishlist.js (simplified version)
export const getWishlist = (userId) => {
  if (typeof window === 'undefined') return [];
  
  if (userId) {
    return JSON.parse(localStorage.getItem(`wishlist_${userId}`) || '[]');
  } else {
    return JSON.parse(localStorage.getItem('guest_wishlist') || '[]');
  }
};

export const addToWishlist = (userId, packageData) => {
  if (typeof window === 'undefined') return;
  
  const key = userId ? `wishlist_${userId}` : 'guest_wishlist';
  const wishlist = JSON.parse(localStorage.getItem(key) || '[]');
  
  // Check if already exists
  const exists = wishlist.some(item => item.id === packageData.id);
  if (!exists) {
    wishlist.push(packageData);
    localStorage.setItem(key, JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (userId, packageId) => {
  if (typeof window === 'undefined') return;
  
  const key = userId ? `wishlist_${userId}` : 'guest_wishlist';
  const wishlist = JSON.parse(localStorage.getItem(key) || '[]');
  const updatedWishlist = wishlist.filter(item => item.id !== packageId);
  localStorage.setItem(key, JSON.stringify(updatedWishlist));
};

export const isInWishlist = (userId, packageId) => {
  if (typeof window === 'undefined') return false;
  
  const key = userId ? `wishlist_${userId}` : 'guest_wishlist';
  const wishlist = JSON.parse(localStorage.getItem(key) || '[]');
  return wishlist.some(item => item.id === packageId);
};

export const clearWishlist = (userId) => {
  if (typeof window === 'undefined') return;
  
  const key = userId ? `wishlist_${userId}` : 'guest_wishlist';
  localStorage.setItem(key, '[]');
};