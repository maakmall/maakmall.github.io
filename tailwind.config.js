module.exports = {
  content: ['index.html', './js/*.js'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        viga: ['Viga', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        white: '#f9f9f9',
        black: '#353535'
      },
      keyframes: {
        fill: {
          '0%': { fill: 'transparent' },
          '100%': { fill: '#f9f9f9' }
        },
        fadeOut: {
          '0%': {opacity: 1},
          '100%': {opacity: 0}
        }
      },
      animation: {
        fill: 'fill 0.5s ease forwards 3.5s',
        fadeOut: 'fadeOut 1s ease 4s'
      }
    },
  },
  plugins: [],
}
