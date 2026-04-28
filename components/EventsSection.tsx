"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  {
    title: "Thursday Quiz Night",
    day: "Thursday",
    image: "/THURS+QUIZ+Night!+(2).webp",
  },
  {
    title: "Saturday Special",
    day: "Saturday",
    image: "/SATURDAY+SPECIAL+WEB.webp",
  },
  {
    title: "Sunday 2-for-1 Pizzas",
    day: "Sunday",
    image: "/SUNDAYS+2+Pizzas+WEB+(1).webp",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white mb-4">
            What&apos;s On
          </h2>
          <p className="text-white/60 text-lg">
            Regular happenings at B74
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              {/* Image - fills more space */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Event Name */}
              <h3 className="font-serif text-2xl text-white mb-1">
                {event.title}
              </h3>
              <p className="text-terracotta font-medium mb-4">{event.day}</p>
              {/* CTA */}
              <a
                href="#events"
                className="inline-block border-2 border-white/30 text-white px-6 py-2 rounded-full font-medium hover:bg-terracotta hover:border-terracotta transition-colors text-sm"
              >
                Find Out More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
