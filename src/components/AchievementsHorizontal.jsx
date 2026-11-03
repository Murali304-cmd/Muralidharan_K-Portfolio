import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Award, GraduationCap, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { leetcodeStats } from '../data/leetcode';
import { sound } from '../hooks/useSoundHaptics';

// Ease-out Count-Up Component (Point 83)
function CountUp({ target, isDecimal = false, suffix = '' }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + (target - start) * ease;

      if (isDecimal) {
        setVal(current.toFixed(1));
      } else {
        setVal(Math.round(current).toLocaleString());
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [target, isDecimal]);

  return <span>{val}{suffix}</span>;
}

const ACHIEVEMENTS_DATA = [
  {
    id: 'codevita',
    index: '01 / 04',
    logo: '🏆',
    platform: 'TCS CodeVita Season 13',
    targetNum: 16434,
    isDecimal: false,
    suffix: '',
    label: 'Global Rank',
    caption: 'International Algorithmic Coding Competition',
    detail: 'Competed globally solving algorithmic optimization challenges.'
  },
  {
    id: 'leetcode',
    index: '02 / 04',
    logo: '💻',
    platform: 'LeetCode DSA Matrix',
    targetNum: 136,
    isDecimal: false,
    suffix: '',
    label: 'Problems Solved',
    caption: '54 Easy • 72 Medium • 10 Hard',
    detail: 'Arrays, Two Pointers, Trees, Graphs and Dynamic Programming.'
  },
  {
    id: 'cgpa',
    index: '03 / 04',
    logo: '🎓',
    platform: 'Dr. MCET Pollachi',
    targetNum: 8.3,
    isDecimal: true,
    suffix: '',
    label: 'Current CGPA',
    caption: 'B.E. Information Technology',
    detail: 'Academic distinction across core engineering curricula.'
  },
  {
    id: 'campuscrew',
    index: '04 / 04',
    logo: '🎖️',
    platform: 'CampusCrew Milestone',
    targetNum: 100,
    isDecimal: false,
    suffix: 'K',
    label: 'Milestone Honor',
    caption: 'Technical Community Engagement',
    detail: 'Recognized for active participation and knowledge sharing.'
  }
];

