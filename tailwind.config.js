/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../public/*.html",
    "../public/dashborad.html"
  ],
  theme: {
    screens: {
      xsm: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightAsh: "#e5e4f3",
        blue: "#003e9f",
        lightBlue: "#006e9f",
        redColor: "#ff0000",
        'black-rgba': 'rgba(0, 0, 0, 0.8)',
        blackBg: '#16121b',

        backgroundColor: '#E4E9FD',
        backgroundImage: '-webkit-linear-gradient(65deg, #A683E3 50%, #E4E9FD 50%)',
      }
    },
  },
  plugins: [],
}
