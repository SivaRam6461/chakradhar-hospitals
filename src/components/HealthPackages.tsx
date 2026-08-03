"use client";

import { motion } from "framer-motion";
import { Check, CalendarCheck, Sparkles } from "lucide-react";

const packages = [
  {
    name: "General Health Checkup",
    price: "₹999",
    period: "per person",
    description: "Essential health screening for overall wellness assessment.",
    features: [
      "Complete Blood Count",
      "Blood Sugar Test",
      "Lipid Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "Urine Analysis",
      "ECG",
      "Doctor Consultation",
    ],
    popular: false,
  },
  {
    name: "Senior Citizen Checkup",
    price: "₹1,999",
    period: "per person",
    description: "Comprehensive health package designed for senior citizens.",
    features: [
      "All General Checkup Tests",
      "Thyroid Profile",
      "Vitamin D & B12",
      "Chest X-Ray",
      "Eye Checkup",
      "Bone Density Test",
      "Cardiac Screening",
      "Specialist Consultation",
      "Diet Counseling",
    ],
    popular: true,
  },
  {
    name: "Women's Health Package",
    price: "₹1,499",
    period: "per person",
    description: "Specialized health screening focused on women's wellness.",
    features: [
      "Complete Blood Count",
      "Thyroid Profile",
      "Blood Sugar Test",
      "Iron Studies",
      "Calcium Levels",
      "Gynecological Consultation",
      "Breast Examination",
      "Abdominal Ultrasound",
    ],
    popular: false,
  },
  {
    name: "Diabetes Screening",
    price: "₹799",
    period: "per person",
    description: "Early detection and monitoring package for diabetes.",
    features: [
      "Fasting Blood Sugar",
      "Post Prandial Sugar",
      "HbA1c Test",
      "Lipid Profile",
      "Kidney Function Test",
      "Urine Microalbumin",
      "Doctor Consultation",
    ],
    popular: false,
  },
  {
    name: "Bone Health Package",
    price: "₹1,799",
    period: "per person",
    description: "Comprehensive assessment for bone and joint health.",
    features: [
      "Calcium & Phosphorus",
      "Vitamin D Test",
      "Alkaline Phosphatase",
      "Bone Density Scan",
      "Joint X-Ray",
      "Rheumatoid Factor",
      "Orthopaedic Consultation",
    ],
    popular: false,
  },
  {
    name: "Executive Health Checkup",
    price: "₹2,999",
    period: "per person",
    description: "Premium full-body health checkup for working professionals.",
    features: [
      "All Senior Citizen Tests",
      "CT Scan (Selective)",
      "Spirometry (Lung Test)",
      "Stress Test (TMT)",
      "Ultrasound Abdomen",
      "Tumor Markers",
      "Multi-Specialist Consultation",
      "Personalized Health Report",
      "Follow-up Consultation",
    ],
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
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

export default function HealthPackages() {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-4">
            Health Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 text-balance">
            Preventive <span className="gradient-text">Health Packages</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Invest in your health with our comprehensive preventive health
            checkup packages at affordable prices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={itemVariants}
              className={`group relative bg-white rounded-2xl border card-hover overflow-hidden ${
                pkg.popular
                  ? "border-primary shadow-healthcare-xl ring-2 ring-primary/10"
                  : "border-border hover:border-primary/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="p-6 lg:p-7">
                <h3 className="font-semibold text-dark text-lg mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted mb-4">{pkg.description}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-primary">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-muted">/{pkg.period}</span>
                </div>

                <ul className="space-y-2.5 mb-7">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      <span className="text-sm text-dark-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#appointment"
                  className={`flex items-center justify-center gap-2 w-full px-5 py-3.5 text-sm font-semibold rounded-xl transition-colors duration-200 ${
                    pkg.popular
                      ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20"
                      : "bg-surface text-primary hover:bg-accent border border-border"
                  }`}
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
