/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Definimos nuestros nombres personalizados
        'Orbitron': ['"Orbitron"', 'sans-serif'],
        'Inter': ['"Inter"', 'sans-serif'],
      },
      colors: {
        neon: '#00FFFF',
        darkbg: '#050b14',
        cardbg: '#1e293b', /* Slate 800 para las tarjetas */
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}