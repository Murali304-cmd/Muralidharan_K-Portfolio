import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart2 } from 'lucide-react';
import { sound } from '../hooks/useSoundHaptics';

export default function Hero() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    // Start video playback
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.play().catch(() => {});

    if (audio) {
      audio.muted = true;
      audio.loop = true;
      audio.playsInline = true;
      audio.play().catch(() => {});
    }

    // Unmute on ANY interaction anywhere on the window
    const unmuteAll = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.volume = 1.0;
        audioRef.current.play().catch(() => {});
      }
      ['pointerdown', 'click', 'scroll', 'touchstart', 'mousemove', 'keydown'].forEach((evt) => {
        window.removeEventListener(evt, unmuteAll);
      });
    };

    ['pointerdown', 'click', 'scroll', 'touchstart', 'mousemove', 'keydown'].forEach((evt) => {
      window.addEventListener(evt, unmuteAll, { once: true, passive: true });
    });

    // WebGL Chroma/Alpha Keyer
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
    let animId;

    if (gl) {
      const vsSource = `
        attribute vec2 a_position;
        attribute vec2 a_texCoord;
        varying vec2 v_texCoord;
        void main() {
          gl_Position = vec4(a_position, 0.0, 1.0);
          v_texCoord = a_texCoord;
        }
      `;

      const fsSource = `
        precision mediump float;
        uniform sampler2D u_image;
        varying vec2 v_texCoord;
        void main() {
          vec4 rgb = texture2D(u_image, vec2(v_texCoord.x, v_texCoord.y * 0.5));
          vec4 mask = texture2D(u_image, vec2(v_texCoord.x, 0.5 + v_texCoord.y * 0.5));
          gl_FragColor = vec4(rgb.rgb, mask.r);
        }
      `;

      const createShader = (gl, type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
      };

      const program = gl.createProgram();
      gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vsSource));
      gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fsSource));
      gl.linkProgram(program);
      gl.useProgram(program);

      // Geometry quad
      const posBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
          -1, -1,  1, -1, -1,  1,
          -1,  1,  1, -1,  1,  1,
        ]),
        gl.STATIC_DRAW
      );

      const posLoc = gl.getAttribLocation(program, 'a_position');
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      const texCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
          0, 1,  1, 1,  0, 0,
          0, 0,  1, 1,  1, 0,
        ]),
        gl.STATIC_DRAW
      );

      const texLoc = gl.getAttribLocation(program, 'a_texCoord');
      gl.enableVertexAttribArray(texLoc);
      gl.vertexAttribPointer(texLoc, 2, gl.FLOAT, false, 0, 0);

      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);

      // Render loop
      const render = () => {
        if (video.readyState >= 2) {
          gl.clear(gl.COLOR_BUFFER_BIT);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
        }
        animId = requestAnimationFrame(render);
      };

      animId = requestAnimationFrame(render);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      ['pointerdown', 'click', 'scroll', 'touchstart', 'mousemove', 'keydown'].forEach((evt) => {
        window.removeEventListener(evt, unmuteAll);
      });
    };
  }, []);

  // 3D Mouse Parallax Tilt for Canvas
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
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 1.0;
      audioRef.current.play().catch(() => {});
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
      {/* Hidden Videos Driving WebGL & Synchronized Voice Audio */}
      <video
        ref={videoRef}
        src="/hero-video-alpha.mp4"
        playsInline
        muted
        autoPlay
        loop
        preload="auto"
        className="hidden"
      />
      <video
        ref={audioRef}
        src="/hero-video.mp4"
        playsInline
        autoPlay
        loop
        preload="auto"
        className="hidden"
      />

      {/* =========================================================================
          LAYER 1 (z-10): GIANT EDITORIAL WORDS IN THE BACKGROUND BEHIND THE SPEAKER
          ========================================================================= */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10 text-center px-4">
        {/* Availability Pill */}
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
          LAYER 2 (z-20): 100% BACKGROUND-REMOVED AVATAR STANDING IN FRONT OF THE WORDS
          ========================================================================= */}
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        onClick={handleVideoClick}
        className="relative z-20 w-full h-[78vh] sm:h-[86vh] flex items-center justify-center cursor-pointer pointer-events-auto"
      >
        <canvas
          ref={canvasRef}
          width={848}
          height={478}
          className="h-full w-auto max-w-full object-contain pointer-events-auto"
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

