module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'kumbh-san': ['Kumbh San', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif']
      },
      colors: {
        'accent-color': '#79d2b5',
        'input-color': '#292929',
        'gray-color': '#a6a6a6',
        'dark-color': '#2e2e2e',
        'main-color': '#1c1c1c',
        'btn-color': '#242424'
      },
      animation: {
        fade: 'fade 500ms ease-in-out',
        left: 'left 500ms ease-in-out',
        right: 'right 500ms ease-in-out'
      },
      keyframes: {
        fade: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        left: {
          from: {
            opacity: 0,
            transform: 'translateX(-8%)'
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        right: {
          from: {
            opacity: 0,
            transform: 'translateX(8%)'
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)'
          }
        }
      }
    }
  },
  plugins: []
};
