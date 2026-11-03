/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        card: 'var(--card)',
        ink: {
          DEFAULT: 'var(--ink)',
          2: 'var(--ink-2)',
        },
        mute: 'var(--mute)',
        faint: 'var(--faint)',
        soft: 'var(--soft)',
        line: 'var(--line)',
        'line-bold': 'var(--line-bold)',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      borderRadius: {
        'card': '26px',
      },
      boxShadow: {
        'hairline': 'inset 0 0 0 1px var(--line)',
        'soft-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
