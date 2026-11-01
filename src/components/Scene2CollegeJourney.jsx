import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, MapPin, School, BookOpen, Calendar, 
  Award, Sparkles, Navigation, ArrowRight 
} from 'lucide-react';
import { profile } from '../data/profile';
import { educationHistory } from '../data/experience';

export default function Scene2CollegeJourney() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [vehiclePosition, setVehiclePosition] = useState(80); // percentage along the road

  return (
    <section
      id="scene-journey"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#0E1424]/60 border-y border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
    >
      {/* Background Section Identifier */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 border border-brand-200/80 dark:border-brand-700/50 text-xs font-mono font-medium mb-3">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span>STAGE 01 / INGEST • SCENE 2</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          My Journey to College & Technical Learning
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
          Tracing the path from Dharmapuri to Dr. Mahalingam College of Engineering and Technology, Pollachi — transforming foundational curiosity into engineering rigor.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Animated Road, Vehicle & Landmark Journey Illustration */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Interactive Road Diorama Box */}
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-premium border border-slate-200/80 dark:border-slate-800 overflow-hidden">
            {/* Animated Sky with Clouds */}
            <div className="relative h-24 sm:h-28 overflow-hidden rounded-2xl bg-gradient-to-b from-sky-100 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-4 border border-sky-100 dark:border-slate-800">
              <motion.div
                animate={{ x: [-20, 300] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute top-2 text-2xl opacity-60 pointer-events-none"
              >
                ☁️
              </motion.div>
              <motion.div
                animate={{ x: [40, 380] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 4 }}
                className="absolute top-8 text-xl opacity-40 pointer-events-none"
              >
                ☁️
              </motion.div>

              {/* Sun */}
              <div className="absolute top-3 right-6 w-9 h-9 rounded-full bg-amber-400 shadow-[0_0_20px_#F59E0B]" />

              {/* Distant mountains/hills silhouettes */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-2 text-3xl opacity-20 dark:opacity-30 pointer-events-none">
                <span>⛰️</span>
                <span>🏔️</span>
                <span>⛰️</span>
                <span>🏔️</span>
                <span>⛰️</span>
              </div>
            </div>

            {/* Travel Route Track (Dharmapuri -> Pollachi) */}
            <div className="relative my-6 py-4">
              <div className="flex justify-between items-center text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mb-2">
                <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-brand-600" />
                  <span>Dharmapuri (Origin)</span>
                </div>
                <div className="flex items-center gap-1.5 text-brand-600 dark:text-brand-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>Dr. MCET, Pollachi (Destination)</span>
                </div>
              </div>

              {/* Road Track with Trees and Mile markers */}
              <div className="relative h-12 bg-slate-800 dark:bg-slate-950 rounded-2xl flex items-center px-4 overflow-hidden border-2 border-slate-700 shadow-inner">
                {/* Center road divider lines */}
                <div className="absolute inset-x-0 h-1 flex justify-between px-2">
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="w-4 h-1 bg-amber-400/80 rounded-full" />
                  ))}
                </div>

                {/* Road curb grass & trees on borders */}
                <div className="absolute top-0 inset-x-0 h-1 bg-emerald-600/40" />
                <div className="absolute bottom-0 inset-x-0 h-1 bg-emerald-600/40" />

                {/* Animated Vehicle (Car/Bus) moving along road */}
                <motion.div
                  className="relative z-20 flex items-center gap-1 text-2xl select-none"
                  animate={{
                    x: ['5%', '85%', '5%'],
                  }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <span className="scale-x-[-1]">🚗</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </motion.div>
              </div>

              {/* Roadside foliage & landmark icons */}
              <div className="flex justify-between items-center text-lg mt-2 px-3 text-slate-400">
                <span>🌲</span>
                <span className="text-xs font-mono text-slate-400">NH 44 / NH 81 Highway Corridor</span>
                <span>🌳</span>
                <span>🏛️</span>
              </div>
            </div>

            {/* Destination Highlight Card: Dr. Mahalingam College of Engineering and Technology */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-50 to-cyan-50 dark:from-brand-950/40 dark:to-cyan-950/40 border border-brand-200/80 dark:border-brand-800/80">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <School className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
                      ACADEMIC DESTINATION
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 font-semibold">
                      8.3 CGPA
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                    Dr. Mahalingam College of Engineering and Technology
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Pollachi, Tamil Nadu • Bachelor of Engineering in Information Technology (Expected June 2028)
                  </p>
                </div>
              </div>
            </div>

            {/* Educational Timeline Steps */}
            <div className="mt-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Milestones Along the Route
              </h4>
              <div className="space-y-3">
                {educationHistory.map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 font-mono text-xs font-bold shadow-xs">
                      0{idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                          {item.degree}
                        </h5>
                        <span className="text-[11px] font-mono text-slate-400 shrink-0">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.institution}, {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Hanging 3D Lanyard Student ID Card (Signature Feature #5) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="text-center mb-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              STUDENT CREDENTIAL BADGE • CLICK TO FLIP
            </span>
          </div>

          {/* Lanyard Strap / Cord */}
          <div className="w-6 h-16 bg-gradient-to-b from-brand-700 to-brand-500 rounded-t-sm shadow-sm relative flex items-center justify-center">
            {/* Lanyard metal clip */}
            <div className="absolute -bottom-3 w-8 h-4 bg-slate-300 dark:bg-slate-600 rounded-md border border-slate-400 shadow-sm flex items-center justify-center">
              <div className="w-4 h-1.5 bg-slate-700 rounded-full" />
            </div>
          </div>

          {/* 3D Flippable Lanyard Badge Card */}
          <motion.div
            animate={{
              rotateZ: [-1.5, 1.5, -1.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="perspective-1000 mt-3 w-full max-w-[320px] h-[480px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setIsFlipped(!isFlipped);
            }}
            tabIndex={0}
            role="button"
            aria-label="Student ID Card, click or press Enter to flip card"
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', damping: 15 }}
              className="relative w-full h-full transform-style-3d rounded-3xl shadow-premium border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
            >
              {/* FRONT OF ID CARD */}
              <div className="absolute inset-0 backface-hidden p-6 flex flex-col items-center justify-between text-center rounded-3xl bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
                {/* ID Card Header */}
                <div className="w-full flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-brand-500" />
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-800 dark:text-white uppercase">
                      DR. MCET POLLACHI
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-600 dark:text-brand-400 font-bold">
                    IT • 2024-2028
                  </span>
                </div>

                {/* Portrait Bust Photo */}
                <div className="relative my-2">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-brand-500/80 shadow-md bg-white">
                    <img
                      src="/murali-bust.webp"
                      alt="K. Muralidharan Portrait"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-mono font-bold shadow-xs">
                    ACTIVE
                  </div>
                </div>

                {/* Student Identity */}
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {profile.name}
                  </h3>
                  <p className="text-xs font-mono text-brand-600 dark:text-brand-400 mt-0.5 font-semibold">
                    {profile.degree}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {profile.collegeShort}
                  </p>
                </div>

                {/* Academic Metrics Pill */}
                <div className="w-full grid grid-cols-2 gap-2 py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">CGPA</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">8.3</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">GRADUATION</span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">06/2028</span>
                  </div>
                </div>

                {/* Gray Barcode */}
                <div className="w-full pt-2">
                  <div className="h-6 w-full flex items-center justify-center gap-1 opacity-60">
                    {[3, 1, 4, 1, 5, 2, 4, 1, 3, 2, 5, 1, 2, 4, 2, 3, 1, 4, 2].map((w, i) => (
                      <div
                        key={i}
                        className="h-full bg-slate-500 dark:bg-slate-400"
                        style={{ width: `${w * 1.5}px` }}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 mt-1 block">
                    KM-2028-IT-DRMCET • TAP TO FLIP
                  </span>
                </div>
              </div>

              {/* BACK OF ID CARD */}
              <div 
                className="absolute inset-0 backface-hidden p-6 flex flex-col justify-between text-left rounded-3xl bg-slate-900 text-white"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-[10px] font-mono text-brand-400 font-bold uppercase tracking-wider">
                      VERIFIED ACADEMIC RECORD
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
                  </div>

                  <div className="mt-4 space-y-3 text-xs">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Undergraduate</span>
                      <p className="font-bold text-white mt-0.5">B.E. Information Technology</p>
                      <p className="text-slate-400 text-[11px]">Dr. MCET, Pollachi (CGPA: 8.3)</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Schooling</span>
                      <p className="font-bold text-white mt-0.5">Variyar Higher Secondary School</p>
                      <p className="text-slate-400 text-[11px]">Dharmapuri, Tamil Nadu (HSC & SSLC)</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Extracurricular</span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        Active member of National Service Scheme (NSS). Competitive coding on LeetCode & TCS CodeVita.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>TAP TO FLIP FRONT</span>
                  <span className="text-accent-cyan">VERIFIED FACTUAL</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
