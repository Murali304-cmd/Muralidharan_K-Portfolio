import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ProgressRail from './components/ProgressRail';
import GuidedTour from './components/GuidedTour';
import CommandPalette from './components/CommandPalette';
import AskMurali from './components/AskMurali';

import Scene1EnvelopeHero from './components/Scene1EnvelopeHero';
import Scene2CollegeJourney from './components/Scene2CollegeJourney';
import Scene3Skills from './components/Scene3Skills';
import Scene4Projects from './components/Scene4Projects';
import Scene5Experience from './components/Scene5Experience';
import Scene6LeetCode from './components/Scene6LeetCode';
import Scene7Resume from './components/Scene7Resume';
import Scene8ContactEnvelope from './components/Scene8ContactEnvelope';
import Footer from './components/Footer';

import { scenes } from './data/journey';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const [activeScene, setActiveScene] = useState(scenes[0].id);
  const [isTourActive, setIsTourActive] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Apply theme class to <html>
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // ScrollSpy to track active scene
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = scenes.length - 1; i >= 0; i--) {
        const el = document.getElementById(scenes[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveScene(scenes[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-[#111827] dark:text-[#F1F5F9] transition-colors duration-300 selection:bg-brand-500 selection:text-white relative">
      {/* 1. Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 2. Top Navigation */}
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            onOpenPalette={() => setIsPaletteOpen(true)}
            onOpenAssistant={() => setIsAssistantOpen(true)}
            onStartTour={() => setIsTourActive(true)}
            activeScene={activeScene}
          />

          {/* 3. Pipeline Progress Rail (Desktop) */}
          <ProgressRail activeScene={activeScene} />

          {/* 4. Journey Scenes */}
          <main>
            {/* Scene 1: Envelope Intro & Talking 3D Hero */}
            <Scene1EnvelopeHero />

            {/* Scene 2: Journey to College */}
            <Scene2CollegeJourney />

            {/* Scene 3: Skills & Periodic Table */}
            <Scene3Skills />

            {/* Scene 4: Projects & Case Files */}
            <Scene4Projects />

            {/* Scene 5: Experience & Milestones */}
            <Scene5Experience />

            {/* Scene 6: LeetCode Analytics Dashboard */}
            <Scene6LeetCode />

            {/* Scene 7: Resume Download */}
            <Scene7Resume />

            {/* Scene 8: Contact Envelope */}
            <Scene8ContactEnvelope />
          </main>

          {/* 5. Footer */}
          <Footer />

          {/* 6. Modals & Overlays */}
          <CommandPalette
            isOpen={isPaletteOpen}
            onClose={() => setIsPaletteOpen(false)}
            toggleTheme={toggleTheme}
            theme={theme}
          />

          <AskMurali
            isOpen={isAssistantOpen}
            onClose={() => setIsAssistantOpen(false)}
          />

          <GuidedTour
            isActive={isTourActive}
            onClose={() => setIsTourActive(false)}
          />
        </motion.div>
      )}
    </div>
  );
}
