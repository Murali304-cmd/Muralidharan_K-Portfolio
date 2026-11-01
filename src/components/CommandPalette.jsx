import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ArrowRight, Download, Mail, Moon, Sun, 
  Code, FolderGit2, Award, GraduationCap, X, Check 
} from 'lucide-react';
import { scenes } from '../data/journey';
import { projects } from '../data/projects';
import { profile } from '../data/profile';

export default function CommandPalette({ isOpen, onClose, toggleTheme, theme }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(true); // toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filter commands
  const filteredScenes = scenes.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.navLabel.toLowerCase().includes(query.toLowerCase()) ||
    s.stage.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-premium border border-slate-200 dark:border-slate-800 overflow-hidden z-10"
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Type a command or search sections, projects, tech..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-4">
          {/* Quick Actions */}
          <div>
            <div className="px-3 py-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Quick Actions
            </div>
            <div className="space-y-1 mt-1">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-500" />
                  <span>Copy Murali's Email Address</span>
                </div>
                {copied ? (
                  <span className="text-[11px] text-emerald-600 font-mono flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </span>
                ) : (
                  <kbd className="text-[10px] font-mono text-slate-400">{profile.email}</kbd>
                )}
              </button>

              <a
                href="/resume.pdf"
                download="Muralidharan_K_Resume.pdf"
                onClick={onClose}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4 text-accent-cyan" />
                  <span>Download Verified Resume PDF</span>
                </div>
                <kbd className="text-[10px] font-mono text-slate-400">PDF</kbd>
              </a>

              <button
                onClick={() => {
                  toggleTheme();
                  onClose();
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  {theme === 'light' ? (
                    <Moon className="w-4 h-4 text-indigo-500" />
                  ) : (
                    <Sun className="w-4 h-4 text-amber-500" />
                  )}
                  <span>Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})</span>
                </div>
                <kbd className="text-[10px] font-mono text-slate-400">Theme</kbd>
              </button>
            </div>
          </div>

          {/* Pipeline Journey Scenes */}
          {filteredScenes.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Pipeline Stages
              </div>
              <div className="space-y-1 mt-1">
                {filteredScenes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => navigateTo(s.id)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-brand-500 font-bold">{s.number}</span>
                      <span>{s.title}</span>
                      <span className="text-[11px] text-slate-400 hidden sm:inline">({s.subtitle})</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Projects
              </div>
              <div className="space-y-1 mt-1">
                {filteredProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => navigateTo('scene-projects')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <FolderGit2 className="w-4 h-4 text-amber-500 shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">{p.title}</div>
                        <div className="text-[11px] text-slate-500">{p.stack.join(', ')}</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {p.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Navigate with mouse or keyboard</span>
          <span>ESC to close</span>
        </div>
      </motion.div>
    </div>
  );
}
