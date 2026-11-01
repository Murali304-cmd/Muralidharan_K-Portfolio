import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, Moon, Compass, Search, Bot, Menu, X, 
  Download, FileText, ChevronRight, Sparkles 
} from 'lucide-react';
import { scenes } from '../data/journey';

export default function Navbar({ 
  theme, 
  toggleTheme, 
  onOpenPalette, 
  onOpenAssistant, 
  onStartTour,
  activeScene 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 dark:bg-[#0B0F19]/85 backdrop-blur-md shadow-sm border-b border-slate-200/60 dark:border-slate-800/60 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <a 
          href="#scene-hero" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-cyan flex items-center justify-center text-white font-mono font-bold shadow-soft group-hover:scale-105 transition-transform">
            KM
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
              K. Muralidharan
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for opportunities" />
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:inline">
              Data Analyst • ML Dev
            </span>
          </div>
        </a>

        {/* Desktop Quick Stage Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/60 backdrop-blur-sm p-1 rounded-full border border-slate-200/60 dark:border-slate-700/60">
          {scenes.map((scene) => {
            const isActive = activeScene === scene.id;
            return (
              <button
                key={scene.id}
                onClick={() => scrollToSection(scene.id)}
                className={`px-3 py-1 text-xs font-mono rounded-full transition-all duration-200 relative ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-cyan rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                )}
                {scene.navLabel}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* 60s Tour Button (Judge Mode) */}
          <button
            onClick={onStartTour}
            title="60-Second Guided Tour for Hackathon Judges"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-brand-50 to-cyan-50 dark:from-brand-950/40 dark:to-cyan-950/40 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 hover:shadow-glow transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-brand-600 animate-spin-slow" />
            <span>60s Tour</span>
            <span className="px-1.5 py-0.2 bg-brand-500 text-white text-[10px] rounded-full font-mono font-bold">
              Judge
            </span>
          </button>

          {/* Ask Murali AI Assistant */}
          <button
            onClick={onOpenAssistant}
            title="Ask Muralidharan (Offline AI Assistant)"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
          >
            <Bot className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
          </button>

          {/* Command Palette Trigger (Ctrl+K) */}
          <button
            onClick={onOpenPalette}
            title="Open Command Palette (Ctrl+K)"
            className="hidden md:inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-700 rounded border border-slate-300 dark:border-slate-600 shadow-xs">
              ⌘K
            </kbd>
          </button>

          {/* Resume Quick Link */}
          <a
            href="/resume.pdf"
            download="Muralidharan_K_Resume.pdf"
            title="Direct Download Resume PDF"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>CV</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 lg:hidden rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartTour();
                  }}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 text-xs font-medium"
                >
                  <Compass className="w-4 h-4 text-brand-500" />
                  <span>60s Judge Tour</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAssistant();
                  }}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 text-accent-cyan text-xs font-medium"
                >
                  <Bot className="w-4 h-4" />
                  <span>Ask Murali</span>
                </button>
              </div>

              {scenes.map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => scrollToSection(scene.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeScene === scene.id
                      ? 'bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-brand-500">{scene.number}</span>
                    <span>{scene.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}

              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  download="Muralidharan_K_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium shadow-soft"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Verified Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
