"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    location: "Rajamahendravaram",
    rating: 5,
    review:
      "Expert doctors with friendly staff and quality treatment. My knee replacement surgery was smooth and recovery was quick. Highly recommended hospital.",
    avatar: "R",
  },
  {
    name: "Saroja Devi",
    location: "Rajamahendravaram",
    rating: 5,
    review:
      "Excellent care from doctors and nurses. The physiotherapy department helped me recover from my back pain. Very professional and caring team.",
    avatar: "S",
  },
  {
    name: "Venkata Rao",
    location: "Guntur",
    rating: 5,
    review:
      "Highly satisfied with the treatment. The hospital is clean, well-maintained, and the staff is very cooperative. Emergency services are prompt.",
    avatar: "V",
  },
  {
    name: "Lakshmi Priya",
    location: "Rajamahendravaram",
    rating: 4,
    review:
      "Professional service with affordable care. Dr. Rajesh Kumar explained the treatment clearly and the surgery was successful. Thank you team.",
    avatar: "L",
  },
  {
    name: "Suresh Babu",
    location: "Kakinada",
    rating: 5,
    review:
      "Best hospital in Rajamahendravaram. My father's fracture treatment was excellent. The doctors are experienced and the facilities are modern.",
    avatar: "SB",
  },
  {
    name: "Padmavathi",
    location: "Rajamahendravaram",
    rating: 5,
    review:
      "Very good experience. The staff is friendly, the hospital is clean, and the treatment is effective. I recommend Chakradhar Hospitals to everyone.",
    avatar: "P",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 text-balance">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Hear from our patients about their experience at Chakradhar
            Hospitals.
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-200 text-yellow-200"}`}
              />
            ))}
          </div>
          <span className="text-2xl font-bold text-dark">4.5</span>
          <span className="text-muted">|</span>
          <span className="text-muted">229+ Happy Reviews</span>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-surface border border-border p-8 lg:p-12 min-h-[280px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-lg lg:text-xl text-dark leading-relaxed mb-6">
                  &ldquo;{testimonials[current].review}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-dark">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-muted">
                      {testimonials[current].location}
                    </p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < testimonials[current].rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white border border-border hover:border-primary/30 flex items-center justify-center transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-dark" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white border border-border hover:border-primary/30 flex items-center justify-center transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-dark" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
