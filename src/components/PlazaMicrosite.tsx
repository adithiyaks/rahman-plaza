/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Eye, ClipboardList, MoveRight, Layers, Sparkles, CheckCircle2, BookmarkCheck, ArrowLeftRight 
} from 'lucide-react';
import { PLAZA_FLOORS } from '../data';
import { Floor } from '../types';

interface PlazaMicrositeProps {
  onBackToOverview: () => void;
}

export default function PlazaMicrosite({ onBackToOverview }: PlazaMicrositeProps) {
  const [activeFloorId, setActiveFloorId] = useState<number>(1);
  const [selectedGalleryFloor, setSelectedGalleryFloor] = useState<Floor | null>(null);
  const [selectedItemsFloor, setSelectedItemsFloor] = useState<Floor | null>(null);
  const [galleryImageIdx, setGalleryImageIdx] = useState<number>(0);

  // Active Floor Details
  const activeFloor = PLAZA_FLOORS.find(f => f.id === activeFloorId) || PLAZA_FLOORS[0];

  // Helper images for floor galleries (using elegant, related Unsplash placeholders)
  const getFloorExtraImages = (floorId: number) => {
    switch (floorId) {
      case 1:
        return [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800',
          'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800',
          'https://images.unsplash.com/photo-1582037928867-67709ff3577d?q=80&w=800',
        ];
      case 2:
        return [
          'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800',
          'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800',
          'https://images.unsplash.com/photo-1611085583191-a3b1a30a5a2a?q=80&w=800',
        ];
      case 3:
        return [
          'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800',
          'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800',
          'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800',
        ];
      case 4:
        return [
          'https://images.unsplash.com/photo-1515488042361-404e9250afef?q=80&w=800',
          'https://images.unsplash.com/photo-1537651180632-751h8b69be15?q=80&w=800',
          'https://images.unsplash.com/photo-1471286174241-e729a58747c7?q=80&w=800',
        ];
      case 5:
        return [
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800',
          'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800',
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800',
        ];
      default:
        return ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800'];
    }
  };

  const handleOpenGallery = (floor: Floor) => {
    setSelectedGalleryFloor(floor);
    setGalleryImageIdx(0);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f4] selection:bg-[#c5a059] selection:text-black">
      
      {/* MICROSITE INTRO HERO */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Parallax */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1582037928867-67709ff3577d?q=80&w=1920"
            alt="Rahman Plaza Retail Facade"
            className="w-full h-full object-cover scale-105 brightness-[0.2] saturate-50 animate-pulse pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/70 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#064e3b]/20 via-transparent to-[#0a0a0a]/20" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-center mb-6">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.4em] text-[#c5a059] border border-[#c5a059]/30 px-4 py-1.5 rounded-full bg-[#121110]/50 backdrop-blur-md">
                Triplicane's Landmark • Since 1974
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-[0.12em] uppercase font-sans mb-6">
              RAHMAN <span className="text-[#c5a059] block sm:inline italic font-serif text-[0.9em] font-normal leading-none mt-2 sm:mt-0">PLAZA</span>
            </h1>
            
            <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-2xl mx-auto leading-relaxed mt-4 font-light">
              Step inside our flagship retail temple. Explore five expertly designed, high-concept floors curated for travel bags, designer outfits, custom tailoring, bridal wonders, children's toys, and niche masterworks.
            </p>

            <button
              onClick={onBackToOverview}
              className="mt-8 text-xs font-mono text-neutral-500 uppercase tracking-widest hover:text-[#c5a059] cursor-pointer flex items-center gap-2 mx-auto border border-white/5 hover:border-[#c5a059]/30 px-5 py-2.5 rounded-full bg-[#0a0a0a]/40 hover:bg-[#0a0a0a]/80 transition-all"
              id="back-to-overview-btn"
            >
              <ArrowLeftRight className="h-3.5 w-3.5" /> Back to Brand Overview
            </button>
          </motion.div>
        </div>
      </section>

      {/* LUXURY FLOOR DIRECTORY EDITORIAL */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5" id="floor-showcase-section">
        
        {/* Header Label */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-2 text-[#c5a059] mb-3">
            <Layers className="h-4 w-4" />
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] font-semibold">Luxury Floor Space Showcases</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Vertical Curator Tour
          </h2>
          <p className="text-sm text-neutral-400 font-light mt-3 max-w-xl">
            Sift through five distinct levels of retail opulence. Hover over a level on the left to reveal its digital catalog preview on the right.
          </p>
        </div>

        {/* DOUBLE SIDED GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT SIDE: Floor Level Vertical Selector Button Lists */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4" id="floor-buttons-list">
              {PLAZA_FLOORS.map((floor) => {
                const isActive = activeFloorId === floor.id;
                return (
                  <div
                    key={floor.id}
                    onMouseEnter={() => setActiveFloorId(floor.id)}
                    className={`group/item border-b border-white/5 pb-5 pt-3 cursor-pointer transition-all duration-300 relative ${
                      isActive ? 'border-[#c5a059]/30 pl-4' : 'hover:pl-2'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-5">
                        <span className={`font-mono text-xs ${isActive ? 'text-[#c5a059]' : 'text-neutral-600 group-hover/item:text-neutral-400'}`}>
                          0{floor.id}
                        </span>
                        <div>
                          <h3 className={`text-lg sm:text-2xl font-serif tracking-tight transition-colors duration-300 ${
                            isActive ? 'text-[#c5a059] font-medium' : 'text-neutral-400 group-hover/item:text-white'
                          }`}>
                            {floor.level}
                          </h3>
                          <p className={`text-[10px] font-mono tracking-widest uppercase transition-colors mt-0.5 ${
                            isActive ? 'text-[#c5a059]' : 'text-neutral-500'
                          }`}>
                            {floor.name}
                          </p>
                        </div>
                      </div>

                      {/* Direction Icon on Hover */}
                      <MoveRight className={`h-4 w-4 transition-all ${
                        isActive ? 'text-[#c5a059] opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`} />
                    </div>

                    {/* Left Active Glow bar */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c5a059] rounded-full" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Micro Details preview of currently hovered floor */}
            <div className="mt-8 pt-6 border-t border-white/5 bg-[#0d1211]/30 p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#c5a059] uppercase tracking-widest block mb-2 font-bold">
                  Active Showcase • {activeFloor.level}
                </span>
                <span className="text-sm font-sans italic text-neutral-300 block mb-3 font-semibold">
                  "{activeFloor.tagline}"
                </span>
                <p className="text-xs text-neutral-450 leading-relaxed font-light">
                  {activeFloor.description}
                </p>
                
                {/* Highlights list */}
                <div className="mt-4 space-y-1.5">
                  {activeFloor.highlights.map((hlt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                      <CheckCircle2 className="h-3 w-3 text-[#c5a059] shrink-0" />
                      <span>{hlt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TWO BUTTONS AT BOTTOM */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => handleOpenGallery(activeFloor)}
                  className="flex-1 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-[#c5a059]/40 text-[10px] font-mono tracking-widest uppercase py-3 text-white flex items-center justify-center gap-2 transition-all hover:bg-[#0a0a0a]/80 hover:shadow-[0_8px_20px_rgba(197,160,89,0.08)] pointer-events-auto cursor-pointer"
                  id={`view-btn-lvl-${activeFloor.id}`}
                >
                  <Eye className="h-3.5 w-3.5 text-[#c5a059]" /> View Gallery
                </button>
                <button
                  onClick={() => setSelectedItemsFloor(activeFloor)}
                  className="flex-1 rounded-xl bg-[#c5a059] text-[#0a0a0a] text-[10px] font-mono tracking-widest uppercase py-3 flex items-center justify-center gap-2 font-semibold transition-all hover:bg-[#d6b26a] hover:shadow-[0_8px_20px_rgba(197,160,89,0.25)] pointer-events-auto cursor-pointer"
                  id={`see-items-btn-lvl-${activeFloor.id}`}
                >
                  <ClipboardList className="h-3.5 w-3.5" /> See Items
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Cinematic Image Crossfading Previews */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative rounded-3xl overflow-hidden bg-[#0d0d0d] aspect-video lg:aspect-[4/3] border border-white/5 shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFloorId}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeFloor.image}
                    alt={activeFloor.name}
                    className="w-full h-full object-cover brightness-50 contrast-105 saturate-50 transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    id={`floor-preview-img-lvl-${activeFloor.id}`}
                  />
                  
                  {/* Subtle color overlay mesh */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/20" />
                  
                  {/* Display text overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-mono text-[#c5a059] tracking-wider block">LEVEL 0{activeFloor.id}</span>
                      <h4 className="text-xl sm:text-2xl font-serif text-white font-medium">{activeFloor.name}</h4>
                    </div>
                    {/* Floor Label overlay */}
                    <div className="bg-[#0a0a0a]/90 backdrop-blur-md border border-white/5 px-3.5 py-1 rounded-lg">
                      <span className="text-xs font-mono font-semibold tracking-wider text-[#c5a059]">{activeFloor.level}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* POPUP 1: FULLSCREEN IMAGE GALLERY MODAL */}
      <AnimatePresence>
        {selectedGalleryFloor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between items-center p-4 py-8"
            id="gallery-modal"
          >
            {/* Header Toolbar */}
            <div className="w-full max-w-6xl flex justify-between items-center border-b border-neutral-900 pb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">Floor Showcase Gallery</span>
                <h3 className="text-lg sm:text-2xl font-serif text-white">{selectedGalleryFloor.level} • {selectedGalleryFloor.name}</h3>
              </div>
              <button
                onClick={() => setSelectedGalleryFloor(null)}
                className="h-10 h-10 w-10 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 flex items-center justify-center transition-colors scroll-m-1 cursor-pointer pointer-events-auto"
                id="close-gallery-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Center Carousel Slider Screen */}
            <div className="relative w-full max-w-4xl aspect-video my-4 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src={getFloorExtraImages(selectedGalleryFloor.id)[galleryImageIdx]}
                alt={selectedGalleryFloor.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                id="gallery-main-image"
              />
              {/* Fade Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            {/* Bottom Controls / Indicator Dots */}
            <div className="w-full max-w-md flex flex-col items-center gap-4">
              <div className="flex gap-2">
                {getFloorExtraImages(selectedGalleryFloor.id).map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryImageIdx(idx)}
                    className={`h-2 rounded-full cursor-pointer transition-all ${
                      galleryImageIdx === idx ? 'w-10 bg-emerald-400' : 'w-2 bg-neutral-800 hover:bg-neutral-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                Use indicators to slide between curated storefront details
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* POPUP 2: DESIGNER GLASSMORPHISM ITEMS DETAILS POPUP */}
      <AnimatePresence>
        {selectedItemsFloor && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md flex items-center justify-center p-4"
             id="items-details-modal"
           >
             {/* Elegant glass container */}
             <motion.div
               initial={{ scale: 0.95, y: 15 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.95, y: 15 }}
               className="bg-[#0a0a0a]/95 border border-[#c5a059]/20 rounded-3xl w-full max-w-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-[0_30px_70px_rgba(197,160,89,0.06)] relative"
             >
               {/* Corner Close button */}
               <button
                 onClick={() => setSelectedItemsFloor(null)}
                 className="absolute top-6 right-6 h-9 w-9 rounded-full bg-[#0a0a0a]/65 border border-white/5 text-neutral-400 hover:text-[#c5a059] hover:border-[#c5a059]/30 flex items-center justify-center transition-colors pointer-events-auto cursor-pointer"
                 id="close-items-modal"
               >
                 <X className="h-4 w-4" />
               </button>

               {/* Title Section */}
               <div className="border-b border-white/5 pb-5 mb-6">
                 <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-[0.2em] flex items-center gap-1.5 mb-1.5 font-bold">
                   <Sparkles className="h-3 w-3 text-[#c5a059] animate-pulse" />
                   Premium Floor Directory Catalog
                 </span>
                 <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">{selectedItemsFloor.level}</h3>
                 <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">{selectedItemsFloor.name}</h4>
               </div>

               {/* Directory sections */}
               <div className="space-y-6">
                 {/* 1. Curated Categories */}
                 <div>
                   <span className="block text-[9px] font-mono uppercase tracking-widest text-[#c5a059] mb-2 font-medium">Primary Categories:</span>
                   <div className="flex flex-wrap gap-2">
                     {selectedItemsFloor.categories.map((cat, idx) => (
                       <span key={idx} className="bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/20 px-3 py-1 rounded-md text-xs font-sans">
                         {cat}
                       </span>
                     ))}
                   </div>
                 </div>

                 {/* 2. Premium Partner Brands */}
                 <div>
                   <span className="block text-[9px] font-mono uppercase tracking-widest text-[#c5a059] mb-2 font-medium">Curated Brands:</span>
                   <div className="flex flex-wrap gap-2">
                     {selectedItemsFloor.brands.map((brand, idx) => (
                       <span key={idx} className="bg-white/5 text-white border border-white/10 px-3 py-1 rounded-md text-xs font-sans">
                         {brand}
                       </span>
                     ))}
                   </div>
                 </div>

                 {/* 3. Featured Materials */}
                 <div>
                   <span className="block text-[9px] font-mono uppercase tracking-widest text-[#c5a059] mb-2 font-medium">Curated Materials:</span>
                   <div className="flex flex-wrap gap-2">
                     {selectedItemsFloor.materials.map((mat, idx) => (
                       <span key={idx} className="bg-[#121110]/50 text-neutral-450 border border-white/5 px-3 py-1 rounded-md text-xs font-mono font-light">
                         🛠️ {mat}
                       </span>
                     ))}
                   </div>
                 </div>

                 {/* 4. Deep Product Details List */}
                 <div className="border-t border-white/5 pt-5 mt-6">
                   <span className="block text-[9px] font-mono uppercase tracking-widest text-[#c5a059] mb-3 font-semibold">Featured Specialty Items:</span>
                   <div className="space-y-4 shadow-sm" id="specialty-items-list">
                     {selectedItemsFloor.details.map((item, idx) => (
                       <div key={idx} className="p-4 rounded-2xl bg-[#121110]/30 border border-white/5 flex flex-col justify-between hover:border-[#c5a059]/20 transition-all">
                         <div className="flex justify-between items-start mb-1.5 font-light">
                           <h5 className="text-white text-sm font-sans font-semibold tracking-wide">{item.name}</h5>
                           <span className="bg-[#c5a059]/10 text-[#c5a059] text-[9px] font-mono font-medium px-2 py-0.5 rounded border border-[#c5a059]/10 uppercase tracking-widest">
                             {item.category}
                           </span>
                         </div>
                         <p className="text-xs text-neutral-450 leading-relaxed font-light">{item.description}</p>
                         <div className="flex gap-4 mt-3 text-[10px] font-mono text-neutral-500">
                           <span>Brands: <span className="text-neutral-300">{item.brands.join(', ')}</span></span>
                           <span>Materials: <span className="text-neutral-300">{item.materials.join(', ')}</span></span>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>

               {/* Back CTA Button */}
               <div className="mt-8 border-t border-white/5 pt-5 text-right">
                 <button
                   onClick={() => setSelectedItemsFloor(null)}
                   className="rounded-xl border border-white/5 hover:border-[#c5a059]/30 text-xs font-mono tracking-widest uppercase px-6 py-3 bg-[#0a0a0a]/40 text-[#c5a059] hover:bg-[#0a0a0a]/80 transition-all cursor-pointer"
                 >
                   Return to directory
                 </button>
               </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>

    </div>
  );
}
