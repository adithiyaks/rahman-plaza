/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'motion/react';
import { ChevronRight, ShieldCheck, Sparkles, Footprints, Award, Landmark } from 'lucide-react';
import BlurText from './BlurText';
import { BRANCHES } from '../data';
import { BranchId } from '../types';

interface BuildingShowcaseProps {
  onSelectBranch: (id: BranchId) => void;
  theme: 'light' | 'dark';
}

export default function BuildingShowcase({ onSelectBranch, theme }: BuildingShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  // Manual bulletproof scroll progress motion value to bypass Lenis-useScroll target bugs
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      const start = 0; // top of element hits top of viewport (sticky starts)
      const end = elementHeight - viewportHeight; // bottom of element hits bottom of viewport (sticky ends)
      
      const currentScroll = -rect.top;
      
      let currentProgress = 0;
      if (currentScroll <= start) {
        currentProgress = 0;
      } else if (currentScroll >= end) {
        currentProgress = 1;
      } else {
        currentProgress = (currentScroll - start) / (end - start);
      }
      
      scrollYProgress.set(currentProgress);
    };

    // Attach listener to window scroll events (Lenis scrolls the window natively)
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger layout sync on resize or orientation change
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial run
    handleScroll();

    // Small delay to ensure Lenis has fully initialized and dimensions are settled
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, [scrollYProgress]);

  // 1. Text Overlay animations (fades and shrinks immediately as user scrolls)
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0], { clamp: true });
  const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.92], { clamp: true });

  // 2. Door animations (slowed split opening: completes at 0.75 progress)
  const leftX = useTransform(scrollYProgress, [0.05, 0.75], ['0%', '-105%'], { clamp: true });
  const rightX = useTransform(scrollYProgress, [0.05, 0.75], ['0%', '105%'], { clamp: true });

  // Blur, scale and opacity values of the building image doors
  const blurValue = useTransform(scrollYProgress, [0, 0.75], [0, 20], { clamp: true });
  const filter = useTransform(blurValue, (bv) => `blur(${bv}px)`);
  const doorScale = useTransform(scrollYProgress, [0, 0.75], [1, 1.08], { clamp: true });
  const doorOpacity = useTransform(scrollYProgress, [0.45, 0.78], [1, 0], { clamp: true });

  // 3. Flagship Content Behind animations (shrinked/moved down in before split phase, expands along scroll)
  const contentOpacity = useTransform(scrollYProgress, [0.05, 0.55], [0.3, 1], { clamp: true });
  const contentScale = useTransform(scrollYProgress, [0.05, 0.75], [0.82, 1], { clamp: true });
  const contentY = useTransform(scrollYProgress, [0.05, 0.75], [30, 0], { clamp: true });

  // Helper to retrieve branch specific icons
  const getBranchIcon = (id: BranchId) => {
    switch (id) {
      case 'plaza':
        return <Landmark className="h-4 w-4 text-emerald-400" />;
      case 'palladium':
        return <Award className="h-4 w-4 text-amber-400" />;
      case 'khalifa':
        return <Footprints className="h-4 w-4 text-white" />;
    }
  };

  // Helper to retrieve color style tokens
  const getCardStyles = (id: BranchId, isHovered: boolean) => {
    const isLight = theme === 'light';
    switch (id) {
      case 'plaza':
        return {
          bg: isLight ? 'bg-white/95 backdrop-blur-md' : 'bg-[#0d1211]/90',
          fade: isLight ? 'from-white' : 'from-[#0d1211]',
          border: isLight ? 'border-neutral-200 hover:border-[#0f5132]/35' : 'border-white/5 hover:border-[#064e3b]/30',
          shd: isLight 
            ? (isHovered ? '0 20px 40px rgba(6, 78, 59, 0.12)' : 'none') 
            : (isHovered ? '0 20px 40px rgba(6, 78, 59, 0.08)' : 'none'),
          overlay: 'bg-[#064e3b]/20',
          badge: 'Multi-Floor Retail',
        };
      case 'palladium':
        return {
          bg: isLight ? 'bg-[#fbf9f4]/95 backdrop-blur-md' : 'bg-[#0f0f0f]/90',
          fade: isLight ? 'from-[#fbf9f4]' : 'from-[#0f0f0f]',
          border: isLight ? 'border-gold-accent/40 hover:border-gold-accent/85' : 'border-gold-accent/20 hover:border-gold-accent/40',
          shd: isLight 
            ? (isHovered ? '0 20px 40px rgba(163, 122, 59, 0.12)' : 'none') 
            : (isHovered ? '0 0 40px rgba(197, 160, 89, 0.06)' : 'none'),
          overlay: 'bg-gradient-to-br from-gold-accent/10 to-transparent',
          badge: 'Jewelry & Prestige',
        };
      case 'khalifa':
        return {
          bg: isLight ? 'bg-neutral-50/95 backdrop-blur-md' : 'bg-[#1a120d]/90',
          fade: isLight ? 'from-neutral-50' : 'from-[#1a120d]',
          border: isLight ? 'border-neutral-200 hover:border-neutral-400' : 'border-white/5 hover:border-white/20',
          shd: isLight 
            ? (isHovered ? '0 20px 40px rgba(0, 0, 0, 0.08)' : 'none') 
            : (isHovered ? '0 20px 40px rgba(255, 255, 255, 0.04)' : 'none'),
          overlay: 'bg-[#1a1a1a]/40',
          badge: 'Modern Footwear',
        };
    }
  };

  const doorImgClass = theme === 'light' 
    ? "w-full h-full object-cover brightness-[0.65] saturate-[0.9]"
    : "w-full h-full object-cover brightness-[0.35] saturate-[0.8]";

  const radialSpotlight = `radial-gradient(circle at 50% 50%, transparent 20%, ${theme === 'light' ? '#faf9f6' : '#0a0a0a'} 90%)`;

  return (
    <div ref={containerRef} className="relative h-[180vh] w-full bg-bg-primary transition-colors duration-500" id="building-showcase-container">
      {/* Sticky full-screen content viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg-primary transition-colors duration-500">
        
        {/* Positioning Context Wrapper (Ensures absolute children are positioned correctly in all browsers) */}
        <div className="relative w-full h-full">
          
          {/* ========================================================================= */}
          {/* REVEAL CONTENT: THREE SHOPS SECTION & COMPACT FOOTER (Behind split doors) */}
          {/* ========================================================================= */}
          <motion.div
            style={{ opacity: contentOpacity, scale: contentScale, y: contentY }}
            className="absolute inset-0 flex flex-col justify-between items-center z-10 px-6 md:px-12 pointer-events-auto select-none pt-12 pb-4 md:pt-16 md:pb-6"
          >
            {/* Background Ambient Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-glow-emerald/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Inner centered content wrapper */}
            <div className="w-full max-w-6xl mx-auto flex flex-col justify-center pointer-events-auto flex-grow -mt-10 sm:-mt-16">
              {/* Section Header */}
              <div className="text-center max-w-2xl mx-auto mb-3 md:mb-4 lg:mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-card-bg border border-gold-accent/20 rounded-full mb-2 md:mb-2.5">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-gold-accent animate-pulse" />
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gold-accent">
                    Curated Destinations
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-text-primary mb-2">
                  Explore the <span className="font-serif italic text-text-strong">Three</span> Flagships
                </h2>
                <p className="text-xs sm:text-sm font-sans text-text-muted leading-relaxed max-w-xl mx-auto font-light hidden sm:block">
                  From the historic five-story retail destination to our exquisite jewelry salon and futuristic streetwear space—experience Rahman's meticulous design standards across Triplicane, Chennai.
                </p>
              </div>

              {/* Branch Cards Carousel Grid */}
              <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 md:pb-0 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {BRANCHES.map((branch) => {
                  const isHovered = hoveredBranch === branch.id;
                  const icon = getBranchIcon(branch.id);
                  const cardStyle = getCardStyles(branch.id, isHovered);

                  return (
                    <motion.div
                      key={branch.id}
                      onMouseEnter={() => setHoveredBranch(branch.id)}
                      onMouseLeave={() => setHoveredBranch(null)}
                      onClick={() => onSelectBranch(branch.id)}
                      style={{
                        boxShadow: cardStyle.shd,
                      }}
                      className={`relative rounded-3xl ${cardStyle.bg} border ${cardStyle.border} overflow-hidden cursor-pointer flex flex-col justify-between h-[350px] sm:h-[380px] md:h-[410px] lg:h-[450px] min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 md:shrink transition-all duration-500 backdrop-blur-md group pointer-events-auto`}
                      id={`branch-card-${branch.id}`}
                    >
                      {/* Advanced Reflection Highlight */}
                      <span 
                        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/3 to-white/0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-10" 
                      />

                      {/* Card Image Area */}
                      <div 
                        className="relative w-full h-[40%] overflow-hidden bg-black shrink-0"
                      >
                        <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${cardStyle.fade} to-transparent z-10`} />
                        
                        <div className={`absolute inset-0 z-0 transition-opacity duration-500 opacity-30 ${cardStyle.overlay}`} />

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
                          <span className="bg-card-bg-solid/90 text-text-strong backdrop-blur-md px-3 py-1 rounded-full border border-border-primary text-[9px] font-mono uppercase tracking-widest flex items-center gap-1.5 font-light">
                            {icon}
                            {branch.id === 'plaza' ? 'Five Story' : branch.id === 'palladium' ? 'High Salon' : 'Boutique'}
                          </span>
                        </div>
                      </div>

                      {/* Card Content Area */}
                      <div className="p-4 sm:p-5 md:px-6 md:pb-5 pt-3 md:pt-4 flex-grow flex flex-col justify-between relative z-10 select-text">
                        <div>
                          <div className="flex justify-between items-center mb-2 md:mb-3">
                            <span className="text-[9px] md:text-[10px] font-mono text-text-muted uppercase tracking-widest font-semibold">
                              {branch.id === 'plaza' ? '01 // Landmark' : branch.id === 'palladium' ? '02 // Gemstone' : '03 // Streetwear'}
                            </span>
                            <img 
                              src={branch.id === 'plaza' ? '/logo.jpg' : branch.id === 'palladium' ? '/logo2.png' : '/logo3.png'} 
                              alt={`${branch.name} Logo`} 
                              className="h-7 w-7 rounded-full object-cover border border-white/10"
                            />
                          </div>

                          <h3 className="text-xl sm:text-2xl font-light tracking-wide text-text-primary group-hover:text-gold-accent transition-colors duration-300 font-serif">
                            {branch.name}
                          </h3>
                          <p className="text-[8px] md:text-[9px] font-mono text-gold-accent uppercase tracking-widest mt-0.5 leading-snug">
                            {cardStyle.badge}
                          </p>
                          
                          <div className="h-[1px] w-10 md:w-12 bg-gold-accent mt-2 mb-2 md:mt-3 md:mb-3" />

                          <p className="text-[11px] sm:text-xs font-sans text-text-muted line-clamp-2 md:line-clamp-3 leading-relaxed font-light mt-1">
                            {branch.description}
                          </p>
                        </div>

                        {/* Interactive Bottom Row */}
                        <div className="flex items-center justify-between border-t border-border-primary pt-3 mt-2 md:pt-4 md:mt-3">
                          <span className="text-[9px] md:text-[10px] font-mono text-text-muted uppercase tracking-widest group-hover:text-text-strong transition-colors">
                            Enter Microsite
                          </span>
                          <motion.div
                            animate={{ x: isHovered ? 4 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`h-8 w-8 md:h-9 md:w-9 rounded-full border ${
                              branch.id === 'plaza' ? 'border-emerald-500/20 bg-emerald-950/25 text-emerald-400' : branch.id === 'palladium' ? 'border-gold-accent/20 bg-gold-accent/5 text-gold-accent' : 'border-border-strong bg-card-bg-solid/5 text-text-strong'
                            } flex items-center justify-center transition-colors duration-300 group-hover:scale-105`}
                          >
                            <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Hover Accent Underline */}
                      <div 
                        className="absolute bottom-0 inset-x-0 h-[2px] transition-all duration-500"
                        style={{
                          backgroundColor: branch.id === 'plaza' ? '#10b981' : branch.id === 'palladium' ? 'var(--gold-accent)' : 'var(--text-strong)',
                          width: isHovered ? '100%' : '0%',
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* DOORS: BACKGROUND IMAGES WITH CLIP PATHS (Splits on scroll) */}
          {/* ========================================================================= */}
          
          {/* Left Split Door */}
          <motion.div
            style={{
              x: leftX,
              opacity: doorOpacity,
              filter,
              scale: doorScale,
              clipPath: 'inset(0 50% 0 0)'
            }}
            className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-hidden"
          >
            <img 
              src="/building.png" 
              alt="Rahman Plaza Flagship Facade Left" 
              className={doorImgClass}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary opacity-90 transition-colors duration-500" />
            <div className="absolute inset-0 opacity-80 transition-colors duration-500" style={{ backgroundImage: radialSpotlight }} />
          </motion.div>

          {/* Right Split Door */}
          <motion.div
            style={{
              x: rightX,
              opacity: doorOpacity,
              filter,
              scale: doorScale,
              clipPath: 'inset(0 0 0 50%)'
            }}
            className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-hidden"
          >
            <img 
              src="/building.png" 
              alt="Rahman Plaza Flagship Facade Right" 
              className={doorImgClass}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary opacity-90 transition-colors duration-500" />
            <div className="absolute inset-0 opacity-80 transition-colors duration-500" style={{ backgroundImage: radialSpotlight }} />
          </motion.div>

          {/* ========================================================================= */}
          {/* FOREGROUND: BLUR TEXT OVERLAY (Fades out early on scroll) */}
          {/* ========================================================================= */}
          <motion.div 
            style={{ opacity: textOpacity, scale: textScale }}
            className="absolute inset-0 flex flex-col justify-center items-center z-30 pointer-events-none px-6"
          >
            <div className="text-center max-w-4xl flex flex-col items-center px-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gold-accent mb-4">
                Architectural Landmark
              </span>
              <BlurText
                text="REDEFINING CHENNAI'S RETAIL HORIZON"
                delay={100}
                animateBy="words"
                direction="bottom"
                className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[0.05em] text-text-primary uppercase font-syne text-center justify-center leading-[1.1] mb-6"
              />
              <p className="text-sm sm:text-base font-serif italic text-text-primary/95 max-w-xl mx-auto leading-relaxed mt-2 glow-text-gold animate-pulse">
                “A visual testament of luxury and scale, standing proudly in Triplicane as a monument of five decades of retail craft.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
