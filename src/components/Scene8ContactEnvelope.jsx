import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, Copy, Check, Linkedin, Github, 
  Sparkles, Send, MailOpen, ArrowUpRight, MessageSquare 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profile } from '../data/profile';

export default function Scene8ContactEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ariaLiveMessage, setAriaLiveMessage] = useState('');

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#6366F1', '#06B6D4', '#10B981']
      });
    } catch (e) {}
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setAriaLiveMessage(`Email address ${profile.email} copied to clipboard.`);
    setTimeout(() => {
      setCopied(false);
      setAriaLiveMessage('');
    }, 3000);
  };

  return (
    <section
      id="scene-contact"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#0E1424]/60 border-t border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
    >
      {/* Accessible aria-live region */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {ariaLiveMessage}
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Stage Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 border border-brand-200/80 dark:border-brand-700/50 text-xs font-mono font-medium mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>STAGE 07 / REPORT • SCENE 8</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let’s Build Something Meaningful Together
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl mx-auto">
          Have an opportunity or an interesting idea? Let's connect! Open the contact envelope below.
        </p>

        {/* Envelope Container */}
        <div className="mt-12 flex flex-col items-center justify-center">
          {!isOpen ? (
            /* Closed Interactive Envelope */
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpenEnvelope}
              className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-premium border-2 border-brand-200/80 dark:border-brand-700/60 cursor-pointer text-center group"
            >
              {/* Soft glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-500/15 to-accent-cyan/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-600 to-accent-cyan text-white flex items-center justify-center shadow-lg mb-5 group-hover:rotate-12 transition-transform">
                  <Mail className="w-8 h-8" />
                </div>

                <span className="text-xs font-mono text-brand-600 dark:text-brand-400 font-bold uppercase tracking-wider">
                  INTERACTIVE CONTACT ENVELOPE
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-2">
                  "Have an opportunity or an interesting idea? Let's connect!"
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  Click to open envelope and reveal direct communication channels
                </p>

                <button
                  onClick={handleOpenEnvelope}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold shadow-soft hover:scale-105 transition-all"
                >
                  <MailOpen className="w-4 h-4" />
                  <span>Open Envelope</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* Unfolded / Open Contact Letter */
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-premium border-2 border-brand-400/80 dark:border-brand-600/80 text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    DIRECT COMMUNICATION CHANNELS
                  </span>
                </div>
                <span className="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold">
                  MURALIDHARAN K
                </span>
              </div>

              {/* Contact Information Details */}
              <div className="mt-6 space-y-4">
                {/* Email Address */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm sm:text-base font-bold text-brand-600 dark:text-brand-400 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Copy Email Button with aria-live */}
                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email to clipboard"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-650 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>

                    {/* Email Me Button (mailto:) */}
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-brand-600 hover:bg-brand-700 text-white shadow-soft transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Email Me</span>
                    </a>
                  </div>
                </div>

                {/* Telephone Number */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                      Direct Telephone
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">
                      {profile.phone}
                    </span>
                  </div>

                  {/* Call Me Button (tel:) */}
                  <a
                    href={`tel:${profile.phone}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Me</span>
                  </a>
                </div>
              </div>

              {/* Verified Professional Links */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-slate-400">
                  Verified Social Networks:
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Honest Contact Guarantee Note */}
              <div className="mt-4 text-[11px] font-mono text-center text-slate-400">
                Direct client triggers • Zero simulated fake forms
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
