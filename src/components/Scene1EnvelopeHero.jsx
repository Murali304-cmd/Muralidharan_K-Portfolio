import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MailOpen, Volume2, VolumeX, Sparkles, ArrowDown, 
  Download, Send, FolderGit2, Terminal, Database, Cpu 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profile } from '../data/profile';

export default function Scene1EnvelopeHero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  // Trigger confetti and open envelope
  const handleOpenEnvelope = () => {
    setIsOpen(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366F1', '#06B6D4', '#10B981', '#F59E0B']
      });
    } catch (e) {
      // safe fallback
    }
  };

  // Video visibility observer (pause when under 35% visible)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
              videoRef.current.play().catch(() => {});
              setIsPlaying(true);
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: [0, 0.35, 1.0] }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="scene-hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden dot-grid-pattern"
    >
      {/* Background Stage Indicator Pill */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700/60 text-xs font-mono text-slate-500 dark:text-slate-400">
        <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
        <span className="font-bold text-brand-600 dark:text-brand-400">STAGE 00 / BOOT</span>
        <span>•</span>
        <span>STORY ENTRY POINT</span>
      </div>

      {/* Floating Ghost Word "MURALI" behind content */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.035] dark:opacity-[0.06]"
      >
        <span className="text-[18vw] font-black font-mono tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
          MURALI
        </span>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* SCENE 1 INITIAL STATE: The Animated Story Envelope */}
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            {/* 3D Envelope Container */}
            <div className="relative group cursor-pointer" onClick={handleOpenEnvelope}>
              {/* Soft glow behind envelope */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 via-accent-cyan/20 to-brand-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-80" />

              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-80 sm:w-96 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 shadow-premium border-2 border-brand-200/80 dark:border-brand-700/60 flex flex-col items-center text-center"
              >
                {/* Envelope Stamp / Wax Seal icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-600 to-accent-cyan text-white flex items-center justify-center shadow-lg mb-6 group-hover:rotate-12 transition-transform">
                  <MailOpen className="w-8 h-8" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300 font-mono text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                  SCENE 1 • PORTFOLIO STORY
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  A Journey of Curiosity, Learning & Innovation
                </h2>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                  Click to open the envelope and begin the interactive data-product story of K. Muralidharan.
                </p>

                {/* Open Button */}
                <button
                  onClick={handleOpenEnvelope}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-600 to-accent-cyan text-white text-sm font-semibold shadow-glow hover:shadow-lg transition-all"
                >
                  <MailOpen className="w-4 h-4" />
                  <span>Open My Story</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* SCENE 1 REVEALED: Unfolded Letter + Talking 3D Hero */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Column: Headline, Bio & Primary CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 border border-brand-200/80 dark:border-brand-700/50 text-xs font-mono font-medium mb-4"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>DATA ANALYST & ML DEVELOPER</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]"
              >
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-cyan bg-clip-text text-transparent">
                  K. Muralidharan.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-5 leading-relaxed max-w-xl"
              >
                B.E. Information Technology student at <strong className="text-slate-900 dark:text-white">Dr. Mahalingam College of Engineering and Technology (Dr. MCET), Pollachi</strong>. Passionate about engineering intelligent systems through predictive modeling, data pipelines, and local AI assistants.
              </motion.p>

              {/* Action Buttons: Explore Work, Download Resume, Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-3.5 mt-8 w-full sm:w-auto"
              >
                <button
                  onClick={() => scrollToSection('scene-projects')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-medium text-sm shadow-soft hover:shadow-glow transition-all"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>Explore My Work</span>
                </button>

                <a
                  href="/resume.pdf"
                  download="Muralidharan_K_Resume.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-soft transition-all"
                >
                  <Download className="w-4 h-4 text-brand-500" />
                  <span>Download Resume</span>
                </a>

                <button
                  onClick={() => scrollToSection('scene-contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Send className="w-4 h-4 text-slate-400" />
                  <span>Contact Me</span>
                </button>
              </motion.div>

              {/* Quick Stat Pill Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/80 text-xs font-mono text-slate-500 dark:text-slate-400"
              >
                <div>
                  <span className="font-bold text-slate-900 dark:text-white text-base">8.3</span> CGPA
                </div>
                <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white text-base">16,434</span> TCS CodeVita Rank
                </div>
                <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white text-base">136</span> LeetCode Solved
                </div>
              </motion.div>
            </div>

            {/* Right Column: Talking 3D Hero Avatar with Sound Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="lg:col-span-5 relative flex flex-col items-center justify-center"
            >
              {/* Soft Ambient Radial Backdrop */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-brand-500/20 via-accent-cyan/20 to-transparent blur-3xl pointer-events-none" />

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 left-6 z-20 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 shadow-soft border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm text-xs font-mono text-brand-600 dark:text-brand-400 flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Python & ML</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/3 -right-2 z-20 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 shadow-soft border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm text-xs font-mono text-accent-cyan flex items-center gap-1.5"
              >
                <Database className="w-3.5 h-3.5" />
                <span>Power BI & DAX</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-2 left-10 z-20 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 shadow-soft border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>RAG & FAISS</span>
              </motion.div>

              {/* Video Player Container */}
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/14] rounded-3xl overflow-hidden shadow-premium border border-slate-200/80 dark:border-slate-800 bg-white">
                {/* 3D Intro Video: Seamless multiply blend into page */}
                <video
                  ref={videoRef}
                  src="/hero-video.mp4"
                  poster="/murali-portrait.jpg"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover object-top mix-blend-multiply transition-all"
                />

                {/* Sound Toggle Button (aria-label only, round button) */}
                <button
                  onClick={toggleSound}
                  aria-label={isMuted ? "Unmute intro video audio" : "Mute intro video audio"}
                  className="absolute bottom-4 right-4 z-30 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-400"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-slate-300" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-accent-cyan animate-pulse" />
                  )}
                </button>

                {/* Subtitle tag overlay */}
                <div className="absolute top-4 left-4 z-30 px-2.5 py-1 rounded-lg bg-slate-900/70 backdrop-blur-sm text-[11px] font-mono text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>3D AVATAR INTRO</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Down scroll cue */}
      {isOpen && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 dark:text-slate-500 animate-bounce cursor-pointer" onClick={() => scrollToSection('scene-journey')}>
          <span className="text-[10px] font-mono uppercase tracking-widest mb-1">Scroll to Journey</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      )}
    </section>
  );
}

