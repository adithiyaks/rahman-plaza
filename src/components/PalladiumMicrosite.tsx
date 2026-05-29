/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Compass, Star, ArrowLeftRight, Heart, Sparkles, ChevronRight, X } from 'lucide-react';
import { PALLADIUM_COLLECTIONS } from '../data';
import { JewelryCollection } from '../types';

interface PalladiumMicrositeProps {
  onBackToOverview: () => void;
}

export default function PalladiumMicrosite({ onBackToOverview }: PalladiumMicrositeProps) {
  const [selectedColl, setSelectedColl] = useState<JewelryCollection | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f4] selection:bg-[#c5a059] selection:text-black">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1920"
            alt="Golden luxurious shimmering necklace ornament"
            className="w-full h-full object-cover scale-105 brightness-[0.2] saturate-50 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />
          
          {/* Champagne gold spotlights */}
          <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vh] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-[30vw] h-[30vh] bg-yellow-600/5 blur-[130px] rounded-full pointer-events-none" />
        </div>

        {/* Center Content */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-center mb-6">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.4em] text-[#c5a059] border border-[#c5a059]/20 px-4 py-1.5 rounded-full bg-[#121110]/50 backdrop-blur-md">
                Bespoke Joaillerie • Atelier Rahman
              </span>
            </div>

            <h1 className="text-3xl sm:text-6xl md:text-7xl font-light font-serif tracking-[0.15em] uppercase text-stone-100 leading-none mb-6">
              THE <span className="text-[#c5a059] font-extrabold italic font-sans">PALLADIUM</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-2xl mx-auto leading-relaxed mt-4 font-light">
              Enter an absolute temple of shimmering diamonds, antique 22k yellow gold filigree, and rare Japanese Akoya pearls crafted individually for legendary vows and high heritage.
            </p>

            <button
              onClick={onBackToOverview}
              className="mt-8 text-xs font-mono text-[#c5a059] uppercase tracking-widest hover:text-[#c5a059] cursor-pointer flex items-center gap-2 mx-auto border border-white/5 hover:border-[#c5a059]/30 px-6 py-3 rounded-full bg-[#0a0a0a]/40 hover:bg-[#0a0a0a]/80 transition-all font-medium"
              id="back-to-home-btn"
            >
              <ArrowLeftRight className="h-3.5 w-3.5" /> Back to Overview
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. SPECULAR CRAFTSMANSHIP NARRATIVE SECTION */}
      <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto border-t border-white/5 relative overflow-hidden" id="craftsmanship-section">
        {/* Soft layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#c5a059]">
              <Award className="h-4 w-4" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold">Generational Legacy</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100 font-normal tracking-tight leading-tight">
              Crafting Generational Masterpieces, Since 1974
            </h2>
            <div className="h-px w-24 bg-[#c5a059]" />
            
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Every curve, frame, and mounting created in the Palladium is hand-conceived under strict lighting by our master goldsmiths. Harnessing centuries-old antique polishing methods passed down through families, our pieces bear absolute purity certified by rigorous global hallmarks.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Whether searching for majestic traditional Polki bride sets for South Indian matrimonial rituals or sleek, geometric platinum bands, the experience is backed by our private ivory salons.
            </p>
          </div>

          {/* Right Image rendering */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/5 shadow-2xl bg-[#121110]/30 group">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800"
                alt="Intricate jewelry craftsmanship detailing"
                className="w-full h-full object-cover saturate-75 brightness-75 transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
              
              <div className="absolute bottom-6 left-6 text-left">
                <span className="text-[9px] font-mono text-[#c5a059] uppercase tracking-widest block font-bold">Atelier Close-Up</span>
                <span className="text-sm font-sans font-semibold text-white">Prism Polished Solitaires</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURING COLLECTIONS SECTION */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5 bg-[#0a0a0a]" id="collections-grid-section">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#c5a059] font-bold block mb-2">Jewelry Collection Exhibits</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">The Specular Treasures</h2>
          <p className="text-sm text-neutral-400 font-light mt-2 max-w-md mx-auto">
            Gaze upon our premier core collections, curated exclusively to match traditional rituals, gala events, and contemporary minimalism.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="jewelry-cards">
          {PALLADIUM_COLLECTIONS.map((coll) => {
            const isLiked = !!likes[coll.id];
            return (
              <motion.div
                key={coll.id}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedColl(coll)}
                className="rounded-3xl bg-[#121110]/30 border border-white/5 hover:border-[#c5a059]/30 overflow-hidden cursor-pointer flex flex-col justify-between h-[480px] p-4 relative group"
              >
                {/* Image panel */}
                <div className="relative rounded-2xl overflow-hidden h-[60%] bg-stone-900">
                  <img
                    src={coll.image}
                    alt={coll.title}
                    className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glass corner tags */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-black/80 text-[#c5a059] backdrop-blur border border-[#c5a059]/20 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase">
                      {coll.tag}
                    </span>
                  </div>

                  {/* Like button */}
                  <button
                    onClick={(e) => toggleLike(coll.id, e)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 flex items-center justify-center transition-colors pointer-events-auto cursor-pointer text-stone-300 hover:text-red-500"
                  >
                    <Heart className={`h-4.5 w-4.5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>
                </div>

                {/* Text Panel */}
                <div className="p-4 flex-grow flex flex-col justify-between" id={`jewel-details-${coll.id}`}>
                  <div>
                    <h3 className="text-xl font-serif text-stone-100 font-semibold group-hover:text-[#c5a059] transition-colors duration-300">
                      {coll.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {coll.description}
                    </p>
                  </div>

                  {/* Materials list */}
                  <div className="border-t border-white/5 pt-4 mt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {coll.materials.map((m, idx) => (
                        <span key={idx} className="bg-[#0a0a0a] text-neutral-400 border border-white/5 px-2 py-0.5 rounded text-[10px] font-mono">
                          ✦ {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* POPUP: COLLECTION LIGHTBOX SPEC DETAILS */}
      <AnimatePresence>
        {selectedColl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0af2] backdrop-blur-md flex items-center justify-center p-4"
            id="coll-spec-modal"
          >
            {/* Elegant luxury glass modal container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#0a0a0a]/95 border border-[#c5a059]/20 rounded-3xl w-full max-w-xl p-6 sm:p-8 shadow-[0_30px_70px_rgba(197,160,89,0.06)] relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedColl(null)}
                className="absolute top-6 right-6 h-9 w-9 rounded-full bg-black/60 border border-white/5 text-neutral-450 hover:text-[#c5a059] hover:border-[#c5a059]/20 flex items-center justify-center transition-colors pointer-events-auto cursor-pointer"
                id="close-coll-spec-modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="border-b border-white/5 pb-5 mb-5">
                <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-widest flex items-center gap-1.5 mb-1 text-bold font-semibold">
                  <Sparkles className="h-3 w-3 text-[#c5a059]" />
                  Bespoke Jewelry Salon Inquiry
                </span>
                <h3 className="text-2xl font-serif text-white">{selectedColl.title}</h3>
              </div>

              {/* Specification layout */}
              <div className="space-y-4 text-sm font-sans mb-6 text-neutral-300">
                <div className="rounded-xl overflow-hidden aspect-video bg-[#121110] border border-white/5">
                  <img
                    src={selectedColl.image}
                    alt={selectedColl.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xs text-neutral-450 leading-relaxed font-light mt-2">
                  {selectedColl.description} Our private customer relation officers are available to arrange private viewings of these unique pieces in Triplicane.
                </p>

                {/* Spec details table */}
                <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-mono border-t border-white/5 pt-4 bg-[#121110]/50 p-2 rounded-xl">
                  <div>
                    <span className="text-neutral-500 uppercase">Aura Standard:</span>
                    <p className="text-[#c5a059] font-medium">916 KDM Hallmark / Platinum 950</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase">Certification:</span>
                    <p className="text-stone-300 font-medium">GIA / IGI Dual Certified</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-neutral-500 uppercase">Core Alloys Used:</span>
                    <div className="flex gap-1.5 flex-wrap mt-1">
                      {selectedColl.materials.map((m, idx) => (
                        <span key={idx} className="bg-[#0a0a0a] text-[#c5a059] border border-white/5 rounded px-2 py-0.5 text-[9px] uppercase">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Action Button */}
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setSelectedColl(null)}
                  className="flex-1 rounded-xl border border-white/5 hover:border-[#c5a059]/30 text-xs font-mono tracking-widest uppercase py-3.5 bg-[#0a0a0a]/40 text-[#c5a059] hover:text-white transition-all cursor-pointer"
                >
                  Back to Salon
                </button>
                <a
                  href="tel:+914428540000"
                  className="flex-1 rounded-xl bg-[#c5a059] text-black text-center text-xs font-mono tracking-widest uppercase py-3.5 font-semibold hover:bg-[#d6b26a] transition-all shadow-lg hover:shadow-[#c5a059]/20"
                >
                  Request Private Viewing
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
