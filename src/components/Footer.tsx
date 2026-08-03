"use client";

import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Globe,
  Camera,
  MessageSquare,
  Play,
  ArrowUp,
  Heart,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Departments", href: "#departments" },
  { name: "Doctors", href: "#doctors" },
  { name: "Facilities", href: "#facilities" },
  { name: "Health Packages", href: "#packages" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const departments = [
  "Orthopaedics",
  "General Medicine",
  "General Surgery",
  "Emergency Medicine",
  "Physiotherapy",
  "Trauma Care",
  "Joint Replacement",
  "Spine Care",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white relative">
      {/* Emergency Bar */}
      <div className="bg-danger">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-white text-sm">
            <Phone className="w-4 h-4 animate-pulse" />
            <span className="font-semibold">24/7 Emergency:</span>
            <a href="tel:+919348291119" className="font-bold hover:underline">
              +91 93482 91119
            </a>
          </div>
          <a
            href="tel:+919348291119"
            className="px-5 py-2 bg-white text-danger text-sm font-semibold rounded-lg hover:bg-surface transition-colors"
          >
            Call Emergency Now
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Hospital Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 4 L20 36 M4 20 L36 20 M10 10 L30 30 M30 10 L10 30" strokeLinecap="round" />
                  <circle cx="20" cy="20" r="6" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Chakradhar Hospitals</h3>
                <p className="text-xs text-white/50">చక్రధర్ హాస్పిటల్స్</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Trusted healthcare institution in Rajamahendravaram, providing
              quality medical services with experienced doctors and modern
              facilities.
            </p>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-yellow-400">★</span>
              <span className="font-semibold text-sm">4.5</span>
              <span className="text-white/50 text-sm">/ 5 (229+ Reviews)</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-sky-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Play className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-semibold text-base mb-5">Departments</h4>
            <ul className="space-y-2.5">
              {departments.map((dept) => (
                <li key={dept}>
                  <a
                    href="#departments"
                    className="text-sm text-white/60 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <p className="text-sm text-white/60 leading-relaxed">
                  06-24/1, House No. 85, Morampudi Road, VL Puram Junction,
                  Rajamahendravaram, AP - 533103
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+919348291119"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  +91 93482 91119
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@chakradharhospitals.com"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  info@chakradharhospitals.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-1 shrink-0" />
                <div className="text-sm text-white/60">
                  <p>Open 24 Hours</p>
                  <p>All Days Including Sundays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-white/40 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Chakradhar Hospitals. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-5 w-12 h-12 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
