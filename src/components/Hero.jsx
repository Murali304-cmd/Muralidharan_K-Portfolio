import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [soundBlocked, setSoundBlocked] = useState(true);
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  // Try playing video on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // autoplay with sound blocked by browser policy
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.play().catch(() => {});
      });
    }

    // Unlock audio on first user interaction anywhere
    const unlockAudio = () => {
      setSoundBlocked(false);
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };

    window.addEventListener('pointerdown', unlockAudio, { once: true });
    window.addEventListener('keydown', unlockAudio, { once: true });

    return () => {
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
  }, []);

  // IntersectionObserver: Pause video when less than 35% visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
              videoRef.current.play().catch(() => {});
              setIsPlaying(true);
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: [0, 0.35, 1.0] }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      setSoundBlocked(false);
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[94svh] flex flex-col items-center justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Giant Outlined Ghost Word "MURALI" behind the person */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
      >
        <span
          className="text-[20vw] font-black font-mono tracking-tighter uppercase leading-none opacity-[0.06] block text-ink"
          style={{ WebkitTextStroke: '1.5px #0d0d0d', color: 'transparent' }}
        >
          MURALI
        </span>
      </div>

      {/* Main Heading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest leading-tight text-ink">
          Data Analyst & <span className="font-serif-italic text-mute">Machine Learning</span> Developer.
        </h1>
      </div>

      {/* UNMODIFIED FULL 16:9 LANDSCAPE VIDEO (No cropping, full width and height) */}
      <div className="relative z-10 w-full max-w-4xl my-4 flex items-center justify-center">
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden flex items-center justify-center">
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            poster="/murali-portrait.jpg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full h-full object-contain mix-blend-multiply"
          />

          {/* Icon-Only Round Sound Control (46px, solid ink, ▶ when off, ❚❚ when on) */}
          <div className="absolute bottom-4 right-4 z-20">
            {soundBlocked && isMuted && (
              <span className="absolute -inset-1.5 rounded-full bg-ink/20 animate-ping pointer-events-none" />
            )}
            <button
              onClick={toggleSound}
              aria-label={isMuted ? 'Turn video sound on' : 'Turn video sound off'}
              className="relative w-[46px] h-[46px] rounded-full bg-ink text-paper flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              {isMuted ? (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              ) : (
                <Pause className="w-4 h-4 fill-current" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* CTAs: Explore work, Let's talk, Résumé ↓ */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={() => scrollTo('work')}
          className="px-7 py-3 rounded-full bg-ink text-paper text-xs font-mono font-medium hover:bg-ink-2 transition-all shadow-sm hover:-translate-y-0.5"
        >
          Explore work
        </button>

        <button
          onClick={() => scrollTo('contact')}
          className="px-7 py-3 rounded-full bg-transparent border border-line-bold text-ink text-xs font-mono font-medium hover:bg-white transition-all hover:-translate-y-0.5"
        >
          Let's talk
        </button>

        <a
          href="/resume.pdf"
          download="Muralidharan_K_Resume.pdf"
          className="px-7 py-3 rounded-full bg-transparent border border-line-bold text-ink text-xs font-mono font-medium hover:bg-white transition-all flex items-center gap-1.5 hover:-translate-y-0.5"
        >
          <span>Résumé</span>
          <span className="text-sm leading-none">↓</span>
        </a>
      </div>

      {/* Point 29: Verified Quick Metrics Pill */}
      <div className="relative z-10 mt-6 flex items-center justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-1.5 rounded-full bg-card/80 border border-line backdrop-blur-sm text-[11px] font-mono text-mute shadow-soft">
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

