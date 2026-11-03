import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';
import { sound } from '../hooks/useSoundHaptics';

export default function AboutLanyard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  // Mouse tilt math relative to card center
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX((-y / (rect.height / 2)) * 12);
    setRotateY((x / (rect.width / 2)) * 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleFlip = () => {
    sound.playPaperRustle();
    setIsFlipped(!isFlipped);
  };

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto border-t border-line"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="font-mono text-xs text-mute uppercase tracking-widest mb-2">
          02 — About & Identity
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-ink">
          Crafting systems from <span className="font-serif-italic text-mute">data & curiosity.</span>
        </h2>
      </div>

      {/* Three-Column Grid: minmax(0,1fr) 320px minmax(0,1fr) */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px_minmax(0,1fr)] gap-8 items-start">
        {/* Left Column: Bio & Verbatim Summary */}
        <div className="flex flex-col justify-between h-full space-y-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-ink mb-4">
              Hi, I'm {profile.name}.
            </h3>
            <p className="text-sm leading-relaxed text-ink-2 font-normal">
              {profile.objective}
            </p>
            <p className="text-sm leading-relaxed text-mute mt-3">
              Currently pursuing my B.E. in Information Technology at Dr. Mahalingam College of Engineering and Technology (Dr. MCET), Pollachi.
            </p>
          </div>

          {/* Buttons: Résumé, GitHub, LinkedIn */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <a
              href="/resume.pdf"
              download="Muralidharan_K_Resume.pdf"
              onClick={() => sound.playClick()}
              className="px-5 py-2.5 rounded-full bg-ink text-paper text-xs font-mono font-medium hover:opacity-90 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Résumé ↓</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="px-5 py-2.5 rounded-full border border-line-bold text-ink text-xs font-mono font-medium hover:bg-card transition-all flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub ↗</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="px-5 py-2.5 rounded-full border border-line-bold text-ink text-xs font-mono font-medium hover:bg-card transition-all flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn ↗</span>
            </a>
          </div>
        </div>

        {/* Center Column: Realistic Hanging Lanyard ID Card with 3D Tilt Parallax */}
        <div className="flex flex-col items-center justify-center relative">
          {/* Lanyard Strap with Metal Clip */}
          <div className="w-[30px] h-[56px] bg-ink rounded-t-sm flex flex-col items-center justify-between py-1 relative overflow-hidden shadow-sm">
            <div className="text-[6px] font-mono text-paper uppercase tracking-widest rotate-90 whitespace-nowrap mt-2">
              DR MCET
            </div>
            <div className="w-4 h-2 bg-slate-300 dark:bg-slate-600 rounded-sm border border-slate-400 dark:border-slate-500 -mb-1 shadow-inner" />
          </div>

          {/* 3D Flippable Card with Interactive Cursor Parallax */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="perspective-1000 w-[300px] h-[404px] cursor-pointer mt-2"
            onClick={handleFlip}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleFlip();
            }}
            tabIndex={0}
            role="button"
            aria-label="Developer ID Card, click to flip"
          >
            <motion.div
              animate={{
                rotateX: isFlipped ? 0 : rotateX,
                rotateY: isFlipped ? 180 : rotateY,
              }}
              transition={{ type: 'spring', damping: 18, stiffness: 220 }}
              className="relative w-full h-full transform-style-3d rounded-2xl shadow-soft-lg border border-line bg-card"
            >
              {/* FRONT OF ID CARD */}
              <div className="absolute inset-0 backface-hidden p-5 flex flex-col justify-between text-center rounded-2xl bg-card border border-line">
                {/* Black top band */}
                <div className="w-full bg-ink text-paper py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>DEVELOPER ID</span>
                </div>

                {/* Portrait Centered in 128x156 frame */}
                <div className="flex justify-center my-2">
                  <div className="w-[128px] h-[156px] rounded-xl overflow-hidden p-1 bg-gradient-to-b from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900 shadow-inner group">
                    <img
                      src="/murali-bust.webp"
                      alt="Muralidharan K"
                      className="w-full h-full object-cover object-top rounded-lg group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>

                {/* Name, Role & Details */}
                <div>
                  <h4 className="font-extrabold text-base tracking-tight text-ink">
                    {profile.name}
                  </h4>
                  <p className="text-[11px] font-mono text-mute mt-0.5">
                    Data Analyst • ML Dev
                  </p>
                </div>

                {/* ID Metadata rows */}
                <div className="w-full grid grid-cols-3 gap-1 py-1.5 px-2 bg-paper rounded-lg text-[9px] font-mono text-ink border border-line">
                  <div>
                    <span className="text-mute block">ID NO</span>
                    <span className="font-bold">24IT09</span>
                  </div>
                  <div>
                    <span className="text-mute block">DEPT</span>
                    <span className="font-bold">IT</span>
                  </div>
                  <div>
                    <span className="text-mute block">VALID</span>
                    <span className="font-bold">2028</span>
                  </div>
                </div>

                {/* Gray Barcode */}
                <div className="flex items-center justify-between pt-1 border-t border-line">
                  <div className="h-4 flex items-center gap-0.5 opacity-60">
                    {[2, 1, 3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2].map((w, i) => (
                      <div key={i} className="h-full bg-ink" style={{ width: `${w * 1.5}px` }} />
                    ))}
                  </div>
                  <span className="text-[8px] font-mono text-mute">MK-2028-IT • TAP TO FLIP</span>
                </div>
              </div>

              {/* BACK OF ID CARD */}
              <div
                className="absolute inset-0 backface-hidden p-5 flex flex-col justify-between text-left rounded-2xl bg-ink text-paper border border-line"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-faint">
                    <span>WHAT I AM</span>
                    <Sparkles className="w-3.5 h-3.5 text-paper" />
                  </div>

                  <div className="mt-3 space-y-2 text-[11px] text-paper/90 leading-relaxed font-sans">
                    <p>• Data Analyst & Machine Learning Developer</p>
                    <p>• B.E. Information Technology @ Dr. MCET (CGPA: 8.3)</p>
                    <p>• 136 Solved on LeetCode (DSA Algorithms)</p>
                    <p>• TCS CodeVita Season 13 Global Rank 16,434</p>
                    <p>• Capstones: NILA (RAG Assistant), ATM Cash Demand</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-faint">
                  <div className="italic text-paper/80 mb-1">{profile.name}.</div>
                  <div>If found, say hello · {profile.email}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Quick Facts & Quote */}
        <div className="flex flex-col justify-between h-full space-y-6">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-mute block">
              Quick Facts
            </span>

            <div className="space-y-3 text-xs">
              <div className="pb-2 border-b border-line">
                <span className="text-mute block font-mono text-[10px]">Location</span>
                <span className="font-semibold text-ink">Pollachi / Dharmapuri, Tamil Nadu</span>
              </div>

              <div className="pb-2 border-b border-line">
                <span className="text-mute block font-mono text-[10px]">Education</span>
                <span className="font-semibold text-ink">Dr. Mahalingam College of Engg. & Tech (8.3 CGPA)</span>
              </div>

              <div className="pb-2 border-b border-line">
                <span className="text-mute block font-mono text-[10px]">Work Experience</span>
                <span className="font-semibold text-ink">Data Analytics Intern @ Thiranx (June–July 2026)</span>
              </div>

              <div className="pb-2 border-b border-line">
                <span className="text-mute block font-mono text-[10px]">Primary Email</span>
                <span className="font-mono text-ink">{profile.email}</span>
              </div>
            </div>
          </div>

          {/* Factual Quote */}
          <div className="p-4 rounded-xl bg-card border border-line">
            <p className="text-xs italic text-ink font-serif leading-relaxed">
              "Committed to delivering innovative, data-driven solutions while continuously enhancing technical and analytical skills."
            </p>
            <span className="text-[10px] font-mono text-mute mt-2 block">
              — From verified resume objective
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
