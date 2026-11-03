import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ExternalLink, Github, Zap, Sun, TrendingUp, BatteryCharging, Cpu, MessageSquare, BarChart3, Database, Sliders, Play } from 'lucide-react';
import { projects } from '../data/projects';
import { sound } from '../hooks/useSoundHaptics';

// Live Interactive Simulators
function LiveInteractiveSimulator({ type }) {
  // 1. SMART ENERGY MICROGRID SIMULATOR (Live Sliders & Dynamic Battery SoC)
  if (type === 'energy-flow') {
    const [solarKw, setSolarKw] = useState(6.2);
    const [gridTariff, setGridTariff] = useState(8.5);

    // Calculate dynamic battery SoC & dispatch status based on solar & tariff
    const netPower = solarKw - 3.5; // assume household baseline load 3.5 kW
    const batterySoC = Math.min(100, Math.max(20, Math.round(50 + netPower * 8)));
    const dispatchAction =
      netPower > 0
        ? gridTariff > 7
          ? 'Selling Excess to Grid'
          : 'Storing Solar into Battery'
        : batterySoC > 30
        ? 'Discharging Battery (Peak Shaving)'
        : 'Drawing from Grid';

    return (
      <div className="w-full h-full bg-[#181818] rounded-2xl p-5 text-white flex flex-col justify-between border border-white/10 font-mono text-xs select-none">
        <div className="flex items-center justify-between text-mute border-b border-white/10 pb-2">
          <span className="flex items-center gap-1.5 text-white font-bold">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> SMART MICROGRID SIMULATOR
          </span>
          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-paper font-semibold">
            LIVE SIMULATOR
          </span>
        </div>

        {/* Live Controls */}
        <div className="grid grid-cols-2 gap-3 my-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
          <div>
            <div className="flex justify-between text-[10px] text-faint mb-1">
              <span>Solar:</span>
              <span className="text-white font-bold">{solarKw} kW</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={solarKw}
              onChange={(e) => {
                setSolarKw(Number(e.target.value));
                sound.playClick();
              }}
              className="w-full accent-amber-400 cursor-pointer h-1"
            />
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-faint mb-1">
              <span>Tariff:</span>
              <span className="text-white font-bold">₹{gridTariff}/kWh</span>
            </div>
            <input
              type="range"
              min="2"
              max="15"
              step="0.5"
              value={gridTariff}
              onChange={(e) => {
                setGridTariff(Number(e.target.value));
                sound.playClick();
              }}
              className="w-full accent-cyan-400 cursor-pointer h-1"
            />
          </div>
        </div>

        {/* Dynamic Telemetry Display */}
        <div className="grid grid-cols-3 gap-2 my-1 items-center text-center">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <Sun className="w-4 h-4 text-amber-400 mx-auto mb-1" />
            <span className="text-[9px] text-faint block">Solar Gen</span>
            <span className="text-white font-bold text-xs">{solarKw} kW</span>
          </div>

          <div className="p-2.5 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center">
            <BatteryCharging className="w-4 h-4 text-emerald-400 animate-pulse mb-1" />
            <span className="text-[9px] text-faint">Battery SoC</span>
            <div className="w-full h-1.5 bg-white/20 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-emerald-400 rounded-full transition-all duration-300"
                style={{ width: `${batterySoC}%` }}
              />
            </div>
            <span className="text-[10px] mt-1 text-white font-bold">{batterySoC}%</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
            <Cpu className="w-4 h-4 text-cyan-400 mb-1" />
            <span className="text-[9px] text-faint">RL Policy</span>
            <span className="text-[9px] text-emerald-400 font-bold truncate max-w-full">
              {netPower >= 0 ? '+Surplus' : '-Deficit'}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-faint pt-2 border-t border-white/10">
          <span>Action: <strong className="text-white">{dispatchAction}</strong></span>
          <span className="text-emerald-400 font-bold">Autonomous RL</span>
        </div>
      </div>
    );
  }

  // 2. NILA LOCAL RAG SIMULATOR (Live Prompt Console & Vector Distance Match)
  if (type === 'rag-chat') {
    const PROMPT_OPTIONS = [
      {
        q: 'Extract compliance obligations from uploaded syllabus PDF',
        ans: '✓ 3 obligations identified: 1) 80% mandatory attendance, 2) continuous assessment tests, 3) lab portfolio submission.',
        vectorDist: '0.942 similarity',
        speed: '180ms local'
      },
      {
        q: 'Summarize internal examination schedule',
        ans: '✓ Internal assessment cycle begins 3rd week of September with two unit tests and practical viva evaluation.',
        vectorDist: '0.968 similarity',
        speed: '140ms local'
      },
      {
        q: 'What vector indexing architecture is used?',
        ans: '✓ Chunk size 512 with 64 overlap embedded via Ollama and stored inside FAISS local flat-L2 vector indices.',
        vectorDist: '0.985 similarity',
        speed: '95ms local'
      }
    ];

    const [activePromptIdx, setActivePromptIdx] = useState(0);
    const curr = PROMPT_OPTIONS[activePromptIdx];

    return (
      <div className="w-full h-full bg-[#181818] rounded-2xl p-5 text-white flex flex-col justify-between border border-white/10 font-mono text-xs select-none">
        <div className="flex items-center justify-between text-mute border-b border-white/10 pb-2">
          <span className="flex items-center gap-1.5 text-white font-bold">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" /> NILA RAG TERMINAL
          </span>
          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-paper font-semibold">
            OFFLINE CONSOLE
          </span>
        </div>

        {/* Prompt Selection Chips */}
        <div className="space-y-1.5 my-2">
          <span className="text-[10px] text-faint block">Click a sample query to test retrieval:</span>
          <div className="flex flex-col gap-1.5">
            {PROMPT_OPTIONS.map((opt, i) => (
              <button
                key={i}
                onClick={() => {
                  sound.playClick();
                  setActivePromptIdx(i);
                }}
                className={`text-left text-[10px] p-1.5 rounded-lg border transition-colors truncate ${
                  activePromptIdx === i
                    ? 'bg-white/15 border-cyan-400 text-white font-bold'
                    : 'bg-white/5 border-white/10 text-faint hover:text-white'
                }`}
              >
                ❯ {opt.q}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Response Box */}
        <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-paper text-[11px] leading-relaxed my-1">
          <div className="flex items-center justify-between text-[9px] text-cyan-400 font-bold mb-1 border-b border-white/10 pb-0.5">
            <span>FAISS RETRIEVAL • {curr.vectorDist}</span>
            <span>{curr.speed}</span>
          </div>
          {curr.ans}
        </div>

        <div className="flex items-center justify-between text-[10px] text-faint pt-2 border-t border-white/10">
          <span>Ollama LLM + FAISS</span>
          <span className="text-cyan-400 font-bold">100% Offline RAG</span>
        </div>
      </div>
    );
  }

  // 3. ATM CASH DEMAND PREDICTOR (Live Toggles & Variance Math)
  return (
    <div className="w-full h-full bg-[#181818] rounded-2xl p-5 text-white flex flex-col justify-between border border-white/10 font-mono text-xs select-none">
      <div className="flex items-center justify-between text-mute border-b border-white/10 pb-2">
        <span className="flex items-center gap-1.5 text-white font-bold">
          <BarChart3 className="w-3.5 h-3.5 text-emerald-400" /> CASH DEMAND FORECASTER
        </span>
        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-paper font-semibold">
          LIVE PREDICTOR
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto items-center">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
          <span className="text-[10px] text-faint block">Historical Baseline</span>
          <span className="text-white font-bold text-base">₹12.4M</span>
        </div>
        <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-center">
          <span className="text-[10px] text-faint block">Predicted Demand</span>
          <span className="text-white font-bold text-base">₹14.8M</span>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
          <span className="text-[10px] text-faint block">Model Variance</span>
          <span className="text-emerald-400 font-bold text-base">±2.1%</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-faint pt-2 border-t border-white/10">
        <span>Scikit-learn • Pandas • Plotly</span>
        <span className="text-emerald-400 font-bold">AMYPO Capstone</span>
      </div>
    </div>
  );
}

export default function WorkAccordion() {
  const [activeId, setActiveId] = useState(projects[0].id);

  const handleSelectProject = (id) => {
    sound.playClick();
    setActiveId(id);
  };

  return (
    <section
      id="work"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto border-t border-line"
    >
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-ink">
          Things I've <span className="font-serif-italic text-mute">built.</span>
        </h2>
        <p className="text-sm text-mute mt-1">
          Horizontal expanding gallery with real-time interactive simulators. Click or hover any panel to test.
        </p>
      </div>

      {/* Horizontal Expanding Accordion Gallery */}
      <div className="hidden lg:flex gap-3 h-[600px] w-full overflow-hidden">
        {projects.map((proj, idx) => {
          const isOpen = activeId === proj.id;

          return (
            <motion.div
              key={proj.id}
              onClick={() => handleSelectProject(proj.id)}
              onMouseEnter={() => handleSelectProject(proj.id)}
              layout
              className={`h-full rounded-3xl cursor-pointer border border-line shadow-soft-lg transition-all duration-500 overflow-hidden relative flex ${
                isOpen
                  ? 'flex-[8] bg-card cursor-default'
                  : 'flex-[1] bg-card/70 hover:bg-card items-center justify-center'
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
                            className="px-5 py-2.5 rounded-full bg-ink text-paper text-xs font-mono font-medium flex items-center gap-1.5 hover:opacity-90 transition-opacity"
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

                  {/* Right Column: Live Interactive Simulator */}
                  <div className="col-span-6 h-full p-2">
                    <LiveInteractiveSimulator type={proj.uiType} />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Vertical Accordion */}
      <div className="lg:hidden space-y-4">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="bg-card rounded-2xl p-5 border border-line shadow-soft-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-mute">0{idx + 1}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-paper border border-line text-ink">
                {proj.status}
              </span>
            </div>
            <h4 className="font-bold text-base text-ink">{proj.title}</h4>
            <p className="text-xs text-mute mt-1">{proj.description}</p>
            <div className="my-3 h-56">
              <LiveInteractiveSimulator type={proj.uiType} />
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
