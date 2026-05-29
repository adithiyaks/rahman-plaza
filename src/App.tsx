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
import BranchSelection from './components/BranchSelection';
import PlazaMicrosite from './components/PlazaMicrosite';
import PalladiumMicrosite from './components/PalladiumMicrosite';
import KhalifaMicrosite from './components/KhalifaMicrosite';
import Footer from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'plaza' | 'palladium' | 'khalifa'>('home');

  // Automatically scroll to top when changing active views to keep experience luxurious
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeView]);

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

  return (
    <SmoothScroll>
      <div className="bg-[#0a0a0a] min-h-screen text-[#f5f5f4] antialiased overflow-x-hidden selection:bg-[#c5a059] selection:text-black" id="app-container">
        
        {/* Floating Luxurious Navbar */}
        <Navbar activeView={activeView} onNavigate={handleNavigate} />

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
                />

                {/* 2. Editorial Legacy Brand Intro */}
                <BrandIntro />

                {/* 2.5. Full Screen Building Scroll Showcase */}
                <BuildingShowcase />

                {/* 3. Core Branch Select Grid Cards */}
                <BranchSelection onSelectBranch={handleBranchSelect} />
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
                className="w-full pt-16"
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
                className="w-full pt-16"
              >
                <KhalifaMicrosite onBackToOverview={() => handleNavigate('home')} />
              </motion.main>
            )}
          </AnimatePresence>

          {/* Unified High-concept Footer */}
          <Footer onNavigate={handleNavigate} />
        </div>
      </div>
    </SmoothScroll>
  );
}
