/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Orbitron': ['"Orbitron"', 'sans-serif'],
        'Inter': ['"Inter"', 'sans-serif'],
        'Fredoka': ['"Fredoka"', 'sans-serif'],
        'Satoshi': ['"Satoshi"', 'sans-serif'],
        'ShareTech': ['"Share Tech Mono"', 'monospace'],
        'VT323': ['"VT323"', 'monospace'],
      },
      colors: {
        neon: '#187A34', // Brand Green primary
        darkbg: '#ffffff', // Pure white background
        cardbg: '#ffffff', // Clean white card background
        'brand-green': '#187A34',
        'brand-red': '#E83F41',
        'brand-brown': '#B2783F',
        'brand-tan': '#E2A665',
        'brand-dark': '#222222',
        'brand-light': '#EFEFEF',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}