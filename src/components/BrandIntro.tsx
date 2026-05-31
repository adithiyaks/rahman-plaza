/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Clock, Compass } from 'lucide-react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  start?: number;
}

function CountUp({ end, duration = 1500, suffix = '', start = 0 }: CountUpProps) {
  const [count, setCount] = useState(start);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, start, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

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
      className="relative bg-bg-primary py-24 sm:py-36 px-6 sm:px-12 w-full overflow-hidden border-t border-border-primary transition-colors duration-500"
      id="brand-intro-section"
    >
      {/* Background Ambience highlights */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-glow-emerald/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-glow-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* UPPER LABEL */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-[1px] w-12 bg-gold-accent/20" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-gold-accent font-medium">
            The Historical Legacy
          </span>
          <div className="h-[1px] w-12 bg-gold-accent/20" />
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
              className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-text-primary leading-[1.08]"
            >
              A Fifty-Year <span className="font-serif italic text-gold-accent">Chronicle</span> of Retail Majesty & Craft.
            </motion.h3>
            
            <motion.div variants={itemVariants} className="h-[1.5px] w-24 bg-gold-accent/30 rounded-full" />
            
            {/* Architectural badge list */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex gap-3 items-start p-4 rounded-2xl bg-metrics-bg border border-border-primary transition-colors duration-500">
                <Shield className="h-5 w-5 text-gold-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest font-semibold text-text-strong">Est. 1974 Legacy</h4>
                  <p className="text-[11px] text-text-muted mt-1">Five decades of trust, catering to generations of local families.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-4 rounded-2xl bg-metrics-bg border border-border-primary transition-colors duration-500">
                <Compass className="h-5 w-5 text-gold-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest font-semibold text-text-strong">Triplicane Heart</h4>
                  <p className="text-[11px] text-text-muted mt-1">A landmark nestled deep within the historical shopping soul of Chennai.</p>
                </div>
              </div>
            </motion.div>

            {/* Premium minimal brand statement to fill empty space */}
            <motion.div 
              variants={itemVariants} 
              className="mt-10 pt-8 border-t border-border-primary max-w-lg"
            >
              <p className="text-xs font-light text-text-muted leading-relaxed font-sans">
                For over half a century, our mission has been anchored on hospitality, master tailoring, and the highest standards of authentic curation for every patron.
              </p>
              <div className="flex gap-4 mt-4 text-[9px] font-mono uppercase tracking-widest text-gold-accent/50 font-medium">
                <span>✦ Authentic</span>
                <span>✦ Generational</span>
                <span>✦ Excellence</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: EDITORIAL SUPPORTING TEXT */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-text-primary/90">
            <motion.div variants={itemVariants} className="space-y-6 text-sm sm:text-base leading-relaxed font-sans text-text-muted">
              <p className="text-text-strong font-medium text-lg leading-relaxed">
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
              className="grid grid-cols-3 gap-4 border-t border-border-primary pt-8 transition-colors duration-500"
              id="brand-metrics"
            >
              <div>
                <span className="block text-3xl font-light text-text-strong font-serif">
                  <CountUp end={5} suffix="+" />
                </span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-text-muted">Curated Floors</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-gold-accent font-serif">
                  <CountUp end={1974} start={1930} />
                </span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-text-muted">Established</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-text-strong font-serif">
                  <CountUp end={50} suffix="Y+" />
                </span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-text-muted">Grand Legacy</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
