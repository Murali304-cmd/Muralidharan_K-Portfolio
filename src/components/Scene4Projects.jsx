import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, ExternalLink, Github, Sparkles, Filter, 
  Layers, ArrowUpRight, CheckCircle2, AlertCircle, X, 
  Zap, Sun, BatteryCharging, Cpu, Database, MessageSquare, BarChart3, TrendingUp 
} from 'lucide-react';
import { projects, projectCategories } from '../data/projects';

// Illustrative Mini-UI components
function IllustrativeUI({ type }) {
  if (type === 'energy-flow') {
    return (
      <div className="w-full h-44 bg-slate-900 rounded-2xl p-3 text-white flex flex-col justify-between border border-slate-800 relative overflow-hidden font-mono text-[11px]">
        <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
          <span className="flex items-center gap-1 text-emerald-400">
            <Zap className="w-3.5 h-3.5" /> SMART MICROGRID RL DISPATCH
          </span>
          <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-amber-300">ILLUSTRATIVE UI</span>
        </div>

        {/* Animated Energy Flow Diagram */}
        <div className="grid grid-cols-3 gap-2 py-2 items-center text-center">
          {/* Inputs */}
          <div className="space-y-1.5">
            <div className="p-1.5 rounded-lg bg-slate-800 border border-amber-500/30 flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-[10px] truncate">Solar Forecast</span>
            </div>
            <div className="p-1.5 rounded-lg bg-slate-800 border border-cyan-500/30 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="text-[10px] truncate">Load Demand</span>
            </div>
          </div>

          {/* Central Battery SoC */}
          <div className="p-2 rounded-xl bg-indigo-950/60 border border-indigo-500/40 flex flex-col items-center">
            <BatteryCharging className="w-5 h-5 text-indigo-400 animate-pulse" />
            <span className="text-[10px] mt-1 text-slate-200">Battery SoC</span>
            <div className="w-full h-1.5 bg-slate-700 rounded-full mt-1.5 overflow-hidden">
              <div className="w-3/4 h-full bg-emerald-400 rounded-full" />
            </div>
          </div>

          {/* RL Allocation Engine */}
          <div className="p-2 rounded-xl bg-violet-950/60 border border-violet-500/40 flex flex-col items-center">
            <Cpu className="w-5 h-5 text-violet-400" />
            <span className="text-[10px] mt-1 text-slate-200">RL Agent</span>
            <span className="text-[9px] text-emerald-400 mt-0.5">Optimal Grid/Store</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-800">
          <span>Objective: Cost Min. & Peak Shaving</span>
          <span className="text-emerald-400">Continuous Policy</span>
        </div>
      </div>
    );
  }

  if (type === 'rag-chat') {
    return (
      <div className="w-full h-44 bg-slate-900 rounded-2xl p-3 text-white flex flex-col justify-between border border-slate-800 relative overflow-hidden font-mono text-[11px]">
        <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
          <span className="flex items-center gap-1 text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" /> NILA LOCAL RAG PIPELINE
          </span>
          <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-amber-300">ILLUSTRATIVE UI</span>
        </div>

        <div className="space-y-1.5 my-auto">
          <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300 text-[10px] max-w-[85%]">
            📄 Query: "Summarize Q3 financial liabilities from PDF"
          </div>
          <div className="p-1.5 rounded-lg bg-brand-950 border border-brand-500/40 text-brand-200 text-[10px] max-w-[90%] ml-auto">
            ⚡ FAISS top-3 semantic chunks retrieved → Ollama LLM streamed response.
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-800">
          <span>Zero cloud egress • Local privacy</span>
          <span className="text-cyan-400">FastAPI backend</span>
        </div>
      </div>
    );
  }

  if (type === 'powerbi-dashboard') {
    return (
      <div className="w-full h-44 bg-slate-900 rounded-2xl p-3 text-white flex flex-col justify-between border border-slate-800 relative overflow-hidden font-mono text-[11px]">
        <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
          <span className="flex items-center gap-1 text-amber-400">
            <BarChart3 className="w-3.5 h-3.5" /> POWER BI RFM CLUSTER DASHBOARD
          </span>
          <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-amber-300">ILLUSTRATIVE UI</span>
        </div>

        <div className="grid grid-cols-3 gap-2 py-1 items-center">
          <div className="p-2 rounded-xl bg-slate-800 text-center">
            <span className="text-[9px] text-slate-400 block">Champions</span>
            <span className="text-emerald-400 font-bold text-xs">28.4%</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-800 text-center">
            <span className="text-[9px] text-slate-400 block">At Risk</span>
            <span className="text-amber-400 font-bold text-xs">14.2%</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-800 text-center">
            <span className="text-[9px] text-slate-400 block">Loyal</span>
            <span className="text-cyan-400 font-bold text-xs">33.1%</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-800">
          <span>Calculated Measures via DAX</span>
          <span className="text-amber-400">Retail BI</span>
        </div>
      </div>
    );
  }

  // Default Mini-UI
  return (
    <div className="w-full h-44 bg-slate-900 rounded-2xl p-3 text-white flex flex-col justify-between border border-slate-800 relative overflow-hidden font-mono text-[11px]">
      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
        <span className="flex items-center gap-1 text-emerald-400">
          <Database className="w-3.5 h-3.5" /> DATA PIPELINE PREVIEW
        </span>
        <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-amber-300">ILLUSTRATIVE UI</span>
      </div>

      <div className="flex items-center justify-around py-3">
        <div className="text-center">
          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center mx-auto text-brand-400">
            📊
          </div>
          <span className="text-[9px] text-slate-400 mt-1 block">Raw Data</span>
        </div>
        <div className="text-slate-600">→</div>
        <div className="text-center">
          <div className="w-8 h-8 rounded-lg bg-brand-950 border border-brand-500 flex items-center justify-center mx-auto text-white">
            ⚙️
          </div>
          <span className="text-[9px] text-slate-400 mt-1 block">Transform</span>
        </div>
        <div className="text-slate-600">→</div>
        <div className="text-center">
          <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500 flex items-center justify-center mx-auto text-white">
            📈
          </div>
          <span className="text-[9px] text-slate-400 mt-1 block">Forecast</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-800">
        <span>Cleaned, Evaluated & Visualized</span>
        <span className="text-emerald-400">Active</span>
      </div>
    </div>
  );
}

