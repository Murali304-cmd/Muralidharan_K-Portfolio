import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, X, Compass, CheckCircle } from 'lucide-react';
import { scenes } from '../data/journey';

const TOUR_STOPS = [
  {
    sceneId: 'scene-hero',
    title: 'Stage 01: The Envelope & 3D Talking Hero',
    insight: 'Interactive story envelope opening to 3D avatar with audio toggle and seamless multiply blend.',
    duration: 8
  },
  {
    sceneId: 'scene-journey',
    title: 'Stage 02: Educational Journey to College',
    insight: 'Animated road timeline mapping route from Dharmapuri to Dr. MCET Pollachi (B.E. IT, 8.3 CGPA).',
    duration: 8
  },
  {
    sceneId: 'scene-skills',
    title: 'Stage 03: Periodic Table of Tech Stack',
    insight: 'Element-style tech tiles with interactive category filtering, zero invented proficiency percentages.',
    duration: 8
  },
  {
    sceneId: 'scene-projects',
    title: 'Stage 04: Project Case Files & Mini-UIs',
    insight: 'Featuring NILA offline RAG assistant, Smart Energy RL microgrid research, and Power BI BI dashboards.',
    duration: 9
  },
  {
    sceneId: 'scene-experience',
    title: 'Stage 05: Experience & Verified Achievements',
    insight: 'Thiranx Data Analytics internship, AMYPO ML training, and TCS CodeVita Global Rank 16,434.',
    duration: 7
  },
  {
    sceneId: 'scene-leetcode',
    title: 'Stage 06: LeetCode Analytics Matrix',
    insight: 'Dedicated verified problem-solving dashboard: 136 solved (54 Easy, 72 Medium, 10 Hard) with circular gauges.',
    duration: 7
  },
  {
    sceneId: 'scene-resume',
    title: 'Stage 07: Verified Resume Download',
    insight: 'Direct download of actual uploaded PDF (Muralidharan_K_Resume.pdf) with in-browser preview.',
    duration: 6
  },
  {
    sceneId: 'scene-contact',
    title: 'Stage 08: Interactive Contact Envelope',
    insight: 'Interactive unfolding contact envelope with pre-filled email, telephone trigger, and verified social links.',
    duration: 7
  }
];

export default function GuidedTour({ isActive, onClose }) {
  const [currentStopIndex, setCurrentStopIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(TOUR_STOPS[0].duration);

  const currentStop = TOUR_STOPS[currentStopIndex];

  // Scroll to current stop
  useEffect(() => {
    if (!isActive) return;
    const el = document.getElementById(currentStop.sceneId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setSecondsRemaining(currentStop.duration);
  }, [currentStopIndex, isActive, currentStop]);

  // Countdown timer
  useEffect(() => {
    if (!isActive || isPaused) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          if (currentStopIndex < TOUR_STOPS.length - 1) {
            setCurrentStopIndex((c) => c + 1);
            return TOUR_STOPS[currentStopIndex + 1].duration;
          } else {
            onClose();
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, isPaused, currentStopIndex, onClose]);

  if (!isActive) return null;

  const handleNext = () => {
    if (currentStopIndex < TOUR_STOPS.length - 1) {
      setCurrentStopIndex((c) => c + 1);
    } else {
      onClose();
    }
  };

  const totalProgress = ((currentStopIndex + 1) / TOUR_STOPS.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-premium border border-brand-200/80 dark:border-brand-800/80 p-4"
    >
      {/* Top progress indicator bar */}
      <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-gradient-to-r from-brand-600 via-accent-cyan to-brand-500 transition-all duration-300"
          style={{ width: `${totalProgress}%` }}
        />
      </div>

      <div className="flex items-start justify-between gap-3">
        {/* Tour Information */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300 flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 font-semibold">
                JUDGE TOUR • STOP {currentStopIndex + 1}/{TOUR_STOPS.length}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {secondsRemaining}s remaining
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
              {currentStop.title}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
              {currentStop.insight}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? 'Resume tour' : 'Pause tour'}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>

          <button
            onClick={handleNext}
            aria-label="Skip to next section"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            aria-label="Exit tour"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
