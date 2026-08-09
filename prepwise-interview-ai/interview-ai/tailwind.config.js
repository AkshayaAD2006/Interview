/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#050505',
          soft: '#0a0a0d',
        },
        surface: {
          DEFAULT: '#0b0b10',
          2: '#101018',
          3: '#15151f',
        },
        ink: {
          DEFAULT: '#f5f5f7',
          muted: '#9a9aab',
          faint: '#65657a',
        },
        accent: {
          blue: '#4d7bff',
          indigo: '#7c6cff',
          purple: '#a855f7',
          violet: '#8b5cf6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(circle at 50% 0%, rgba(124,108,255,0.16), transparent 60%)',
        'aurora':
          'linear-gradient(120deg, #4d7bff 0%, #7c6cff 45%, #a855f7 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.45)',
        'glow-blue': '0 0 40px rgba(77,123,255,0.25)',
        'glow-purple': '0 0 40px rgba(168,85,247,0.25)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite 1.2s',
        'spin-slow': 'spin 18s linear infinite',
        'spin-slower': 'spin 32s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'gradient-move': 'gradient-move 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
