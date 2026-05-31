/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Award, Compass, Landmark, Heart, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { BranchId } from '../types';

interface FooterProps {
  onNavigate: (view: 'home' | 'plaza' | 'palladium' | 'khalifa') => void;
  variant?: 'default' | 'compact';
  theme: 'light' | 'dark';
}

export default function Footer({ onNavigate, variant = 'default', theme }: FooterProps) {
  if (variant === 'compact') {
    return (
      <footer 
        className="w-full py-4 text-[10px] font-mono text-text-muted border-t border-border-primary flex flex-col sm:flex-row justify-between items-center gap-2 select-none bg-bg-primary transition-colors duration-500"
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
      className="bg-bg-primary text-text-muted border-t border-border-primary py-16 px-6 sm:px-12 w-full select-none transition-colors duration-500"
      id="site-footer"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* UPPER BRAND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border-primary items-start">
          
          {/* Logo Brand Segment */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
              <div className="w-8 h-8 rounded-full overflow-hidden bg-card-bg-solid flex items-center justify-center border border-gold-accent/30">
                <img src="/logo.jpg" alt="Rahman Plaza Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-text-primary text-sm font-light tracking-widest font-sans uppercase">RAHMAN PLAZA</h4>
                <p className="text-[9px] text-gold-accent font-mono tracking-widest uppercase">Since 1974 • Triplicane Mall</p>
              </div>
            </div>
            <p className="text-xs text-text-muted/80 leading-relaxed font-light mt-2">
              Triplicane's ultimate multi-facility retail experience. Fifty years of impeccable traditional weaves, travel suitcases, tailored mens couture, fine gemstone artistry, and technical footwear.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-4" id="footer-nav-links">
            <h5 className="text-text-strong font-mono text-[9px] uppercase tracking-[0.25em] font-medium">
              The Flagships
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('plaza')} 
                  className="hover:text-gold-accent transition-colors cursor-pointer text-left font-light flex items-center gap-2"
                >
                  <Landmark className="h-3 w-3 text-gold-accent shrink-0" /> Rahman Plaza (5 Floors)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('palladium')} 
                  className="hover:text-gold-accent transition-colors cursor-pointer text-left font-light flex items-center gap-2"
                >
                  <Award className="h-3 w-3 text-gold-accent shrink-0" /> Rahman Palladium (Jewelry)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('khalifa')} 
                  className="hover:text-text-strong transition-colors cursor-pointer text-left font-light flex items-center gap-2"
                >
                  <Compass className="h-3 w-3 text-text-strong shrink-0" /> Rahman Khalifa (Fashion & Shoes)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="md:col-span-5 space-y-4 text-xs" id="footer-contact-info">
            <h5 className="text-text-strong font-mono text-[9px] uppercase tracking-[0.25em] font-medium">
              The Landmark Atelier
            </h5>
            <div className="space-y-3 font-light text-text-muted/80">
              <div className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-gold-accent shrink-0" />
                <p>
                  No. 128, Rahman Plaza Rd, Triplicane, Chennai — 600005, Tamil Nadu, India.
                  <a href="https://www.google.com/maps/place/Rahman+Plaza/@13.0589441,80.2725717,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52689fa38b54df:0x23094a4f8fdab82c!8m2!3d13.0589441!4d80.2751466!16s%2Fg%2F1td3pxr2?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-accent ml-2 text-xs font-medium inline-block mt-1">
                    GET DIRECTIONS
                  </a>
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-gold-accent shrink-0" />
                <a href="tel:+914442155272" className="hover:text-gold-accent transition-colors">
                  044-42155272
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-gold-accent shrink-0" />
                <a href="mailto:info@rahmanplaza.com" className="hover:text-gold-accent transition-colors">
                  info@rahmanplaza.com
                </a>
              </div>
              <div className="flex gap-4 items-center pt-2 mt-2">
                <a href="https://www.instagram.com/rahmanpalladium" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border-primary flex items-center justify-center hover:bg-gold-accent/10 hover:border-gold-accent/30 transition-all text-text-muted hover:text-gold-accent" aria-label="Instagram">
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a href="https://www.facebook.com/people/Rahman-Palladium/61587511828514/?ref=PROFILE_EDIT_xav_ig_profile_page_web" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border-primary flex items-center justify-center hover:bg-gold-accent/10 hover:border-gold-accent/30 transition-all text-text-muted hover:text-gold-accent" aria-label="Facebook">
                  <Facebook className="h-3.5 w-3.5" />
                </a>
                <a href="https://api.whatsapp.com/message/TYQIYELJTZJFB1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border-primary flex items-center justify-center hover:bg-gold-accent/10 hover:border-gold-accent/30 transition-all text-text-muted hover:text-gold-accent" aria-label="WhatsApp">
                  <MessageCircle className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-text-muted/60 gap-4">
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
