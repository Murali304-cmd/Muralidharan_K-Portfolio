import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#080C14] border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identity & College Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
            <span>K. Muralidharan</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-brand-600 dark:text-brand-400 font-normal">Data Analyst & ML Dev</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">
            Dr. Mahalingam College of Engineering and Technology, Pollachi (B.E. IT, 2024–2028)
          </p>
        </div>

        {/* Pipeline Summary */}
        <div className="hidden lg:flex items-center gap-1.5 text-[10px] text-slate-400">
          <span>00 BOOT</span>
          <span>→</span>
          <span>01 INGEST</span>
          <span>→</span>
          <span>02 CLEAN</span>
          <span>→</span>
          <span>03 MODEL</span>
          <span>→</span>
          <span>04 DEPLOY</span>
          <span>→</span>
          <span>05 VALIDATE</span>
          <span>→</span>
          <span>06 INSIGHTS</span>
          <span>→</span>
          <span>07 REPORT</span>
        </div>

        {/* Actions & Back to top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-slate-700 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-100 dark:border-slate-850 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 text-center gap-2">
        <span>© {new Date().getFullYear()} K. Muralidharan. Built for Skillinf Portfolio Design Hackathon 2026.</span>
        <span>Crafted with React, Tailwind CSS & Framer Motion. Zero invented facts.</span>
      </div>
    </footer>
  );
}
