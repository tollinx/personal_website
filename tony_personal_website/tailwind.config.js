/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
      },
      keyframes: {
        wavy: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
          '75%': { transform: 'translateY(-5px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.1)', opacity: 0.5 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        zigzag: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px) rotate(-5deg)' },
          '50%': { transform: 'translateX(5px) rotate(5deg)' },
          '75%': { transform: 'translateX(-5px) rotate(-5deg)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradientWave: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        rippleFade: {
          '0%': {
            transform: 'translateY(-50px)',  // Move 50px up
            opacity: 0,  // Start invisible
          },
          '100%': {
            transform: 'translateY(0)',  // Move to normal position
            opacity: 1,  // Fade in to full visibility
          },
        }
      },
      animation: {
        wavy: 'wavy 2s ease-in-out infinite',
        ripple: 'ripple 1s ease infinite',
        float: 'float 3s ease-in-out infinite',
        gradientWave: 'gradientWave 1s ease infinite',
        zigzag: 'zigzag 0.5s ease-in-out',
        slideFadeIn: 'rippleFade 1.5s ease-out forwards', 
      },
      fontSize: {
        'xxs': '0.625rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      colors: {
        'teal':'#134e4a',
        'green':'#2c7a7b',
        'beige':'#f0e4d7',
        'charcoal':'#333333',
        'yellow': '#f0a500', 
        'white':'#ffffff',
        'coral':'#ff6f61',
      }
    },
  },
  plugins: [],
}