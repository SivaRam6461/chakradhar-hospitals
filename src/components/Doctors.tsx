"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Award, Globe } from "lucide-react";

const doctors = [
  {
    name: "Dr. Rajesh Kumar",
    qualification: "MBBS, MS (Orthopaedics)",
    specialization: "Orthopaedics & Joint Replacement",
    experience: "15+ Years Experience",
    languages: "English, Telugu, Hindi",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    name: "Dr. Sunita Reddy",
    qualification: "MBBS, MD (General Medicine)",
    specialization: "General Medicine & Diabetology",
    experience: "12+ Years Experience",
    languages: "English, Telugu",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    name: "Dr. Venkatesh Rao",
    qualification: "MBBS, MS (General Surgery)",
    specialization: "General Surgery & Laparoscopy",
    experience: "18+ Years Experience",
    languages: "English, Telugu, Hindi",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
  },
  {
    name: "Dr. Priya Sharma",
    qualification: "MBBS, DNB (Emergency Medicine)",
    specialization: "Emergency & Trauma Care",
    experience: "10+ Years Experience",
    languages: "English, Hindi, Telugu",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&q=80",
  },
  {
    name: "Dr. Anil Kumar",
    qualification: "MBBS, MD (Physiotherapy)",
    specialization: "Physiotherapy & Rehabilitation",
    experience: "8+ Years Experience",
    languages: "English, Telugu",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    name: "Dr. Lakshmi Devi",
    qualification: "MBBS, MS (Orthopaedics)",
    specialization: "Spine Care & Pain Management",
    experience: "14+ Years Experience",
    languages: "English, Telugu, Hindi",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 text-balance">
            Meet Our <span className="gradient-text">Expert Doctors</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Our team of experienced and compassionate medical professionals is
            dedicated to providing the highest quality of care.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.name}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/20 card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">
                    {doctor.name}
                  </p>
                  <p className="text-white/80 text-sm">
                    {doctor.qualification}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted">Specialization</p>
                      <p className="text-sm font-medium text-dark">
                        {doctor.specialization}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted">Experience</p>
                      <p className="text-sm font-medium text-dark">
                        {doctor.experience}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted">Languages</p>
                      <p className="text-sm font-medium text-dark">
                        {doctor.languages}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="#appointment"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-200"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
