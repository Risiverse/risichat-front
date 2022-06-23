module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#465FFD'
      },
      fontFamily: {
        'title': 'HindMadurai, sans-serif',
        'text': 'Rubik, sans-serif'
      },
      screens: {
        '3xl': '1700px',
        '4xl': '2400px'
      },
    },
  },
  plugins: [],
}
