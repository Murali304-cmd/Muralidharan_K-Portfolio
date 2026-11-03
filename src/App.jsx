import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Volume2, VolumeX, ArrowUp } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutLanyard from './components/AboutLanyard';
import MountainJourney from './components/MountainJourney';
import SkillsPeriodic from './components/SkillsPeriodic';
import WorkAccordion from './components/WorkAccordion';
import CertificationsInk from './components/CertificationsInk';
import ExperienceSpine from './components/ExperienceSpine';
import AchievementsHorizontal from './components/AchievementsHorizontal';
import ContactLetterHop from './components/ContactLetterHop';
import Footer from './components/Footer';
import { useThemeMode } from './hooks/useThemeMode';
import { sound } from './hooks/useSoundHaptics';

export default function App() {
  const { mode, toggleMode, isCyber } = useThemeMode();
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleSound = () => {
    const next = sound.toggleSound();
    setSoundEnabled(next);
    if (next) sound.playClick();
    window.dispatchEvent(new CustomEvent('portfolio-audio-toggle', { detail: { enabled: next } }));
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-paper text-ink font-sans antialiased selection:bg-ink selection:text-paper relative transition-colors duration-400 ${isCyber ? 'dark-cyber-grid' : ''}`}>
      {/* Unique Awwwards-Level Cinematic Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Interactive Cursor Spotlight Glow Orb */}
      <div
        className="pointer-events-none fixed z-30 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-60 hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '380px',
          height: '380px',
          background: isCyber
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(16, 185, 129, 0.08) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(13, 13, 13, 0.04) 0%, rgba(210, 180, 140, 0.06) 45%, transparent 70%)',
        }}
      />

      {/* Dynamic Growing Ambient Background Halos (Awwwards Polish) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none">
        <div
          className={`ambient-grow-1 absolute top-[12%] left-[6%] w-[520px] h-[520px] rounded-full blur-[110px] ${
            isCyber
              ? 'bg-gradient-to-tr from-cyan-600/25 via-emerald-500/15 to-transparent'
              : 'bg-gradient-to-tr from-amber-400/15 via-rose-300/10 to-transparent'
          }`}
        />
        <div
          className={`ambient-grow-2 absolute bottom-[18%] right-[8%] w-[620px] h-[620px] rounded-full blur-[130px] ${
            isCyber
              ? 'bg-gradient-to-bl from-blue-600/20 via-teal-500/15 to-transparent'
              : 'bg-gradient-to-bl from-orange-300/12 via-amber-200/15 to-transparent'
          }`}
        />
      </div>

      {/* 1. Frosted Glass Top Navigation with Dual Mode Switcher */}
      <Navbar mode={mode} toggleMode={toggleMode} />

      {/* 2. One Continuous Calm Scroll */}
      <main>
        {/* Section 01: Hero with Full Uncropped 16:9 Landscape Video */}
        <Hero />

        {/* Section 02: About with 3-Column Grid & Hanging Lanyard ID Card (3D Tilt) */}
        <AboutLanyard />

        {/* Section 03: The Engineering & Research Mountain Trek (Altitude Telemetry) */}
        <MountainJourney />

        {/* Section 04: Periodic Table of My Stack (Curated Power Elements) */}
        <SkillsPeriodic />

        {/* Section 05: Selected Work (Expanding Horizontal Accordion Gallery + Live Simulators) */}
        <WorkAccordion />

        {/* Section 06: Always Learning (Ink-Flood Certifications Index) */}
        <CertificationsInk />

        {/* Section 07: Education & Experience as One Continuous Path */}
        <ExperienceSpine />

        {/* Section 08: Proven Results (Achievements Horizontal Gallery) */}
        <AchievementsHorizontal />

        {/* Section 09: Letter-Hop Contact & Direct Communication Envelope */}
        <ContactLetterHop />
      </main>

      {/* 3. Minimal Footer */}
      <Footer />

      {/* 4. Persistent Floating Quick Controls Dock (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 select-none">
        {/* Theme Toggle Pill */}
        <button
          onClick={toggleMode}
          title={`Switch to ${mode === 'paper' ? 'Cyber Obsidian Mode' : 'Editorial Paper Mode'}`}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-card/90 border border-line shadow-soft-lg text-xs font-mono font-bold text-ink backdrop-blur-md hover:scale-105 active:scale-95 transition-all group"
        >
          {isCyber ? (
            <>
              <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              <span className="hidden sm:inline">Paper Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-ink group-hover:-rotate-12 transition-transform" />
              <span className="hidden sm:inline">Cyber Mode</span>
            </>
          )}
        </button>

        {/* Audio Haptics Pill */}
        <button
          onClick={handleToggleSound}
          title={soundEnabled ? 'Mute Interface Sound Effects' : 'Enable Interface Sound Effects'}
          className="w-9 h-9 rounded-full bg-card/90 border border-line shadow-soft-lg flex items-center justify-center text-ink backdrop-blur-md hover:scale-105 active:scale-95 transition-all"
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-ink" />
          ) : (
            <VolumeX className="w-4 h-4 text-faint" />
          )}
        </button>

        {/* Back to top Quick Trigger */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              title="Back to Top"
              className="w-9 h-9 rounded-full bg-ink text-paper shadow-soft-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
