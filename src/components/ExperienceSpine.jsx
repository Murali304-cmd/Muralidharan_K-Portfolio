import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { experiences, educationHistory } from '../data/experience';

export default function ExperienceSpine() {
  // Combined timeline in chronological order
  const timeline = [
    {
      id: 'sslc',
      year: '2022',
      title: 'Secondary School Leaving Certificate (SSLC)',
      place: 'Variyar Higher Secondary School, Dharmapuri',
      type: 'education',
      details: 'Completed foundational secondary education with focus on science and mathematics.'
    },
    {
      id: 'hsc',
      year: '2024',
      title: 'Higher Secondary Certificate (HSC)',
      place: 'Variyar Higher Secondary School, Dharmapuri',
      type: 'education',
      details: 'Specialized in computer science and higher mathematics, sparking algorithmic interest.'
    },
    {
      id: 'mcet',
      year: '2024 – 2028',
      title: 'B.E. Information Technology (8.3 CGPA)',
      place: 'Dr. Mahalingam College of Engineering and Technology, Pollachi',
      type: 'education',
      details: 'Rigorous coursework in Data Structures, Machine Learning algorithms, and RAG architectures.'
    },
    {
      id: 'thiranx',
      year: 'June – July 2026',
      title: 'Data Analytics Intern',
      place: 'Thiranx (Remote)',
      type: 'work',
      details: 'Cleansed multi-dimensional datasets with Pandas/Excel, engineered Power BI dashboards, and presented strategic KPI recommendations.'
    },
    {
      id: 'amypo',
      year: 'July 2026',
      title: 'Machine Learning Trainee & Capstone Dev',
      place: 'AMYPO Intensive Sprint',
      type: 'work',
      details: '20-day hands-on model training; engineered the ATM Cash Demand Prediction system with Scikit-learn and Streamlit.'
    }
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto border-t border-line"
    >
      {/* Section Header */}
      <div className="mb-14">
        <div className="font-mono text-xs text-mute uppercase tracking-widest mb-2">
          07 — One Continuous Path
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-ink">
          Education & <span className="font-serif-italic text-mute">experience.</span>
        </h2>
        <p className="text-sm text-mute mt-1">
          Chronological timeline connecting academic training with industry execution.
        </p>
      </div>

      {/* Vertical Timeline with Drawing Spine */}
      <div className="relative pl-8 sm:pl-10 border-l-2 border-line space-y-10 max-w-3xl">
        {timeline.map((item, idx) => (
          <div key={item.id} className="relative group">
            {/* Spine Stop Node */}
            <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-paper border-2 border-ink group-hover:scale-125 transition-transform" />

            <div className="bg-white rounded-2xl p-6 border border-line shadow-hairline hover:border-line-bold transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-ink">
                  {item.year}
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-paper border border-line text-mute">
                  {item.type}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-mute mt-0.5">
                {item.place}
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mt-3">
                {item.details}
              </p>
            </div>
          </div>
        ))}

        {/* Dashed End Card: "Next — Your team?" */}
        <div className="relative">
          <div className="absolute -left-[41px] sm:-left-[49px] top-4 w-4 h-4 rounded-full bg-paper border-2 border-dashed border-ink" />

          <div className="rounded-2xl p-6 border-2 border-dashed border-line bg-paper/50 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-ink block">
                Next — Your team?
              </span>
              <p className="text-xs text-mute mt-1">
                Seeking high-impact Data Analyst and Machine Learning Developer roles.
              </p>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-ink text-paper text-xs font-mono font-medium hover:bg-ink-2 transition-colors shrink-0"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

