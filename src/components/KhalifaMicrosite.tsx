/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Footprints, ArrowLeftRight, Columns, Heart, ShoppingBag, X, Zap, Cpu, Sparkles } from 'lucide-react';
import { KHALIFA_FOOTWEAR } from '../data';
import { FootwearItem } from '../types';

interface KhalifaMicrositeProps {
  onBackToOverview: () => void;
}

export default function KhalifaMicrosite({ onBackToOverview }: KhalifaMicrositeProps) {
  const [selectedFootwear, setSelectedFootwear] = useState<FootwearItem | null>(null);
  const [bagCount, setBagCount] = useState<number>(0);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOrderMock = (item: FootwearItem) => {
    setBagCount(prev => prev + 1);
    setSelectedFootwear(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f4] selection:bg-[#c5a059] selection:text-black font-sans">
      
      {/* 1. CINEMATIC STREETWEAR HERO */}
      <section className="relative h-[80vh] w-full flex items-center justify-start overflow-hidden px-6 sm:px-12 md:px-20">
        {/* Background Image Parallax with Neon white overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/khalifa.png"
            alt="Futuristic high-performance industrial sneakers"
            className="w-full h-full object-cover scale-102 brightness-[0.16] saturate-[0.6] contrast-125"
            referrerPolicy="no-referrer"
          />
          {/* Subtle linear border line */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#c5a059] via-[#c5a059]/40 to-transparent shadow-[0_0_15px_rgba(197,160,89,0.2)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/85 to-[#0a0a0a]" />
          
          {/* Subtle tech patterns overlay */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%]" />
        </div>

        {/* Brand Banner Content */}
        <div className="max-w-4xl relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Upper Indicator */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.4em] text-[#c5a059] border border-[#c5a059]/30 bg-[#121110]/50 px-4 py-1.5 rounded-full">
                Street Culture Sanctuary
              </span>
              {bagCount > 0 && (
                <div className="flex items-center gap-1.5 bg-[#c5a059] text-black px-3 py-1 rounded-sm text-[10px] font-mono tracking-widest font-extrabold uppercase animate-bounce">
                  <ShoppingBag className="h-3 w-3" /> Bag ({bagCount})
                </div>
              )}
            </div>

            <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white font-sans-mono">
              RAHMAN <span className="block italic font-light text-[0.8em] font-serif tracking-normal text-[#c5a059]">KHALIFA</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-xl leading-relaxed mt-6 font-light">
              The high-tech vanguard for avant-garde streetwear. Discover an absolute archive of speed-knit runners, raw calfskin high-tops, and ergonomic leisure slides structured in modern monochromatic accents.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={onBackToOverview}
                className="text-xs font-mono text-[#c5a059] hover:text-[#c5a059] uppercase tracking-widest cursor-pointer flex items-center gap-2 border border-white/5 hover:border-[#c5a059]/30 px-6 py-3 bg-[#0a0a0a]/40 hover:bg-[#0a0a0a]/80 transition-all rounded-sm"
                id="khalifa-back-btn"
              >
                <ArrowLeftRight className="h-3.5 w-3.5" /> Core Overview
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CURATED INDUSTRIAL CATEGORY CARDS */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5" id="footwear-section">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#c5a059] mb-2">
              <Footprints className="h-4 w-4" />
              <span className="text-[10px] font-mono uppercase tracking-widest">Selected Footwear Index</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-white font-sans-mono">Active Street Archival</h2>
          </div>
          <p className="text-xs text-neutral-500 font-mono tracking-widest uppercase max-w-sm leading-relaxed">
            Every release is designed with premium lightweight sole metrics, dynamic mesh elements, and responsive structure.
          </p>
        </div>

        {/* 4 Cards Grid Layout with Bold Typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KHALIFA_FOOTWEAR.map((item) => {
            const isFav = !!favorites[item.id];
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedFootwear(item)}
                className="bg-[#121110]/30 border border-white/5 hover:border-[#c5a059]/30 rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between h-[450px] p-3 relative group transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-lg bg-[#0a0a0a] h-56 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    referrerPolicy="no-referrer"
                    id={`khalifa-footwear-img-${item.id}`}
                  />

                  {/* Badges overlay */}
                  {item.badge && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="bg-[#c5a059] text-black font-mono font-medium text-[8px] uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Favorite Icon */}
                  <button
                    onClick={(e) => toggleFavorite(item.id, e)}
                    className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 border border-white/5 flex items-center justify-center transition-colors pointer-events-auto cursor-pointer text-[#c5a059] hover:text-white"
                  >
                    <Heart className={`h-4 w-4 ${isFav ? 'fill-[#c5a059] text-[#c5a059]' : ''}`} />
                  </button>
                </div>

                {/* Info and price details */}
                <div className="p-3 flex-grow flex flex-col justify-between" id={`khalifa-details-${item.id}`}>
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#c5a059] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-450 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-3">
                    <span className="text-xs font-mono font-semibold text-[#c5a059] tracking-widest">
                      {item.price}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#c5a059] transition-colors flex items-center gap-1.5 font-medium">
                      Spec details +
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. COUTURE TECH SECTION */}
      <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto border-t border-white/5" id="couture-tech-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[8px] font-mono text-[#c5a059] uppercase tracking-widest block mb-1">Technology & Anatomy</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-sans-mono mb-4">Nitrogen Infused Cushioning</h2>
            <p className="text-sm text-neutral-450 leading-relaxed font-light mb-6">
              Our footwear ranges utilize advanced bio-mechanical support soles. By micro-injecting pressurized nitrogen pockets inside thick vulcanized outsoles, we enable infinite structural compression memory, returning continuous kinetic energy to your stride.
            </p>

            <div className="space-y-3.5 shadow-sm" id="tech-points">
              <div className="flex gap-3 items-start">
                <Zap className="h-4.5 w-4.5 text-[#c5a059] shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <h4 className="text-stone-300 text-xs font-mono uppercase tracking-widest font-bold">Aerated Knit Shells</h4>
                  <p className="text-[11px] text-neutral-500 leading-normal font-light">3D-knitted thread-work optimizing sweat-wicking and foot-expansion during wear.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Cpu className="h-4.5 w-4.5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-stone-300 text-xs font-mono uppercase tracking-widest font-bold font-semibold">Torsion Lock Brackets</h4>
                  <p className="text-[11px] text-neutral-500 leading-normal font-light">Reinforced lateral carbon brackets embedded inside mid-foot locks to reduce fatigue.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#0a0a0a] border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800"
              alt="Close-up sole analysis"
              className="w-full h-full object-cover brightness-50 contrast-125 saturate-50"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* DETAILED FOOTWEAR LIGHTBOX SPEC */}
      <AnimatePresence>
        {selectedFootwear && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0af2] backdrop-blur-md flex items-center justify-center p-4"
            id="footwear-spec-modal"
          >
            {/* Dark industrial metal themed popup container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#0a0a0a]/95 border border-[#c5a059]/25 rounded-2xl w-full max-w-xl p-6 sm:p-8 shadow-[0_30px_70px_rgba(197,160,89,0.06)] relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFootwear(null)}
                className="absolute top-6 right-6 h-9 w-9 rounded-full bg-[#0a0a0a] border border-white/5 text-neutral-450 hover:text-[#c5a059] flex items-center justify-center transition-colors pointer-events-auto cursor-pointer"
                id="close-footwear-spec-modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="border-b border-white/5 pb-5 mb-5">
                <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-widest flex items-center gap-1.5 mb-1 text-bold font-semibold">
                  <Sparkles className="h-3.5 w-3.5 text-[#c5a059] animate-pulse" />
                  Product Registry Specifications
                </span>
                <h3 className="text-2xl font-serif text-white">{selectedFootwear.name}</h3>
              </div>

              {/* Specs and content */}
              <div className="space-y-4 text-sm font-sans mb-6 text-neutral-300">
                <div className="rounded-xl overflow-hidden aspect-video bg-[#121110] border border-white/5">
                  <img
                    src={selectedFootwear.image}
                    alt={selectedFootwear.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xs text-neutral-450 leading-relaxed font-light mt-2">
                  {selectedFootwear.description} Engineered using lightweight synthetics and shockproof outsoles to create the absolute balance between performance utility and minimalist street aesthetics.
                </p>

                {/* Specs elements */}
                <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-mono border-t border-white/5 pt-4 bg-[#121110]/50 p-3 rounded-lg">
                  <div>
                    <span className="text-neutral-500 uppercase">Aesthetic Style:</span>
                    <p className="text-[#c5a059] font-medium">{selectedFootwear.category}</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase">Valuation:</span>
                    <p className="text-[#c5a059] font-medium">{selectedFootwear.price}</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase">Fit & Comfort:</span>
                    <p className="text-stone-400 font-medium">Regular Lock True to Size</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase">Release ID:</span>
                    <p className="text-stone-400 font-medium">R-KHA / {selectedFootwear.id.toUpperCase()}-2026</p>
                  </div>
                </div>
              </div>

              {/* Action columns */}
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setSelectedFootwear(null)}
                  className="flex-1 rounded-sm border border-white/5 hover:border-[#c5a059]/30 text-xs font-mono tracking-widest uppercase py-3.5 bg-[#0a0a0a]/40 text-[#c5a059] hover:text-white transition-all cursor-pointer"
                >
                  Return
                </button>
                <button
                  onClick={() => handleOrderMock(selectedFootwear)}
                  className="flex-1 rounded-sm bg-[#c5a059] text-black text-xs font-mono tracking-widest uppercase py-3.5 font-bold hover:bg-[#d6b26a] transition-colors shadow-lg pointer-events-auto cursor-pointer"
                  id={`order-btn-${selectedFootwear.id}`}
                >
                  Confirm Purchase
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
