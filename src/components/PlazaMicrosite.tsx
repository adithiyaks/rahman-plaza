/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Eye, ClipboardList, MoveRight, Layers, Sparkles, CheckCircle2, BookmarkCheck, ArrowLeftRight, ArrowUpRight 
} from 'lucide-react';
import { PLAZA_FLOORS } from '../data';
import { Floor } from '../types';

interface PlazaMicrositeProps {
  onBackToOverview: () => void;
}

const FIRST_FLOOR_CATALOG = [
  {
    category: "Travel Luggage",
    icon: "🧳",
    items: [
      { name: "Premium Hard Shell Cabin Trolley 20\"", price: "₹2,499" },
      { name: "Premium Hard Shell Medium Trolley 24\"", price: "₹3,499" },
      { name: "Premium Hard Shell Large Trolley 28\"", price: "₹4,999" },
      { name: "ABS Textured Travel Suitcase", price: "₹3,299" },
      { name: "Polycarbonate Luxury Luggage Set", price: "₹8,999" },
      { name: "Kids Cartoon Trolley Bag", price: "₹2,299" },
      { name: "Spider-Themed Kids Trolley", price: "₹2,499" },
      { name: "Soft-Shell Trolley Suitcase", price: "₹2,799" },
    ]
  },
  {
    category: "Backpacks & School Bags",
    icon: "🎒",
    items: [
      { name: "Trekking Backpack 60L", price: "₹2,999" },
      { name: "Hiking Backpack 45L", price: "₹2,499" },
      { name: "Premium Laptop Backpack", price: "₹1,499" },
      { name: "Student School Backpack", price: "₹799" },
      { name: "Casual Travel Backpack", price: "₹1,199" },
      { name: "College Daypack", price: "₹999" },
      { name: "Water-Resistant Backpack", price: "₹1,699" },
      { name: "Multi-Compartment Backpack", price: "₹1,399" },
    ]
  },
  {
    category: "Travel & Duffel Bags",
    icon: "👜",
    items: [
      { name: "Floral Travel Duffel Bag", price: "₹1,299" },
      { name: "Weekend Travel Duffel Bag", price: "₹1,499" },
      { name: "Executive Travel Holdall", price: "₹1,799" },
      { name: "Waterproof Travel Bag", price: "₹1,999" },
      { name: "Sports Duffel Bag", price: "₹1,399" },
      { name: "Premium Gym Bag", price: "₹1,299" },
    ]
  },
  {
    category: "Women's Handbags",
    icon: "👜",
    items: [
      { name: "Women's Leather Tote Bag", price: "₹1,799" },
      { name: "Premium Office Handbag", price: "₹1,599" },
      { name: "Designer Shoulder Bag", price: "₹1,299" },
      { name: "Fashion Sling Bag", price: "₹699" },
      { name: "Ladies Crossbody Bag", price: "₹899" },
      { name: "Premium PU Leather Handbag", price: "₹1,499" },
      { name: "Daily Carry Tote Bag", price: "₹999" },
      { name: "Casual Shopping Bag", price: "₹599" },
    ]
  },
  {
    category: "Wallets & Purses",
    icon: "👛",
    items: [
      { name: "Men's Leather Wallet", price: "₹499" },
      { name: "RFID Leather Wallet", price: "₹799" },
      { name: "Women's Wallet Clutch", price: "₹699" },
      { name: "Card Holder Wallet", price: "₹299" },
      { name: "Coin Purse", price: "₹199" },
      { name: "Key Organizer Pouch", price: "₹249" },
    ]
  },
  {
    category: "Caps & Fashion Accessories",
    icon: "🧢",
    items: [
      { name: "Baseball Cap", price: "₹299" },
      { name: "Sports Cap", price: "₹399" },
      { name: "Premium Cotton Cap", price: "₹499" },
      { name: "Fashion Snapback Cap", price: "₹599" },
      { name: "Casual Everyday Cap", price: "₹349" },
    ]
  },
  {
    category: "Fashion Jewelry",
    icon: "💎",
    items: [
      { name: "Fashion Necklace Set", price: "₹499" },
      { name: "Artificial Jewelry Set", price: "₹799" },
      { name: "Designer Earrings Collection", price: "₹299" },
      { name: "Fashion Bracelet Set", price: "₹249" },
      { name: "Premium Jewelry Gift Set", price: "₹999" },
    ]
  },
  {
    category: "Lunch Boxes & Food Containers",
    icon: "🍱",
    items: [
      { name: "Stainless Steel Lunch Box", price: "₹699" },
      { name: "Kids Lunch Box Set", price: "₹399" },
      { name: "Insulated Lunch Box", price: "₹699" },
      { name: "School Lunch Container", price: "₹299" },
      { name: "Premium Food Storage Box", price: "₹499" },
    ]
  },
  {
    category: "Water Bottles & Flasks",
    icon: "💧",
    items: [
      { name: "Stainless Steel Water Bottle", price: "₹499" },
      { name: "Thermal Water Bottle", price: "₹599" },
      { name: "Vacuum Flask Bottle", price: "₹799" },
      { name: "Kids Water Bottle", price: "₹299" },
      { name: "Sports Water Bottle", price: "₹399" },
    ]
  },
  {
    category: "Gift & Utility Items",
    icon: "🎁",
    items: [
      { name: "Decorative Clutch Purse", price: "₹599" },
      { name: "Gift Pouch Collection", price: "₹199" },
      { name: "Household Storage Container", price: "₹299" },
      { name: "Plastic Utility Basket", price: "₹149" },
      { name: "Stationery Organizer", price: "₹199" },
      { name: "Kids Storage Box", price: "₹249" },
    ]
  }
];

