import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ExternalLink, Github, Zap, Sun, TrendingUp, BatteryCharging, Cpu, MessageSquare, BarChart3, Database } from 'lucide-react';
import { projects } from '../data/projects';

// Grayscale Illustrative Mini-UI components as required by PDF spec
function IllustrativeGrayscaleUI({ type }) {
  if (type === 'energy-flow') {
    return (
      <div className="w-full h-full bg-[#181818] rounded-2xl p-5 text-white flex flex-col justify-between border border-white/10 font-mono text-xs">
        <div className="flex items-center justify-between text-mute border-b border-white/10 pb-2">
          <span className="flex items-center gap-1.5 text-white">
            <Zap className="w-3.5 h-3.5" /> SMART MICROGRID DISPATCH
          </span>
          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-paper">
            ILLUSTRATIVE UI
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 my-auto items-center text-center">
          <div className="space-y-2">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-faint block">Solar Forecast</span>
              <span className="text-white font-bold text-sm">4.8 kW</span>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-faint block">Demand Load</span>
              <span className="text-white font-bold text-sm">3.2 kW</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center">
            <BatteryCharging className="w-6 h-6 text-white animate-pulse" />
            <span className="text-[10px] text-faint mt-1">Battery SoC</span>
            <div className="w-full h-1.5 bg-white/20 rounded-full mt-2 overflow-hidden">
              <div className="w-3/4 h-full bg-white rounded-full" />
            </div>
            <span className="text-[10px] mt-1 text-white font-bold">75%</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
            <Cpu className="w-6 h-6 text-white" />
            <span className="text-[10px] text-faint mt-1">RL Agent</span>
            <span className="text-[9px] text-emerald-400 mt-1">Optimal Dispatch</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-faint pt-2 border-t border-white/10">
          <span>Objective: Cost Min & Peak Shaving</span>
          <span className="text-white">Research Architecture</span>
        </div>
      </div>
    );
  }

  if (type === 'rag-chat') {
    return (
      <div className="w-full h-full bg-[#181818] rounded-2xl p-5 text-white flex flex-col justify-between border border-white/10 font-mono text-xs">
        <div className="flex items-center justify-between text-mute border-b border-white/10 pb-2">
          <span className="flex items-center gap-1.5 text-white">
            <MessageSquare className="w-3.5 h-3.5" /> NILA LOCAL RAG PIPELINE
          </span>
          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-paper">
            ILLUSTRATIVE UI
          </span>
        </div>

        <div className="space-y-2.5 my-auto">
          <div className="p-2 rounded-xl bg-white/5 text-paper text-xs max-w-[85%] border border-white/10">
            📄 Query: "Extract compliance obligations from uploaded syllabus PDF"
          </div>
          <div className="p-2.5 rounded-xl bg-white/15 text-white text-xs max-w-[90%] ml-auto border border-white/20">
            ⚡ FAISS top-3 semantic chunks retrieved → Ollama LLM generated grounded response.
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-faint pt-2 border-t border-white/10">
          <span>Zero Cloud Egress • 100% Local</span>
          <span className="text-white">FastAPI Engine</span>
        </div>
      </div>
    );
  }

  // Default illustrative dashboard (Power BI / ML regression)
  return (
    <div className="w-full h-full bg-[#181818] rounded-2xl p-5 text-white flex flex-col justify-between border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between text-mute border-b border-white/10 pb-2">
        <span className="flex items-center gap-1.5 text-white">
          <BarChart3 className="w-3.5 h-3.5" /> PREDICTIVE ANALYTICS MODEL
        </span>
        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-paper">
          ILLUSTRATIVE UI
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto items-center">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
          <span className="text-[10px] text-faint block">Historical Cash</span>
          <span className="text-white font-bold text-base">₹12.4M</span>
        </div>
        <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-center">
          <span className="text-[10px] text-faint block">Forecast Vol.</span>
          <span className="text-white font-bold text-base">₹14.8M</span>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
          <span className="text-[10px] text-faint block">Variance</span>
          <span className="text-emerald-400 font-bold text-base">±2.1%</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-faint pt-2 border-t border-white/10">
        <span>Scikit-learn • Pandas • Plotly</span>
        <span className="text-white">Validated Output</span>
      </div>
    </div>
  );
}

