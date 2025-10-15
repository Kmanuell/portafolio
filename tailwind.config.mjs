/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
  theme: {
    extend: {

      colors: {
        primary: '#32ff3a',    // neon green
        background: '#0a0a0a', // page bg
        surface: '#111111',    // cards
        border: '#1a1a1a',
        text: '#ffffff',
        muted: '#9aa0a6',
      },

      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: { '2xl': '1200px' },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
