import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, CheckCircle2, Compass, Mountain, ArrowUpRight, Sparkles } from 'lucide-react';

const MOUNTAIN_CAMPS = [
  {
    id: 'basecamp',
    altitude: '320m',
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
    altitude: '780m',
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
    altitude: '1,240m',
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
    altitude: '1,680m',
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
    altitude: '2,150m (Summit)',
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

export default function MountainJourney() {
  const [activeCampIndex, setActiveCampIndex] = useState(1);
  const activeCamp = MOUNTAIN_CAMPS[activeCampIndex];

  return (
    <section
      id="journey"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto border-t border-line"
    >
      {/* Section Tag & Heading */}
      <div className="mb-12">
        <div className="font-mono text-xs text-mute uppercase tracking-widest mb-2">
          03 — The Engineering Trek
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-ink">
          Trekking through skills, research & <span className="font-serif-italic text-mute">engineering.</span>
        </h2>
        <p className="text-sm text-mute mt-2 max-w-xl">
          An interactive ascent mapping growth from foundational schooling in Dharmapuri, climbing through Dr. MCET Pollachi, to local AI RAG systems and microgrid research.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Mountain Ridge Visualization with Hiker Trail */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-line shadow-hairline relative overflow-hidden">
          {/* Mountain Contour Background SVG */}
          <div className="relative h-64 sm:h-72 w-full flex items-end justify-center">
            {/* Mountain backdrop contours */}
            <svg
              className="absolute inset-0 w-full h-full text-slate-100"
              viewBox="0 0 500 280"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 280 L90 140 L190 200 L320 60 L420 160 L500 280 Z"
                fill="currentColor"
              />
              <path
                d="M60 280 L180 110 L280 180 L390 40 L500 190 L500 280 Z"
                fill="rgba(244, 242, 238, 0.9)"
              />
              {/* Steep Trail dashed path */}
              <path
                d="M40 250 Q 140 210, 200 160 T 360 90 T 440 40"
                stroke="#0d0d0d"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                fill="none"
              />
            </svg>

            {/* Checkpoint Flags along the Trail */}
            {MOUNTAIN_CAMPS.map((camp, idx) => {
              const xPos = 12 + idx * 19;
              const yPos = 82 - idx * 18;
              const isActive = idx === activeCampIndex;

              return (
                <div
                  key={camp.id}
                  style={{ left: `${xPos}%`, bottom: `${yPos}%` }}
                  onClick={() => setActiveCampIndex(idx)}
                  className="absolute cursor-pointer -translate-x-1/2 translate-y-1/2 group z-20"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-ink text-paper scale-125 shadow-md ring-4 ring-slate-200'
                        : 'bg-white border-2 border-slate-300 text-slate-700 hover:scale-110'
                    }`}
                  >
                    {idx + 1}
                  </div>

                  {/* Tooltip on hover */}
                  <div className="absolute bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-ink text-paper text-[10px] font-mono px-2 py-1 rounded whitespace-nowrap pointer-events-none shadow-sm">
                    {camp.altitude} • {camp.id}
                  </div>
                </div>
              );
            })}

            {/* Trekker Avatar Positioned on Active Camp */}
            <motion.div
              animate={{
                left: `${12 + activeCampIndex * 19}%`,
                bottom: `${82 - activeCampIndex * 18}%`,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 220 }}
              className="absolute -translate-x-1/2 translate-y-2 pointer-events-none z-30 flex flex-col items-center"
            >
              <div className="text-2xl animate-bounce">🧗‍♂️</div>
              <span className="text-[9px] font-mono font-bold bg-ink text-paper px-1.5 py-0.2 rounded-full">
                {activeCamp.altitude}
              </span>
            </motion.div>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-line text-xs font-mono text-mute">
            <span>Elevation: {activeCamp.altitude}</span>
            <div className="flex items-center gap-1.5">
              <button
                disabled={activeCampIndex === 0}
                onClick={() => setActiveCampIndex((c) => c - 1)}
                className="px-2.5 py-1 rounded border border-line disabled:opacity-30 hover:bg-slate-100"
              >
                ← Lower Camp
              </button>
              <button
                disabled={activeCampIndex === MOUNTAIN_CAMPS.length - 1}
                onClick={() => setActiveCampIndex((c) => c + 1)}
                className="px-2.5 py-1 rounded border border-line disabled:opacity-30 hover:bg-slate-100"
              >
                Higher Ascent →
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Active Camp Details & Verified Tasks */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-line shadow-hairline">
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
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
