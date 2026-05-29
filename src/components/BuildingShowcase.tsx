/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import BlurText from './BlurText';

export default function BuildingShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Scroll mapping: from start (0) to end (0.85) of container scroll
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.85], [1, 1.06]);
  const blurValue = useTransform(scrollYProgress, [0, 0.85], [0, 25]);
  const filter = useTransform(blurValue, (bv) => `blur(${bv}px)`);

  return (
    <div ref={containerRef} className="relative h-[160vh] w-full bg-[#0a0a0a]" id="building-showcase-container">
      {/* Sticky full-screen content wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center px-6">
        
        {/* Full-screen Background Image with Scroll-linked blur/fade */}
        <motion.div 
          style={{ opacity, filter, scale }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <img 
            src="/building.png" 
            alt="Rahman Plaza Flagship Facade" 
            className="w-full h-full object-cover brightness-[0.35] saturate-[0.8]"
          />
          {/* Edge vignettes to blend into top/bottom sections */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#0a0a0a_90%)] opacity-80" />
        </motion.div>

        {/* Text Overlay using BlurText */}
        <div className="relative z-10 text-center max-w-4xl flex flex-col items-center select-none pointer-events-none">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#c5a059] mb-4">
            Architectural Landmark
          </span>
          <BlurText
            text="REDEFINING CHENNAI'S RETAIL HORIZON"
            delay={100}
            animateBy="words"
            direction="bottom"
            className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#f5f5f4] uppercase font-sans text-center justify-center leading-[1.1] mb-6"
          />
          <p className="text-sm sm:text-base font-serif italic text-neutral-300 max-w-xl mx-auto leading-relaxed mt-2 glow-text-gold">
            “A visual testament of luxury and scale, standing proudly in Triplicane as a monument of five decades of retail craft.”
          </p>
        </div>
      </div>
    </div>
  );
}
