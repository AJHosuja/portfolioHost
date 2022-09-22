/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {

          sans: ['Poppins', ...defaultTheme.fontFamily.sans]
        }
      },
      backgroundImage: {
        'home': "url('/assets/background.png')",
        'home-mobile': "url('/assets/bgMobile.png')",
      },

      backgroundPosition: {
        'right-4': 'center right -22rem',
      },
      colors: {
        'dark-gray': '#202020',
        'darker-gray': '#353535',
        'green-color': '#13FF00',
        'icon-hover': '#8F8F8F',
        'light-black': '#161616',
      },

      keyframes: {
        slide: {
          '0%': { transform: 'translate(100%)' },
          '100%': { transform: 'translate(0%)' },
        },
        Leftslide: {
          '0%': { transform: 'translate(-200%)' },
          '100%': { transform: 'translate(0%)' },
        },
      },
      animation: {
        'bg-slide': 'slide 1s ease-out',
        'left-slide': 'Leftslide 1s ease-out',
      },

    },
    plugins: [],
  }
}
