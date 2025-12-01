"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  PaperAirplaneIcon 
} from "@heroicons/react/24/outline";

const roles = [
  "Influencer / Travel Creator",
  "Hotel Partnership",
  "Taxi / Transport Provider",
  "Flight / Travel Agent",
  "Tour Guide",
  "Adventure Activity Provider",
  "Freelancer (Photo/Video Editing)",
  "Content Writer",
  "Backend Support / Operations",
  "Other Collaboration"
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  role: string;
  message: string;
};

type FormErrors = {
  [K in keyof FormState]?: string;
};

export default function CareerForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Role validation
    if (!form.role) {
      newErrors.role = "Please select an opportunity type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (key: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    // Clear error when user starts typing
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { 
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setIsSubmitted(true);
        setForm({ name: "", email: "", phone: "", role: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      alert("Something went wrong! Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl border border-green-200 p-8 text-center"
      >
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Application Submitted!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in collaborating with Bharat Trip. 
          Our team will review your application and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-premium"
        >
          Submit Another Application
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Your Journey With Us
        </h2>
        <p className="text-gray-600">
          Fill out the form below and our team will contact you shortly
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            className={`input-premium w-full ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Enter your full name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-600 text-sm mt-1 flex items-center gap-1"
              >
                <ExclamationTriangleIcon className="w-4 h-4" />
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            className={`input-premium w-full ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="your.email@example.com"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-600 text-sm mt-1 flex items-center gap-1"
              >
                <ExclamationTriangleIcon className="w-4 h-4" />
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            className={`input-premium w-full ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <AnimatePresence>
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-600 text-sm mt-1 flex items-center gap-1"
              >
                <ExclamationTriangleIcon className="w-4 h-4" />
                {errors.phone}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Role Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Opportunity Type *
          </label>
          <select
            className={`input-premium w-full ${errors.role ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
            value={form.role}
            onChange={(e) => handleChange("role", e.target.value)}
          >
            <option value="">Select your role</option>
            {roles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <AnimatePresence>
            {errors.role && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-600 text-sm mt-1 flex items-center gap-1"
              >
                <ExclamationTriangleIcon className="w-4 h-4" />
                {errors.role}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Message / Collaboration Idea
        </label>
        <textarea
          className="input-premium w-full h-32 resize-none"
          placeholder="Tell us about your experience, your business, or your collaboration ideas..."
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isLoading}
        className="btn-premium w-full relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: isLoading ? 1 : 1.02 }}
        whileTap={{ scale: isLoading ? 1 : 0.98 }}
      >
        <div className="flex items-center justify-center gap-2">
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <PaperAirplaneIcon className="w-5 h-5" />
          )}
          {isLoading ? "Submitting..." : "Submit Application"}
        </div>
      </motion.button>

      <p className="text-center text-gray-500 text-sm">
        We respect your privacy and will never share your information with third parties.
      </p>
    </motion.form>
  );
}