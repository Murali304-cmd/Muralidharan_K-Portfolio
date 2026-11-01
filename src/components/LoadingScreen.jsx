import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Database, Cpu, BarChart2, GraduationCap } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState('Initializing journey data...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        const next = prev + 5;
        if (next < 25) setStageText('Mapping path: Dharmapuri to Dr. MCET Pollachi...');
        else if (next < 55) setStageText('Ingesting data analytics & ML foundations...');
        else if (next < 85) setStageText('Calibrating interactive story pipelines...');
        else setStageText('Welcome to K. Muralidharan’s portfolio...');
        return next;
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8FAFC] dark:bg-[#0B0F19] p-6 select-none overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute w-96 h-96 bg-brand-500/10 dark:bg-brand-500/20 rounded-full blur-3xl pointer-events-none -top-10 -left-10" />
      <div className="absolute w-96 h-96 bg-accent-cyan/10 dark:bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none -bottom-10 -right-10" />

      <div className="relative max-w-md w-full flex flex-col items-center text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 text-xs font-mono font-medium border border-brand-200/60 dark:border-brand-700/50 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 animate-spin text-brand-500" />
          <span>PORTFOLIO AS A DATA PRODUCT</span>
        </motion.div>

        {/* Traveling Vehicle on Road Animation */}
        <div className="w-full relative py-6">
          {/* Milestone markers */}
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 dark:text-slate-500 mb-2 px-2">
            <span className="flex items-center gap-1">📍 Dharmapuri</span>
            <span className="flex items-center gap-1">🎓 Dr. MCET Pollachi</span>
          </div>

          {/* Road track */}
          <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full relative overflow-hidden border border-slate-300/50 dark:border-slate-700">
            {/* Dashed center line */}
            <div className="absolute inset-0 flex items-center justify-between px-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2.5 h-0.5 bg-slate-300 dark:bg-slate-600 rounded-sm" />
              ))}
            </div>

            {/* Road travel fill */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-brand-500 to-accent-cyan rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Moving Vehicle representation */}
          <motion.div
            className="absolute top-8 text-xl"
            style={{ left: `calc(${progress}% - 14px)` }}
            transition={{ type: 'spring', damping: 20 }}
          >
            🚗
          </motion.div>

          {/* Floating tech nodes popping up */}
          <div className="flex justify-between mt-8 px-4">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
              className={`p-2 rounded-xl transition-all duration-300 ${
                progress > 20
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-soft scale-100'
                  : 'opacity-30 scale-90'
              }`}
            >
              <Terminal className="w-4 h-4" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className={`p-2 rounded-xl transition-all duration-300 ${
                progress > 45
                  ? 'bg-white dark:bg-slate-800 text-accent-cyan shadow-soft scale-100'
                  : 'opacity-30 scale-90'
              }`}
            >
              <Database className="w-4 h-4" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className={`p-2 rounded-xl transition-all duration-300 ${
                progress > 70
                  ? 'bg-white dark:bg-slate-800 text-amber-500 shadow-soft scale-100'
                  : 'opacity-30 scale-90'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              className={`p-2 rounded-xl transition-all duration-300 ${
                progress > 90
                  ? 'bg-white dark:bg-slate-800 text-emerald-500 shadow-soft scale-100'
                  : 'opacity-30 scale-90'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
            </motion.div>
          </div>
        </div>

        {/* Name and Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4"
        >
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            K. Muralidharan
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 italic font-serif">
            "Every journey begins with curiosity..."
          </p>
        </motion.div>

        {/* Progress & Stage Description */}
        <div className="w-full mt-6">
          <div className="flex justify-between items-center text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
            <span className="truncate max-w-[280px] text-left">{stageText}</span>
            <span className="font-bold text-brand-600 dark:text-brand-400">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-500 to-accent-cyan rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip Button for quick entry */}
        <button
          onClick={onComplete}
          className="mt-6 text-xs font-mono text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 underline decoration-slate-300 dark:decoration-slate-700 transition-colors"
        >
          Skip Intro → Enter Directly
        </button>
      </div>
    </motion.div>
  );
}

