/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        orbit1: {
          '0%': { transform: 'rotate(0deg) translate(30px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translate(30px) rotate(-360deg)' },
        },
        orbit2: {
          '0%': { transform: 'rotate(0deg) translate(45px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translate(45px) rotate(-360deg)' },
        },
        orbit3: {
          '0%': { transform: 'rotate(0deg) translate(60px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translate(60px) rotate(-360deg)' },
        },
        orbit4: {
          '0%': { transform: 'rotate(0deg) translate(75px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translate(75px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}
