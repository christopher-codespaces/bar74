"use client";

import { useState } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { motion, AnimatePresence } from "framer-motion";
import B74Logo from "@/components/B74Logo";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Find Us", href: "#find-us" },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1A1A1A]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - links to homepage */}
          <a href="/" className="flex items-center">
            <B74Logo height={48} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-terracotta transition-colors font-semibold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reserve"
              className="bg-terracotta text-white px-8 py-3 rounded-full font-semibold hover:bg-terracotta-light transition-colors"
            >
              Reserve a Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A1A]/95 backdrop-blur-sm border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-terracotta transition-colors font-semibold py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reserve"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-terracotta text-white px-6 py-4 rounded-full font-semibold text-center hover:bg-terracotta-light transition-colors mt-4"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
