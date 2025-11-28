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
  Heart
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
    { 
      q: "Can I modify my booking after confirmation?", 
      a: "Yes, we offer flexible modification options. You can adjust dates, activities, or accommodations subject to availability. Modification policies vary by package." 
    },
    { 
      q: "Do you provide visa assistance?", 
      a: "While we don't process visas directly, we provide comprehensive guidance, required documents list, and can recommend trusted visa agencies to make the process smoother." 
    },
    { 
      q: "What safety measures do you have in place?", 
      a: "Your safety is our priority. We work with verified partners, provide 24/7 emergency support, offer travel insurance options, and stay updated on travel advisories." 
    },
  ];

  const contactCards = [
    {
      icon: <Phone className="text-blue-600" size={32} />,
      title: "Call Our Experts",
      details: ["+91 88943-22900", "+91 88943-23900"],
      description: "Speak directly with our travel consultants",
      link: "tel:+918894322900",
      color: "from-blue-500 to-blue-600",
      buttonText: "Call Now"
    },
    {
      icon: <Mail className="text-orange-500" size={32} />,
      title: "Email Us",
      details: ["support@bharattrip.net", "info@bharattrip.net"],
      description: "Get detailed responses within hours",
      link: "mailto:support@bharattrip.net",
      color: "from-orange-500 to-orange-600",
      buttonText: "Send Email"
    },
    {
      icon: <MapPin className="text-green-600" size={32} />,
      title: "Visit Our Office",
      details: ["Kehloor Bhawan Shakti Vihar", "Panthghati - 171009, Himachal Pradesh"],
      description: "Meet us for personalized travel planning",
      link: "https://maps.google.com",
      color: "from-green-500 to-green-600",
      buttonText: "Get Directions"
    },
    {
      icon: <MessageCircle className="text-green-500" size={32} />,
      title: "WhatsApp",
      details: ["Instant travel consultation", "Quick quotes & updates"],
      description: "Get instant responses on WhatsApp",
      link: "https://wa.me/918894322900",
      color: "from-green-400 to-green-500",
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

  const stats = [
    { icon: <Users className="text-blue-500" size={24} />, number: "10,000+", label: "Happy Travelers" },
    { icon: <Globe className="text-green-500" size={24} />, number: "50+", label: "Destinations" },
    { icon: <Award className="text-yellow-500" size={24} />, number: "4.9/5", label: "Customer Rating" },
    { icon: <Calendar className="text-purple-500" size={24} />, number: "24/7", label: "Support" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "", email: "", phone: "", subject: "", message: "",
        tripType: "", travelers: "", budget: "", destination: ""
      });
    }, 4000);
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* ------------------- ENHANCED HERO SECTION ------------------- */}
      <section className="relative w-full py-28 px-6 overflow-hidden">
        {/* Background with travel theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl text-lg font-semibold mb-6 border border-white/30"
            >
              <Heart className="text-red-400" size={20} />
              Your Journey Begins Here
            </motion.span>

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Let's Plan Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Dream Trip ✈️
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              Connect with our travel experts to create unforgettable memories across Incredible India
            </motion.p>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-4xl opacity-20"
        >
          🗺️
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 text-4xl opacity-20"
        >
          🏔️
        </motion.div>
      </section>

      {/* Floating WhatsApp */}
      <Link
        href="https://wa.me/918894322900"
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 10px 25px -5px rgba(34, 197, 94, 0.3)",
              "0 20px 40px -5px rgba(34, 197, 94, 0.5)",
              "0 10px 25px -5px rgba(34, 197, 94, 0.3)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity
          }}
          className="p-4 bg-green-500 rounded-2xl shadow-2xl text-white relative group"
        >
          <MessageCircle size={28} />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-ping">
            !
          </div>
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
            Quick Chat Available!
          </div>
        </motion.div>
      </Link>

      {/* Trust Stats */}
      <section className="py-16 bg-white">
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
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- MAIN CONTENT ------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left Contact Cards */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            Get in Touch
          </motion.h2>

          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <Link href={card.link}>
                <div className={`p-6 rounded-3xl shadow-lg border bg-gradient-to-br ${card.color} text-white transition-all duration-300 group-hover:shadow-xl`}>
                  <div className="flex gap-4 items-start">
                    <div className="p-3 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex justify-center items-center flex-shrink-0">
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2">{card.title}</h3>
                      <p className="text-white/90 text-sm mb-3">{card.description}</p>
                      {card.details.map((d, idx) => (
                        <p key={idx} className="text-white/80 text-sm leading-relaxed">{d}</p>
                      ))}
                      <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl font-semibold text-sm backdrop-blur-sm">
                        {card.buttonText}
                        <Send size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ------------------- ENHANCED CONTACT FORM ------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Plan Your Journey
            </h2>
            <p className="text-gray-600 mt-2">
              Share your travel dreams and we'll make them reality
            </p>
          </div>

          {/* Success Message */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-2xl text-center mb-8 shadow-lg"
              >
                <CheckCircle size={48} className="mx-auto mb-4" />
                <p className="font-bold text-2xl mb-2">Thank You! 🎉</p>
                <p className="text-green-100 text-lg">
                  Our travel expert will contact you within 2 hours to plan your perfect trip!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                icon={<User size={20} />}
                label="Full Name *"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
                required
              />

              <InputField
                icon={<Mail size={20} />}
                label="Email Address *"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
                required
              />

              <InputField
                icon={<Smartphone size={20} />}
                label="Phone Number"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={(v) => setFormData({ ...formData, phone: v })}
              />

              <SelectField
                icon={<Users size={20} />}
                label="Trip Type"
                options={tripTypes}
                value={formData.tripType}
                onChange={(v) => setFormData({ ...formData, tripType: v })}
              />

              <InputField
                icon={<Users size={20} />}
                label="Number of Travelers"
                placeholder="e.g., 2 adults, 1 child"
                value={formData.travelers}
                onChange={(v) => setFormData({ ...formData, travelers: v })}
              />

              <SelectField
                icon={<Tag size={20} />}
                label="Budget Range"
                options={budgets}
                value={formData.budget}
                onChange={(v) => setFormData({ ...formData, budget: v })}
              />

              <div className="md:col-span-2">
                <SelectField
                  icon={<Globe size={20} />}
                  label="Preferred Destination"
                  options={popularDestinations}
                  value={formData.destination}
                  onChange={(v) => setFormData({ ...formData, destination: v })}
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  <MessageCircle size={20} className="inline mr-2" />
                  Tell Us About Your Dream Trip *
                </label>
                <div className="relative mt-2">
                  <textarea
                    required
                    rows={6}
                    className="w-full pl-12 p-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none resize-none transition-all"
                    placeholder="Describe your ideal vacation... preferred activities, special requirements, must-visit places, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <MessageCircle className="absolute left-4 top-4 text-gray-400" size={20} />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-5 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                  Creating Your Travel Plan...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Plan My Dream Trip
                </>
              )}
            </motion.button>

            <p className="text-center text-gray-500 text-sm">
              ✨ We'll get back to you with a customized itinerary within 4 hours
            </p>
          </form>
        </motion.div>
      </div>

      {/* ------------------- ENHANCED FAQ SECTION ------------------- */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
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

      {/* Additional CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Start Your Adventure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
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
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                📞 Call Now
              </button>
            </Link>
            <Link href="https://wa.me/918894322900">
              <button className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg border border-green-400">
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
        {icon && <span className="inline mr-2">{icon}</span>}
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          required={required}
          value={value}
          placeholder={placeholder}
          className="w-full pl-12 p-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition-all"
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
        {icon && <span className="inline mr-2">{icon}</span>}
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 p-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none appearance-none transition-all"
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
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
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
      className="border-2 border-gray-200 rounded-2xl p-6 bg-white/80 backdrop-blur-md cursor-pointer hover:border-blue-300 transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-lg text-gray-800 pr-4">{question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="text-blue-600" size={24} />
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