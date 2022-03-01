module.exports = {
  purge: ["./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange': {
          '100': '#ffead8',
          '200': '#ffd4b1',
          '300': '#ffbf8b',
          '400': '#ffaa66',
          '500': '#ff953e',
          '600': '#ff7f00',
        }
      },      
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
      }
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
