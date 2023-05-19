/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'White': '0 0 7px #eeec',
        'Gray': '0 0 7px #bbb',
        'Black': '0 0 7px #222',
        'RED': ['0 0 20px #C118','0 0 5px #C11']
      },
      boxShadow: {
        'White': '0 0 9px #eeec',
        'Gray': '0 0 9px #999',
        'GrayA': '1px 3px 5px #9997',
        'Black': '0 0 9px #222',
        'RED': ['0 0 20px #C118','0 0 5px #C11']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}