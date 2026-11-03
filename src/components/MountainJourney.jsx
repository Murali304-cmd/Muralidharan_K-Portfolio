import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, CheckCircle2, Mountain, Sparkles, Sliders, ArrowUpRight } from 'lucide-react';
import { sound } from '../hooks/useSoundHaptics';

const MOUNTAIN_CAMPS = [
  {
    id: 'basecamp',
    altitudeVal: 320,
    altitude: '320m',
    barometer: '1013 hPa',
    steepness: '12°',
    campName: 'Basecamp 01: Foundational Logic',
    location: 'Dharmapuri • Variyar HSS',
    focus: 'Mathematical foundations, algorithmic problem solving & early curiosity.',
    tasks: [
      'Completed secondary mathematics and science foundations at Variyar HSS',
      'Developed logical reasoning and algorithmic problem-solving habits',
      'Explored initial Java and Python programming concepts'
    ],
    status: 'Completed'
  },
  {
    id: 'camp-1',
    altitudeVal: 780,
    altitude: '780m',
    barometer: '924 hPa',
    steepness: '24°',
    campName: 'Camp 02: Academic Ascent & Engineering',
    location: 'Pollachi • Dr. MCET',
    focus: 'Bachelor of Engineering in Information Technology (8.3 CGPA).',
    tasks: [
      'Enrolled in B.E. Information Technology at Dr. MCET Pollachi (Expected June 2028)',
      'Achieved academic distinction maintaining a consistent 8.3 CGPA',
      'Actively participated in campus National Service Scheme (NSS) initiatives'
    ],
    status: 'In Progress • 8.3 CGPA'
  },
  {
    id: 'camp-2',
    altitudeVal: 1240,
    altitude: '1,240m',
    barometer: '870 hPa',
    steepness: '32°',
    campName: 'Camp 03: Industry Analytics Rigor',
    location: 'Remote • Thiranx Data Analytics',
    focus: 'Real-world data cleaning, Power BI reporting, and KPI storytelling.',
    tasks: [
      'Cleaned and processed raw datasets using Python (Pandas, NumPy) and Excel',
      'Built interactive DAX-driven Power BI dashboards for business metrics',
      'Presented findings and strategic recommendations to leadership'
    ],
    status: 'Completed Internship'
  },
  {
    id: 'camp-3',
    altitudeVal: 1680,
    altitude: '1,680m',
    barometer: '820 hPa',
    steepness: '41°',
    campName: 'Camp 04: Predictive Modeling Expedition',
    location: 'AMYPO Sprint & Competitive Coding',
    focus: 'Supervised ML, time-series forecasting, and international competitions.',
    tasks: [
      'Engineered ATM Cash Demand Prediction capstone during 20-day ML training',
      'Achieved Global Rank 16,434 in TCS CodeVita Season 13 international competition',
      'Solved 136 algorithmic problems across LeetCode DSA patterns'
    ],
    status: 'Global Rank 16,434'
  },
  {
    id: 'summit',
    altitudeVal: 2150,
    altitude: '2,150m (Summit)',
    barometer: '780 hPa',
    steepness: '48°',
    campName: 'Summit: AI Research & Local RAG Systems',
    location: 'Advanced AI & Research Lab',
    focus: 'Local offline LLMs, FAISS vector indexing, and Reinforcement Learning.',
    tasks: [
      'Developing NILA – local offline PDF Q&A assistant using RAG, Ollama & FAISS',
      'Researching Smart Energy Management System: solar forecasting & RL battery dispatch',
      'Certified as Oracle Fusion AI Agent Studio Certified Foundations Associate'
    ],
    status: 'Active Frontier'
  }
];

