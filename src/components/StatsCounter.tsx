"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Stethoscope, Clock, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 5000,
    suffix: "+",
    label: "Happy Patients",
    description: "Trusted by thousands of families",
  },
  {
    icon: Stethoscope,
    number: 10,
    suffix: "+",
    label: "Medical Services",
    description: "Comprehensive healthcare solutions",
  },
  {
    icon: Clock,
    number: 24,
    suffix: "×7",
    label: "Emergency Care",
    description: "Always here when you need us",
  },
  {
    icon: Star,
    number: 4.5,
    suffix: "★",
    label: "Patient Rating",
    description: "Based on 229+ Google reviews",
    decimals: 1,
  },
];

function AnimatedCounter({
  target,
  suffix,
  decimals = 0,
}: {
  target: number;
  suffix: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 lg:py-20 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80')] bg-cover bg-center opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-white mb-1">
                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="font-semibold text-white/90 text-sm mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-white/50">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
