/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowDown, Landmark, Sparkles, ShieldCheck } from 'lucide-react';

import Silk from './Silk';

interface HeroProps {
  onExploreClick: () => void;
  onNavigateToBranch: (branchId: 'plaza' | 'palladium' | 'khalifa') => void;
}

export default function Hero({ onExploreClick, onNavigateToBranch }: HeroProps) {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out spring behavior
  const springConfig = { stiffness: 80, damping: 25, mass: 1 };
  const dX = useSpring(mouseX, springConfig);
  const dY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Window dimensions setup
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    // Generate ambient floating particles
    const initialParticles = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 15 + 10,
    }));
    setParticles(initialParticles);

    // Track mouse hover motion relative to screen center
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2); // Normalize from -1 to 1
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2); // Normalize from -1 to 1
      mouseX.set(x * 25); // Parallax offset range
      mouseY.set(y * 25);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section 
      className="relative h-screen w-full flex flex-col justify-between items-center text-[#f5f5f4] bg-[#0a0a0a] overflow-hidden"
      id="hero-section"
    >
      {/* 1. ATMOSPHERIC CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Silk
          speed={5}
          scale={1}
          color="#0E9464"
          noiseIntensity={1.5}
          rotation={0}
        />

        {/* Subtle vignette/atmospheric overlays to preserve header/footer text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85 z-0" />

        {/* Ambient floating spark particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.1, y: `${p.y + 10}%`, x: `${p.x}%` }}
            animate={{
              y: [`${p.y}%`, `${p.y - 15}%`],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: p.size,
              height: p.size,
            }}
            className="absolute rounded-full bg-[#c5a059]/40 pointer-events-none shadow-[0_0_8px_rgba(197,160,89,0.3)]"
          />
        ))}
      </div>

      {/* HEADER SPACER FOR FLOATING NAV */}
      <div className="h-28 w-full z-10" />

      {/* 2. CENTER PIECE: THE STRUCTURAL facade RECREATION & HERO LOGO CARD */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center w-full max-w-5xl px-4 text-center select-none"
      >
        {/* UPPER EMBELLISHMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/35 bg-[#0a0a0a]/40 backdrop-blur-md mb-6 shadow-[0_4px_24px_rgba(197,160,89,0.15)] cursor-pointer hover:border-[#c5a059]/60 transition-colors"
          onClick={() => onNavigateToBranch('plaza')}
        >
          <Sparkles className="h-3 w-3 text-[#c5a059]" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#c5a059] font-medium">
            A New Era of Retail Luxury • Est. 1974
          </span>
        </motion.div>

        {/* HIGHLY INTERACTIVE architectural FACADE ILLUSTRATION CARD */}
        <motion.div
          style={{ rotateX: dY, rotateY: dX, transformStyle: 'preserve-3d' }}
          className="w-full max-w-3xl bg-[#0a0a0a]/80 border border-[#c5a059]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_60px_rgba(197,160,89,0.25),0_40px_100px_rgba(0,0,0,0.8)] relative group overflow-hidden transition-all duration-500 hover:border-[#c5a059]/60 hover:shadow-[0_0_80px_rgba(197,160,89,0.4),0_40px_100px_rgba(0,0,0,0.9)] cursor-pointer mb-8 saturate-110 brightness-110"
          onClick={() => onNavigateToBranch('plaza')}
        >
          {/* Card Glass shine lighting effect relative to cursor */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

          {/* Central glow gradient effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(197,160,89,0.12)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(16,185,129,0.08)_0%,transparent_60%)] pointer-events-none" />

          {/* FACADE STRUCTURAL DESIGN (Mirroring the photograph) */}
          <div className="border border-[#c5a059]/35 rounded-2xl bg-[#0a0a0a]/90 p-5 sm:p-8 relative overflow-hidden shadow-[inset_0_0_30px_rgba(197,160,89,0.15)]" id="facade-mock-banner">
            {/* Emerald structural pillars backdrops */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#064e3b] via-[#053e2f] to-[#0a0a0a]" />
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#064e3b] via-[#053e2f] to-[#0a0a0a]" />

            {/* Facade Lattice Glow (Simulating the Left Criss-Cross Light Pattern) */}
            <div className="absolute left-1.5 top-0 bottom-0 w-5 hidden sm:flex flex-col justify-around items-center opacity-40 pointer-events-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="relative w-3 h-3 border border-emerald-500/45 rotate-45 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-amber-400" />
                </div>
              ))}
            </div>

            {/* BILLBOARD AREA */}
            <div className="text-center">
              <div className="flex justify-between items-center px-2 mb-4">
                <span className="text-[8px] sm:text-[10px] font-mono tracking-widest text-[#c5a059]">TRIPLICANE CHENNAI</span>
                {/* Jubilee Seal */}
                <div className="flex items-center gap-1 bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20">
                  <span className="text-[7px] sm:text-[9px] font-serif text-[#c5a059] font-bold tracking-tight">JUBILEE</span>
                </div>
              </div>

              {/* BRAND LOGO */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#c5a059] bg-[#0a0a0a] shadow-[0_0_25px_rgba(197,160,89,0.55),inset_0_0_15px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500">
                  <img src="/logo.jpg" alt="Rahman Plaza Logo" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#c5a059]/15 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* TAMIL TITLE */}
              <h2 className="text-xl sm:text-3xl font-bold tracking-wide mt-2 text-[#c5a059] select-none font-sans" style={{ textShadow: '0 0 15px rgba(197,160,89,0.35)' }}>
                ரஹ்මාන් பிளாஸா
              </h2>

              {/* RAHMAN PLAZA */}
              <h1 className="text-3xl sm:text-5xl font-medium tracking-[0.2em] text-[#f5f5f4] uppercase mt-1 select-none font-sans" style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
                RAHMAN <span className="font-serif italic text-[#c5a059]">PLAZA</span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-[9px] sm:text-xs font-mono text-neutral-400 uppercase tracking-[0.25em] mt-3">
                🇮🇳 Heritage of Triplicane
              </p>
            </div>
          </div>
        </motion.div>

        {/* MINIMAL PREMIUM TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-sm sm:text-lg font-serif italic text-neutral-300 tracking-wide max-w-xl mx-auto"
        >
          “A legendary multi-facility retail milestone where classic legacy converges with luxury architectural execution.”
        </motion.p>
      </motion.div>

      {/* 3. SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="z-10 pb-12 flex flex-col items-center gap-3 cursor-pointer select-none group"
        onClick={onExploreClick}
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-[#c5a059] group-hover:text-white transition-colors font-medium">
          Scroll to Explore
        </span>
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-[#0a0a0a]/60 backdrop-blur group-hover:border-[#c5a059]/40 group-hover:bg-[#0a0a0a]/90 transition-colors"
        >
          <ArrowDown className="h-3.5 w-3.5 text-[#c5a059] group-hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
