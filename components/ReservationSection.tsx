"use client";

import { motion } from "framer-motion";

export default function ReservationSection() {
  return (
    <section id="reserve" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-terracotta font-semibold uppercase tracking-wider text-sm">
              Reservations
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mt-2 mb-6">
              Join Us at the Table
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Whether it&apos;s a intimate dinner for two, a family celebration,
              or a night out with friendsround — we&apos;d love to host you. Book
              your table online or give us a call.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-sm">Call us</p>
                  <p className="text-white font-semibold">+27 21 123 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-sm">Find us</p>
                  <a
                    href="https://www.google.com/maps/place/B74,+74+Durban+Rd,+Mowbray,+Cape+Town,+7700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-terracotta-light transition-colors"
                  >
                    74 Durban Road, Mowbray, Cape Town, 7700
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-sm">Opening hours</p>
                  <p className="text-white font-semibold">Mon-Sun: 12pm - 11pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-warm-white rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-charcoal font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-4 rounded-lg border border-sand bg-white focus:outline-none focus:border-terracotta transition-colors font-medium"
                  />
                </div>
                <div>
                  <label className="block text-charcoal font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your number"
                    className="w-full px-4 py-4 rounded-lg border border-sand bg-white focus:outline-none focus:border-terracotta transition-colors font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-charcoal font-semibold mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-4 rounded-lg border border-sand bg-white focus:outline-none focus:border-terracotta transition-colors font-medium"
                  />
                </div>
                <div>
                  <label className="block text-charcoal font-semibold mb-2">Time</label>
                  <select className="w-full px-4 py-4 rounded-lg border border-sand bg-white focus:outline-none focus:border-terracotta transition-colors font-medium">
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-charcoal font-semibold mb-2">Guests</label>
                <select className="w-full px-4 py-4 rounded-lg border border-sand bg-white focus:outline-none focus:border-terracotta transition-colors font-medium">
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5 people</option>
                  <option>6 people</option>
                  <option>7+ people</option>
                </select>
              </div>

              <div>
                <label className="block text-charcoal font-semibold mb-2">Special Requests</label>
                <textarea
                  rows={3}
                  placeholder="Allergies, celebrations, seating preferences..."
                  className="w-full px-4 py-4 rounded-lg border border-sand bg-white focus:outline-none focus:border-terracotta transition-colors resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-terracotta text-white py-4 rounded-full font-semibold hover:bg-terracotta-light transition-colors text-lg"
              >
                Request Booking
              </button>

              <p className="text-center text-charcoal/50 text-sm font-medium">
                We&apos;ll confirm your booking via phone or email within 2 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
