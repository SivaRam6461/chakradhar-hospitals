"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Phone,
  Star,
  Clock,
  Users,
  Shield,
  Award,
} from "lucide-react";

const floatingCards = [
  {
    icon: Star,
    title: "4.5 Rating",
    subtitle: "229+ Reviews",
    color: "bg-white",
    delay: 0.5,
  },
  {
    icon: Clock,
    title: "24×7 Emergency",
    subtitle: "Always Available",
    color: "bg-white",
    delay: 0.7,
  },
  {
    icon: Users,
    title: "Expert Doctors",
    subtitle: "Experienced Team",
    color: "bg-white",
    delay: 0.9,
  },
  {
    icon: Shield,
    title: "Quality Care",
    subtitle: "Patient First",
    color: "bg-white",
    delay: 1.1,
  },
];

const stats = [
  { number: "5,000+", label: "Happy Patients" },
  { number: "10+", label: "Medical Services" },
  { number: "24×7", label: "Emergency Care" },
  { number: "4.5★", label: "Patient Rating" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary/60 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />

      {/* Floating Cards - Desktop */}
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
        {floatingCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: card.delay, duration: 0.5 }}
            className={`${card.color} rounded-2xl px-5 py-4 shadow-healthcare-lg flex items-center gap-4 min-w-[220px] card-hover`}
          >
            <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
              <card.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-dark text-sm">{card.title}</p>
              <p className="text-xs text-muted">{card.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-secondary-light rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Trusted Healthcare Since Establishment
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 text-balance"
          >
            Trusted Healthcare
            <br />
            with{" "}
            <span className="text-secondary-light">Compassion</span>
            <br />
            & Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg lg:text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
          >
            Delivering quality medical care with experienced doctors, advanced
            facilities, and compassionate treatment for every patient at
            Chakradhar Hospitals, Rajamahendravaram.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-primary font-semibold rounded-2xl hover:bg-surface transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Appointment
            </a>
            <a
              href="tel:+919348291119"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-base"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl lg:text-3xl font-bold text-white">
                  {stat.number}
                </p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Floating Cards */}
      <div className="absolute bottom-0 left-0 right-0 xl:hidden">
        <div className="max-w-7xl mx-auto px-4 pb-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="bg-white rounded-xl px-3 py-3 shadow-healthcare flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <card.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-dark text-xs leading-tight">
                    {card.title}
                  </p>
                  <p className="text-[10px] text-muted">{card.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
