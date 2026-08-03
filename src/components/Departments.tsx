"use client";

import { motion } from "framer-motion";
import {
  Bone,
  Activity,
  Scissors,
  Siren,
  Dumbbell,
  PersonStanding,
  CircleDot,
  Hand,
  Waypoints,
  Bandage,
  Thermometer,
  HeartPulse,
  Stethoscope,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const departments = [
  {
    icon: Bone,
    name: "Orthopaedics",
    description:
      "Expert treatment for bone, joint, and musculoskeletal conditions including fractures, arthritis, and sports injuries.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Stethoscope,
    name: "General Medicine",
    description:
      "Comprehensive healthcare for common illnesses, chronic diseases, preventive care, and overall wellness management.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Scissors,
    name: "General Surgery",
    description:
      "Advanced surgical procedures performed by experienced surgeons in modern, well-equipped operation theatres.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Siren,
    name: "Emergency Medicine",
    description:
      "24/7 emergency care with rapid response team, trauma care, and critical care services for urgent medical needs.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Dumbbell,
    name: "Physiotherapy",
    description:
      "Rehabilitation and recovery through specialized physiotherapy treatments for mobility, pain relief, and strength.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: Activity,
    name: "Trauma Care",
    description:
      "Specialized trauma care unit with experienced medical professionals for accident and injury management.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Waypoints,
    name: "Joint Replacement",
    description:
      "Advanced joint replacement surgeries including knee, hip, and shoulder replacement with faster recovery.",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Bandage,
    name: "Knee Pain Treatment",
    description:
      "Comprehensive knee pain management from conservative treatments to surgical interventions for lasting relief.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: CircleDot,
    name: "Spine Care",
    description:
      "Expert diagnosis and treatment for back pain, spinal injuries, disc problems, and spinal deformities.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Hand,
    name: "Fracture Management",
    description:
      "Expert treatment for all types of fractures including complex fractures, dislocations, and bone injuries.",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Thermometer,
    name: "Pain Management",
    description:
      "Specialized pain management services for chronic pain, nerve pain, and post-surgical pain relief.",
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: ClipboardCheck,
    name: "Health Checkups",
    description:
      "Comprehensive health screening packages for preventive care, early detection, and overall wellness assessment.",
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
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

export default function Departments() {
  return (
    <section id="departments" className="py-20 lg:py-28 bg-white relative overflow-hidden">
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
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 text-balance">
            Medical <span className="gradient-text">Departments</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Comprehensive healthcare services across multiple specialties,
            delivered by our team of experienced medical professionals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {departments.map((dept) => (
            <motion.div
              key={dept.name}
              variants={itemVariants}
              className="group bg-surface hover:bg-white rounded-2xl p-6 border border-border hover:border-primary/20 card-hover cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${dept.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <dept.icon className={`w-7 h-7 ${dept.iconColor}`} />
              </div>
              <h3 className="font-semibold text-dark mb-2 text-base">
                {dept.name}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {dept.description}
              </p>
              <div className="flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
