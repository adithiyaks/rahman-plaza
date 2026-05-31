/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import BuildingShowcase from './components/BuildingShowcase';
import PlazaMicrosite from './components/PlazaMicrosite';
import PalladiumMicrosite from './components/PalladiumMicrosite';
import KhalifaMicrosite from './components/KhalifaMicrosite';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'plaza' | 'palladium' | 'khalifa'>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Force dark mode on microsites, use user theme on home page only
  const currentTheme = activeView === 'home' ? theme : 'dark';

  // Automatically scroll to top when changing active views to keep experience luxurious
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeView]);

  // Apply theme class to HTML document root
  useEffect(() => {
    const root = document.documentElement;
    if (currentTheme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    }
  }, [currentTheme]);

  const handleScrollToExplore = () => {
    const introEl = document.getElementById('brand-intro-section');
    if (introEl) {
      introEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBranchSelect = (branchId: 'plaza' | 'palladium' | 'khalifa') => {
    setActiveView(branchId);
  };

  const handleNavigate = (view: 'home' | 'plaza' | 'palladium' | 'khalifa') => {
    setActiveView(view);
  };

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <SmoothScroll>
      <div 
        className="bg-bg-primary min-h-screen text-text-primary antialiased overflow-x-clip selection:bg-gold-accent selection:text-text-strong transition-colors duration-500" 
        id="app-container"
      >
        
        {/* Floating Luxurious Navbar */}
        <Navbar 
          activeView={activeView} 
          onNavigate={handleNavigate} 
          theme={theme} 
          onToggleTheme={handleToggleTheme} 
        />

        {/* Dynamic Screen Routing Render with AnimatePresence Page Transitions */}
        <div className="relative min-h-screen flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {activeView === 'home' && (
              <motion.main
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full"
              >
                {/* 1. Cinematic Ambient Hero */}
                <Hero 
                  onExploreClick={handleScrollToExplore} 
                  onNavigateToBranch={handleBranchSelect} 
                  theme={theme}
                />

                {/* 2. Editorial Legacy Brand Intro */}
                <BrandIntro />

                {/* 2.5. Full Screen Building Scroll Showcase & Shop Reveal */}
                <BuildingShowcase 
                  onSelectBranch={handleBranchSelect} 
                  theme={theme}
                />

                {/* 3. Premium Patron Testimonials */}
                <Testimonials theme={theme} />

                {/* 4. Interactive Call to Action & VIP Concierge Booking */}
                <CTA theme={theme} />
              </motion.main>
            )}

            {activeView === 'plaza' && (
              <motion.main
                key="plaza"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full pt-16"
              >
                <PlazaMicrosite onBackToOverview={() => handleNavigate('home')} />
              </motion.main>
            )}

            {activeView === 'palladium' && (
              <motion.main
                key="palladium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full pt-16 bg-[#f7eed5]"
              >
                <PalladiumMicrosite onBackToOverview={() => handleNavigate('home')} />
              </motion.main>
            )}

            {activeView === 'khalifa' && (
              <motion.main
                key="khalifa"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full pt-16 bg-[#2d1c12]"
              >
                <KhalifaMicrosite onBackToOverview={() => handleNavigate('home')} />
              </motion.main>
            )}
          </AnimatePresence>

          {/* Unified High-concept Footer */}
          <Footer onNavigate={handleNavigate} theme={theme} />
        </div>
      </div>
    </SmoothScroll>
  );
}
