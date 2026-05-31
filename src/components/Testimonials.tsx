/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  type: 'bridal' | 'jewelry' | 'streetwear';
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Anjali Krishnan',
    role: 'Legacy Bridal Client',
    location: 'Adyar, Chennai',
    quote: 'For three generations, my family has come to Rahman for wedding silks. The custom zardozi work and the private lounge experience at Rahman Plaza are unmatched in Chennai. They don\'t just sell apparel; they curate memories.',
    rating: 5,
    type: 'bridal'
  },
  {
    id: 2,
    name: 'Vikram Aditya',
    role: 'Fine Jewelry Collector',
    location: 'Bangalore',
    quote: 'The bespoke craftsmanship at the Palladium is exquisite. Their master goldsmiths helped design a custom uncut Polki set that is a literal work of art. The attention to detail and obsidian stone interiors feel world-class.',
    rating: 5,
    type: 'jewelry'
  },
  {
    id: 3,
    name: 'Rohan Mehta',
    role: 'Streetwear Enthusiast',
    location: 'Mumbai',
    quote: 'Rahman Khalifa is a hidden gem for sneakerheads. The curation of technical footwear is top-tier, and the industrial design of the shop is incredible. It\'s easily the most progressive fashion boutique in Chennai.',
    rating: 5,
    type: 'streetwear'
  }
];

interface TestimonialsProps {
  theme: 'light' | 'dark';
}

export default function Testimonials({ theme }: TestimonialsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const getBorderColor = (type: 'bridal' | 'jewelry' | 'streetwear') => {
    const isLight = theme === 'light';
    switch (type) {
      case 'bridal':
        return isLight ? 'hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgba(16,185,129,0.06)]' : 'hover:border-emerald-500/30';
      case 'jewelry':
        return isLight ? 'hover:border-gold-accent/50 hover:shadow-[0_8px_30px_rgba(163,122,59,0.06)]' : 'hover:border-[#c5a059]/40';
      case 'streetwear':
        return isLight ? 'hover:border-neutral-400 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]' : 'hover:border-white/25';
    }
  };

  const getThemeHighlight = (type: 'bridal' | 'jewelry' | 'streetwear') => {
    const isLight = theme === 'light';
    switch (type) {
      case 'bridal':
        return isLight 
          ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'jewelry':
        return isLight
          ? 'bg-amber-50 text-amber-800 border-amber-200'
          : 'bg-[#c5a059]/10 text-[#c5a059] border-[#c5a059]/20';
      case 'streetwear':
        return isLight
          ? 'bg-neutral-100 text-neutral-800 border-neutral-200'
          : 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <section 
      className="relative bg-bg-primary py-24 sm:py-32 px-6 sm:px-12 w-full overflow-hidden border-t border-border-primary transition-colors duration-500"
      id="testimonials-section"
    >
      {/* Background Ambience Highlights */}
      <div className="absolute left-1/3 top-1/4 w-[500px] h-[500px] bg-glow-emerald/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-glow-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-card-bg border border-border-primary rounded-full mb-4 shadow-xl">
            <MessageSquare className="h-3 w-3 text-gold-accent" />
            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gold-accent">
              Patron Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-text-primary mb-4">
            The Voice of <span className="font-serif italic text-gold-accent ml-1">Legacy</span> & Trust
          </h2>
          <p className="text-xs sm:text-sm font-sans text-text-muted leading-relaxed max-w-xl mx-auto font-light">
            Discover the experiences of our multi-generational clients, design curators, and contemporary fashion collectors across Chennai and beyond.
          </p>
        </div>

        {/* Testimonials Grid / Carousel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              className={`relative rounded-3xl bg-card-bg border border-border-primary p-8 flex flex-col justify-between transition-all duration-500 backdrop-blur-md group hover:bg-card-bg-hover ${getBorderColor(t.type)}`}
              style={{ transformStyle: 'preserve-3d' }}
              id={`testimonial-card-${t.id}`}
            >
              {/* Glass shine lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/2 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none rounded-3xl" />

              {/* Card Content */}
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold-accent text-gold-accent" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-border-strong group-hover:text-gold-accent/20 transition-colors duration-500" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm font-light font-sans text-text-primary/95 leading-relaxed italic mb-8 relative z-10">
                  “{t.quote}”
                </p>
              </div>

              {/* User Metadata Footer */}
              <div className="flex items-center gap-4 border-t border-border-primary pt-6 mt-auto">
                <div className="relative w-10 h-10 rounded-full bg-card-bg-solid border border-border-primary flex items-center justify-center text-xs font-mono uppercase tracking-widest text-gold-accent font-bold shadow-md">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xs font-sans font-semibold text-text-strong tracking-wide">
                    {t.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                    <span className={`text-[9px] font-mono border px-2 py-0.5 rounded-full uppercase tracking-wider font-light ${getThemeHighlight(t.type)}`}>
                      {t.role}
                    </span>
                    <span className="text-[9px] font-mono text-text-muted tracking-wide">
                      {t.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
