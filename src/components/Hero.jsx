import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart2, Check } from 'lucide-react';
import { sound } from '../hooks/useSoundHaptics';

export default function Hero() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [resumeDownloaded, setResumeDownloaded] = useState(false);

  // 3D Parallax Mouse Tracking for Avatar
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (-y / (rect.height / 2)) * 5,
      y: (x / (rect.width / 2)) * 6,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!video || !canvas || !container) return;

    // Track active state via ref to avoid state churn & audio stuttering
    const isHeroActiveRef = { current: true };
    const userInteractedRef = { current: false };
    const fadeTimerRef = { current: null };

    // Initial setup: start video playback muted for browser autoplay compliance
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.play().catch(() => {});

    // High-fidelity smooth volume ramp (eliminates clicks/pops on mute/unmute)
    const fadeVolume = (targetVol, durationMs, onComplete) => {
      if (!videoRef.current) return;
      if (fadeTimerRef.current) clearInterval(fadeTimerRef.current);
      const startVol = videoRef.current.volume;
      const steps = 10;
      const stepTime = Math.max(10, Math.floor(durationMs / steps));
      let curStep = 0;

      fadeTimerRef.current = setInterval(() => {
        curStep++;
        if (!videoRef.current) {
          clearInterval(fadeTimerRef.current);
          return;
        }
        const v = startVol + (targetVol - startVol) * (curStep / steps);
        videoRef.current.volume = Math.max(0, Math.min(1, v));
        if (curStep >= steps) {
          clearInterval(fadeTimerRef.current);
          fadeTimerRef.current = null;
          if (onComplete) onComplete();
        }
      }, stepTime);
    };

    const activateHeroAudio = () => {
      if (!videoRef.current) return;
      isHeroActiveRef.current = true;
      setIsAudioActive(true);
      videoRef.current.play().catch(() => {});
      if (userInteractedRef.current) {
        videoRef.current.muted = false;
        fadeVolume(1.0, 150);
      }
    };

    const deactivateHeroAudio = () => {
      if (!videoRef.current) return;
      isHeroActiveRef.current = false;
      setIsAudioActive(false);
      fadeVolume(0, 120, () => {
        if (videoRef.current && !isHeroActiveRef.current) {
          videoRef.current.muted = true;
          videoRef.current.pause();
        }
      });
    };

    // Unmute on ANY natural first user interaction
    const handleFirstGesture = () => {
      userInteractedRef.current = true;
      if (isHeroActiveRef.current) {
        activateHeroAudio();
      }
      ['pointerdown', 'click', 'touchstart', 'keydown', 'wheel'].forEach((evt) => {
        window.removeEventListener(evt, handleFirstGesture);
      });
    };

    ['pointerdown', 'click', 'touchstart', 'keydown', 'wheel'].forEach((evt) => {
      window.addEventListener(evt, handleFirstGesture, { passive: true });
    });

    // Viewport IntersectionObserver: Clean single-threshold transition
    // Completely stops repetitive play() requests that cause audio stutter!
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        const inView = entry.isIntersecting && entry.intersectionRatio > 0.15;
        if (inView && !isHeroActiveRef.current) {
          activateHeroAudio();
        } else if (!inView && isHeroActiveRef.current) {
          deactivateHeroAudio();
        }
      },
      { threshold: [0.15] }
    );
    observer.observe(container);

    // Tab visibility handling
    const handleVisibility = () => {
      if (document.hidden) {
        deactivateHeroAudio();
      } else if (isHeroActiveRef.current) {
        activateHeroAudio();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Global audio toggle sync
    const handleGlobalAudioToggle = (e) => {
      const enable = e.detail?.enabled;
      if (enable !== undefined) {
        userInteractedRef.current = true;
        if (enable && isHeroActiveRef.current) {
          activateHeroAudio();
        } else {
          deactivateHeroAudio();
        }
      }
    };
    window.addEventListener('portfolio-audio-toggle', handleGlobalAudioToggle);

    // =========================================================================
    // BROADCAST-GRADE GPU COMPOSITE MASKING ENGINE ('source-in')
    // 100% Native Video Sharpness, Zero Pixel Breaking, True Alpha Transparency!
    // =========================================================================
    const ctx = canvas.getContext('2d');
    const cw = 600;
    const ch = 956;
    const sx = 274;
    const sy = 0;
    const sw = 300;
    const sh = 478;

    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = sw;
    maskCanvas.height = sh;
    const maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });

    const scratchCanvas = document.createElement('canvas');
    scratchCanvas.width = sw;
    scratchCanvas.height = sh;
    const scratchCtx = scratchCanvas.getContext('2d', { willReadFrequently: true });

    let animId;

    const render = () => {
      if (video && video.readyState >= 2 && !video.paused) {
        scratchCtx.drawImage(video, sx, sy, sw, sh, 0, 0, sw, sh);
        const imgData = scratchCtx.getImageData(0, 0, sw, sh);
        const d = imgData.data;

        const maskImgData = maskCtx.createImageData(sw, sh);
        const m = maskImgData.data;
        m.fill(255);

        for (let y = 0; y < sh; y++) {
          const rowOffset = y * sw * 4;

          // Left scan: remove white studio wall until Murali's contour
          for (let x = 0; x < sw; x++) {
            const idx = rowOffset + (x << 2);
            const r = d[idx], g = d[idx + 1], b = d[idx + 2];
            const lum = (r * 299 + g * 587 + b * 114) / 1000;
            const diff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));

            if (lum > 246 && diff < 14) {
              m[idx + 3] = 0;
            } else if (lum > 236 && diff < 18) {
              const t = (246 - lum) / 10;
              m[idx + 3] = Math.round(t * t * (3 - 2 * t) * 255);
            } else {
              break;
            }
          }

          // Right scan: remove white studio wall until Murali's contour
          for (let x = sw - 1; x >= 0; x--) {
            const idx = rowOffset + (x << 2);
            const r = d[idx], g = d[idx + 1], b = d[idx + 2];
            const lum = (r * 299 + g * 587 + b * 114) / 1000;
            const diff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));

            if (lum > 246 && diff < 14) {
              m[idx + 3] = 0;
            } else if (lum > 236 && diff < 18) {
              const t = (246 - lum) / 10;
              m[idx + 3] = Math.round(t * t * (3 - 2 * t) * 255);
            } else {
              break;
            }
          }

          // Top clearance above head (y < 22)
          if (y < 22) {
            for (let x = 0; x < sw; x++) {
              if (x < 100 || x > 200) {
                const idx = rowOffset + (x << 2);
                const r = d[idx], g = d[idx + 1], b = d[idx + 2];
                const lum = (r * 299 + g * 587 + b * 114) / 1000;
                if (lum > 240) m[idx + 3] = 0;
              }
            }
          }
        }

        maskCtx.putImageData(maskImgData, 0, 0);

        ctx.clearRect(0, 0, cw, ch);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Draw antialiased mask
        ctx.drawImage(maskCanvas, 0, 0, cw, ch);

        // Hardware composite video onto mask
        ctx.globalCompositeOperation = 'source-in';
        ctx.drawImage(video, sx, sy, sw, sh, 0, 0, cw, ch);

        ctx.globalCompositeOperation = 'source-over';
      }
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (fadeTimerRef.current) clearInterval(fadeTimerRef.current);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('portfolio-audio-toggle', handleGlobalAudioToggle);
      ['pointerdown', 'click', 'touchstart', 'keydown', 'wheel'].forEach((evt) => {
        window.removeEventListener(evt, handleFirstGesture);
      });
    };
  }, []);

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    const nextState = !isAudioActive;
    setIsAudioActive(nextState);
    sound.playClick();
    window.dispatchEvent(
      new CustomEvent('portfolio-audio-toggle', { detail: { enabled: nextState } })
    );
  };

  const handleResumeDownload = () => {
    sound.playClick();
    setResumeDownloaded(true);
    setTimeout(() => setResumeDownloaded(false), 3000);
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
      className="relative w-full h-[100svh] min-h-[640px] flex items-center overflow-hidden select-none"
    >
      {/* Offscreen Active Native Video (Feeds GPU Keyer & Voice) */}
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        playsInline
        autoPlay
        loop
        muted
        preload="auto"
        style={{
          position: 'fixed',
          top: -9999,
          left: -9999,
          width: '1px',
          height: '1px',
          opacity: 0.001,
          pointerEvents: 'none',
        }}
      />

      {/* =========================================================================
          LAYER 1 (z-10): EDITORIAL TYPOGRAPHY & VALUE PROPOSITION (LEFT/CENTER)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-center h-full pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl lg:max-w-3xl pointer-events-auto pt-12 sm:pt-0"
        >
          {/* Giant Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-black tracking-tightest leading-[0.92] text-ink uppercase font-sans">
            Data Analyst
          </h1>
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-serif-italic text-mute tracking-tight leading-[0.98] mt-1 sm:mt-2">
            & Machine Learning
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-black tracking-tightest leading-[0.92] text-ink uppercase font-sans mt-1 sm:mt-2">
            Developer.
          </h2>

          {/* Short Bio Line */}
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-mute font-mono max-w-xl leading-relaxed">
            Crafting enterprise analytics pipelines, predictive ML models, and high-impact visual intelligence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-6 sm:mt-7">
            <button
              onClick={() => scrollTo('work')}
              className="px-6 py-2.5 rounded-full bg-ink text-paper text-xs font-mono font-medium hover:bg-ink-2 transition-all shadow-md hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-ink"
            >
              Explore work
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-2.5 rounded-full bg-card/90 backdrop-blur-md border border-line-bold text-ink text-xs font-mono font-medium hover:bg-card transition-all hover:-translate-y-0.5 active:scale-95 shadow-sm focus-visible:ring-2 focus-visible:ring-ink"
            >
              Let's talk
            </button>

            <a
              href="/resume.pdf"
              download="Muralidharan_K_Resume.pdf"
              onClick={handleResumeDownload}
              className="px-6 py-2.5 rounded-full bg-card/90 backdrop-blur-md border border-line-bold text-ink text-xs font-mono font-medium hover:bg-card transition-all flex items-center gap-1.5 hover:-translate-y-0.5 active:scale-95 shadow-sm focus-visible:ring-2 focus-visible:ring-ink"
            >
              {resumeDownloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Downloaded ✓</span>
                </>
              ) : (
                <>
                  <span>Résumé</span>
                  <span className="text-sm leading-none">↓</span>
                </>
              )}
            </a>
          </div>

          {/* Verified Quick Metrics Pill */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3.5 px-4 py-1.5 mt-5 sm:mt-6 rounded-full bg-card/85 border border-line backdrop-blur-md text-[11px] font-mono text-mute shadow-soft">
            <span className="text-ink font-bold">8.3 CGPA</span>
            <span className="text-faint">•</span>
            <span>TCS CodeVita <strong className="text-ink">#16,434</strong></span>
            <span className="text-faint">•</span>
            <span><strong className="text-ink">136</strong> LeetCode</span>
            <span className="text-faint">•</span>
            <span>HackerRank <strong className="text-ink">5★</strong></span>
            <span className="text-faint">•</span>
            <span className="hidden sm:inline">Dr. MCET IT '28</span>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          LAYER 2 (z-20): BROADCAST HD AVATAR WITH GPU COMPOSITING & 3D PARALLAX
          ========================================================================= */}
      <div
        onClick={handleVideoClick}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.12s cubic-bezier(0.2, 0, 0, 1)',
        }}
        className="absolute right-0 sm:right-2 md:right-8 lg:right-16 bottom-0 z-20 h-[72vh] sm:h-[82vh] md:h-[90vh] flex items-end justify-center cursor-pointer pointer-events-auto group"
      >
        {/* Dynamic 3D Specular Backdrop Glow */}
        <div className="absolute -inset-8 -z-10 rounded-full blur-3xl opacity-20 pointer-events-none bg-gradient-to-t from-cyan-500/30 to-amber-500/20 dark:opacity-30" />

        <canvas
          ref={canvasRef}
          width={600}
          height={956}
          className="h-full w-auto object-contain pointer-events-auto filter drop-shadow-xl select-none"
        />
      </div>

      {/* Floating Interactive 3D Orbit Badges */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [-1, 1.5, -1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          transform: `translate3d(${-tilt.y * 3}px, ${tilt.x * 3}px, 0)`,
        }}
        className="hidden xl:flex absolute top-28 right-80 z-30 items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-line shadow-soft text-xs font-mono text-ink pointer-events-none"
      >
        <Database className="w-3.5 h-3.5 text-blue-500" />
        <span>Python • SQL • Pandas</span>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6], rotate: [1.5, -1, 1.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          transform: `translate3d(${-tilt.y * 4}px, ${tilt.x * 4}px, 0)`,
        }}
        className="hidden xl:flex absolute bottom-24 right-96 z-30 items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-line shadow-soft text-xs font-mono text-ink pointer-events-none"
      >
        <BarChart2 className="w-3.5 h-3.5 text-amber-500" />
        <span>Power BI • Tableau • DAX</span>
      </motion.div>
    </section>
  );
}
