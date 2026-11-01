import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scenes } from '../data/journey';

export default function ProgressRail({ activeScene }) {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollPercent(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside 
      aria-label="Pipeline navigation rail"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center select-none"
    >
      <div className="relative py-4 flex flex-col items-center">
        {/* Rail background spine */}
        <div className="w-0.5 h-72 bg-slate-200 dark:bg-slate-800 rounded-full relative">
          {/* Scroll progress fill */}
          <motion.div
            className="w-full bg-gradient-to-b from-brand-500 via-accent-cyan to-brand-600 rounded-full origin-top"
            style={{ height: `${scrollPercent}%` }}
          />
        </div>

        {/* Stage Nodes positioned along the spine */}
        <div className="absolute inset-0 flex flex-col justify-between items-center py-2">
          {scenes.map((scene, idx) => {
            const isActive = activeScene === scene.id;
            return (
              <div key={scene.id} className="relative group flex items-center justify-center">
                {/* Clickable node circle */}
                <button
                  onClick={() => scrollTo(scene.id)}
                  aria-label={`Jump to stage ${scene.number}: ${scene.title}`}
                  className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 ${
                    isActive
                      ? 'bg-brand-600 scale-125 shadow-glow ring-4 ring-brand-100 dark:ring-brand-900/60'
                      : 'bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 hover:border-brand-500 group-hover:scale-110'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-white' : 'bg-transparent'
                    }`}
                  />
                </button>

                {/* Floating tooltip on hover */}
                <div className="absolute right-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
                  <div className="px-2.5 py-1 rounded-lg bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 text-xs font-mono shadow-md backdrop-blur-xs flex items-center gap-1.5">
                    <span className="text-brand-400 dark:text-brand-600 font-bold">{scene.number}</span>
                    <span>{scene.stage}</span>
                    <span className="text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-[11px] font-sans font-medium">{scene.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pipeline label at bottom */}
      <div className="mt-3 text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase rotate-90 origin-left translate-x-3.5">
        DATA PIPELINE
      </div>
    </aside>
  );
}
