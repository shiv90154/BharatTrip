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
  ChevronDown
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    { q: "How soon will I get a response?", a: "Usually within 2–4 hours on business days." },
    { q: "Do you offer custom tour packages?", a: "Yes! We create 100% personalized itineraries." },
    { q: "What’s included in the package price?", a: "Transport, stays, meals, sightseeing & more." },
    { q: "Can I modify my booking?", a: "Yes, you can modify dates or activities." },
  ];

  const contactCards = [
    {
      icon: <Phone className="text-blue-600" size={28} />,
      title: "Call Us",
      details: ["+91 88943-22900", "+91 88943-23900"],
      link: "tel:+918894322900",
      color: "bg-blue-50/60",
    },
    {
      icon: <Mail className="text-orange-500" size={28} />,
      title: "Email Us",
      details: ["support@bharattrip.net", "info@bharattrip.net"],
      link: "mailto:support@bharattrip.net",
      color: "bg-orange-50/60",
    },
    {
      icon: <MapPin className="text-green-600" size={28} />,
      title: "Visit Office",
      details: ["Kehloor Bhawan Shakti Vihar", "Panthghati - 171009"],
      link: "https://maps.google.com",
      color: "bg-green-50/60",
    },
    {
      icon: <MessageCircle className="text-green-500" size={28} />,
      title: "WhatsApp",
      details: ["Ask anything!", "Instant replies"],
      link: "https://wa.me/918894322900",
      color: "bg-green-50/60",
    },
  ];

  // Faster, smoother animations (fix)
  const fadeUpFix = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  const fadeSlideFix = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((res) => setTimeout(res, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <>
      {/* ------------------- HERO SECTION ------------------- */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full py-24 px-6 bg-gradient-to-br from-blue-700 to-orange-500 text-white text-center shadow-lg"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md"
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Plan Your Dream Trip ✈️
        </motion.h1>

        <motion.p
          className="mt-4 text-lg max-w-2xl mx-auto opacity-90"
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Our travel experts are ready to guide you with the best Indian destinations.
        </motion.p>
      </motion.section>

      {/* Floating WhatsApp */}
      <Link
        href="https://wa.me/918894322900"
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          animate={{ scale: [0, 1.1, 1] }}
          transition={{ duration: 0.8 }}
          className="p-4 bg-green-500 rounded-full shadow-2xl text-white"
        >
          <MessageCircle size={30} />
        </motion.div>
      </Link>

      {/* ------------------- MAIN CONTENT ------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left Contact Cards */}
        <motion.div
          variants={fadeSlideFix}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -3 }}
              className={`p-6 rounded-2xl shadow-md border bg-white/70 backdrop-blur-xl transition-all ${card.color}`}
            >
              <div className="flex gap-4">
                <div className="p-3 w-14 h-14 rounded-xl bg-white shadow flex justify-center items-center">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{card.title}</h3>
                  {card.details.map((d, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{d}</p>
                  ))}
                  <Link href={card.link}>
                    <button className="mt-2 text-blue-600 font-semibold hover:underline">
                      Open →
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ------------------- CONTACT FORM ------------------- */}
        <motion.div
          variants={fadeUpFix}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white/95 backdrop-blur-lg shadow-xl rounded-3xl p-10 border"
        >
          <h2 className="text-3xl font-extrabold mb-2">Send us a Message</h2>
          <p className="text-gray-600 mb-6">
            Our team will respond shortly.
          </p>

          {/* Success Message */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-green-500 text-white p-6 rounded-xl text-center mb-6 shadow-md"
              >
                <CheckCircle size={44} className="mx-auto mb-2" />
                <p className="font-semibold text-lg">Message Sent Successfully!</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <InputField
              icon={<User size={18} />}
              label="Full Name"
              onChange={(v) => setFormData({ ...formData, name: v })}
              required
            />

            <InputField
              icon={<Mail size={18} />}
              label="Email Address"
              onChange={(v) => setFormData({ ...formData, email: v })}
              required
            />

            <InputField
              icon={<Smartphone size={18} />}
              label="Phone Number"
              onChange={(v) => setFormData({ ...formData, phone: v })}
            />

            <InputField
              icon={<Tag size={18} />}
              label="Subject"
              onChange={(v) => setFormData({ ...formData, subject: v })}
              required
            />

            {/* Message Box */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Your Message</label>
              <div className="relative mt-2">
                <MessageCircle className="absolute left-3 top-3 text-gray-400" size={18} />
                <textarea
                  required
                  rows={5}
                  className="w-full pl-10 p-3 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Tell us about your trip..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-2 mt-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* ------------------- FAQ ------------------- */}
      <div className="max-w-4xl mx-auto mt-12 px-6 pb-20">
        <h3 className="text-3xl font-extrabold mb-6">Frequently Asked Questions</h3>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </>
  );
}

/* -------------------- Input Component -------------------- */
function InputField({ icon, label, onChange, required }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <div className="relative mt-2">
        <div className="absolute left-3 top-3 text-gray-400">
          {icon}
        </div>
        <input
          type="text"
          required={required}
          className="w-full pl-10 p-3 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

/* -------------------- FAQ Component -------------------- */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border rounded-2xl p-4 shadow-sm bg-white/80 backdrop-blur-md cursor-pointer"
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center"
      >
        <h4 className="font-semibold text-lg">{q}</h4>
        <ChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-gray-600 overflow-hidden"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
