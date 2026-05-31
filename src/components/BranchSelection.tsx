/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ShieldCheck, Sparkles, Footprints, Award, Landmark } from 'lucide-react';
import { BRANCHES } from '../data';
import { BranchId } from '../types';

interface BranchSelectionProps {
  onSelectBranch: (id: BranchId) => void;
}

export default function BranchSelection({ onSelectBranch }: BranchSelectionProps) {
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  // Helper to retrieve icons
  const getBranchIcon = (id: BranchId) => {
    switch (id) {
      case 'plaza':
        return <Landmark className="h-6 w-6 text-emerald-400" />;
      case 'palladium':
        return <Award className="h-6 w-6 text-amber-400" />;
      case 'khalifa':
        return <Footprints className="h-6 w-6 text-white" />;
    }
  };

  // Helper to retrieve color glow values
  const getGlowColor = (id: BranchId) => {
    switch (id) {
      case 'plaza':
        return 'rgba(16,185,129,0.15)'; // Emerald
      case 'palladium':
        return 'rgba(217,119,6,0.15)'; // Amber gold
      case 'khalifa':
        return 'rgba(255,255,255,0.1)'; // Pure white
    }
  };

  const getThemeClass = (id: BranchId) => {
    switch (id) {
      case 'plaza':
        return 'hover:border-emerald-500/30 group-hover:text-emerald-400';
      case 'palladium':
        return 'hover:border-amber-500/30 group-hover:text-amber-400';
      case 'khalifa':
        return 'hover:border-white/30 group-hover:text-white';
    }
  };

  return (
    <section 
      className="relative bg-[#0a0a0a] py-24 sm:py-32 px-6 sm:px-12 w-full overflow-hidden border-t border-white/5"
      id="branches-section"
    >
      {/* BACKGROUND GRAPHIC */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[#064e3b]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#0a0a0a]/80 border border-[#c5a059]/20 rounded-full mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#c5a059] animate-pulse" />
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#c5a059]">
              Curated Destinations
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-[#f5f5f4] mb-6">
            Explore the <span className="font-serif italic text-white">Three</span> Flagships
          </h2>
          <p className="text-sm font-sans text-neutral-400 leading-relaxed max-w-xl mx-auto font-light">
            From the historic five-story retail destination to our exquisite jewelry salon and futuristic streetwear space—experience Rahman's meticulous design standards across Triplicane, Chennai.
          </p>
        </div>

        {/* BRANCH CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRANCHES.map((branch) => {
            const isHovered = hoveredBranch === branch.id;
            const icon = getBranchIcon(branch.id);
            
            // Custom backgrounds & borders styled after the exact Elegant Dark spec
            const getCardStyles = () => {
              switch (branch.id) {
                case 'plaza':
                  return {
                    bg: 'bg-[#0d1211]/90',
                    border: 'border-white/5 hover:border-[#064e3b]/30',
                    shd: isHovered ? '0 20px 40px rgba(6, 78, 59, 0.08)' : 'none',
                    overlay: 'bg-[#064e3b]/20',
                    badge: 'Multi-Floor Retail',
                  };
                case 'palladium':
                  return {
                    bg: 'bg-[#0f0f0f]/90',
                    border: 'border-[#c5a059]/20 hover:border-[#c5a059]/40',
                    shd: isHovered ? '0 0 40px rgba(197, 160, 89, 0.06)' : 'none',
                    overlay: 'bg-gradient-to-br from-[#c5a059]/10 to-transparent',
                    badge: 'Jewelry & Prestige',
                  };
                case 'khalifa':
                  return {
                    bg: 'bg-[#1a120d]/90',
                    border: 'border-white/5 hover:border-white/20',
                    shd: isHovered ? '0 20px 40px rgba(255, 255, 255, 0.04)' : 'none',
                    overlay: 'bg-[#1a1a1a]/40',
                    badge: 'Modern Footwear',
                  };
              }
            };
            const cardStyle = getCardStyles();

            return (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredBranch(branch.id)}
                onMouseLeave={() => setHoveredBranch(null)}
                onClick={() => onSelectBranch(branch.id)}
                style={{
                  boxShadow: cardStyle.shd,
                }}
                className={`relative rounded-3xl ${cardStyle.bg} border ${cardStyle.border} overflow-hidden cursor-pointer flex flex-col justify-between h-[420px] sm:h-[480px] md:h-[520px] transition-all duration-500 backdrop-blur-md group pointer-events-auto`}
                id={`branch-card-${branch.id}`}
              >
                {/* ADVANCED REFLECTION HIGHLIGHT */}
                <span 
                  className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/3 to-white/0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-10" 
                />

                {/* IMAGES AND AMBIENT BLUR BACKDROP */}
                <div className="relative w-full h-[55%] overflow-hidden bg-black">
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                  
                  {/* Subtle color highlight in image area */}
                  <div className={`absolute inset-0 z-0 transition-opacity duration-500 opacity-30 ${cardStyle.overlay}`} />

                  {/* High Quality Unsplash Product / Retail Backgrounds */}
                  <motion.img
                    src={branch.image}
                    alt={branch.name}
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full h-full object-cover select-none filter saturate-50 contrast-110 brightness-75 group-hover:saturate-75 group-hover:brightness-90 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    id={`branch-img-${branch.id}`}
                  />

                  {/* Corner Accent Badge */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="bg-[#0a0a0a]/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 text-[9px] font-mono uppercase tracking-widest flex items-center gap-1.5 font-light">
                      {icon}
                      {branch.id === 'plaza' ? 'Five Story' : branch.id === 'palladium' ? 'High Salon' : 'Boutique'}
                    </span>
                  </div>
                </div>

                {/* TEXT CONTENT AREA */}
                <div className="p-6 sm:p-8 pt-2 flex-grow flex flex-col justify-between relative z-10">
                  <div>
                    {/* Tiny index indicators */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-semibold">
                        {branch.id === 'plaza' ? '01 // Landmark' : branch.id === 'palladium' ? '02 // Gemstone' : '03 // Streetwear'}
                      </span>
                      <ShieldCheck className={`h-3.5 w-3.5 ${
                        branch.id === 'plaza' ? 'text-emerald-500/80' : branch.id === 'palladium' ? 'text-[#c5a059]' : 'text-neutral-500'
                      }`} />
                    </div>

                    <h3 className="text-2xl font-light tracking-wide text-[#f5f5f4] group-hover:text-[#c5a059] transition-colors duration-300 font-serif">
                      {branch.name}
                    </h3>
                    <p className="text-[9px] font-mono text-[#c5a059] uppercase tracking-widest mt-1.5 leading-snug">
                      {cardStyle.badge}
                    </p>
                    
                    {/* Thin custom gold horizontal separator matching layout instructions */}
                    <div className="h-[1px] w-12 bg-[#c5a059] mt-3.5 mb-4" />

                    <p className="text-xs font-sans text-neutral-400 line-clamp-3 leading-relaxed font-light mt-1">
                      {branch.description}
                    </p>
                  </div>

                  {/* INTERACTIVE ROW */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-4">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors">
                      Enter Microsite
                    </span>
                    <motion.div
                      animate={{ x: isHovered ? 4 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`h-9 w-9 rounded-full border ${
                        branch.id === 'plaza' ? 'border-emerald-500/20 bg-emerald-950/25 text-emerald-400' : branch.id === 'palladium' ? 'border-[#c5a059]/20 bg-[#c5a059]/5 text-[#c5a059]' : 'border-white/10 bg-white/5 text-white'
                      } flex items-center justify-center transition-colors duration-300 group-hover:scale-105`}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Subtile ambient glow inside bottom cards */}
                <div 
                  className="absolute bottom-0 inset-x-0 h-[2px] transition-all duration-500"
                  style={{
                    backgroundColor: branch.id === 'plaza' ? '#10b981' : branch.id === 'palladium' ? '#c5a059' : '#ffffff',
                    width: isHovered ? '100%' : '0%',
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
