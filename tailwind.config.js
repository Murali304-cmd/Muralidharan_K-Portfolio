/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f4f2ee',
        card: '#ffffff',
        ink: {
          DEFAULT: '#0d0d0d',
          2: '#2a2a2a',
        },
        mute: '#77756f',
        faint: '#a9a6a0',
        soft: '#e9e6e0',
        line: 'rgba(13, 13, 13, 0.08)',
        'line-bold': 'rgba(13, 13, 13, 0.16)',
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
        'hairline': 'inset 0 0 0 1px rgba(13, 13, 13, 0.08)',
        'soft-lg': '0 20px 40px -15px rgba(13, 13, 13, 0.06)',
      }
    },
  },
  plugins: [],
}
