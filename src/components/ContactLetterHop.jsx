import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check, Github, Linkedin, ArrowUpRight, MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profile } from '../data/profile';

export default function ContactLetterHop() {
  const [copied, setCopied] = useState(false);
  const [ariaLiveMsg, setAriaLiveMsg] = useState('');
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(true); // default open so it's directly accessible, with close/open toggle

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setAriaLiveMsg('Email address copied to clipboard');
    try {
      confetti({ particleCount: 35, spread: 50, origin: { y: 0.85 } });
    } catch (e) {}
    setTimeout(() => {
      setCopied(false);
      setAriaLiveMsg('');
    }, 2500);
  };

  const line1 = "Let's build".split("");
  const line2 = "something together.".split("");

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto border-t border-line"
    >
      <div aria-live="polite" className="sr-only">
        {ariaLiveMsg}
      </div>

      <div className="font-mono text-xs text-mute uppercase tracking-widest mb-4">
        09 — Direct Inquiries
      </div>

      {/* Huge Heading with Letter Hop Animation on Cursor Hover */}
      <div className="max-w-4xl select-none mb-12">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tightest text-ink leading-[1.08]">
          <span className="block">
            {line1.map((char, i) => (
              <span
                key={i}
                className="letter-hop cursor-default"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
          <span className="block font-serif-italic text-mute">
            {line2.map((char, i) => (
              <span
                key={i}
                className="letter-hop cursor-default"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </h2>
      </div>

      {/* Interactive 3D Unfolding Envelope Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Unfolded Letter Card */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-line shadow-soft-lg">
          <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
            <span className="font-mono text-xs text-mute uppercase tracking-wider font-semibold">
              K. Muralidharan • Communications
            </span>
            <span className="font-mono text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Opportunities
            </span>
          </div>

          {/* Large Underlined Email Link with Copy Chip */}
          <div className="space-y-4">
            <div>
              <span className="font-mono text-[10px] text-mute uppercase tracking-wider block mb-1">
                Primary Email
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-xl sm:text-2xl font-bold tracking-tight text-ink hover:underline decoration-line-bold underline-offset-8"
                >
                  {profile.email}
                </a>

                {/* Copy Chip that announces via aria-live */}
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 rounded-full bg-paper hover:bg-slate-200 border border-line text-xs font-mono font-medium text-ink transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-mute" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone Trigger (tel:) */}
            <div className="pt-4 border-t border-line flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-mute uppercase tracking-wider block mb-0.5">
                  Direct Telephone
                </span>
                <a
                  href={`tel:${profile.phone}`}
                  className="font-mono text-base font-bold text-ink hover:underline"
                >
                  {profile.phone}
                </a>
              </div>

              <a
                href={`tel:${profile.phone}`}
                className="px-4 py-2 rounded-full border border-line text-xs font-mono font-medium hover:bg-paper transition-colors"
              >
                Call Me →
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-line flex items-center gap-4">
              <span className="font-mono text-xs text-mute">Profiles:</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono font-semibold text-ink hover:underline flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono font-semibold text-ink hover:underline flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Circular Spinning "Say Hello" Text Badge */}
        <div className="lg:col-span-4 flex items-center justify-center py-6">
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* Spinning Circular Text */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <svg className="w-full h-full" viewBox="0 0 160 160">
                <path
                  id="circlePath"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  fill="none"
                />
                <text className="text-[10px] font-mono tracking-widest uppercase fill-ink">
                  <textPath href="#circlePath">
                    • SAY HELLO • OPEN TO OPPORTUNITIES • GET IN TOUCH
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Center Mail Icon Trigger */}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send direct email"
              className="w-16 h-16 rounded-full bg-ink text-paper flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
