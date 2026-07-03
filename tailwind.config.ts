import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0E0E10',
        surface: '#18181B',
        'surface-alt': '#202024',
        ink: '#F0F0F0',
        faint: '#666666',
        // `neon` (not `lime`) so we don't clobber Tailwind's default lime palette.
        neon: '#C8F000',
        'neon-bright': '#D4FF00',
      },
      fontFamily: {
        display: ['var(--font-barlow-condensed)', 'sans-serif'],
        body: ['var(--font-barlow)', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow': '0 0 24px rgba(200, 240, 0, 0.35)',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 40s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
