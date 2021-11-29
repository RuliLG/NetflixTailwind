const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
      './src/**/*.ts',
      './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      red: {
        "50": "#10010e10d",
        "100": "#fef0f1",
        "200": "#fcb1b5",
        "300": "#f9767d",
        "400": "#f63740",
        "500": "#e60a15",
        "600": "#ba0811",
        "700": "#89060d",
        "800": "#5d0409",
        "900": "#310204"
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
