/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/index.html"
  ],
  theme: {
    colors:{
      primary:'#BAD7D9',
      secondary:'#273249',
      danger:'#EC202C',
      warning:"#FBD2D5",
      light:'#FFF',
      dark:'#273249',
      muted:'#F9F9F9'
    },
    extend: {

    },
  },
  plugins: [],
}

