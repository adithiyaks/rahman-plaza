/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Phone, Mail, MapPin, Calendar, X, ChevronRight, Clock } from 'lucide-react';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('plaza');
  const [date, setDate] = useState('');

  const handleExploreScroll = () => {
    const target = document.getElementById('building-showcase-container');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookVIP = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate booking API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after a small delay
      setTimeout(() => {
        setIsSubmitted(false);
        setIsModalOpen(false);
        setName('');
        setPhone('');
        setDate('');
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <section 
        className="relative bg-[#0a0a0a] py-24 sm:py-36 px-6 sm:px-12 w-full overflow-hidden border-t border-white/5"
        id="cta-section"
      >
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,78,59,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#c5a059]/4 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="border border-[#c5a059]/20 rounded-[2.5rem] bg-gradient-to-br from-[#0c0d0d]/80 to-[#0a0a0a]/95 p-8 sm:p-12 md:p-16 backdrop-blur-2xl text-center shadow-2xl relative overflow-hidden">
            {/* Outer corner sparkles decorative */}
            <div className="absolute top-6 left-6 hidden sm:block">
              <Sparkles className="h-5 w-5 text-[#c5a059]/20" />
            </div>
            <div className="absolute bottom-6 right-6 hidden sm:block">
              <Sparkles className="h-5 w-5 text-[#c5a059]/20" />
            </div>

            <div className="max-w-2xl mx-auto flex flex-col items-center">
              {/* Gold Accent Indicator */}
              <div className="flex items-center gap-2 px-3 py-1 bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-full mb-6">
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#c5a059] animate-pulse" />
                <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-[#c5a059]">
                  Bespoke Store Visits
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#f5f5f4] mb-6 leading-tight">
                Begin Your <span className="font-serif italic text-[#c5a059] block sm:inline">Rahman Journey</span>
              </h2>

              {/* Tagline */}
              <p className="text-xs sm:text-sm font-sans text-neutral-400 leading-relaxed font-light mb-10 max-w-lg">
                Experience Chennai's premier luxury retail landmarks in person, or let our master tailoring and design consultants assist you from the comfort of your home.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                <button
                  onClick={handleExploreScroll}
                  className="px-8 py-3.5 rounded-full bg-[#c5a059] hover:bg-[#b08d48] text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[#c5a059]/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Flagships
                  <ChevronRight className="h-3.5 w-3.5 text-black" />
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-transparent border border-white/10 hover:border-white/30 text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Connect with Concierge
                  <Sparkles className="h-3.5 w-3.5 text-[#c5a059]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCIERGE VIP BOOKING MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-md bg-black/70 pointer-events-auto"
            onClick={() => setIsModalOpen(false)}
            id="concierge-modal-backdrop"
          >
            <motion.div
              initial={{ scale: 0.94, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0c0d0d] border border-[#c5a059]/20 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
              id="concierge-modal-content"
            >
              {/* Gradient lighting accents */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
              <div className="absolute right-0 top-0 w-24 h-24 bg-[#c5a059]/5 blur-2xl rounded-full" />

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors p-1.5 bg-neutral-900/60 rounded-full border border-white/5 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header */}
              <div className="p-6 sm:p-8 pb-4">
                <span className="text-[8px] font-mono text-[#c5a059] tracking-[0.2em] uppercase block mb-1">
                  Private Salon Booking
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide">
                  VIP Concierge Services
                </h3>
                <p className="text-xs text-neutral-400 font-light mt-1">
                  Schedule a private styling session, master tailoring appointment, or personalized bridal consultation.
                </p>
              </div>

              {/* Modal Body: Contact Details or Form */}
              <div className="px-6 sm:px-8 pb-6 overflow-y-auto max-h-[75vh]">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {/* Phone */}
                  <a 
                    href="tel:+914428447474" 
                    className="flex flex-col p-3 rounded-2xl bg-neutral-950/50 border border-white/5 hover:border-[#c5a059]/30 transition-all duration-300"
                  >
                    <Phone className="h-4 w-4 text-[#c5a059] mb-1" />
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Call Desk</span>
                    <span className="text-[10px] font-semibold text-white mt-0.5">+91 44 2844 7474</span>
                  </a>
                  {/* Email */}
                  <a 
                    href="mailto:concierge@rahmanplaza.com" 
                    className="flex flex-col p-3 rounded-2xl bg-neutral-950/50 border border-white/5 hover:border-[#c5a059]/30 transition-all duration-300"
                  >
                    <Mail className="h-4 w-4 text-[#c5a059] mb-1" />
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Email</span>
                    <span className="text-[10px] font-semibold text-white mt-0.5 truncate">concierge@rahman.com</span>
                  </a>
                </div>

                {/* VIP Form */}
                <div className="border-t border-white/5 pt-5">
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#c5a059]" />
                    Request a VIP Appointment
                  </h4>

                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-950/20 border border-emerald-500/20 p-6 rounded-2xl text-center"
                    >
                      <Sparkles className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                      <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Request Logged</h5>
                      <p className="text-[11px] text-neutral-400 font-light mt-1 leading-relaxed">
                        Thank you, {name}. Our VIP concierge will contact you on your registered mobile shortly to confirm your booking.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleBookVIP} className="space-y-3">
                      <div>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full bg-neutral-950/70 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a059]/50 focus:bg-neutral-950/90 transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Contact Number"
                          className="w-full bg-neutral-950/70 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#c5a059]/50 focus:bg-neutral-950/90 transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <select
                          value={branch}
                          onChange={(e) => setBranch(e.target.value)}
                          className="w-full bg-neutral-950/70 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-neutral-300 focus:outline-none focus:border-[#c5a059]/50 focus:bg-neutral-950/90 transition-all"
                        >
                          <option value="plaza">Rahman Plaza</option>
                          <option value="palladium">Rahman Palladium</option>
                          <option value="khalifa">Rahman Khalifa</option>
                        </select>
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-neutral-950/70 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-neutral-300 focus:outline-none focus:border-[#c5a059]/50 focus:bg-neutral-950/90 transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#c5a059] hover:bg-[#b08d48] text-black font-semibold text-xs tracking-widest uppercase py-3 rounded-xl transition-all duration-300 shadow-md hover:scale-[1.01] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-1.5 cursor-pointer mt-4"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-3 w-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            Booking Appointment...
                          </>
                        ) : (
                          'Request Appointment'
                        )}
                      </button>
                    </form>
                  )}
                </div>

                {/* Additional Store Info */}
                <div className="border-t border-white/5 mt-5 pt-4 flex flex-col gap-2">
                  <div className="flex items-start gap-2.5 text-neutral-400">
                    <MapPin className="h-3.5 w-3.5 text-neutral-500 shrink-0 mt-0.5" />
                    <span className="text-[10px] font-light leading-relaxed">
                      No. 128, Rahman Plaza Rd, Triplicane, Chennai - 600005
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-400">
                    <Clock className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
                    <span className="text-[10px] font-light leading-none">
                      Open Daily: 10:00 AM — 10:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
