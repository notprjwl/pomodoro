/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        background: '#000000',
        componentsbg: '#0a0a0a',
        text: '#a1a1a1',
        hoverText: '#ededed',
        outline: '#252525',
        hoverBg: '#1f1f1f',
      },
      fontFamily: {
        inconsolata: 'Inconsolata'
      }
    },
  },
  plugins: [],
}