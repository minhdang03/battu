/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      animation: {
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.8 },
        },
        orbit1: {
          '0%': { transform: 'rotate(0deg) translateX(32px)' },
          '100%': { transform: 'rotate(360deg) translateX(32px)' },
        },
        orbit2: {
          '0%': { transform: 'rotate(0deg) translateX(40px)' },
          '100%': { transform: 'rotate(360deg) translateX(40px)' },
        },
        orbit3: {
          '0%': { transform: 'rotate(0deg) translateX(48px)' },
          '100%': { transform: 'rotate(360deg) translateX(48px)' },
        },
        orbit4: {
          '0%': { transform: 'rotate(0deg) translateX(56px)' },
          '100%': { transform: 'rotate(360deg) translateX(56px)' },
        },
        orbit5: {
          '0%': { transform: 'rotate(0deg) translateX(64px)' },
          '100%': { transform: 'rotate(360deg) translateX(64px)' },
        },
        orbit6: {
          '0%': { transform: 'rotate(0deg) translateX(72px)' },
          '100%': { transform: 'rotate(360deg) translateX(72px)' },
        },
        orbit7: {
          '0%': { transform: 'rotate(0deg) translateX(80px)' },
          '100%': { transform: 'rotate(360deg) translateX(80px)' },
        },
        orbit8: {
          '0%': { transform: 'rotate(0deg) translateX(88px)' },
          '100%': { transform: 'rotate(360deg) translateX(88px)' },
        },
        orbit9: {
          '0%': { transform: 'rotate(0deg) translateX(96px)' },
          '100%': { transform: 'rotate(360deg) translateX(96px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    }
  },
  plugins: [],
};
