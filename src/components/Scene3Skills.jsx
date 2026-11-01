import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, CheckCircle2, FolderGit2, Info, Sparkles, 
  Terminal, Database, Cpu, BarChart2, Globe 
} from 'lucide-react';
import { skills, skillCategories } from '../data/skills';

export default function Scene3Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(skills[0]); // default to Python

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section
      id="scene-skills"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B0F19] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Stage Badge & Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 border border-brand-200/80 dark:border-brand-700/50 text-xs font-mono font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>STAGE 02 / CLEAN • SCENE 3</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Periodic Table of My Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
            Interactive element matrix representing technical growth. Select any element to inspect its architectural purpose and mapped projects. Strictly factual — zero invented percentages.
          </p>

          {/* Filter Chips Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-soft scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{cat.label}</span>
                {activeCategory === cat.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Periodic Table Tiles + Inspector Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Periodic Table Grid (8 Cols on LG) */}
          <div className="lg:col-span-8">
            <motion.div 
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
            >
              <AnimatePresence>
                {filteredSkills.map((skill, idx) => {
                  const isSelected = selectedSkill?.id === skill.id;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25, delay: idx * 0.02 }}
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      className={`relative p-3.5 rounded-2xl cursor-pointer transition-all duration-200 border text-left group select-none ${
                        isSelected
                          ? 'bg-brand-50/80 dark:bg-brand-950/40 border-brand-500 shadow-glow scale-[1.03] z-10'
                          : 'bg-slate-50/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800'
                      }`}
                    >
                      {/* Top: Atomic Number & Category symbol */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-slate-500 mb-2">
                        <span>{skill.number < 10 ? `0${skill.number}` : skill.number}</span>
                        <span 
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          title={skill.categoryLabel}
                        />
                      </div>

                      {/* Chemical Element Symbol */}
                      <div 
                        className="text-2xl font-black font-mono tracking-tight transition-transform group-hover:translate-x-1"
                        style={{ color: skill.color }}
                      >
                        {skill.symbol}
                      </div>

                      {/* Element Name & Category Label */}
                      <div className="mt-2">
                        <div className="font-bold text-xs text-slate-900 dark:text-white truncate">
                          {skill.name}
                        </div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate font-mono">
                          {skill.categoryLabel}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Inspector Panel for Selected Skill (4 Cols on LG) */}
          <div className="lg:col-span-4 sticky top-24">
            {selectedSkill ? (
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-premium border-2 border-brand-200/80 dark:border-brand-800/80 relative overflow-hidden"
              >
                {/* Accent top gradient line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: selectedSkill.color }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-black text-2xl text-white shadow-md"
                      style={{ backgroundColor: selectedSkill.color }}
                    >
                      {selectedSkill.symbol}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase">
                        ELEMENT #{selectedSkill.number}
                      </span>
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                        {selectedSkill.name}
                      </h3>
                      <span className="inline-block text-xs font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mt-1">
                        {selectedSkill.categoryLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedSkill.description}
                </div>

                {/* Connected Portfolio Projects */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    <FolderGit2 className="w-3.5 h-3.5 text-brand-500" />
                    <span>Implemented In Projects</span>
                  </div>

                  <div className="space-y-2">
                    {selectedSkill.projects && selectedSkill.projects.length > 0 ? (
                      selectedSkill.projects.map((proj, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{proj}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-slate-400 italic">Foundational technical capability.</p>
                    )}
                  </div>
                </div>

                {/* Integrity note */}
                <div className="mt-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                  <Info className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Strictly verified stack. No arbitrary % bars.</span>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

