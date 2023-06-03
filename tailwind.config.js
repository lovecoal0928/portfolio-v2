/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'RedCristal' : 'url("/background.svg")',
      },
      dropShadow: {
        'White': '0 0 7px #eeec',
        'Gray': '0 0 7px #bbb',
        'Black': '0 0 7px #222',
        'Pink': ['0 0 20px #f11','0 0 5px #faa'],
        'RED': ['0 0 20px #C118','0 0 5px #C11'],
      },
      boxShadow: {
        'White': '0 0 9px #eeec',
        'Gray': '0 0 9px #999',
        'GrayA': '1px 3px 5px #9997',
        'Black': '0 0 9px #222',
        'RED': ['0 0 20px #C118','0 0 5px #C11'],
        'RED2': ['0 0 50px #C118','0 0 5px #C11',
                'inset 0 0 50px #C118','inset 0 0 5px #C11',
                'inset 0 0 30px #C118','inset 0 0 5px #C11'],
      },
      keyframes: {
        appear: {
          "10%": {
            opacity: 0.5,
          },
          "70%": {
            opacity: 1,
            borderColor: '#D82929',
          },
          "100%": {
            opacity: 1,
            borderColor: '#D82929',
          },
        },
      },
      animation: {
        appear: 'appear 4s 0s 1 forwards',
        appear2: 'appear2 4s 0s 1 forwards',

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}