"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-sand">
              <Image
                src="/inside.png"
                alt="Inside Bistro 74"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8 order-1 lg:order-2"
          >
            <span className="text-terracotta font-semibold uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-charcoal mt-2 mb-6">
              Not your average eatery
            </h2>
            <div className="space-y-4 text-charcoal/80 text-lg leading-relaxed">
              <p>
                B74 was born from a love of gathering — around good food, great
                drinks, and even better company. Nestled in the heart of Mowbray,
                we&apos;re proud to be part of a community that values warmth,
                authenticity, and a dash of Cape Town soul.
              </p>
              <p>
                We&apos;ve got murals that&apos;ll stop you mid-bite, board games
                for when the conversation runs dry (it won&apos;t), and a bar that
                knows how to pour. Bring your dog, your squad, or just yourself
                — there&apos;s always room at B74.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-sand">
              <div className="text-center">
                <span className="font-serif text-3xl text-terracotta">10+</span>
                <p className="text-charcoal/60 text-sm mt-1">Board Games</p>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl text-terracotta">Always</span>
                <p className="text-charcoal/60 text-sm mt-1">Cold Beers</p>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl text-terracotta">Always</span>
                <p className="text-charcoal/60 text-sm mt-1">Dogs Welcome</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
