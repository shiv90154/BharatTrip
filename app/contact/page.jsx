"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  Phone, Mail, MapPin, MessageCircle, Smartphone, Tag, Send,
  CheckCircle, Globe, Users, Award, Heart, Home,
  Utensils, Mountain, Palette, Camera, Star
} from "lucide-react";

import InputField from "@/components/contact/InputField";
import SelectField from "@/components/contact/SelectField";
import FAQItem from "@/components/contact/FAQItem";
import ContactCard from "@/components/contact/ContactCard";
import StatsBox from "@/components/contact/StatsBox";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "",
    message: "", tripType: "", travelers: "",
    budget: "", destination: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    { q: "How soon will I get a response?", a: "Within 2–4 hours on business days." },
    { q: "Do you offer custom tour packages?", a: "Yes, we create personalized itineraries for all." },
    { q: "What's included in packages?", a: "Hotels, transport, meals, local guides & more." }
  ];

  const contactCards = [
    {
      icon: <Phone className="text-white" size={24} />,
      title: "Call Our Experts",
      details: ["+91 88943-22900", "+91 88943-23900"],
      description: "Talk directly with our team",
      link: "tel:+918894322900",
      color: "bg-gradient-to-r from-rose-500 to-rose-600",
      buttonText: "Call Now"
    },
    {
      icon: <Mail className="text-white" size={24} />,
      title: "Email Us",
      details: ["support@bharattrip.net", "info@bharattrip.net"],
      description: "We reply within hours",
      link: "mailto:support@bharattrip.net",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      buttonText: "Send Email"
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: "Visit Office",
      details: ["Kehloor Bhawan Shakti Vihar", "Panthghati 171009, Himachal"],
      description: "Meet us in person",
      link: "https://maps.google.com",
      color: "bg-gradient-to-r from-green-500 to-green-600",
      buttonText: "Directions"
    },
    {
      icon: <MessageCircle className="text-white" size={24} />,
      title: "WhatsApp",
      details: ["Quick replies", "Instant assistance"],
      description: "Chat instantly",
      link: "https://wa.me/918894322900",
      color: "bg-gradient-to-r from-green-400 to-green-500",
      buttonText: "Chat Now"
    }
  ];

  const tripTypes = [
    "Family Vacation", "Honeymoon", "Adventure Trip", "Cultural Tour",
    "Business Travel", "Group Tour", "Solo Travel", "Luxury Getaway"
  ];

  const budgets = [
    "Economy (Under ₹10,000)", "Standard (₹10,000-₹25,000)",
    "Premium (₹25,000-₹50,000)", "Luxury (₹50,000+)"
  ];

  const destinations = [
    "Goa Beaches", "Kerala Backwaters", "Ladakh Adventure", "Rajasthan Cultural",
    "Himachal Mountains", "Andaman Islands", "North East", "Custom Destination"
  ];

  const stats = [
    { icon: <Users className="text-rose-500" size={30} />, number: "10,000+", label: "Happy Travelers" },
    { icon: <Globe className="text-rose-500" size={30} />, number: "50+", label: "Destinations" },
    { icon: <Award className="text-rose-500" size={30} />, number: "4.9/5", label: "Rating" },
    { icon: <Heart className="text-rose-500" size={30} />, number: "24/7", label: "Support" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error("Email failed");

      setSubmitted(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "", email: "", phone: "", subject: "", message: "",
          tripType: "", travelers: "", budget: "", destination: ""
        });
      }, 3000);

    } catch (err) {
      console.log("Error:", err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-50 to-white py-16 px-6 text-center">
        <motion.span
          className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full inline-flex items-center gap-2 mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
          <Star size={18} className="text-rose-500" /> Trusted by 10,000+ Travelers
        </motion.span>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Plan Your Perfect <span className="text-rose-500">Trip in India</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Get personalized itineraries, best deals, and expert recommendations.
        </p>
      </section>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE CONTACT CARDS */}
        <div className="space-y-6">
          {contactCards.map((c, i) => (
            <ContactCard key={i} {...c} />
          ))}
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border overflow-hidden">
          <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white p-6">
            <h2 className="text-2xl font-bold">Plan Your Dream Trip</h2>
            <p className="text-rose-100">Tell us your preferences.</p>
          </div>

          {submitted && (
            <div className="bg-green-50 border border-green-200 p-6 m-6 rounded-xl flex gap-3 text-green-700">
              <CheckCircle size={24} className="text-green-500" />
              Your request has been submitted!
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <InputField required label="Full Name" value={formData.name}
                icon={<Users size={18} />} onChange={(v) => setFormData({ ...formData, name: v })} />

              <InputField required type="email" label="Email" value={formData.email}
                icon={<Mail size={18} />} onChange={(v) => setFormData({ ...formData, email: v })} />

              <InputField label="Phone" value={formData.phone}
                icon={<Smartphone size={18} />} onChange={(v) => setFormData({ ...formData, phone: v })} />

              <SelectField label="Trip Type" options={tripTypes} value={formData.tripType}
                icon={<Users size={18} />} onChange={(v) => setFormData({ ...formData, tripType: v })} />

              <InputField label="No. of Travelers" value={formData.travelers}
                icon={<Users size={18} />} onChange={(v) => setFormData({ ...formData, travelers: v })} />

              <SelectField label="Budget Range" options={budgets} value={formData.budget}
                icon={<Tag size={18} />} onChange={(v) => setFormData({ ...formData, budget: v })} />
            </div>

            <SelectField label="Preferred Destination" options={destinations}
              value={formData.destination} icon={<Globe size={18} />}
              onChange={(v) => setFormData({ ...formData, destination: v })} />

            <div>
              <label className="font-semibold">Your Message *</label>
              <textarea required rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl"
                placeholder="Describe your trip details..."
              />
            </div>

            <button disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50">
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={activeFAQ === i}
              onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
            />
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {stats.map((s, i) => <StatsBox key={i} {...s} />)}
        </div>
      </div>

    </div>
  );
}