// Exact physical coordinates along the mountain contour (progressing from basecamp to peak)
const CAMP_COORDINATES = [
  { left: 10, bottom: 12 }, // Basecamp: 320m
  { left: 28, bottom: 28 }, // Camp 1: 780m
  { left: 48, bottom: 48 }, // Camp 2: 1240m
  { left: 68, bottom: 66 }, // Camp 3: 1680m
  { left: 88, bottom: 84 }, // Summit: 2150m
];

export default function MountainJourney() {
  const [activeCampIndex, setActiveCampIndex] = useState(1);
  const activeCamp = MOUNTAIN_CAMPS[activeCampIndex];
  const activeCoord = CAMP_COORDINATES[activeCampIndex];

  const handleSelectCamp = (idx) => {
    sound.playClick();
    if (idx === MOUNTAIN_CAMPS.length - 1) sound.playChime();
    setActiveCampIndex(idx);
  };

  return (
    <section
      id="journey"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto border-t border-line"
    >
      {/* Section Heading */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-ink">
          Trekking through skills, research & <span className="font-serif-italic text-mute">engineering.</span>
        </h2>
        <p className="text-sm text-mute mt-2 max-w-xl">
          An interactive ascent mapping growth from foundational schooling in Dharmapuri, climbing through Dr. MCET Pollachi, to local AI RAG systems and microgrid research.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Mountain Ridge Elevation with Altitude Telemetry HUD */}
        <div className="lg:col-span-6 bg-card rounded-3xl p-6 sm:p-8 border border-line shadow-soft-lg relative overflow-hidden">
          {/* Telemetry Bar */}
          <div className="grid grid-cols-3 gap-2 pb-4 mb-4 border-b border-line text-[10px] font-mono text-mute">
            <div>
              <span className="block text-faint">ALTITUDE</span>
              <span className="text-xs font-bold text-ink">{activeCamp.altitude}</span>
            </div>
            <div>
              <span className="block text-faint">PRESSURE</span>
              <span className="text-xs font-bold text-ink">{activeCamp.barometer}</span>
            </div>
            <div>
              <span className="block text-faint">GRADE</span>
              <span className="text-xs font-bold text-ink">{activeCamp.steepness}</span>
            </div>
          </div>

          {/* Mountain Contour Background SVG */}
          <div className="relative h-64 sm:h-76 w-full flex items-end justify-center select-none overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full text-slate-200 dark:text-slate-800 pointer-events-none"
              viewBox="0 0 500 280"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Layer 1: Distant background peaks */}
              <path
                d="M 0 280 L 100 170 L 200 230 L 320 120 L 440 50 L 500 280 Z"
                fill="currentColor"
                opacity="0.35"
              />
              {/* Layer 2: Main alpine ridge rising from basecamp to summit */}
              <path
                d="M 0 280 L 50 246 L 140 202 L 240 146 L 340 95 L 440 42 L 500 110 L 500 280 Z"
                fill="currentColor"
                opacity="0.8"
              />
              {/* Layer 3: Dashed glowing trail connecting the camps */}
              <path
                d="M 50 246 Q 140 202, 240 146 T 340 95 T 440 42"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="6 6"
                className="text-emerald-500 dark:text-cyan-400"
                fill="none"
              />
            </svg>

            {/* Checkpoint Flags along the Trail */}
            {MOUNTAIN_CAMPS.map((camp, idx) => {
              const coord = CAMP_COORDINATES[idx];
              const isActive = idx === activeCampIndex;
              const isPassed = idx <= activeCampIndex;
              const isSummit = idx === MOUNTAIN_CAMPS.length - 1;

              return (
                <div
                  key={camp.id}
                  style={{ left: `${coord.left}%`, bottom: `${coord.bottom}%` }}
                  onClick={() => handleSelectCamp(idx)}
                  className="absolute cursor-pointer -translate-x-1/2 translate-y-1/2 group z-20"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shadow-md ${
                      isActive
                        ? 'bg-ink text-paper scale-125 ring-4 ring-emerald-500/30 dark:ring-cyan-500/30'
                        : isPassed
                        ? 'bg-emerald-600 text-white hover:scale-110'
                        : 'bg-card border-2 border-line text-ink hover:scale-110'
                    }`}
                  >
                    {isSummit ? '🚩' : idx + 1}
                  </div>

                  {/* Tooltip on hover */}
                  <div className="absolute bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-ink text-paper text-[10px] font-mono px-2 py-1 rounded whitespace-nowrap pointer-events-none shadow-md z-30">
                    {camp.altitude} • {camp.id}
                  </div>
                </div>
              );
            })}

            {/* Animated Climber Avatar physically hiking on the ridge */}
            <motion.div
              animate={{
                left: `${activeCoord.left}%`,
                bottom: `${activeCoord.bottom}%`,
              }}
              transition={{ type: 'spring', damping: 22, stiffness: 220 }}
              className="absolute -translate-x-1/2 -translate-y-6 pointer-events-none z-30 flex flex-col items-center"
            >
              <div className="text-2xl animate-bounce">
                {activeCampIndex === MOUNTAIN_CAMPS.length - 1 ? '🏆' : '🧗‍♂️'}
              </div>
              <span className="text-[9px] font-mono font-bold bg-ink text-paper px-2 py-0.5 rounded-full shadow-md whitespace-nowrap">
                {activeCamp.altitude}
              </span>
            </motion.div>
          </div>

          {/* Stepper & Slider Controls */}
          <div className="mt-6 pt-4 border-t border-line space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-mute">
              <span>Ascent Progress:</span>
              <span className="font-bold text-ink">{activeCamp.altitude}</span>
            </div>

            <input
              type="range"
              min="0"
              max={MOUNTAIN_CAMPS.length - 1}
              step="1"
              value={activeCampIndex}
              onChange={(e) => handleSelectCamp(Number(e.target.value))}
              className="w-full accent-ink cursor-pointer"
            />

            <div className="flex items-center justify-between text-xs font-mono">
              <button
                disabled={activeCampIndex === 0}
                onClick={() => handleSelectCamp(activeCampIndex - 1)}
                className="px-3.5 py-1.5 rounded-xl border border-line disabled:opacity-30 hover:bg-paper text-ink transition-all active:scale-95"
              >
                ← Lower Camp
              </button>
              <button
                disabled={activeCampIndex === MOUNTAIN_CAMPS.length - 1}
                onClick={() => handleSelectCamp(activeCampIndex + 1)}
                className="px-3.5 py-1.5 rounded-xl border border-line disabled:opacity-30 hover:bg-paper text-ink transition-all font-bold active:scale-95 flex items-center gap-1"
              >
                <span>Higher Summit</span>
                <span className="text-emerald-500 font-bold">↑</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Active Camp Details & Verified Tasks */}
        <div className="lg:col-span-6 bg-card rounded-3xl p-6 sm:p-8 border border-line shadow-soft-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCamp.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-ink bg-paper px-2.5 py-1 rounded-full border border-line">
                  {activeCamp.altitude} • STEP 0{activeCampIndex + 1}
                </span>
                <span className="text-xs font-mono text-mute font-semibold">
                  {activeCamp.status}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink mt-2">
                {activeCamp.campName}
              </h3>

              <div className="flex items-center gap-2 font-mono text-xs text-mute mt-1 mb-4">
                <Mountain className="w-3.5 h-3.5" />
                <span>{activeCamp.location}</span>
              </div>

              <p className="text-sm text-ink-2 leading-relaxed mb-6 font-normal">
                {activeCamp.focus}
              </p>

              {/* Verified Completed Tasks */}
              <div className="space-y-3 pt-4 border-t border-line">
                <span className="font-mono text-[10px] uppercase tracking-wider text-mute block font-semibold">
                  Checkpoints & Tasks Completed
                </span>

                {activeCamp.tasks.map((task, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-paper/60 border border-line text-xs text-ink leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
