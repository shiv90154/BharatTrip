"use client";

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { User, LogIn } from 'lucide-react';

export default function Navigation() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#FF385C] to-[#FF5A5F] rounded-lg"></div>
            <span className="font-bold text-xl text-gray-900">BharatTrip</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#FF385C] transition-colors"
            >
              Home
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/profile" 
                  className="flex items-center space-x-2 text-gray-700 hover:text-[#FF385C] transition-colors"
                >
                  <User size={18} />
                  <span>Profile</span>
                </Link>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="flex items-center space-x-2 bg-[#FF385C] text-white px-4 py-2 rounded-lg hover:bg-[#FF5A5F] transition-colors"
              >
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}