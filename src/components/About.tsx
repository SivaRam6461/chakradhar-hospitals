"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, CheckCircle } from "lucide-react";

const values = [
  "Dedicated Healthcare Team",
  "Patient-First Approach",
  "Ethical Treatment",
  "Transparent Medical Care",
  "Modern Infrastructure",
  "Clean & Safe Environment",
  "Compassionate Nursing",
  "Quality Treatment",
  "Personalized Care",
  "Safe Healthcare",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-healthcare-xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                alt="Chakradhar Hospitals Building"
                className="w-full h-[400px] lg:h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
            </div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-healthcare-xl"
            >
              <div className="text-center">
                <p className="text-4xl font-bold gradient-text">4.5</p>
                <div className="flex items-center gap-1 justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < 4 ? "text-yellow-400" : "text-yellow-200"}`}>★</span>
                  ))}
                </div>
                <p className="text-xs text-muted mt-1">Google Rating</p>
                <p className="text-xs font-semibold text-primary">229+ Reviews</p>
              </div>
            </motion.div>

            {/* Second Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-6 -left-4 lg:-left-8 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-healthcare-xl border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=400&q=80"
                alt="Medical Team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 text-balance leading-tight">
              Dedicated to{" "}
              <span className="gradient-text">Quality Healthcare</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Chakradhar Hospitals is a trusted multi-specialty healthcare
              institution in Rajamahendravaram, Andhra Pradesh. We combine
              medical expertise with compassionate care to deliver treatment
              that puts patients first.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Our commitment to ethical medical practice, transparent treatment
              protocols, and modern infrastructure ensures that every patient
              receives personalized, high-quality healthcare in a safe and clean
              environment.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-secondary shrink-0" />
                  <span className="text-sm text-dark-light">{value}</span>
                </div>
              ))}
            </div>

            {/* Mission Vision Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-dark text-sm mb-1">
                  Our Mission
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  To provide accessible, affordable, and quality healthcare
                  services to the community.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-border">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="font-semibold text-dark text-sm mb-1">
                  Our Vision
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  To be the most trusted healthcare partner for families in the
                  region.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-border">
                <div className="w-10 h-10 rounded-xl bg-accent-warm flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                </div>
                <h4 className="font-semibold text-dark text-sm mb-1">
                  Core Values
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  Compassion, integrity, excellence, and patient-centered care
                  guide everything we do.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
