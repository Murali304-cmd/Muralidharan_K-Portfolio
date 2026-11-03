import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Database, BarChart2 } from 'lucide-react';
import { profile } from '../data/profile';
import { sound } from '../hooks/useSoundHaptics';

export default function Hero() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = true;
    video.playsInline = true;

    // 1. Immediately start playing video so the avatar is actively moving & speaking
    video.muted = true;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Video is playing! Now attempt to unmute voice
          video.muted = false;
          video.volume = 1.0;
        })
        .catch(() => {
          // Fallback if browser requires user gesture
          video.muted = true;
          video.play().catch(() => {});
        });
    }

    // 2. Unmute on ANY gesture (mousemove, scroll, touch, click, keydown)
    const unmuteAll = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        videoRef.current.play().catch(() => {});
      }
      ['pointerdown', 'click', 'scroll', 'touchstart', 'mousemove', 'keydown'].forEach((evt) => {
        window.removeEventListener(evt, unmuteAll);
      });
    };

    ['pointerdown', 'click', 'scroll', 'touchstart', 'mousemove', 'keydown'].forEach((evt) => {
      window.addEventListener(evt, unmuteAll, { once: true, passive: true });
    });

    return () => {
      ['pointerdown', 'click', 'scroll', 'touchstart', 'mousemove', 'keydown'].forEach((evt) => {
        window.removeEventListener(evt, unmuteAll);
      });
    };
  }, []);

  // 3D Mouse Parallax Tilt for Video
  const handleMouseMove = (e) => {
    if (!videoContainerRef.current) return;
    const rect = videoContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX((-y / (rect.height / 2)) * 5);
    setRotateY((x / (rect.width / 2)) * 5);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch(() => {});
    }
  };

  const scrollTo = (id) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92svh] sm:min-h-[94svh] flex flex-col items-center justify-center pt-20 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Giant Outlined Ghost Word "MURALI" behind the person */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
      >
        <span
          className="text-[20vw] font-black font-mono tracking-tighter uppercase leading-none opacity-[0.06] block text-ink"
          style={{ WebkitTextStroke: '1.5px var(--ink)', color: 'transparent' }}
        >
          MURALI
        </span>
      </div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-3xl mx-auto mb-3"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-line text-xs font-mono text-mute mb-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for High-Impact Roles</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest leading-tight text-ink">
          Data Analyst & <span className="font-serif-italic text-mute">Machine Learning</span> Developer.
        </h1>
      </motion.div>

      {/* UNMODIFIED FULL 16:9 LANDSCAPE VIDEO (Continuously Speaking, Zero Overlay Buttons, 3D Gyro Tilt) */}
      <div
        ref={videoContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleVideoClick}
        className="relative z-10 w-full max-w-3xl lg:max-w-4xl my-2 sm:my-3 perspective-1000 flex items-center justify-center cursor-pointer"
      >
        {/* Floating Interactive Orbit Badge 1 (Top Left) */}
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [-1, 2, -1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden md:flex absolute -top-3 -left-6 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-line shadow-soft-lg text-xs font-mono text-ink pointer-events-none"
        >
          <Database className="w-3.5 h-3.5 text-blue-500" />
          <span>Python • SQL • Pandas</span>
        </motion.div>

        {/* Floating Interactive Orbit Badge 2 (Top Right) */}
        <motion.div
          animate={{ y: [6, -6, 6], rotate: [2, -1, 2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="hidden md:flex absolute -top-3 -right-6 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-line shadow-soft-lg text-xs font-mono text-ink pointer-events-none"
        >
          <BarChart2 className="w-3.5 h-3.5 text-amber-500" />
          <span>Power BI • Tableau • DAX</span>
        </motion.div>

        {/* Floating Interactive Orbit Badge 3 (Bottom Left) */}
        <motion.div
          animate={{ y: [5, -5, 5], rotate: [-2, 1, -2] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="hidden md:flex absolute -bottom-3 -left-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-line shadow-soft-lg text-xs font-mono text-ink pointer-events-none"
        >
          <Cpu className="w-3.5 h-3.5 text-cyan-500" />
          <span>RAG • Ollama • FAISS</span>
        </motion.div>

        {/* Floating Interactive Orbit Badge 4 (Bottom Right) */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [1, -2, 1] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="hidden md:flex absolute -bottom-3 -right-4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-line shadow-soft-lg text-xs font-mono text-ink pointer-events-none"
        >
          <Terminal className="w-3.5 h-3.5 text-emerald-500" />
          <span>Machine Learning Systems</span>
        </motion.div>

        {/* Main 16:9 Video Canvas Frame (Clean, unblocked speaking avatar) */}
        <motion.div
          animate={{ rotateX, rotateY }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden flex items-center justify-center bg-card border border-line shadow-soft-lg card-3d-glare"
        >
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
          />
        </motion.div>
      </div>

      {/* CTAs: Explore work, Let's talk, Résumé ↓ */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-2"
      >
        <button
          onClick={() => scrollTo('work')}
          className="px-7 py-3 rounded-full bg-ink text-paper text-xs font-mono font-medium hover:bg-ink-2 transition-all shadow-sm hover:-translate-y-0.5 active:scale-95"
        >
          Explore work
        </button>

        <button
          onClick={() => scrollTo('contact')}
          className="px-7 py-3 rounded-full bg-transparent border border-line-bold text-ink text-xs font-mono font-medium hover:bg-card transition-all hover:-translate-y-0.5 active:scale-95"
        >
          Let's talk
        </button>

        <a
          href="/resume.pdf"
          download="Muralidharan_K_Resume.pdf"
          onClick={() => sound.playClick()}
          className="px-7 py-3 rounded-full bg-transparent border border-line-bold text-ink text-xs font-mono font-medium hover:bg-card transition-all flex items-center gap-1.5 hover:-translate-y-0.5 active:scale-95"
        >
          <span>Résumé</span>
          <span className="text-sm leading-none">↓</span>
        </a>
      </motion.div>

      {/* Verified Quick Metrics Pill */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="relative z-10 mt-4 flex items-center justify-center"
      >
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-1.5 rounded-full bg-card/80 border border-line backdrop-blur-sm text-[11px] font-mono text-mute shadow-soft">
          <span className="text-ink font-bold">8.3 CGPA</span>
          <span className="text-faint">•</span>
          <span>TCS CodeVita <strong className="text-ink">#16,434</strong></span>
          <span className="text-faint">•</span>
          <span><strong className="text-ink">136</strong> LeetCode</span>
          <span className="text-faint">•</span>
          <span className="hidden sm:inline">Dr. MCET IT '28</span>
        </div>
      </motion.div>
    </section>
  );
}

