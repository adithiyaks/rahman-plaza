/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, Landmark, Compass, Award, PhoneCall, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeView: 'home' | 'plaza' | 'palladium' | 'khalifa';
  onNavigate: (view: 'home' | 'plaza' | 'palladium' | 'khalifa') => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ activeView, onNavigate, theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const getThemeStyles = () => {
    switch (activeView) {
      case 'plaza':
        return {
          border: 'border-[#c5a059]/20',
          bg: 'bg-[#0a0a0a]/80',
          textActive: 'text-emerald-400',
          indicator: 'bg-emerald-500',
        };
      case 'palladium':
        return {
          border: 'border-[#c5a059]/40',
          bg: 'bg-[#0a0a0a]/90',
          textActive: 'text-[#c5a059]',
          indicator: 'bg-[#c5a059]',
        };
      case 'khalifa':
        return {
          border: 'border-white/10',
          bg: 'bg-[#0a0a0a]/80',
          textActive: 'text-white font-bold',
          indicator: 'bg-white',
        };
      default: // 'home'
        if (theme === 'light') {
          return {
            border: 'border-black/5',
            bg: 'bg-white/60',
            textActive: 'text-gold-accent',
            indicator: 'bg-gold-accent',
          };
        }
        return {
          border: 'border-white/5',
          bg: 'bg-[#0a0a0a]/60',
          textActive: 'text-[#c5a059]',
          indicator: 'bg-[#c5a059]',
        };
    }
  };

  const navTheme = getThemeStyles();
  const isLightHome = activeView === 'home' && theme === 'light';
  const inactiveTextColor = isLightHome ? 'text-neutral-500 hover:text-black' : 'text-neutral-400 hover:text-white';

  const navItems = [
    { id: 'home', label: 'Overview', icon: Compass },
    { id: 'plaza', label: 'Rahman Plaza', icon: Landmark },
    { id: 'palladium', label: 'The Palladium', icon: Award },
    { id: 'khalifa', label: 'Khalifa Fashion', icon: PhoneCall },
  ] as const;

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 pointer-events-none"
    >
      <div 
        className={`max-w-6xl mx-auto rounded-full border ${navTheme.border} ${navTheme.bg} backdrop-blur-xl transition-all duration-500 pointer-events-auto px-6 sm:px-8 py-3 flex items-center justify-between shadow-2xl`}
      >
        {/* LOGO */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden bg-card-bg-solid flex items-center justify-center border border-gold-accent/35 group-hover:border-gold-accent/60 transition-colors duration-300">
            <img 
              src="/logo.jpg" 
              alt="Rahman Plaza Logo" 
              className="w-full h-full object-cover select-none group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-accent/15 to-white/5 opacity-40 pointer-events-none" />
          </div>
          <div>
            <h1 className="font-sans text-sm tracking-widest text-text-primary font-semibold group-hover:text-gold-accent transition-colors">
              RAHMAN
            </h1>
            <p className="text-[9px] font-mono tracking-widest text-text-muted group-hover:text-text-strong transition-colors">
              EST. 1974 • JUBILEE
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative py-1 text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  isActive ? `${navTheme.textActive} font-medium` : inactiveTextColor
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] rounded-full ${navTheme.indicator}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* RECTANGLE DEBRIS ACTION BUTTON & THEME TOGGLE */}
        <div className="hidden md:flex items-center gap-2">
          {activeView === 'home' && (
            <>
              <button
                onClick={onToggleTheme}
                className={`p-1.5 rounded-full transition-colors cursor-pointer pointer-events-auto mr-1 ${
                  theme === 'light' ? 'hover:bg-neutral-100 text-neutral-500 hover:text-black' : 'hover:bg-neutral-800 text-neutral-400 hover:text-white'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </button>
              <div className={`h-4 w-[1px] mr-2 ${theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-850'}`} />
            </>
          )}
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
            Triplicane, CH
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>

        {/* MOBILE MENU & THEME TOGGLE */}
        <div className="flex items-center gap-2 md:hidden">
          {activeView === 'home' && (
            <button
              onClick={onToggleTheme}
              className={`p-1.5 rounded-full transition-colors cursor-pointer pointer-events-auto ${
                theme === 'light' ? 'hover:bg-neutral-100 text-neutral-500 hover:text-black' : 'hover:bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-1 transition-colors pointer-events-auto ${
              isLightHome ? 'text-neutral-600 hover:text-black' : 'text-neutral-300 hover:text-white'
            }`}
            aria-label="Toggle menu"
            id="menu-toggle-btn"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`absolute top-20 left-4 right-4 pointer-events-auto md:hidden rounded-3xl p-6 flex flex-col gap-4 z-50 backdrop-blur-2xl border ${
            isLightHome ? 'bg-white/95 border-neutral-200 shadow-xl text-neutral-900' : 'bg-black/95 border-neutral-800 shadow-2xl text-neutral-400'
          }`}
          id="mobile-nav-popup"
        >
          <div className={`border-b pb-3 mb-2 flex items-center justify-between ${isLightHome ? 'border-neutral-150' : 'border-neutral-900'}`}>
            <span className={`text-xs font-mono tracking-widest uppercase ${isLightHome ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Brand Navigation
            </span>
            <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-semibold uppercase animate-pulse ${
              isLightHome ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-emerald-950 text-emerald-400 border-emerald-500/20'
            }`}>
              Jubilee Year
            </span>
          </div>

          {navItems.map((item) => {
            const isActive = activeView === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-4 py-3 px-4 rounded-xl text-sm transition-all text-left uppercase tracking-wider ${
                  isActive
                    ? (isLightHome ? 'bg-neutral-100 text-gold-accent border border-neutral-200' : 'bg-neutral-900 text-amber-400 border border-neutral-800')
                    : (isLightHome ? 'text-neutral-500 hover:text-black hover:bg-neutral-50' : 'text-neutral-400 hover:text-white hover:bg-neutral-950')
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? (isLightHome ? 'text-gold-accent' : 'text-amber-400') : (isLightHome ? 'text-neutral-400' : 'text-neutral-500')}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className={`mt-4 pt-4 border-t flex flex-col gap-2 text-center ${isLightHome ? 'border-neutral-150' : 'border-neutral-900'}`}>
            <p className={`text-[10px] font-mono uppercase tracking-wide ${isLightHome ? 'text-neutral-400' : 'text-neutral-500'}`}>
              No. 128, Rahman Plaza Rd, Triplicane, Chennai
            </p>
            <p className={`text-[10px] font-mono ${isLightHome ? 'text-neutral-550' : 'text-neutral-450'}`}>
              Open Daily: 10:00 AM — 10:00 PM
            </p>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
