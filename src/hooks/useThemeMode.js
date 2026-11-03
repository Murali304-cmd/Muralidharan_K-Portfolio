import { useState, useEffect } from 'react';
import { sound } from './useSoundHaptics';

export function useThemeMode() {
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('km_theme_mode');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'cyber' : 'paper';
    }
    return 'paper';
  });

  useEffect(() => {
    const isDark = mode === 'cyber';
    const root = document.documentElement;
    const body = document.body;

    if (isDark) {
      root.classList.add('dark');
      body?.classList.add('dark');
      root.style.setProperty('--paper', '#090D16');
      root.style.setProperty('--card', '#111726');
      root.style.setProperty('--ink', '#F1F5F9');
      root.style.setProperty('--ink-2', '#CBD5E1');
      root.style.setProperty('--mute', '#94A3B8');
      root.style.setProperty('--faint', '#475569');
      root.style.setProperty('--line', 'rgba(255, 255, 255, 0.12)');
      root.style.setProperty('--line-bold', 'rgba(255, 255, 255, 0.22)');
      root.style.setProperty('--soft', '#1A2338');
      if (body) body.style.backgroundColor = '#090D16';
    } else {
      root.classList.remove('dark');
      body?.classList.remove('dark');
      root.style.setProperty('--paper', '#f4f2ee');
      root.style.setProperty('--card', '#ffffff');
      root.style.setProperty('--ink', '#0d0d0d');
      root.style.setProperty('--ink-2', '#2a2a2a');
      root.style.setProperty('--mute', '#77756f');
      root.style.setProperty('--faint', '#a9a6a0');
      root.style.setProperty('--line', 'rgba(13, 13, 13, 0.08)');
      root.style.setProperty('--line-bold', 'rgba(13, 13, 13, 0.16)');
      root.style.setProperty('--soft', '#e9e6e0');
      if (body) body.style.backgroundColor = '#f4f2ee';
    }
    localStorage.setItem('km_theme_mode', mode);
  }, [mode]);

  const toggleMode = () => {
    try {
      sound.playClick();
    } catch (e) {}
    setMode((prev) => (prev === 'paper' ? 'cyber' : 'paper'));
  };

  return { mode, toggleMode, isCyber: mode === 'cyber' };
}

