"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do you provide emergency care?",
    answer:
      "Yes, Chakradhar Hospitals provides 24/7 emergency care services with a fully equipped emergency unit. Our emergency team is always ready to handle critical situations with rapid response and expert medical attention. For emergencies, call +91 93482 91119.",
  },
  {
    question: "Is online appointment booking available?",
    answer:
      "Yes, you can book an appointment online through our website. Simply visit the appointment section, fill in your details including your preferred department, doctor, and date, and our team will confirm your appointment. You can also call us at +91 93482 91119 to book.",
  },
  {
    question: "What are the visiting hours?",
    answer:
      "Our hospital is open 24 hours for emergency services. For general visits and consultations, our outpatient department operates from 8:00 AM to 8:00 PM on all days. Visiting hours for admitted patients are from 10:00 AM to 12:00 PM and 4:00 PM to 7:00 PM.",
  },
  {
    question: "Do you accept medical insurance?",
    answer:
      "Yes, we accept most major health insurance plans and provide cashless insurance assistance. Please contact our insurance desk at the hospital or call us to verify your specific insurance coverage before your visit. We'll help you with the entire claims process.",
  },
  {
    question: "Do you provide physiotherapy services?",
    answer:
      "Yes, we have a dedicated physiotherapy unit with experienced physiotherapists. Our services include post-surgical rehabilitation, sports injury recovery, chronic pain management, mobility improvement, and specialized treatments for conditions like back pain, knee pain, and paralysis recovery.",
  },
  {
    question: "How can I contact the hospital?",
    answer:
      "You can reach us through multiple channels:\n• Phone: +91 93482 91119\n• Address: 06-24/1, House No. 85, Morampudi Road, VL Puram Junction, Rajamahendravaram, AP - 533103\n• Emergency: Available 24/7\n• WhatsApp: Send a message to our number for quick inquiries.",
  },
  {
    question: "What departments are available at the hospital?",
    answer:
      "Chakradhar Hospitals is a multi-specialty facility offering departments including Orthopaedics, General Medicine, General Surgery, Emergency Medicine, Physiotherapy, Trauma Care, Joint Replacement, Spine Care, Pain Management, and Health Checkup services. We continually expand our services to meet community healthcare needs.",
  },
  {
    question: "Are there health checkup packages available?",
    answer:
      "Yes, we offer a range of preventive health checkup packages including General Health Checkup, Senior Citizen Checkup, Women's Health Package, Diabetes Screening, Bone Health Package, and Executive Health Checkup. These packages are designed for early detection and overall wellness assessment at affordable prices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 text-balance">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Find answers to common questions about our hospital, services, and
            patient care.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center gap-4 p-5 lg:p-6 text-left hover:bg-surface transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-dark flex-1 text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 lg:px-6 pb-5 lg:pb-6 pl-19 lg:pl-[76px]">
                      <p className="text-muted leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
