import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check, Github, Linkedin, ArrowUpRight, MailOpen, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profile } from '../data/profile';
import { sound } from '../hooks/useSoundHaptics';

export default function ContactLetterHop() {
  const [copied, setCopied] = useState(false);
  const [ariaLiveMsg, setAriaLiveMsg] = useState('');
  const [isWaxSealBroken, setIsWaxSealBroken] = useState(false);

  const handleCopyEmail = () => {
    sound.playClick();
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

  const handleBreakSeal = () => {
    sound.playPaperRustle();
    sound.playChime();
    setIsWaxSealBroken(true);
    try {
      confetti({ particleCount: 50, spread: 65, origin: { y: 0.75 } });
    } catch (e) {}
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
        {/* Left Side: Unfolded Letter Card or Sealed Wax Envelope */}
        <div className="lg:col-span-8 bg-card rounded-3xl p-8 sm:p-10 border border-line shadow-soft-lg relative overflow-hidden">
          {!isWaxSealBroken ? (
            /* Sealed Envelope Stage */
            <div className="text-center py-6 flex flex-col items-center justify-center">
              <div
                onClick={handleBreakSeal}
                className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-white flex items-center justify-center shadow-md cursor-pointer hover:scale-110 active:scale-95 transition-all group relative"
              >
                <span className="font-mono font-bold text-sm tracking-wider">MK</span>
                <span className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-ink text-paper text-[8px] font-mono uppercase tracking-widest">
                  WAX SEAL
                </span>
              </div>

              <h4 className="text-xl font-bold text-ink mt-6">
                "Have an opportunity or an interesting idea? Let's connect!"
              </h4>
              <p className="text-xs text-mute mt-2">
                Click the wax seal to unfold communication coordinates
              </p>

              <button
                onClick={handleBreakSeal}
                className="mt-6 px-6 py-2.5 rounded-full bg-ink text-paper text-xs font-mono font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <MailOpen className="w-4 h-4" />
                <span>Open Communication Envelope</span>
              </button>
            </div>
          ) : (
            /* Unfolded Communication Document */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
                <span className="font-mono text-xs text-mute uppercase tracking-wider font-semibold">
                  Muralidharan K • Communications
                </span>
                <span className="font-mono text-xs text-emerald-500 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
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
                      onClick={() => sound.playClick()}
                      className="text-xl sm:text-2xl font-bold tracking-tight text-ink hover:underline decoration-line-bold underline-offset-8"
                    >
                      {profile.email}
                    </a>

                    <button
                      onClick={handleCopyEmail}
                      className="px-3 py-1 rounded-full bg-paper hover:opacity-80 border border-line text-xs font-mono font-medium text-ink transition-colors flex items-center gap-1.5"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-600 font-bold">Copied ✓</span>
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
                      onClick={() => sound.playClick()}
                      className="font-mono text-base font-bold text-ink hover:underline"
                    >
                      {profile.phone}
                    </a>
                  </div>

                  <a
                    href={`tel:${profile.phone}`}
                    onClick={() => sound.playClick()}
                    className="px-4 py-2 rounded-full border border-line text-xs font-mono font-medium hover:bg-paper text-ink transition-colors"
                  >
                    Call Me →
                  </a>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-line flex items-center gap-4">
                  <span className="font-mono text-xs text-mute">Profiles:</span>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    className="text-xs font-mono font-semibold text-ink hover:underline flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    className="text-xs font-mono font-semibold text-ink hover:underline flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
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
              onClick={() => sound.playClick()}
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
