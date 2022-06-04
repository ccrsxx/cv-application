module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif']
      },
      colors: {
        'accent-color': '#79d2b5',
        'gray-color': '#a6a6a6',
        'dark-color': '#2e2e2e',
        'main-bg': '#1c1c1c',
        'btn-color': '#242424'
      }
    }
  },
  plugins: []
};
