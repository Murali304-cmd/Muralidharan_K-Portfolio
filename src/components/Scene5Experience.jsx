import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Award, CheckCircle, Calendar, MapPin, 
  Sparkles, ExternalLink, ShieldCheck, Trophy, Terminal 
} from 'lucide-react';
import { experiences, certifications, achievements } from '../data/experience';

export default function Scene5Experience() {
  return (
    <section
      id="scene-experience"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B0F19] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Stage Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 border border-brand-200/80 dark:border-brand-700/50 text-xs font-mono font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>STAGE 04 / DEPLOY • SCENE 5</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience, Certifications & Milestones
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
            Practical industry execution through remote internship, intensive algorithmic competition, and cloud AI certifications.
          </p>
        </div>

        {/* Count-Up Highlights Bar (Signature Feature #9) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-50 to-indigo-50/50 dark:from-slate-900 dark:to-slate-800/80 border border-brand-200/80 dark:border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-black font-mono text-brand-600 dark:text-brand-400">
              16,434
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase font-semibold">
              TCS CodeVita Global Rank
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-50/50 dark:from-slate-900 dark:to-slate-800/80 border border-cyan-200/80 dark:border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-black font-mono text-accent-cyan">
              100K
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase font-semibold">
              CampusCrew Honor Milestone
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-slate-900 dark:to-slate-800/80 border border-emerald-200/80 dark:border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">
              8.3
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase font-semibold">
              B.E. IT Current CGPA
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50/50 dark:from-slate-900 dark:to-slate-800/80 border border-amber-200/80 dark:border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-black font-mono text-amber-500">
              136
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase font-semibold">
              LeetCode DSA Solved
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Experience Timeline with Glowing Spine (Signature Feature #8) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Work Experience & Training
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-200 dark:border-slate-800 space-y-8">
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="relative group">
                  {/* Glowing Stop Node on Spine */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-brand-600 group-hover:scale-125 transition-transform shadow-glow" />

                  <div className="bg-slate-50/80 dark:bg-slate-900/80 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-soft">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-brand-600 dark:text-brand-400 font-bold uppercase">
                        {exp.badge} • {exp.period}
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-semibold">
                        VERIFIED IN RESUME
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">{exp.organization}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    {/* Highlights bullet points */}
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills used */}
                    <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-1.5">
                      {exp.skills.map((s, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications & Competitive Honors */}
          <div className="lg:col-span-5 space-y-8">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Verified Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-mono text-brand-600 dark:text-brand-400 font-bold uppercase">
                        {cert.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Issuer: <strong className="text-slate-700 dark:text-slate-300">{cert.issuer}</strong>
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Achievements */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Competitive Honors
                </h3>
              </div>

              <div className="space-y-3">
                {achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className="p-4 rounded-2xl bg-gradient-to-r from-amber-50/50 to-transparent dark:from-slate-900 dark:to-slate-900/60 border border-amber-200/60 dark:border-slate-800 flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm font-mono font-bold text-xs">
                      🏆
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {ach.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-bold">
                          {ach.metricLabel}: {ach.rank}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
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

