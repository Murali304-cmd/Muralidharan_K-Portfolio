import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Database, Cpu, BarChart2, ShieldCheck, ArrowRight } from 'lucide-react';
import { sound } from '../hooks/useSoundHaptics';

const STAGES = [
  { progress: 0, text: 'INITIALIZING RUNTIME & DOMAIN CORES...' },
  { progress: 24, text: 'LOADING NEURAL WEIGHTS & ML PIPELINES (PyTorch, Scikit-Learn)...' },
  { progress: 52, text: 'CONNECTING FAISS LOCAL VECTOR INDICES (NILA RAG Engine)...' },
  { progress: 78, text: 'CALIBRATING MCET IT \'28 TELEMETRY & VERIFIED METRICS...' },
  { progress: 96, text: 'SYNCHRONIZING VERIFIED PORTFOLIO DATA PRODUCT...' },
  { progress: 100, text: 'SYSTEM CALIBRATED. ENTERING MURALIDHARAN K PORTFOLIO.' },
];

export default function LoadingScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [currentText, setCurrentText] = useState(STAGES[0].text);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 4) + 2;
      if (current >= 100) {
        current = 100;
        setPercent(100);
        setCurrentText(STAGES[STAGES.length - 1].text);
        clearInterval(interval);
        sound.playChime();

        // Trigger cinematic split curtain exit
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 800);
        }, 350);
      } else {
        setPercent(current);
        // Update stage text based on threshold
        const match = [...STAGES].reverse().find((s) => current >= s.progress);
        if (match) setCurrentText(match.text);
      }
    }, 40);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        clearInterval(interval);
        setIsExiting(true);
        setTimeout(onComplete, 400);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sound.playClick();
    setIsExiting(true);
    setTimeout(onComplete, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-auto select-none font-sans">
      {/* Top Split Curtain Panel */}
      <motion.div
        animate={{ y: isExiting ? '-100%' : '0%' }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#080B12] border-b border-white/10 z-10"
      />

      {/* Bottom Split Curtain Panel */}
      <motion.div
        animate={{ y: isExiting ? '100%' : '0%' }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#080B12] border-t border-white/10 z-10"
      />

      {/* Central Interactive Content Layer */}
      <motion.div
        animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 0.95 : 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-20 w-full h-full flex flex-col items-center justify-between p-6 sm:p-12 text-white"
      >
        {/* Top Header Bar */}
        <div className="w-full max-w-4xl flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold tracking-wider text-slate-200">MK / BOOT SEQUENCE</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px]">
            <span>DR. MCET IT '28</span>
            <span className="text-slate-600">•</span>
            <span>DATA PRODUCT 1.0</span>
          </div>

          <button
            onClick={handleSkip}
            className="px-3 py-1 rounded-full border border-white/15 text-[11px] font-mono hover:bg-white/10 text-slate-300 transition-all flex items-center gap-1 active:scale-95"
          >
            <span>Skip [Esc]</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Centerpiece: Glowing Orbital Monogram & Radar Telemetry */}
        <div className="relative flex flex-col items-center justify-center my-auto">
          {/* Orbital SVG Radar Rings */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            {/* Outer Rotating Dashed Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30"
            />

            {/* Counter-Rotating Mid Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border border-dotted border-emerald-500/40"
            />

            {/* Glowing Center Orb */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500/20 via-emerald-500/10 to-amber-500/20 blur-xl animate-pulse" />

            {/* Central Monogram Plate */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0D121F] border-2 border-white/20 shadow-2xl flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-black font-mono tracking-tighter text-white">
                MK
              </span>
              <span className="text-[8px] font-mono tracking-widest text-emerald-400 uppercase font-bold mt-0.5">
                VERIFIED
              </span>
            </div>

            {/* 4 Orbiting Telemetry Badges */}
            <div className="absolute -top-3 px-2 py-0.5 rounded-full bg-[#111827] border border-cyan-400/40 text-[9px] font-mono text-cyan-300 font-bold shadow-lg">
              8.3 CGPA
            </div>
            <div className="absolute -bottom-3 px-2 py-0.5 rounded-full bg-[#111827] border border-emerald-400/40 text-[9px] font-mono text-emerald-300 font-bold shadow-lg">
              136 LEETCODE
            </div>
            <div className="absolute -left-6 sm:-left-8 px-2 py-0.5 rounded-full bg-[#111827] border border-amber-400/40 text-[9px] font-mono text-amber-300 font-bold shadow-lg hidden xs:block">
              CODEVITA #16,434
            </div>
            <div className="absolute -right-6 sm:-right-8 px-2 py-0.5 rounded-full bg-[#111827] border border-purple-400/40 text-[9px] font-mono text-purple-300 font-bold shadow-lg hidden xs:block">
              HACKERRANK 5★
            </div>
          </div>

          {/* Large Kinetic Number Counter */}
          <div className="mt-8 flex items-baseline gap-1">
            <span className="text-6xl sm:text-8xl font-black font-mono tracking-tight text-white leading-none">
              {percent < 10 ? `0${percent}` : percent}
            </span>
            <span className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400">
              %
            </span>
          </div>

          {/* Full Name & Subtitle */}
          <div className="mt-3 text-center">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans">
              Muralidharan K
            </h1>
            <p className="text-xs font-mono text-slate-400 mt-0.5">
              Data Analyst | Machine Learning Developer
            </p>
          </div>
        </div>

        {/* Bottom Telemetry Terminal Progress Bar */}
        <div className="w-full max-w-2xl mb-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
            <div className="flex items-center gap-2 truncate max-w-[80%]">
              <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-slate-300 font-medium truncate">{currentText}</span>
            </div>
            <span className="font-bold text-cyan-400">{percent}/100</span>
          </div>

          {/* High-tech Multi-segment Progress Track */}
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300 rounded-full"
              style={{ width: `${percent}%` }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-2">
            <span>CORE: PYTHON • SQL • ML • RAG</span>
            <span>SKILLINF HACKATHON 2026</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
