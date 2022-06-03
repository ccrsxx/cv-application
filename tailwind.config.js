module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif']
      },
      colors: {
        'text-color': '#a6a6a6',
        'dark-text-color': '#2e2e2e',
        'main-bg': '#1c1c1c'
      }
    }
  },
  plugins: []
};
