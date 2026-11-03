import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart2, Cpu, Terminal } from 'lucide-react';
import { sound } from '../hooks/useSoundHaptics';

export default function Hero() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

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
          // Video is playing! Attempt unmuting voice
          video.muted = false;
          video.volume = 1.0;
        })
        .catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
    }

    // 2. Unmute on ANY interaction anywhere on the window
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
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX((-y / (rect.height / 2)) * 4);
    setRotateY((x / (rect.width / 2)) * 4);
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
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden select-none"
    >
      {/* =========================================================================
          LAYER 1 (z-10): GIANT EDITORIAL WORDS IN THE BACKGROUND BEHIND THE VIDEO
          ========================================================================= */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10 text-center px-4">
        {/* Top small availability pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/80 border border-line text-xs font-mono text-mute mb-2 sm:mb-4 shadow-sm backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for High-Impact Roles</span>
        </div>

        {/* Giant Main Words Layered IN THE BACKGROUND */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tightest leading-[0.92] text-ink uppercase font-sans">
          Data Analyst
        </h1>
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-italic text-mute tracking-tight leading-[0.98] mt-1 sm:mt-2">
          & Machine Learning
        </div>
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tightest leading-[0.92] text-ink uppercase font-sans mt-1 sm:mt-2">
          Developer.
        </h2>
      </div>

      {/* =========================================================================
          LAYER 2 (z-20): FULL-SCREEN SPEAKING AVATAR STANDING IN FRONT OF THE WORDS
          ========================================================================= */}
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        onClick={handleVideoClick}
        className="relative z-20 w-full h-[78vh] sm:h-[86vh] flex items-center justify-center cursor-pointer pointer-events-auto"
      >
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-auto max-w-full object-contain mix-blend-multiply dark:mix-blend-normal pointer-events-auto"
        />
      </motion.div>

      {/* Floating Interactive Orbit Badges (Sides) */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [-1, 2, -1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:flex absolute top-28 left-8 lg:left-16 z-30 items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-line shadow-soft-lg text-xs font-mono text-ink pointer-events-none"
      >
        <Database className="w-3.5 h-3.5 text-blue-500" />
        <span>Python • SQL • Pandas</span>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6], rotate: [2, -1, 2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden md:flex absolute top-28 right-8 lg:right-16 z-30 items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-line shadow-soft-lg text-xs font-mono text-ink pointer-events-none"
      >
        <BarChart2 className="w-3.5 h-3.5 text-amber-500" />
        <span>Power BI • Tableau • DAX</span>
      </motion.div>

      {/* =========================================================================
          LAYER 3 (z-30): BOTTOM FLOATING ACTION CONTROLS & METRICS
          ========================================================================= */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex flex-col items-center justify-center gap-2.5 px-4 pointer-events-auto">
        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => scrollTo('work')}
            className="px-6 py-2.5 rounded-full bg-ink text-paper text-xs font-mono font-medium hover:bg-ink-2 transition-all shadow-md hover:-translate-y-0.5 active:scale-95"
          >
            Explore work
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-2.5 rounded-full bg-card/90 backdrop-blur-md border border-line-bold text-ink text-xs font-mono font-medium hover:bg-card transition-all hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            Let's talk
          </button>

          <a
            href="/resume.pdf"
            download="Muralidharan_K_Resume.pdf"
            onClick={() => sound.playClick()}
            className="px-6 py-2.5 rounded-full bg-card/90 backdrop-blur-md border border-line-bold text-ink text-xs font-mono font-medium hover:bg-card transition-all flex items-center gap-1.5 hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            <span>Résumé</span>
            <span className="text-sm leading-none">↓</span>
          </a>
        </div>

        {/* Verified Quick Metrics Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-1 rounded-full bg-card/85 border border-line backdrop-blur-md text-[11px] font-mono text-mute shadow-soft">
          <span className="text-ink font-bold">8.3 CGPA</span>
          <span className="text-faint">•</span>
          <span>TCS CodeVita <strong className="text-ink">#16,434</strong></span>
          <span className="text-faint">•</span>
          <span><strong className="text-ink">136</strong> LeetCode</span>
          <span className="text-faint">•</span>
          <span className="hidden sm:inline">Dr. MCET IT '28</span>
        </div>
      </div>
    </section>
  );
}

