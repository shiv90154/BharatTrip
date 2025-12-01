"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthModal from '@/components/AuthModal';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // This page just shows the auth modal
    // If user closes modal, redirect to home
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <AuthModal 
          isOpen={true} 
          onClose={() => router.push('/')}
        />
      </div>
    </div>
  );
}