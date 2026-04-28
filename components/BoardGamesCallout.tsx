"use client";

import { motion } from "framer-motion";

export default function BoardGamesCallout() {
  return (
    <section className="bg-[#2D4A2D] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left"
        >
          {/* Icon */}
          <div className="text-6xl">🎲</div>

          {/* Text */}
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl text-white mb-2">
              Free board games. Always.
            </h3>
            <p className="text-white/80 text-lg">
              Catan. Monopoly. Scrabble. Pictionary. The only thing we charge for is the beer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
