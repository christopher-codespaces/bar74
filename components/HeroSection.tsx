"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Cheers+the+Beers.webp"
          alt="Bistro 74 bar area"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Gradient Overlay - dark at bottom, transparent at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 px-4 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-white/80 text-lg sm:text-xl font-medium tracking-wide uppercase mb-2">
            Little Mowbray&apos;s
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white italic leading-none">
            Favourite Hangout
          </h1>
        </motion.div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mb-10 font-medium"
        >
          Street art. Cold beers. Great food. Board games. The Boks on the big screen.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#menu"
            className="bg-terracotta text-white px-10 py-5 rounded-full font-semibold hover:bg-terracotta-light transition-colors text-lg"
          >
            Explore the Menu
          </a>
          <a
            href="#reserve"
            className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-[#1A1A1A] transition-colors text-lg"
          >
            Book a Table
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