export default function PlazaMicrosite({ onBackToOverview }: PlazaMicrositeProps) {
  const [activeFloorId, setActiveFloorId] = useState<number | null>(null);
  const [selectedGalleryFloor, setSelectedGalleryFloor] = useState<Floor | null>(null);
  const [selectedItemsFloor, setSelectedItemsFloor] = useState<Floor | null>(null);
  const [galleryImageIdx, setGalleryImageIdx] = useState<number>(0);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Active Floor Details
  const activeFloor = PLAZA_FLOORS.find(f => f.id === activeFloorId) || PLAZA_FLOORS[0];

  // Lock body scroll when modals are active to prevent double scroll or background scroll
  useEffect(() => {
    if (selectedItemsFloor || selectedGalleryFloor) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItemsFloor, selectedGalleryFloor]);

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
            className="w-full h-full object-cover scale-110 brightness-[0.45] saturate-[0.8] opacity-80 transition-transform duration-[20s] hover:scale-100 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-[#0a0a0a]/65 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#064e3b]/35 via-transparent to-[#c5a059]/15" />
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
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.12em] uppercase font-sans mb-6">
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
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight font-sans mb-4">
            Vertical <span className="font-serif italic text-[#c5a059] font-normal">Grandeur</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
            Five curated floors, each an immersion into distinct realms of luxury, fashion, and heritage. Hover to explore the vertical architecture.
          </p>
        </div>

        {/* SINGLE COLUMN ACCORDION */}
        <div 
          className="max-w-4xl mx-auto flex flex-col gap-4" 
          id="floor-accordion-list"
          onMouseLeave={() => setActiveFloorId(null)}
        >
          {PLAZA_FLOORS.map((floor) => {
            const isActive = activeFloorId === floor.id;
            return (
              <div
                key={floor.id}
                onMouseEnter={() => setActiveFloorId(floor.id)}
                onClick={() => setActiveFloorId(floor.id)}
                className={`relative rounded-3xl border transition-all duration-700 ease-out overflow-hidden cursor-pointer flex flex-col justify-center ${
                  isActive
                    ? 'border-[#c5a059]/50 shadow-[0_25px_50px_rgba(197,160,89,0.12)] bg-[#100f0e]/60 min-h-[380px] sm:min-h-[440px] scale-[1.01]'
                    : 'border-white/5 bg-[#121110]/15 hover:border-[#c5a059]/20 hover:bg-[#121110]/25 min-h-[5.5rem] sm:min-h-[6rem]'
                }`}
              >
                {/* Background Image with Blur on Active */}
                {isActive && (
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                      src={floor.image}
                      alt={floor.name}
                      className="w-full h-full object-cover scale-100 blur-[2px] brightness-[0.35] saturate-[0.85] contrast-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0a]/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-[#0a0a0a]/75" />
                  </div>
                )}

                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between w-full h-full flex-grow">
                  {/* Top Bar Layout (Always Visible) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Left: Floor ID and Name */}
                    <div className="flex items-baseline gap-6">
                      <span className="font-serif italic text-xl sm:text-2xl text-[#c5a059]">
                        Floor 0{floor.id}
                      </span>
                      <h3 className={`text-base sm:text-lg tracking-wide transition-colors duration-300 font-sans ${
                        isActive ? 'text-white font-medium' : 'text-neutral-300'
                      }`}>
                        {floor.name}
                      </h3>
                    </div>

                    {/* Right: Subtext/Tagline */}
                    <div className="text-left sm:text-right">
                      <span className={`text-[10px] font-mono tracking-widest uppercase transition-colors ${
                        isActive ? 'text-[#c5a059]' : 'text-neutral-400'
                      }`}>
                        {floor.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content (Visible only when Active) */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-end justify-between gap-6 overflow-hidden"
                      >
                        {/* Left: Description */}
                        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light max-w-xl">
                          {floor.description}
                        </p>

                        {/* Right: Action Buttons */}
                        <div className="flex gap-3 shrink-0">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenGallery(floor);
                            }}
                            className="rounded-full bg-white/5 border border-white/10 hover:border-[#c5a059]/40 text-[10px] font-mono tracking-widest uppercase px-5 py-2.5 text-white flex items-center justify-center gap-2 transition-all hover:bg-white/10 cursor-pointer"
                            id={`view-btn-lvl-${floor.id}`}
                          >
                            <ArrowUpRight className="h-3.5 w-3.5 text-[#c5a059]" /> VIEW
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedItemsFloor(floor);
                            }}
                            className="rounded-full bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/20 hover:border-[#c5a059]/40 text-[10px] font-mono tracking-widest uppercase px-5 py-2.5 flex items-center justify-center gap-2 font-semibold transition-all hover:bg-[#c5a059]/20 cursor-pointer"
                            id={`see-items-btn-lvl-${floor.id}`}
                          >
                            <ClipboardList className="h-3.5 w-3.5" /> SEE ITEMS
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
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
               data-lenis-prevent
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
                {selectedItemsFloor.id === 1 ? (
                  /* Custom 1st Floor Product Catalog Accordion */
                  <div className="space-y-4">
                    <div className="space-y-3">
                      {FIRST_FLOOR_CATALOG.map((catGroup) => {
                        const isOpen = !!expandedCategories[catGroup.category];
                        return (
                          <div 
                            key={catGroup.category} 
                            className="border border-white/5 rounded-2xl overflow-hidden bg-[#121110]/30 transition-colors hover:border-[#c5a059]/25"
                          >
                            {/* Toggle Header Button */}
                            <button
                              onClick={() => toggleCategory(catGroup.category)}
                              className="w-full px-5 py-4 flex items-center justify-between text-left transition-colors hover:bg-white/5 cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-lg select-none">{catGroup.icon}</span>
                                <span className="text-white text-sm font-semibold tracking-wide font-sans">{catGroup.category}</span>
                              </div>
                              <span className="text-[#c5a059] font-mono text-xs font-medium">
                                {isOpen ? 'COLLAPSE —' : 'EXPAND +'}
                              </span>
                            </button>

                            {/* Items List */}
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                                  className="overflow-hidden border-t border-white/5 bg-black/20"
                                >
                                  <div className="p-4 divide-y divide-white/5">
                                    {catGroup.items.map((item, idx) => (
                                      <div 
                                        key={idx} 
                                        className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white/5 transition-colors"
                                      >
                                        <span className="text-xs text-neutral-300 font-light font-sans">{item.name}</span>
                                        <span className="text-xs text-[#c5a059] font-mono font-medium">{item.price}</span>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* Standard items list layout for other floors */
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
                )}

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
