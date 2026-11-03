import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { sound } from '../hooks/useSoundHaptics';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Trek' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ mode, toggleMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress((window.scrollY / total) * 100);
      }

      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.offsetTop <= window.scrollY + 200) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    const next = sound.toggleSound();
    setSoundEnabled(next);
    if (next) sound.playClick();
  };

  return (
    <>
      {/* 2px ink scroll-progress bar along the very top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-line z-50">
        <div
          className="h-full bg-ink transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Round Initials Mark + Full Name */}
          <a
            href="#hero"
            onClick={() => sound.playClick()}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 group-hover:rotate-[360deg] ${
                scrolled
                  ? 'bg-ink text-paper'
                  : 'border border-ink text-ink bg-transparent'
              }`}
            >
              MK
            </div>
            <span
              className={`font-semibold text-sm tracking-tight text-ink transition-opacity duration-300 ${
                scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              Muralidharan K
            </span>
          </a>

          {/* Center / Right: Frosted Glass Nav Pill with Dual Mode Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <nav className="flex items-center gap-1 bg-card/85 backdrop-blur-md px-2 py-1.5 rounded-full border border-line shadow-soft-lg">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-3.5 py-1 text-xs font-mono transition-colors duration-200 ${
                      isActive ? 'text-paper font-semibold' : 'text-mute hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-ink rounded-full -z-10 shadow-sm"
                        transition={{ type: 'spring', damping: 25, stiffness: 320 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}

              <div className="w-px h-3.5 bg-line mx-1" />

              {/* Direct Resume Download Button */}
              <a
                href="/resume.pdf"
                download="Muralidharan_K_Resume.pdf"
                onClick={() => sound.playClick()}
                className="px-3 py-1 text-xs font-mono text-ink hover:text-mute transition-colors flex items-center gap-1"
              >
                <span>CV</span>
                <span className="text-[10px]">↓</span>
              </a>
            </nav>

            {/* DUAL MODE TOGGLE BUTTON (Day Paper ⇄ Cyber Dark) */}
            <button
              onClick={toggleMode}
              title={`Switch to ${mode === 'paper' ? 'Cyber Obsidian Mode' : 'Editorial Paper Mode'}`}
              className="w-9 h-9 rounded-full bg-card border border-line flex items-center justify-center text-ink hover:scale-105 active:scale-95 transition-all shadow-soft-lg"
            >
              {mode === 'paper' ? (
                <Moon className="w-4 h-4 text-ink" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* SOUND HAPTICS TOGGLE BUTTON */}
            <button
              onClick={handleToggleSound}
              title={soundEnabled ? 'Mute Interface Sound Effects' : 'Enable Interface Sound Effects'}
              className="w-9 h-9 rounded-full bg-card border border-line flex items-center justify-center text-ink hover:scale-105 active:scale-95 transition-all shadow-soft-lg"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-ink" />
              ) : (
                <VolumeX className="w-4 h-4 text-faint" />
              )}
            </button>
          </div>

          {/* Mobile "Menu" Pill + Mode Switcher */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleMode}
              className="w-8 h-8 rounded-full bg-card border border-line flex items-center justify-center text-ink"
            >
              {mode === 'paper' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
            </button>

            <button
              onClick={() => {
                sound.playPaperRustle();
                setMobileMenuOpen(true);
              }}
              className="px-3 py-1 rounded-full bg-card border border-line text-xs font-mono text-ink flex items-center gap-1"
            >
              <Menu className="w-3.5 h-3.5" />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Paper Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-paper p-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-mute uppercase tracking-widest">
                Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 my-auto">
              {NAV_LINKS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full flex items-baseline gap-4 text-left py-2 border-b border-line group"
                >
                  <span className="font-mono text-xs text-mute">0{idx + 1}</span>
                  <span className="text-3xl font-bold tracking-tight text-ink group-hover:translate-x-2 transition-transform">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-line space-y-3">
              <a
                href="/resume.pdf"
                download="Muralidharan_K_Resume.pdf"
                className="w-full py-3 rounded-full bg-ink text-paper text-xs font-mono font-semibold flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Verified Resume PDF</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
