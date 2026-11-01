import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, CheckCircle2, TrendingUp, Sparkles, Award } from 'lucide-react';
import { leetcodeStats } from '../data/leetcode';

export default function Scene6LeetCode() {
  const { totalSolved, categories, username, profileUrl, coreTopics } = leetcodeStats;

  // SVG circular radius & circumferences
  const radius = 68;
  const circumference = 2 * Math.PI * radius;

  // Percentages of total solved (136)
  const easyRatio = categories[0].solved / totalSolved;
  const medRatio = categories[1].solved / totalSolved;
  const hardRatio = categories[2].solved / totalSolved;

  return (
    <section
      id="scene-leetcode"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-[#0E1424]/60 border-y border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Stage Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 border border-brand-200/80 dark:border-brand-700/50 text-xs font-mono font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>STAGE 05 / VALIDATE • SCENE 6</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            LeetCode Analytics Dashboard
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
            Algorithmic problem-solving breakdown. Verified metrics maintained manually with zero invented streaks or speculative contest ranks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: Circular Gauge & Summary Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-premium border border-slate-200/80 dark:border-slate-800 flex flex-col items-center text-center">
            <div className="flex items-center justify-between w-full pb-4 border-b border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                <Code2 className="w-4 h-4 text-amber-500" />
                LeetCode Profile
              </span>
              <span className="text-brand-600 dark:text-brand-400 font-bold">@{username}</span>
            </div>

            {/* Circular Progress Gauge */}
            <div className="relative my-6 flex items-center justify-center">
              <svg className="w-48 h-48 -rotate-90 transform" viewBox="0 0 160 160">
                {/* Background Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="12"
                  className="text-slate-100 dark:text-slate-800"
                  fill="transparent"
                />

                {/* Easy Segment (Green) */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke="#10B981"
                  strokeWidth="12"
                  strokeDasharray={`${circumference * easyRatio} ${circumference}`}
                  strokeDashoffset={0}
                  strokeLinecap="round"
                  fill="transparent"
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />

                {/* Medium Segment (Amber) */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke="#F59E0B"
                  strokeWidth="12"
                  strokeDasharray={`${circumference * medRatio} ${circumference}`}
                  strokeDashoffset={-circumference * easyRatio}
                  strokeLinecap="round"
                  fill="transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                />

                {/* Hard Segment (Red) */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke="#EF4444"
                  strokeWidth="12"
                  strokeDasharray={`${circumference * hardRatio} ${circumference}`}
                  strokeDashoffset={-circumference * (easyRatio + medRatio)}
                  strokeLinecap="round"
                  fill="transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </svg>

              {/* Center Counter */}
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-extrabold font-mono text-slate-900 dark:text-white">
                  {totalSolved}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-0.5">
                  Solved
                </span>
              </div>
            </div>

            {/* Platform Profile CTA */}
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-soft"
            >
              <span>View LeetCode Profile (@{username})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <span className="text-[10px] font-mono text-slate-400 mt-3">
              Editable JSON matrix • Manually verified stats
            </span>
          </div>

          {/* Right Side: Difficulty Distribution & Topics Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            {/* Difficulty Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.difficulty}
                  className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className="text-xs font-mono font-bold uppercase"
                      style={{ color: cat.color }}
                    >
                      {cat.difficulty}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {Math.round((cat.solved / totalSolved) * 100)}%
                    </span>
                  </div>

                  <div className="text-3xl font-black font-mono text-slate-900 dark:text-white">
                    {cat.solved}
                  </div>

                  {/* Horizontal mini bar */}
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${(cat.solved / totalSolved) * 100}%`,
                        backgroundColor: cat.color
                      }}
                    />
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Problem Solving Stack Breakdown */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-soft">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-500" />
                Algorithmic Topic Coverage
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

