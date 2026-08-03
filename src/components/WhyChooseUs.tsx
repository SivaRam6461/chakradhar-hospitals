"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Clock,
  IndianRupee,
  Cog,
  HeartPulse,
  Building2,
  Sparkles,
  Users,
  ShieldCheck,
  Award,
} from "lucide-react";

const reasons = [
  {
    icon: Stethoscope,
    title: "Experienced Doctors",
    description:
      "Our team of qualified and experienced physicians provides accurate diagnosis and effective treatment plans.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Care",
    description:
      "Round-the-clock emergency services with a fully equipped emergency unit and rapid response team.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Treatment",
    description:
      "Quality healthcare at transparent and affordable prices. No hidden charges, honest medical billing.",
  },
  {
    icon: Cog,
    title: "Advanced Equipment",
    description:
      "State-of-the-art medical technology and modern diagnostic equipment for precise treatment.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centered Care",
    description:
      "Every treatment plan is tailored to the individual needs of each patient with compassionate attention.",
  },
  {
    icon: Building2,
    title: "Modern Operation Theatre",
    description:
      "Fully equipped modular operation theatres with advanced surgical instruments and sterile environment.",
  },
  {
    icon: Sparkles,
    title: "Clean & Hygienic",
    description:
      "Maintaining the highest standards of cleanliness and hygiene throughout the hospital premises.",
  },
  {
    icon: Users,
    title: "Friendly Staff",
    description:
      "Our courteous and trained staff ensures a comfortable experience from registration to discharge.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Healthcare",
    description:
      "Committed to delivering healthcare that meets international standards of quality and safety.",
  },
  {
    icon: Award,
    title: "Trusted by Families",
    description:
      "Generations of families in Rajamahendravaram trust Chakradhar Hospitals for their healthcare needs.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 text-balance">
            Why{" "}
            <span className="gradient-text">Chakradhar Hospitals</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We are committed to providing exceptional healthcare services with
            a patient-first approach, advanced medical technology, and a
            compassionate team.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group bg-surface hover:bg-white rounded-2xl p-6 border border-border hover:border-primary/20 card-hover cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-accent group-hover:bg-primary flex items-center justify-center mb-4 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-dark mb-2 text-sm">
                {reason.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
