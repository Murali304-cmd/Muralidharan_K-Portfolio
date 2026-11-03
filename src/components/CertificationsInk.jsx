import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { certifications } from '../data/experience';

export default function CertificationsInk() {
  return (
    <section
      id="certifications"
      className="py-24 bg-white border-y border-line"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sticky Heading ("Always learning.") + Count */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="font-mono text-xs text-mute uppercase tracking-widest mb-2">
              06 — Verified Certifications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tightest text-ink">
              Always <span className="font-serif-italic text-mute">learning.</span>
            </h2>
            <p className="text-sm font-mono text-mute mt-3">
              [0{certifications.length} Credentials Verified]
            </p>
          </div>

          {/* Right Column: Numbered List with Ink-Flood Hover Rows */}
          <div className="lg:col-span-8 divide-y divide-line border-y border-line">
            {certifications.map((cert, idx) => (
              <div
                key={cert.id}
                className="ink-flood-row p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-mute group-hover:text-paper/60 transition-colors pt-1">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-ink group-hover:text-paper transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-mute group-hover:text-paper/80 transition-colors mt-1">
                      Issuer: {cert.issuer} • {cert.badge}
                    </p>
                    <p className="text-xs text-ink-2 group-hover:text-paper/90 transition-colors mt-2 leading-relaxed max-w-xl">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 self-end sm:self-center font-mono text-xs text-mute group-hover:text-paper shrink-0">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

