/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors : {
        'spotify-black' : '#010001',
        'spotify-link-subtle' : '#b3b3b3'
      },
     /*  fontFamily: {
        gotham : ['Gotham', 'sans-serif'],
      } */
    },
    
  },
  plugins: [],
}