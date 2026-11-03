import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { leetcodeStats } from '../data/leetcode';

const ACHIEVEMENTS_DATA = [
  {
    id: 'codevita',
    index: '01 / 04',
    logo: '🏆',
    platform: 'TCS CodeVita Season 13',
    number: '16,434',
    label: 'Global Rank',
    caption: 'International Algorithmic Coding Competition',
    detail: 'Competed globally solving algorithmic optimization challenges.'
  },
  {
    id: 'leetcode',
    index: '02 / 04',
    logo: '💻',
    platform: 'LeetCode DSA Matrix',
    number: `${leetcodeStats.totalSolved}`,
    label: 'Problems Solved',
    caption: '54 Easy • 72 Medium • 10 Hard',
    detail: 'Arrays, Two Pointers, Trees, Graphs and Dynamic Programming.'
  },
  {
    id: 'cgpa',
    index: '03 / 04',
    logo: '🎓',
    platform: 'Dr. MCET Pollachi',
    number: '8.3',
    label: 'Current CGPA',
    caption: 'B.E. Information Technology',
    detail: 'Academic distinction across core engineering curricula.'
  },
  {
    id: 'campuscrew',
    index: '04 / 04',
    logo: '🎖️',
    platform: 'CampusCrew Milestone',
    number: '100K',
    label: 'Milestone Honor',
    caption: 'Technical Community Engagement',
    detail: 'Recognized for active participation and knowledge sharing.'
  }
];

export default function AchievementsHorizontal() {
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
            Real competitive coding rankings and academic scores.
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
            className="w-[340px] sm:w-[420px] h-[280px] bg-white rounded-card p-7 border border-line shadow-soft-lg shrink-0 flex flex-col justify-between"
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
                  {ach.number}
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
    </section>
  );
}