export default function WorkAccordion() {
  const [activeId, setActiveId] = useState(projects[0].id);

  return (
    <section
      id="work"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto border-t border-line"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="font-mono text-xs text-mute uppercase tracking-widest mb-2">
          05 — Selected Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-ink">
          Things I've <span className="font-serif-italic text-mute">built.</span>
        </h2>
        <p className="text-sm text-mute mt-1">
          Horizontal expanding gallery. Hover or tap any panel to inspect the engineering breakdown and illustrative interface.
        </p>
      </div>

      {/* Horizontal Expanding Accordion (min(78svh, 600px)) */}
      <div className="hidden lg:flex gap-3 h-[580px] w-full overflow-hidden">
        {projects.map((proj, idx) => {
          const isOpen = activeId === proj.id;

          return (
            <motion.div
              key={proj.id}
              onClick={() => setActiveId(proj.id)}
              onMouseEnter={() => setActiveId(proj.id)}
              layout
              className={`h-full rounded-3xl cursor-pointer border border-line shadow-hairline transition-all duration-500 overflow-hidden relative flex ${
                isOpen
                  ? 'flex-[8] bg-white cursor-default'
                  : 'flex-[1] bg-white/70 hover:bg-white items-center justify-center'
              }`}
            >
              {/* COLLAPSED SLIM SPINE */}
              {!isOpen && (
                <div className="flex flex-col items-center justify-between h-full py-8 w-full select-none">
                  <span className="font-mono text-xs font-bold text-ink">
                    0{idx + 1}
                  </span>

                  {/* Rotated Vertical Title */}
                  <span className="font-bold text-xs tracking-tight text-ink rotate-[-90deg] whitespace-nowrap origin-center">
                    {proj.title}
                  </span>

                  <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-ink group-hover:rotate-90 transition-transform">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* OPEN EXPANDED PANEL */}
              {isOpen && (
                <div className="w-full h-full p-8 grid grid-cols-12 gap-8 items-center">
                  {/* Left Column: Number + Title + Description + Stack */}
                  <div className="col-span-6 flex flex-col justify-between h-full py-2">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-ink">
                          0{idx + 1} — {proj.categoryLabel}
                        </span>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-line bg-paper text-ink">
                          {proj.status}
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold tracking-tight text-ink leading-tight">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-mono text-mute mt-1">
                        {proj.subtitle}
                      </p>

                      <p className="text-xs text-ink-2 leading-relaxed mt-4">
                        {proj.description}
                      </p>
                    </div>

                    {/* Features & Tech Stack */}
                    <div className="pt-4 border-t border-line space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.map((t, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-paper text-[10px] font-mono text-ink border border-line"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {proj.githubUrl ? (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-2.5 rounded-full bg-ink text-paper text-xs font-mono font-medium flex items-center gap-1.5 hover:bg-ink-2 transition-colors"
                          >
                            <span>View on GitHub</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="text-[11px] font-mono text-mute bg-paper px-3 py-1.5 rounded-full border border-line">
                            Repository Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Grayscale Illustrative Mini-UI */}
                  <div className="col-span-6 h-full p-2">
                    <IllustrativeGrayscaleUI type={proj.uiType} />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Vertical Accordion */}
      <div className="lg:hidden space-y-3">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="bg-white rounded-2xl p-5 border border-line shadow-hairline"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-mute">0{idx + 1}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-paper border border-line text-ink">
                {proj.status}
              </span>
            </div>
            <h4 className="font-bold text-base text-ink">{proj.title}</h4>
            <p className="text-xs text-mute mt-1">{proj.description}</p>
            <div className="my-3 h-48">
              <IllustrativeGrayscaleUI type={proj.uiType} />
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {proj.stack.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded bg-paper text-[10px] font-mono text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
