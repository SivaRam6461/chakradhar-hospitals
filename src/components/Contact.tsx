"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Hospital Address",
    details: [
      "06-24/1, House No. 85,",
      "Morampudi Road, VL Puram Junction,",
      "Rajamahendravaram,",
      "Andhra Pradesh - 533103",
    ],
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=Chakradhar+Hospitals+Rajamahendravaram",
    },
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+91 93482 91119", "Emergency: Available 24/7"],
    action: {
      label: "Call Now",
      href: "tel:+919348291119",
    },
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "OPD: 8:00 AM - 8:00 PM",
      "Emergency: 24 Hours",
      "All Days Including Sundays",
    ],
    action: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 text-balance">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We&apos;re here to help. Reach out to us for appointments,
            inquiries, or emergency assistance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-dark mb-3">{info.title}</h3>
              <div className="space-y-1 mb-4">
                {info.details.map((detail) => (
                  <p key={detail} className="text-sm text-muted">
                    {detail}
                  </p>
                ))}
              </div>
              {info.action && (
                <a
                  href={info.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  {info.action.label}
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-healthcare-lg border border-border mb-8"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1234567890123!2d81.78!3d16.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU5JzI0LjAiTiA4McKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chakradhar Hospitals Location"
            className="w-full"
          />
        </motion.div>

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/919348291119"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href="tel:+919348291119"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-200"
          >
            <PhoneCall className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="https://maps.google.com/?q=Chakradhar+Hospitals+Rajamahendravaram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-dark text-white font-semibold rounded-xl hover:bg-dark-light transition-colors duration-200"
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
