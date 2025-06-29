/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      boxShadow: {
        'left-right': '-4px 0 8px rgba(0, 0, 0, 0.8), 4px 2 8px rgba(0, 0, 0, 0.9)',
      },
    },
  },
  plugins: [],
}