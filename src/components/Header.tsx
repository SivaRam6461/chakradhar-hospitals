"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Clock,
  Menu,
  X,
  ChevronDown,
  CalendarCheck,
  Siren,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  {
    name: "Departments",
    href: "#departments",
    children: [
      { name: "Orthopaedics", href: "#departments" },
      { name: "General Medicine", href: "#departments" },
      { name: "General Surgery", href: "#departments" },
      { name: "Emergency Medicine", href: "#departments" },
      { name: "Physiotherapy", href: "#departments" },
      { name: "Trauma Care", href: "#departments" },
    ],
  },
  { name: "Doctors", href: "#doctors" },
  { name: "Facilities", href: "#facilities" },
  { name: "Packages", href: "#packages" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* Emergency Top Bar */}
      <div className="bg-primary text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <span>
                Emergency:{" "}
                <a
                  href="tel:+919348291119"
                  className="font-semibold hover:underline"
                >
                  +91 93482 91119
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Open 24 Hours | All Days</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-yellow-300">★</span>
              <span className="font-semibold">4.5</span>
              <span className="text-white/70">/ 5 Google Rating</span>
              <span className="text-white/50">|</span>
              <span className="text-white/70">229+ Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-healthcare"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl gradient-primary flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 4 L20 36 M4 20 L36 20 M10 10 L30 30 M30 10 L10 30" strokeLinecap="round" />
                  <circle cx="20" cy="20" r="6" strokeWidth="2" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-dark leading-tight">
                  Chakradhar
                </h1>
                <p className="text-[10px] lg:text-xs text-muted font-medium tracking-wider uppercase">
                  Hospitals
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium text-dark-light hover:text-primary rounded-lg transition-colors duration-200"
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>
                  <AnimatePresence>
                    {link.children && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-healthcare-xl border border-border p-2"
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-dark-light hover:text-primary hover:bg-accent rounded-lg transition-colors duration-150"
                          >
                            {child.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919348291119"
                className="flex items-center gap-2 px-4 py-2.5 bg-danger text-white text-sm font-semibold rounded-xl hover:bg-red-600 transition-colors duration-200"
              >
                <Siren className="w-4 h-4" />
                Emergency
              </a>
              <a
                href="#appointment"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-200 shadow-lg shadow-primary/20"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Appointment
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:+919348291119"
                className="p-2 bg-danger text-white rounded-lg"
                aria-label="Call Emergency"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 text-dark hover:bg-surface rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-dark-light hover:text-primary hover:bg-accent rounded-xl transition-colors"
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  <a
                    href="#appointment"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-white font-semibold rounded-xl"
                  >
                    <CalendarCheck className="w-5 h-5" />
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
