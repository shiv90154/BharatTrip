"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Lock, ArrowLeft, CheckCircle, Eye, EyeOff, Copy, Clock, RefreshCw } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthModal({ isOpen, onClose }) {
  const [step, setStep] = useState('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    otp: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [otpAttempts, setOtpAttempts] = useState(0);
  const [lastOtpSent, setLastOtpSent] = useState(null);
  const [debugOtp, setDebugOtp] = useState('');

  const { login } = useAuth();

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear any previous messages when user starts typing
    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[6-9]\d{9}$/;
    return re.test(phone);
  };

  const sendOTP = async () => {
    if (!validateEmail(formData.email) && !validatePhone(formData.phone)) {
      setMessage({ type: 'error', text: 'Please enter a valid email or 10-digit phone number' });
      return;
    }

    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStep('otp');
        setCountdown(60);
        setLastOtpSent(new Date().toISOString());
        
        // Store debug OTP for development
        if (data.debug_otp) {
          setDebugOtp(data.debug_otp);
        }

        let successMessage = `✅ OTP sent successfully to ${formData.email || formData.phone}!`;
        
        // Show OTP in development mode for testing
        if (process.env.NODE_ENV === 'development' && data.debug_otp) {
          successMessage += ` \n\n🔐 Development OTP: ${data.debug_otp}`;
        }

        setMessage({ 
          type: 'success', 
          text: successMessage 
        });

        // Auto-fill OTP in development for testing
        if (process.env.NODE_ENV === 'development' && data.debug_otp) {
          setTimeout(() => {
            handleInputChange('otp', data.debug_otp);
          }, 1000);
        }

      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to send OTP. Please try again.' });
      }
    } catch (error) {
      console.error('Send OTP error:', error);
      setMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOTP = async () => {
    if (!formData.otp || formData.otp.length !== 6) {
      setMessage({ type: 'error', text: 'Please enter a valid 6-digit OTP' });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          otp: formData.otp
        })
      });

      const data = await response.json();

      if (response.ok) {
        setOtpAttempts(0);
        login(data.user, data.token);
        setMessage({ 
          type: 'success', 
          text: '🎉 Login successful! Redirecting to your profile...' 
        });
        
        setTimeout(() => {
          onClose();
          window.location.href = '/profile'; // Redirect to profile page
        }, 1500);
      } else {
        const newAttempts = otpAttempts + 1;
        setOtpAttempts(newAttempts);
        
        let errorMessage = data.error || 'Invalid OTP';
        if (newAttempts >= 3) {
          errorMessage += '. Too many failed attempts. Please request a new OTP.';
        }
        
        setMessage({ type: 'error', text: errorMessage });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setStep('email');
    setFormData({
      email: '',
      phone: '',
      otp: ''
    });
    setMessage({ type: '', text: '' });
    setCountdown(0);
    setOtpAttempts(0);
    setLastOtpSent(null);
    setDebugOtp('');
  };

  const handleBack = () => {
    if (step === 'otp') {
      setStep('email');
    }
    setMessage({ type: '', text: '' });
    setOtpAttempts(0);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setMessage({ type: 'success', text: 'OTP copied to clipboard!' });
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-white rounded-2xl shadow-2xl z-[10001] overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF385C] to-[#FF5A5F] p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Lock size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    {step === 'email' ? 'Welcome Back!' : 'Verify Your Identity'}
                  </h2>
                  <p className="text-white/90 text-sm mt-1">
                    {step === 'email' 
                      ? 'Sign in to your BharatTrip account' 
                      : 'Enter the OTP we just sent you'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {/* Message Display */}
              {message.text && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg mb-4 text-sm ${
                    message.type === 'error' 
                      ? 'bg-red-50 text-red-700 border border-red-200' 
                      : 'bg-green-50 text-green-700 border border-green-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {message.type === 'success' ? (
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-red-100 border border-red-300 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-red-600 text-xs font-bold">!</span>
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="whitespace-pre-line">{message.text}</p>
                      {/* Debug OTP Copy Button */}
                      {message.type === 'success' && debugOtp && process.env.NODE_ENV === 'development' && (
                        <button
                          onClick={() => copyToClipboard(debugOtp)}
                          className="mt-2 flex items-center gap-2 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200 transition-colors"
                        >
                          <Copy size={12} />
                          Copy OTP for Testing
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Failed Attempts Warning */}
              {otpAttempts > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 text-yellow-800 text-sm">
                    <Clock size={16} />
                    <span>
                      {otpAttempts} failed attempt{otpAttempts > 1 ? 's' : ''}. 
                      {otpAttempts >= 3 && ' Please request a new OTP.'}
                    </span>
                  </div>
                </div>
              )}

              {step === 'email' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Mail size={16} />
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-500 font-medium">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Phone size={16} />
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Enter 10-digit phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    onClick={sendOTP}
                    disabled={isLoading || (!formData.email && !formData.phone)}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#FF385C] to-[#FF5A5F] text-white py-3.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending OTP...
                      </>
                    ) : (
                      <>
                        <Lock size={18} />
                        Send OTP
                      </>
                    )}
                  </motion.button>

                  {/* Help Text */}
                  <div className="text-center space-y-2">
                    <p className="text-gray-500 text-sm">
                      We'll send a 6-digit verification code
                    </p>
                    {process.env.NODE_ENV === 'development' && (
                      <p className="text-blue-600 text-xs font-medium">
                        🚀 Development Mode: OTP will be shown for testing
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 'otp' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* OTP Header */}
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Lock size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Enter Verification Code</h3>
                    <p className="text-gray-600">
                      Sent to: <span className="font-semibold text-gray-900">{formData.email || formData.phone}</span>
                    </p>
                    {lastOtpSent && (
                      <p className="text-xs text-gray-500">
                        Sent at {new Date(lastOtpSent).toLocaleTimeString('en-IN', { 
                          hour: '2-digit', 
                          minute: '2-digit',
                          hour12: true 
                        })}
                      </p>
                    )}
                  </div>

                  {/* OTP Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      6-Digit OTP
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter 6-digit code"
                        value={formData.otp}
                        onChange={(e) => handleInputChange('otp', e.target.value.replace(/\D/g, '').slice(0, 6))}
                        className="w-full pl-4 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent outline-none text-center text-xl font-semibold tracking-widest transition-all duration-200"
                        maxLength={6}
                      />
                      {formData.otp && (
                        <button
                          onClick={() => handleInputChange('otp', '')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <X size={18} />
                        </button>
                      )}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Enter the code we sent you</span>
                      <span>{formData.otp.length}/6</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={handleBack}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 border border-gray-300 text-gray-700 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <ArrowLeft size={18} />
                      Back
                    </motion.button>
                    <motion.button
                      onClick={verifyOTP}
                      disabled={isLoading || formData.otp.length !== 6}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-[#FF385C] to-[#FF5A5F] text-white py-3.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Verifying...
                        </>
                      ) : (
                        <>
                          <CheckCircle size={18} />
                          Verify & Login
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Resend OTP Section */}
                  <div className="text-center space-y-3">
                    {countdown > 0 ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                          <Clock size={16} />
                          <span>Resend OTP in {formatTime(countdown)}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1">
                          <motion.div
                            initial={{ width: '100%' }}
                            animate={{ width: '0%' }}
                            transition={{ duration: countdown, ease: "linear" }}
                            className="bg-[#FF385C] h-1 rounded-full"
                          />
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={sendOTP}
                        disabled={isLoading}
                        className="w-full text-[#FF385C] py-2 text-sm font-semibold hover:text-[#FF5A5F] transition-colors flex items-center justify-center gap-2"
                      >
                        <RefreshCw size={16} />
                        Resend OTP
                      </button>
                    )}
                    
                    {/* Development Helper */}
                    {process.env.NODE_ENV === 'development' && debugOtp && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-blue-700 text-sm font-medium mb-2">
                          🛠️ Development Helper
                        </p>
                        <div className="flex items-center justify-between">
                          <code className="text-blue-800 font-mono text-sm">
                            OTP: {debugOtp}
                          </code>
                          <button
                            onClick={() => copyToClipboard(debugOtp)}
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs font-medium"
                          >
                            <Copy size={12} />
                            Copy
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  By continuing, you agree to our{' '}
                  <a href="/terms" className="text-[#FF385C] hover:underline font-medium">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-[#FF385C] hover:underline font-medium">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}