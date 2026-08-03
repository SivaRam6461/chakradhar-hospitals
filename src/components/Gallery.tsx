"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    alt: "Hospital Building",
    category: "Building",
  },
  {
    src: "https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=800&q=80",
    alt: "Reception Area",
    category: "Reception",
  },
  {
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    alt: "Operation Theatre",
    category: "Operation Theatre",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    alt: "Consultation Room",
    category: "Consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    alt: "Doctor Consultation",
    category: "Doctors",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    alt: "Medical Equipment",
    category: "Facilities",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    alt: "Patient Care",
    category: "Patient Care",
  },
  {
    src: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80",
    alt: "Emergency Care",
    category: "Emergency",
  },
  {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    alt: "Waiting Area",
    category: "Waiting Area",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-4">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 text-balance">
            Our <span className="gradient-text">Hospital Gallery</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Take a virtual tour of our hospital facilities, infrastructure, and
            the environment where we provide care.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                index === 0 || index === 4
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
              onClick={() => setSelected(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  index === 0 || index === 4 ? "h-64 md:h-full" : "h-48 md:h-56"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {item.alt}
                    </p>
                    <p className="text-white/70 text-xs">{item.category}</p>
                  </div>
                  <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[selected].src}
                alt={galleryItems[selected].alt}
                className="w-full rounded-2xl object-contain max-h-[80vh]"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setSelected(null)}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="Close gallery"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">
                  {galleryItems[selected].alt}
                </p>
                <p className="text-white/70 text-sm">
                  {galleryItems[selected].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