export default function Scene4Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCaseFile, setActiveCaseFile] = useState(null); // Modal case file

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Research':
        return 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Developing':
        return 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
    }
  };

  return (
    <section
      id="scene-projects"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-[#0E1424]/60 border-y border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Stage Badge & Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 border border-brand-200/80 dark:border-brand-700/50 text-xs font-mono font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span>STAGE 03 / MODEL • SCENE 4</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects & Case Files Showcase
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
            Data products, predictive ML architectures, and local AI solutions. Click any case file to examine the end-to-end Problem, Approach, Stack, and Outcome.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {projectCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-soft scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={proj.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-premium border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:border-brand-300 dark:hover:border-brand-700 transition-all group"
              >
                <div>
                  {/* Card Header: Category & Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {proj.categoryLabel}
                    </span>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${getStatusBadge(proj.status)}`}>
                      {proj.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">
                    {proj.subtitle}
                  </p>

                  {/* Illustrative Preview */}
                  <div className="my-4">
                    <IllustrativeUI type={proj.uiType} />
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions: Open Case File & Repo Status */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveCaseFile(proj)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300"
                    >
                      <span>Open Case File</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {proj.githubUrl ? (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
                        Repo Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CASE FILE EXPANDED MODAL (Signature Feature #7) */}
        <AnimatePresence>
          {activeCaseFile && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCaseFile(null)}
                className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-premium border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-h-[85vh] overflow-y-auto z-10"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono text-brand-600 dark:text-brand-400 uppercase font-semibold">
                        PROJECT CASE FILE • {activeCaseFile.categoryLabel}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusBadge(activeCaseFile.status)}`}>
                        {activeCaseFile.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {activeCaseFile.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      {activeCaseFile.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveCaseFile(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Illustrative preview banner */}
                <div className="my-5">
                  <IllustrativeUI type={activeCaseFile.uiType} />
                </div>

                {/* Structured Breakdown: Problem -> Approach -> Stack -> Outcome */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                    <h4 className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 uppercase mb-1">
                      1. The Problem
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeCaseFile.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                    <h4 className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase mb-1">
                      2. The Technical Approach
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeCaseFile.approach}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                    <h4 className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">
                      3. Implementation Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {activeCaseFile.stack.map((s, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 text-xs font-mono"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Verified Factual Entry
                  </span>
                  <button
                    onClick={() => setActiveCaseFile(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold"
                  >
                    Close Case File
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

