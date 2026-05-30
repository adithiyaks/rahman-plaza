/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Award, Compass, Landmark, Heart } from 'lucide-react';
import { BranchId } from '../types';

interface FooterProps {
  onNavigate: (view: 'home' | 'plaza' | 'palladium' | 'khalifa') => void;
  variant?: 'default' | 'compact';
}

export default function Footer({ onNavigate, variant = 'default' }: FooterProps) {
  if (variant === 'compact') {
    return (
      <footer 
        className="w-full py-4 text-[10px] font-mono text-neutral-500 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 select-none bg-[#0a0a0a]"
        id="site-footer-compact"
      >
        <div>
          <p>© 2026 Rahman Plaza Group. Celebrating 52 Years of Unbroken Trust.</p>
        </div>
        <div className="flex gap-6">
          <span className="uppercase">Chennai, TN, India</span>
          <span>Est. 1974</span>
        </div>
      </footer>
    );
  }

  return (
    <footer 
      className="bg-[#0a0a0a] text-neutral-400 border-t border-white/5 py-16 px-6 sm:px-12 w-full select-none"
      id="site-footer"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* UPPER BRAND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5 items-start">
          
          {/* Logo Brand Segment */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
              <div className="w-8 h-8 rounded-full overflow-hidden bg-[#121110] flex items-center justify-center border border-[#c5a059]/30">
                <img src="/logo.jpg" alt="Rahman Plaza Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-[#f5f5f4] text-sm font-light tracking-widest font-sans uppercase">RAHMAN PLAZA</h4>
                <p className="text-[9px] text-[#c5a059] font-mono tracking-widest uppercase">Since 1974 • Triplicane Mall</p>
              </div>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed font-light mt-2">
              Triplicane's ultimate multi-facility retail experience. Fifty years of impeccable traditional weaves, travel suitcases, tailored mens couture, fine gemstone artistry, and technical footwear.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-4" id="footer-nav-links">
            <h5 className="text-neutral-300 font-mono text-[9px] uppercase tracking-[0.25em] font-medium">
              The Flagships
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('plaza')} 
                  className="hover:text-[#c5a059] transition-colors cursor-pointer text-left font-light flex items-center gap-2"
                >
                  <Landmark className="h-3 w-3 text-[#c5a059] shrink-0" /> Rahman Plaza (5 Floors)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('palladium')} 
                  className="hover:text-[#c5a059] transition-colors cursor-pointer text-left font-light flex items-center gap-2"
                >
                  <Award className="h-3 w-3 text-[#c5a059] shrink-0" /> Rahman Palladium (Jewelry)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('khalifa')} 
                  className="hover:text-white transition-colors cursor-pointer text-left font-light flex items-center gap-2"
                >
                  <Compass className="h-3 w-3 text-white shrink-0" /> Rahman Khalifa (Fashion & Shoes)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="md:col-span-5 space-y-4 text-xs" id="footer-contact-info">
            <h5 className="text-neutral-300 font-mono text-[9px] uppercase tracking-[0.25em] font-medium">
              The Landmark Atelier
            </h5>
            <div className="space-y-3 font-light text-neutral-500">
              <div className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-[#c5a059] shrink-0" />
                <p>
                  No. 128, Rahman Plaza Rd, Triplicane, Chennai — 600005, Tamil Nadu, India.
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-[#c5a059] shrink-0" />
                <a href="tel:+914428540000" className="hover:text-[#c5a059] transition-colors">
                  +91 (44) 2854-0000 / +91 (44) 2854-1111
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-[#c5a059] shrink-0" />
                <a href="mailto:info@rahmanplaza.com" className="hover:text-[#c5a059] transition-colors">
                  info@rahmanplaza.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-neutral-600 gap-4">
          <div>
            <p>© 2026 Rahman Plaza Group. Celebrating 52 Years of Unbroken Trust.</p>
          </div>
          <div className="flex gap-6">
            <span className="uppercase">Chennai, TN, India</span>
            <span>Est. 1974</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
