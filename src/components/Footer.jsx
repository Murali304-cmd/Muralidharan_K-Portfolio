import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto border-t border-line text-xs font-mono text-mute flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span>© {new Date().getFullYear()} {profile.name}. All verified rights reserved.</span>
        <span className="block text-[11px] text-faint mt-0.5">
          Built with React & Vite. Self-hosted typography. Zero fabricated claims.
        </span>
      </div>

      <button
        onClick={scrollToTop}
        className="flex items-center gap-1.5 text-ink hover:text-mute transition-colors border border-line px-3.5 py-1.5 rounded-full bg-card shadow-hairline"
      >
        <span>Back to top</span>
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
    </footer>
  );
}
