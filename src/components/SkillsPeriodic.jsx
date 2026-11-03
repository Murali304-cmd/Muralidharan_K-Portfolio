import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FolderGit2, Sparkles, Terminal } from 'lucide-react';
import { skills, skillCategories } from '../data/skills';

export default function SkillsPeriodic() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(skills[0]); // Python default

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto border-t border-line"
    >
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-ink">
            Periodic table of my <span className="font-serif-italic text-mute">stack.</span>
          </h2>
          <p className="text-sm text-mute mt-1">
            Curated high-impact technologies. No bloated filler. No invented percentage bars.
          </p>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap items-center gap-1.5">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat.id
                  ? 'bg-ink text-paper font-semibold shadow-sm'
                  : 'bg-card border border-line text-mute hover:text-ink hover:border-line-bold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid + Inspector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Element Tiles (8 Cols Grid on Desktop) */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {skills.map((skill, idx) => {
              const isSelected = selectedSkill.id === skill.id;
              const matchesFilter =
                activeCategory === 'all' || skill.category === activeCategory;

              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: matchesFilter ? 1 : 0.25, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  onClick={() => setSelectedSkill(skill)}
                  onMouseEnter={() => setSelectedSkill(skill)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border text-left group select-none relative ${
                    isSelected
                      ? 'bg-card border-ink shadow-soft-lg scale-[1.03] z-10 ring-1 ring-ink'
                      : 'bg-card/80 border-line hover:border-line-bold hover:bg-card'
                  }`}
                >
                  {/* Atomic Number + Category Tag */}
                  <div className="flex items-center justify-between font-mono text-[10px] text-mute mb-2">
                    <span>0{skill.number}</span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>

                  {/* 2-Letter Symbol */}
                  <div
                    className="text-3xl font-black font-mono tracking-tight transition-transform group-hover:translate-x-1"
                    style={{ color: skill.color }}
                  >
                    {skill.symbol}
                  </div>

                  {/* Name and Family */}
                  <div className="mt-3">
                    <div className="font-bold text-xs text-ink truncate">
                      {skill.name}
                    </div>
                    <div className="text-[10px] text-mute truncate font-mono">
                      {skill.categoryLabel}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Sticky Inspector Panel (320px / 4 Cols) */}
        <div className="lg:col-span-4 sticky top-24">
          <motion.div
            key={selectedSkill.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-card rounded-3xl p-6 sm:p-7 border border-line shadow-soft-lg"
          >
            {/* Element Logo / Symbol Badge (150px Pop Animation) */}
            <div className="flex items-center justify-center py-6 border-b border-line bg-paper/60 rounded-2xl mb-5">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-24 h-24 rounded-2xl flex items-center justify-center font-mono font-black text-4xl text-paper shadow-md"
                style={{ backgroundColor: selectedSkill.color }}
              >
                {selectedSkill.symbol}
              </motion.div>
            </div>

            {/* Header info */}
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-mute block">
                STACK ELEMENT #{selectedSkill.number} • {selectedSkill.categoryLabel}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-ink mt-0.5">
                {selectedSkill.name}
              </h3>
            </div>

            <p className="text-xs text-ink-2 leading-relaxed mt-3 font-normal">
              {selectedSkill.description}
            </p>

            {/* Verified Project Deployments */}
            <div className="mt-5 pt-4 border-t border-line">
              <span className="font-mono text-[10px] uppercase tracking-wider text-mute block mb-2 font-semibold">
                Used in Projects
              </span>

              <div className="space-y-1.5">
                {selectedSkill.projects.map((proj, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 rounded-lg bg-paper text-xs text-ink font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{proj}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

