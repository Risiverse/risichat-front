module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#176F48',
        secondary: '#F3F3F3'
      },
      screens: {
        '3xl': '1700px'
      },
      fontFamily: {
        'title': 'Montserrat, sans-serif',
        'text': 'Cabin, sans-serif',
      }
    },
  },
  plugins: [],
}
