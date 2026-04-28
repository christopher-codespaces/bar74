"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white mb-4">
            Inside B74
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="space-y-4">
          {/* Top: Full width interior-4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[21/9] rounded-xl overflow-hidden group"
          >
            <Image
              src="/us.png"
              alt="Full interior view of B74 with Edison bulbs and murals"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#C4704A]/0 group-hover:bg-[#C4704A]/20 transition-colors duration-300" />
          </motion.div>

          {/* Bottom: 3 images side by side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src="/inside.png"
                alt="Cosy booth with velvet cushions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#C4704A]/0 group-hover:bg-[#C4704A]/20 transition-colors duration-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src="/quiz.png"
                alt="Shelf with street art murals and board games"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#C4704A]/0 group-hover:bg-[#C4704A]/20 transition-colors duration-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src="/beer.png"
                alt="Mech T-Rex street art mural"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#C4704A]/0 group-hover:bg-[#C4704A]/20 transition-colors duration-300" />
            </motion.div>
          </div>
        </div>

        {/* Cheeky Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/60 italic mt-8 text-sm sm:text-base"
        >
          Yes, that is a mech T-Rex. Yes, the board games are free. Yes, your dog is welcome.
        </motion.p>
      </div>
    </section>
  );
}
