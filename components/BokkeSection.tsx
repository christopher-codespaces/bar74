"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BokkeSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Bokke+Flag.webp"
          alt="South African rugby fans"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Animated Headline */}
        <div className="space-y-4 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white italic"
          >
            The Boks are playing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-2xl sm:text-3xl md:text-4xl font-light"
          >
            You know where to be.
          </motion.p>
        </div>

        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <span className="bg-terracotta/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold">
            Big Screens · Cold Beers · Loud Locals
          </span>
        </motion.div>

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-white/70 max-w-xl text-lg mb-10 font-medium"
        >
          Pack the mates, grab your green and gold, and get to 74 Durban Road.
          First round&apos;s calling.
        </motion.p>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          href="https://www.google.com/maps/place/B74,+74+Durban+Rd,+Mowbray,+Cape+Town,+7700"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-terracotta text-white px-10 py-4 rounded-full font-semibold hover:bg-terracotta-light transition-colors text-lg"
        >
          Get Directions
        </motion.a>

        {/* Car Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-0 w-full overflow-hidden pointer-events-none"
        >
          <div className="car-animation">
            <svg
              className="w-12 h-12 text-white/60"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
            </svg>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .car-animation {
          animation: driveAcross 8s linear infinite;
        }
        @keyframes driveAcross {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px));
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
