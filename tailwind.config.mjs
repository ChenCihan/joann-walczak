/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Source Serif 4', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#151b24',
        surface: '#1c232d',
        paper: '#f2eee6',
        muted: '#a8b0bc',
        accent: '#c9a962',
        'accent-hover': '#ddc078',
      },
      maxWidth: {
        prose: '65ch',
        content: '56rem',
      },
      transitionDuration: {
        350: '350ms',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-soft': {
          '0%': { opacity: '0', transform: 'translateY(6px) scale(0.99)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'hero-name': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'hero-tagline': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-soft': 'fade-in-soft 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'hero-name': 'hero-name 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'hero-tagline': 'hero-tagline 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards',
      },
    },
  },
  plugins: [],
};
