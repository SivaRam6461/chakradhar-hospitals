"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const treatments = [
  {
    title: "Knee Replacement",
    description:
      "Advanced knee replacement surgery with minimally invasive techniques for faster recovery and better outcomes.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  },
  {
    title: "Joint Replacement",
    description:
      "Comprehensive joint replacement solutions for knee, hip, and shoulder joints using premium implants.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
  },
  {
    title: "Fracture Treatment",
    description:
      "Expert treatment for all types of fractures including complex and compound fractures with precise fixation.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
  {
    title: "Sports Injuries",
    description:
      "Specialized care for sports-related injuries including ligament tears, sprains, and muscle injuries.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  },
  {
    title: "Arthritis Care",
    description:
      "Comprehensive arthritis management including medication, physiotherapy, and surgical interventions.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
  },
  {
    title: "Back Pain Treatment",
    description:
      "Effective treatment for chronic back pain, disc problems, and spinal conditions with personalized care.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  },
  {
    title: "Trauma Care",
    description:
      "Emergency trauma care with rapid response, critical care, and surgical intervention for accident victims.",
    image:
      "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=600&q=80",
  },
  {
    title: "Spine Care",
    description:
      "Expert spine treatment including minimally invasive spine surgery, disc replacement, and spinal fusion.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
  },
  {
    title: "Physiotherapy",
    description:
      "Professional physiotherapy services for rehabilitation, pain management, and mobility improvement.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    title: "Pain Management",
    description:
      "Specialized pain management solutions for chronic pain, nerve pain, and post-surgical pain relief.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
  },
  {
    title: "Emergency Care",
    description:
      "24/7 emergency medical services with fully equipped emergency unit and experienced critical care team.",
    image:
      "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=600&q=80",
  },
  {
    title: "Health Checkup",
    description:
      "Comprehensive health checkup packages for preventive care, early detection, and wellness assessment.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
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

export default function Treatments() {
  return (
    <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-4">
            Treatments
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 text-balance">
            Treatments <span className="gradient-text">We Offer</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From conservative treatments to advanced surgical procedures, we
            provide comprehensive care for a wide range of medical conditions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {treatments.map((treatment) => (
            <motion.div
              key={treatment.title}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/20 card-hover cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-dark mb-2 text-base">
                  {treatment.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-3">
                  {treatment.description}
                </p>
                <div className="flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