export default function AchievementsHorizontal() {
  const easyRatio = 54 / 136;
  const medRatio = 72 / 136;
  const hardRatio = 10 / 136;
  const circumference = 2 * Math.PI * 46; // r = 46 -> ~289

  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto border-t border-line"
    >
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-mute uppercase tracking-widest mb-2">
            08 — Verified Metrics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-ink">
            Proven <span className="font-serif-italic text-mute">results.</span>
          </h2>
          <p className="text-sm text-mute mt-1">
            Real competitive coding rankings and verified academic scores.
          </p>
        </div>

        <span className="font-mono text-xs text-mute">
          Swipe or scroll horizontally →
        </span>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-none pt-4">
        {ACHIEVEMENTS_DATA.map((ach) => (
          <motion.div
            key={ach.id}
            whileHover={{ y: -8 }}
            className="w-[340px] sm:w-[420px] h-[280px] bg-card rounded-card p-7 border border-line shadow-soft-lg shrink-0 flex flex-col justify-between"
          >
            {/* Top Row: 72px Logo Tile + Index */}
            <div className="flex items-start justify-between">
              <div className="w-[56px] h-[56px] rounded-2xl bg-paper flex items-center justify-center text-2xl shadow-inner border border-line">
                {ach.logo}
              </div>
              <span className="font-mono text-xs text-mute font-bold">
                {ach.index}
              </span>
            </div>

            {/* Bottom Row: Details on Left, Big Count Number on Right */}
            <div className="flex items-end justify-between gap-4">
              <div className="max-w-[55%]">
                <span className="text-[10px] font-mono text-mute uppercase tracking-wider block font-semibold">
                  {ach.platform}
                </span>
                <h4 className="font-bold text-sm text-ink mt-0.5">
                  {ach.caption}
                </h4>
                <p className="text-[11px] text-mute mt-1 leading-snug line-clamp-2">
                  {ach.detail}
                </p>
              </div>

              <div className="text-right">
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-ink block">
                  <CountUp target={ach.targetNum} isDecimal={ach.isDecimal} suffix={ach.suffix} />
                </span>
                <span className="text-[10px] font-mono text-mute uppercase tracking-wider font-semibold">
                  {ach.label}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Track End: "and counting →" */}
        <div className="w-[200px] h-[280px] rounded-card border-2 border-dashed border-line flex flex-col items-center justify-center text-center p-6 shrink-0 bg-paper/40">
          <span className="font-mono text-xs text-mute block">and counting</span>
          <ArrowRight className="w-5 h-5 text-ink mt-2 animate-pulse" />
        </div>
      </div>

      {/* Points 87–89: Dedicated LeetCode Analytics Dashboard */}
      <div className="mt-14 bg-card rounded-3xl p-6 sm:p-8 border border-line shadow-soft-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left: Circular Ring + Centered Metric */}
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                {/* Background Ring */}
                <circle
                  cx="60"
                  cy="60"
                  r="46"
                  stroke="currentColor"
                  strokeWidth="10"
                  className="text-line"
                  fill="transparent"
                />
                {/* Easy Segment (Emerald) */}
                <circle
                  cx="60"
                  cy="60"
                  r="46"
                  stroke="#10B981"
                  strokeWidth="10"
                  strokeDasharray={`${easyRatio * circumference} ${circumference}`}
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  fill="transparent"
                />
                {/* Medium Segment (Amber) */}
                <circle
                  cx="60"
                  cy="60"
                  r="46"
                  stroke="#F59E0B"
                  strokeWidth="10"
                  strokeDasharray={`${medRatio * circumference} ${circumference}`}
                  strokeDashoffset={`-${easyRatio * circumference}`}
                  strokeLinecap="round"
                  fill="transparent"
                />
                {/* Hard Segment (Rose) */}
                <circle
                  cx="60"
                  cy="60"
                  r="46"
                  stroke="#EF4444"
                  strokeWidth="10"
                  strokeDasharray={`${hardRatio * circumference} ${circumference}`}
                  strokeDashoffset={`-${(easyRatio + medRatio) * circumference}`}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-2xl font-black font-mono text-ink leading-none">136</span>
                <span className="text-[9px] font-mono text-mute uppercase tracking-widest mt-0.5">SOLVED</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-mute uppercase tracking-widest font-bold">
                  LeetCode DSA Matrix
                </span>
                <span className="text-[10px] font-mono bg-paper border border-line px-2 py-0.5 rounded-full text-ink">
                  u/{leetcodeStats.username}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                Problem Solving Breakdown
              </h3>
              <p className="text-xs text-mute mt-1 max-w-md">
                Active practice across algorithmic patterns, data structures, and edge-case optimization.
              </p>
            </div>
          </div>

          {/* Right: Difficulty Breakdown Cards + Profile Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              <div className="p-3 rounded-2xl bg-paper border border-emerald-500/20 text-center">
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block font-bold">EASY</span>
                <span className="text-xl font-mono font-black text-ink">54</span>
              </div>
              <div className="p-3 rounded-2xl bg-paper border border-amber-500/20 text-center">
                <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 block font-bold">MEDIUM</span>
                <span className="text-xl font-mono font-black text-ink">72</span>
              </div>
              <div className="p-3 rounded-2xl bg-paper border border-rose-500/20 text-center">
                <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 block font-bold">HARD</span>
                <span className="text-xl font-mono font-black text-ink">10</span>
              </div>
            </div>

            <a
              href={leetcodeStats.profileUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="px-5 py-3 rounded-2xl bg-ink text-paper text-xs font-mono font-medium hover:bg-ink-2 transition-all flex items-center justify-center gap-1.5 shadow-sm hover:-translate-y-0.5 shrink-0"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Core Topics Array */}
        <div className="mt-6 pt-4 border-t border-line flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono text-mute uppercase tracking-wider font-semibold mr-1">
            Focus Areas:
          </span>
          {leetcodeStats.coreTopics.map((topic, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-full bg-paper text-[11px] font-mono text-ink border border-line"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

