"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  User,
  Smartphone,
  Tag,
  Send,
  CheckCircle,
  ChevronDown,
  Clock,
  Globe,
  Calendar,
  Star,
  Users,
  Award,
  Heart,
  Home,
  Utensils,
  Mountain,
  Palette,
  Camera
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    tripType: "",
    travelers: "",
    budget: "",
    destination: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    { 
      q: "How soon will I get a response?", 
      a: "We pride ourselves on quick responses! You'll typically hear back from our travel experts within 2-4 hours during business days. For urgent inquiries, we recommend calling or WhatsApp for instant assistance." 
    },
    { 
      q: "Do you offer custom tour packages?", 
      a: "Absolutely! We specialize in creating 100% personalized itineraries tailored to your preferences, budget, and travel style. Our experts will craft the perfect journey just for you." 
    },
    { 
      q: "What's included in your tour packages?", 
      a: "Our packages typically include accommodation, transportation, guided tours, meals as specified, and activity bookings. We provide complete transparency about inclusions and exclusions before booking." 
    },
  ];

  const contactCards = [
    {
      icon: <Phone className="text-white" size={24} />,
      title: "Call Our Experts",
      details: ["+91 88943-22900", "+91 88943-23900"],
      description: "Speak directly with our travel consultants",
      link: "tel:+918894322900",
      color: "bg-gradient-to-r from-rose-500 to-rose-600",
      buttonText: "Call Now"
    },
    {
      icon: <Mail className="text-white" size={24} />,
      title: "Email Us",
      details: ["support@bharattrip.net", "info@bharattrip.net"],
      description: "Get detailed responses within hours",
      link: "mailto:support@bharattrip.net",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      buttonText: "Send Email"
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: "Visit Our Office",
      details: ["Kehloor Bhawan Shakti Vihar", "Panthghati - 171009, Himachal Pradesh"],
      description: "Meet us for personalized travel planning",
      link: "https://maps.google.com",
      color: "bg-gradient-to-r from-green-500 to-green-600",
      buttonText: "Get Directions"
    },
    {
      icon: <MessageCircle className="text-white" size={24} />,
      title: "WhatsApp",
      details: ["Instant travel consultation", "Quick quotes & updates"],
      description: "Get instant responses on WhatsApp",
      link: "https://wa.me/918894322900",
      color: "bg-gradient-to-r from-green-400 to-green-500",
      buttonText: "Chat Now"
    },
  ];

  const tripTypes = [
    "Family Vacation", "Honeymoon", "Adventure Trip", "Cultural Tour", 
    "Business Travel", "Group Tour", "Solo Travel", "Luxury Getaway"
  ];

  const budgets = [
    "Economy (Under ₹10,000)", "Standard (₹10,000-₹25,000)", 
    "Premium (₹25,000-₹50,000)", "Luxury (₹50,000+)"
  ];

  const popularDestinations = [
    "Goa Beaches", "Kerala Backwaters", "Ladakh Adventure", "Rajasthan Cultural", 
    "Himachal Mountains", "Andaman Islands", "North East", "Custom Destination"
  ];

  const experiences = [
    { icon: <Home className="text-rose-500" size={20} />, text: "Luxury Stays" },
    { icon: <Utensils className="text-amber-500" size={20} />, text: "Local Cuisine" },
    { icon: <Mountain className="text-emerald-500" size={20} />, text: "Adventure Tours" },
    { icon: <Palette className="text-purple-500" size={20} />, text: "Cultural Experiences" },
    { icon: <Camera className="text-blue-500" size={20} />, text: "Photo Tours" }
  ];

  const stats = [
    { icon: <Users className="text-rose-500" size={24} />, number: "10,000+", label: "Happy Travelers" },
    { icon: <Globe className="text-rose-500" size={24} />, number: "50+", label: "Destinations" },
    { icon: <Award className="text-rose-500" size={24} />, number: "4.9/5", label: "Customer Rating" },
    { icon: <Heart className="text-rose-500" size={24} />, number: "24/7", label: "Support" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create form data for email submission
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      // This would typically be an API route in Next.js
      // For demo, we'll simulate the submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // In a real implementation, you would send this to your backend
      // which would then send an email to your Gmail account
      console.log('Form data ready for email:', Object.fromEntries(formDataToSend));
      
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "", email: "", phone: "", subject: "", message: "",
          tripType: "", travelers: "", budget: "", destination: ""
        });
      }, 4000);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Airbnb-style Header */}
      {/* <header className="border-b border-gray-200 sticky top-0 bg-white z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg flex items-center justify-center">
                <Heart className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold text-gray-900">BharatTrip</span>
            </Link>
            
            <nav className="hidden md:flex gap-8">
              {["Destinations", "Experiences", "About", "Blog"].map((item) => (
                <Link key={item} href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">
                Contact
              </Link>
              <button className="bg-rose-500 text-white px-6 py-2 rounded-full font-medium hover:bg-rose-600 transition-colors">
                Plan Trip
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-rose-50 via-white to-rose-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-6"
            >
              <Star className="fill-rose-500 text-rose-500" size={16} />
              Trusted by 10,000+ Travelers
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Plan Your Perfect
              <span className="block text-rose-500">Indian Adventure</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              Connect with our local experts to create unforgettable memories across Incredible India. 
              Get personalized itineraries and exclusive deals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <Link
        href="https://wa.me/918894322900"
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity
          }}
          className="p-4 bg-green-500 rounded-full shadow-2xl text-white"
        >
          <MessageCircle size={24} />
        </motion.div>
      </Link>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Side - Contact Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600">
                Our travel experts are here to help you plan the perfect trip. Choose your preferred way to connect.
              </p>
            </motion.div>

            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
              >
                <Link href={card.link}>
                  <div className={`p-6 rounded-2xl ${card.color} text-white transition-all duration-300 group-hover:shadow-xl border border-gray-100`}>
                    <div className="flex gap-4 items-start">
                      <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm flex justify-center items-center flex-shrink-0">
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                        <p className="text-white/90 text-sm mb-3">{card.description}</p>
                        {card.details.map((d, idx) => (
                          <p key={idx} className="text-white/80 text-sm leading-relaxed">{d}</p>
                        ))}
                        <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg font-semibold text-sm backdrop-blur-sm">
                          {card.buttonText}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Experience Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 mt-8"
            >
              <h3 className="font-bold text-gray-900 mb-4">What We Offer</h3>
              <div className="space-y-3">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    {exp.icon}
                    <span className="text-sm">{exp.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-rose-500 to-rose-600 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Plan Your Dream Trip</h2>
                <p className="text-rose-100">Share your preferences and we'll create a personalized itinerary</p>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-green-50 border border-green-200 p-6 m-6 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={24} />
                      <div>
                        <p className="font-bold text-green-800">Thank You! 🎉</p>
                        <p className="text-green-700 text-sm">
                          Our travel expert will contact you within 2 hours to plan your perfect trip!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Enhanced Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    icon={<User size={18} />}
                    label="Full Name *"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                    required
                  />

                  <InputField
                    icon={<Mail size={18} />}
                    label="Email Address *"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                    required
                  />

                  <InputField
                    icon={<Smartphone size={18} />}
                    label="Phone Number"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(v) => setFormData({ ...formData, phone: v })}
                  />

                  <SelectField
                    icon={<Users size={18} />}
                    label="Trip Type"
                    options={tripTypes}
                    value={formData.tripType}
                    onChange={(v) => setFormData({ ...formData, tripType: v })}
                  />

                  <InputField
                    icon={<Users size={18} />}
                    label="Number of Travelers"
                    placeholder="e.g., 2 adults, 1 child"
                    value={formData.travelers}
                    onChange={(v) => setFormData({ ...formData, travelers: v })}
                  />

                  <SelectField
                    icon={<Tag size={18} />}
                    label="Budget Range"
                    options={budgets}
                    value={formData.budget}
                    onChange={(v) => setFormData({ ...formData, budget: v })}
                  />

                  <div className="md:col-span-2">
                    <SelectField
                      icon={<Globe size={18} />}
                      label="Preferred Destination"
                      options={popularDestinations}
                      value={formData.destination}
                      onChange={(v) => setFormData({ ...formData, destination: v })}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      <MessageCircle size={18} className="inline mr-2" />
                      Tell Us About Your Dream Trip *
                    </label>
                    <div className="relative mt-2">
                      <textarea
                        required
                        rows={5}
                        className="w-full pl-12 p-4 bg-gray-50 border border-gray-300 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none resize-none transition-all"
                        placeholder="Describe your ideal vacation... preferred activities, special requirements, must-visit places, etc."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                      <MessageCircle className="absolute left-4 top-4 text-gray-400" size={18} />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Creating Your Travel Plan...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Plan My Dream Trip
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-500 text-sm">
                  ✨ We'll get back to you with a customized itinerary within 4 hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about planning your trip with us
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <EnhancedFaqItem 
              key={i} 
              question={faq.q} 
              answer={faq.a} 
              isOpen={activeFAQ === i}
              onClick={() => toggleFAQ(i)}
            />
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-rose-500 to-rose-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Start Your Adventure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-rose-100 mb-8 text-lg"
          >
            Let's create memories that last a lifetime. Our travel experts are waiting to help you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="tel:+918894322900">
              <button className="bg-white text-rose-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                📞 Call Now
              </button>
            </Link>
            <Link href="https://wa.me/918894322900">
              <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg border border-green-400">
                💬 WhatsApp
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* -------------------- Enhanced Input Component -------------------- */
function InputField({ icon, label, type = "text", placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-2 block">
        {label}
        {required && <span className="text-rose-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          required={required}
          value={value}
          placeholder={placeholder}
          className="w-full pl-12 p-4 bg-gray-50 border border-gray-300 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
          onChange={(e) => onChange(e.target.value)}
        />
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------- Select Field Component -------------------- */
function SelectField({ icon, label, options, value, onChange }) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-2 block">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 p-4 bg-gray-50 border border-gray-300 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none appearance-none transition-all"
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      </div>
    </div>
  );
}

/* -------------------- Enhanced FAQ Component -------------------- */
function EnhancedFaqItem({ question, answer, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-xl p-6 bg-white cursor-pointer hover:border-gray-300 transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-gray-900 pr-4">{question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="text-rose-500" size={20} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}