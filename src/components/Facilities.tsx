"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Building2,
  BedDouble,
  Pill,
  TestTube,
  Scan,
  Dumbbell,
  Ambulance,
  Accessibility,
  Car,
  Sofa,
  Sparkles,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";

const facilities = [
  { icon: Clock, name: "24×7 Emergency" },
  { icon: Building2, name: "Modern Operation Theatre" },
  { icon: BedDouble, name: "Patient Rooms" },
  { icon: Pill, name: "Pharmacy" },
  { icon: TestTube, name: "Diagnostic Lab" },
  { icon: Scan, name: "Digital X-Ray" },
  { icon: Dumbbell, name: "Physiotherapy Unit" },
  { icon: Ambulance, name: "Ambulance" },
  { icon: Accessibility, name: "Wheelchair Access" },
  { icon: Car, name: "Parking" },
  { icon: Sofa, name: "Waiting Lounge" },
  { icon: Sparkles, name: "Clean Wards" },
  { icon: ShieldCheck, name: "Cashless Insurance" },
  { icon: CalendarCheck, name: "Online Appointment" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />

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
                alt="Hospital Facilities"
                className="w-full h-[400px] lg:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-healthcare-xl"
            >
              <div className="text-center">
                <p className="text-4xl font-bold gradient-text">10+</p>
                <p className="text-sm text-muted mt-1">Medical Services</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Facilities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-4">
              Our Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 text-balance leading-tight">
              World-Class <span className="gradient-text">Facilities</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Equipped with modern infrastructure and advanced medical technology
              to ensure the best possible care for our patients.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {facilities.map((facility) => (
                <motion.div
                  key={facility.name}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-surface hover:bg-accent rounded-xl p-3 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <facility.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-dark leading-tight">
                    {facility.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
