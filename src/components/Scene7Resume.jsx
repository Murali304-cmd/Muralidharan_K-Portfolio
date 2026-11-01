import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, ExternalLink, FileText, CheckCircle, 
  Eye, ShieldCheck, Sparkles, AlertCircle 
} from 'lucide-react';
import { profile } from '../data/profile';

export default function Scene7Resume() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadClick = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section
      id="scene-resume"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0B0F19] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Stage Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 border border-brand-200/80 dark:border-brand-700/50 text-xs font-mono font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span>STAGE 06 / INSIGHTS • SCENE 7</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curriculum Vitae & Verified Resume
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
            Direct access to the original, uploaded PDF resume document. Unmodified and strictly factual.
          </p>
        </div>

        {/* Resume Card Display */}
        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900/90 rounded-3xl p-6 sm:p-10 shadow-premium border border-slate-200/80 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Document Mockup Preview */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-[260px] aspect-[1/1.414] bg-white rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col justify-between overflow-hidden text-slate-800 select-none">
                {/* Header preview */}
                <div>
                  <div className="w-12 h-1 bg-brand-500 rounded-full mb-3" />
                  <div className="font-extrabold text-xs tracking-tight text-slate-900">
                    K. MURALIDHARAN
                  </div>
                  <div className="text-[8px] font-mono text-slate-500 mt-0.5">
                    Data Analyst • ML Dev • Dr. MCET Pollachi
                  </div>
                  <div className="w-full h-px bg-slate-200 my-2" />
                </div>

                {/* Body skeleton lines */}
                <div className="space-y-1.5 my-auto">
                  <div className="h-1.5 bg-slate-200 rounded w-full" />
                  <div className="h-1.5 bg-slate-200 rounded w-5/6" />
                  <div className="h-1.5 bg-slate-200 rounded w-4/6" />
                  <div className="h-2 bg-brand-100 rounded w-1/2 my-2" />
                  <div className="h-1.5 bg-slate-200 rounded w-full" />
                  <div className="h-1.5 bg-slate-200 rounded w-3/4" />
                </div>

                {/* Footer preview */}
                <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[7px] font-mono text-slate-400">
                  <span>Muralidharan_K Resume.pdf</span>
                  <span>1 Page PDF</span>
                </div>

                {/* Hover overlay with quick preview action */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 bg-slate-900/70 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-6 h-6 text-accent-cyan" />
                  <span className="text-xs font-semibold">Open in New Tab</span>
                </a>
              </div>
            </div>

            {/* Document Details & Download CTAs */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-medium mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Source File</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Download Official Resume
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Clicking below initiates a direct download of the actual verified PDF file provided (<code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[11px] font-mono">Muralidharan_K_Resume.pdf</code>). No invented metrics or external redirects.
              </p>

              {/* Factual Highlights in Resume */}
              <div className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>B.E. Information Technology at Dr. MCET Pollachi (8.3 CGPA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Thiranx Data Analytics Internship (June–July 2026)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>TCS CodeVita Season 13 Global Rank 16,434</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Oracle Fusion AI Agent Studio Certified Foundations</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mt-8 w-full">
                <a
                  href="/resume.pdf"
                  download="Muralidharan_K_Resume.pdf"
                  onClick={handleDownloadClick}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-soft hover:shadow-glow transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors shadow-soft"
                >
                  <Eye className="w-4 h-4 text-slate-500" />
                  <span>View in New Tab</span>
                </a>
              </div>

              {/* Download status toast message */}
              {downloadSuccess && (
                <div className="mt-3 text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Download started: Muralidharan_K_Resume.pdf</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
