"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Icons (Lucide or Heroicons recommended)
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

  const packages = [
    "General Inquiry",
    "Himachal Adventure",
    "Goa Beach Package",
    "Kerala Backwaters",
    "Rajasthan Heritage",
    "Ladakh Expedition",
    "Custom Tour",
  ];

  const faqs = [
    {
      q: "How soon will I get a response?",
      a: "Usually within 2–4 hours on business days.",
    },
    {
      q: "Do you offer custom tour packages?",
      a: "Yes! We create 100% personalized itineraries.",
    },
    {
      q: "What’s included in the package price?",
      a: "Transport, stays, meals, sightseeing & more.",
    },
    {
      q: "Can I modify my booking?",
      a: "Yes, you can modify dates or activities.",
    },
  ];

  const contactCards = [
    {
      icon: <Phone className="text-blue-600" size={28} />,
      title: "Call Us",
      details: ["+91 88943-22900", "+91 88943-23900"],
      link: "tel:+918894322900",
      color: "bg-blue-50",
    },
    {
      icon: <Mail className="text-orange-500" size={28} />,
      title: "Email Us",
      details: ["support@bharattrip.net", "info@bharattrip.net"],
      link: "mailto:support@bharattrip.net",
      color: "bg-orange-50",
    },
    {
      icon: <MapPin className="text-green-600" size={28} />,
      title: "Visit Office",
      details: ["Kehloor Bhawan Shakti Vihar", "Panthghati - 171009"],
      link: "https://maps.google.com",
      color: "bg-green-50",
    },
    {
      icon: <MessageCircle className="text-green-500" size={28} />,
      title: "WhatsApp",
      details: ["Ask anything!", "Instant replies"],
      link: "https://wa.me/918894322900",
      color: "bg-green-50",
    },
  ];

  // animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeSlide = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((res) => setTimeout(res, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3500);
  };

  return (
    <>
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full py-24 px-6 bg-gradient-to-br from-blue-600 to-orange-500 text-white text-center"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Plan Your Dream Trip With Us ✈️
        </motion.h1>

        <motion.p
          className="mt-4 text-lg max-w-2xl mx-auto opacity-90"
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Our travel experts are ready to help you explore India like never before.
        </motion.p>
      </motion.section>

      {/* FLOATING WHATSAPP BUTTON */}
      <Link
        href="https://wa.me/918894322900"
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="p-4 bg-green-500 rounded-full shadow-xl text-white"
        >
          <MessageCircle size={30} />
        </motion.div>
      </Link>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Contact Cards */}
        <motion.div
          variants={fadeSlide}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className={`p-6 shadow-lg border rounded-2xl backdrop-blur-md bg-white/70 ${card.color}`}
            >
              <div className="flex gap-4">
                <div className="p-3 w-14 h-14 rounded-xl flex items-center justify-center bg-white shadow-md">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{card.title}</h3>
                  {card.details.map((d, idx) => (
                    <p key={idx} className="text-gray-700 text-sm">{d}</p>
                  ))}
                  <Link href={card.link} target="_blank">
                    <button className="mt-2 text-blue-600 font-semibold hover:underline">
                      Open →
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FORM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white/90 backdrop-blur-lg shadow-xl rounded-3xl p-8 border"
        >
          <h2 className="text-3xl font-extrabold mb-2">Send us a Message</h2>
          <p className="text-gray-600 mb-8">
            Fill the form & our experts will reach out shortly.
          </p>

          {submitted && (
            <div className="bg-green-500 text-white p-6 rounded-xl text-center mb-6">
              <CheckCircle size={48} className="mx-auto mb-2" />
              <p className="font-semibold text-lg">Message Received!</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* NAME */}
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative mt-2">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  required
                  className="w-full pl-10 p-3 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="John Doe"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium">Email Address</label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  required
                  className="w-full pl-10 p-3 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <div className="relative mt-2">
                <Smartphone className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="tel"
                  className="w-full pl-10 p-3 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="+91 98765 43210"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <label className="text-sm font-medium">Subject</label>
              <div className="relative mt-2">
                <Tag className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  required
                  className="w-full pl-10 p-3 bg-white border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your query about..."
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
            </div>

            {/* MESSAGE */}
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

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-2 mt-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* FAQ SECTION */}
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

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="border rounded-2xl p-4 shadow-sm bg-white/70 backdrop-blur-lg cursor-pointer"
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center"
      >
        <h4 className="font-semibold text-lg">{q}</h4>
        <ChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-gray-600"
        >
          {a}
        </motion.p>
      )}
    </motion.div>
  );
}
