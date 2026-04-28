"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const menuTabs = [
  {
    key: "food",
    label: "Food",
    pdf: "/FOOD-Menu-2026.pdf",
    image: "/Burger+Menu+Pic.webp",
    imageAlt: "Bistro 74 signature burger",
  },
  {
    key: "burgers",
    label: "Burgers",
    pdf: "/Burger-Menu-2026.pdf",
    image: "/Burger+Special+WEB.webp",
    imageAlt: "Bistro 74 burger special",
  },
  {
    key: "breakfast",
    label: "Breakfast",
    pdf: "/B74-Breakfast-Menu-PDF-tgjd.pdf",
    image: "/Burger+Menu+Pic.webp",
    imageAlt: "Bistro 74 breakfast",
  },
  {
    key: "drinks",
    label: "Drinks & Bar",
    pdf: "/B74-Drinks-Menu-2026-2.pdf",
    image: "/Cocktails+2026.webp",
    imageAlt: "Bistro 74 cocktails",
  },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("food");

  return (
    <section id="menu" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-5xl sm:text-6xl text-charcoal mb-4">
            Our Menus
          </h2>
          <p className="text-charcoal/70 text-lg font-medium">
            Crafted with love, served with soul
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 py-4 rounded-full font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-terracotta text-white"
                  : "bg-cream text-charcoal hover:bg-sand"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {menuTabs.map((tab) => {
            if (tab.key !== activeTab) return null;
            return (
              <div
                key={tab.key}
                className="bg-cream rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={tab.image}
                      alt={tab.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                      {tab.label} Menu
                    </h3>
                    <p className="text-charcoal/70 mb-6 font-medium">
                      {tab.key === "food" && "Hearty mains, starters, and desserts made with local ingredients."}
                      {tab.key === "burgers" && "Our legendary handcrafted burgers with premium toppings."}
                      {tab.key === "breakfast" && "Start your day right with our morning offerings."}
                      {tab.key === "drinks" && "Cocktails, craft beers, wines, and all the bar essentials."}
                    </p>
                    <a
                      href={tab.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-terracotta text-white px-8 py-4 rounded-full font-semibold hover:bg-terracotta-light transition-colors text-lg"
                    >
                      View Full Menu
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
