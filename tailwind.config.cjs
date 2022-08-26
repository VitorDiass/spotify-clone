/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors : {
        'spotify-black' : '#010001',
        'spotify-link-subtle' : '#b3b3b3',
        'spotify-divider-color' : '#282828',
        'spotify-playpanel-bg' : '#181818',
        'spotify-mainpanel-bg' : '#121212',
        'spotify-green' : '#1db954',
        'spotify-scrollbar' : '#ffffff4d',
        'spotify-scrollbar-hover' : '#ffffff80'
      },
      fontFamily: {
        gothamlight : ['Gotham Light', 'sans-serif'],
      },
      rotate : {
        '25' : '25deg'
      }
    },
    
  },
  plugins: [],
}