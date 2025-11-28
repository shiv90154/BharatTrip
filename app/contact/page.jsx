"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    package: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        package: ""
      });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      details: ["+91-8894322900", "+91-8894323900"],
      action: "Call now",
      link: "tel:+918894322900"
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["info@bharattrip.net", "support@bharattrip.net"],
      action: "Send email",
      link: "mailto:info@bharattrip.net"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: ["Kehloor Bhawan Shakti Vihar", "Panthghati, Pin - 171009"],
      action: "Get directions",
      link: "https://maps.google.com"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: ["Quick responses", "24/7 support"],
      action: "Start chat",
      link: "https://wa.me/918894322900"
    }
  ];

  const packages = [
    "General Inquiry",
    "Himachal Adventure",
    "Goa Beach Package",
    "Kerala Backwaters",
    "Rajasthan Heritage",
    "Ladakh Expedition",
    "Custom Tour"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>💬</span>
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Plan Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream Trip</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about your next adventure? We're here to help you create unforgettable memories in incredible India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-blue-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl">{method.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                    <Link 
                      href={method.link}
                      target="_blank"
                      className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm mt-3 group"
                    >
                      <span>{method.action}</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-lg font-semibold mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-blue-100 text-sm">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-blue-100 text-sm">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-100 text-sm">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5⭐</div>
                  <div className="text-blue-100 text-sm">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
              
              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p>We've received your message and will get back to you within 24 hours.</p>
                </div>
              )}

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and our travel experts will help you plan the perfect trip.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                        <span>👤</span>
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                        <span>📧</span>
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                        <span>📱</span>
                        <span>Phone Number</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+91 00000 00000"
                      />
                    </div>

                    {/* Package Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                        <span>🎒</span>
                        <span>Interested Package</span>
                      </label>
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a package</option>
                        {packages.map((pkg, index) => (
                          <option key={index} value={pkg}>{pkg}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                      <span>📝</span>
                      <span>Subject *</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="What's this regarding?"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                      <span>💭</span>
                      <span>Your Message *</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your dream vacation, preferences, and any special requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>🚀</span>
                        <span>Send Message</span>
                      </div>
                    )}
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    We typically respond within 2-4 hours during business hours.
                  </p>
                </form>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <span>❓</span>
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-3">
                {[
                  "How soon will I get a response?",
                  "Do you offer custom tour packages?",
                  "What's included in the package price?",
                  "Can I modify my booking after confirmation?"
                ].map((faq, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    <span className="text-blue-500">•</span>
                    <span className="text-sm">{faq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}