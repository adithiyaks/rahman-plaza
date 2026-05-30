/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Clock, Compass } from 'lucide-react';

export default function BrandIntro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } 
    },
  };

  return (
    <section 
      className="relative bg-[#0a0a0a] py-24 sm:py-36 px-6 sm:px-12 w-full overflow-hidden border-t border-white/5"
      id="brand-intro-section"
    >
      {/* Background Ambience highlights */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#064e3b]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* UPPER LABEL */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-[1px] w-12 bg-[#c5a059]/20" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#c5a059] font-medium">
            The Historical Legacy
          </span>
          <div className="h-[1px] w-12 bg-[#c5a059]/20" />
        </div>

        {/* LAYOUT GRID: Left large text; Right detailed description */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          {/* LEFT SIDE: GIGANTIC DISPLAY HEADING */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#f5f5f4] leading-[1.08]"
            >
              A Fifty-Year <span className="font-serif italic text-[#c5a059]">Chronicle</span> of Retail Majesty & Craft.
            </motion.h3>
            
            <motion.div variants={itemVariants} className="h-[1.5px] w-24 bg-[#c5a059]/30 rounded-full" />
            
            {/* Architectural badge list */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex gap-3 items-start p-4 rounded-2xl bg-[#0d1211]/30 border border-white/5">
                <Shield className="h-5 w-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest font-semibold text-white">Est. 1974 Legacy</h4>
                  <p className="text-[11px] text-neutral-400 mt-1">Five decades of trust, catering to generations of local families.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-4 rounded-2xl bg-[#0d1211]/30 border border-white/5">
                <Compass className="h-5 w-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest font-semibold text-white">Triplicane Heart</h4>
                  <p className="text-[11px] text-neutral-400 mt-1">A landmark nestled deep within the historical shopping soul of Chennai.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: EDITORIAL SUPPORTING TEXT */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-neutral-300">
            <motion.div variants={itemVariants} className="space-y-6 text-sm sm:text-base leading-relaxed font-sans text-neutral-400">
              <p className="text-white font-medium text-lg leading-relaxed">
                Nestled in the bustling heart of historical Triplicane, Rahman Plaza stands as Chennai's ultimate five-floor shopping monument.
              </p>
              <p>
                Since 1974, our flagships have continuously redefined what it means to procure travelware, fine wedding silks, bespoke menswear tailoring, and luxury accessories. What began as a dedicated local store has blossomed into a legendary shopping trifecta.
              </p>
              <p>
                Today, our family coordinates three premium spaces—the massive Rahman Plaza, the exquisite Rahman Palladium, and the sleek streetwear fashion sanctuary Rahman Khalifa. Each destination is curated with meticulous architectural detail to deliver a sensory, stress-free retail experience.
              </p>
            </motion.div>

            {/* STAGGERED METRIC PANELS */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8"
              id="brand-metrics"
            >
              <div>
                <span className="block text-3xl font-light text-white font-serif">5+</span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500">Curated Floors</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-[#c5a059] font-serif">1974</span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500">Established</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-white font-serif">50Y+</span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500">Grand Legacy</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
