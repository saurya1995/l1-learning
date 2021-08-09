const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend:{
      colors: {
        indigo: colors.indigo,
        teal: colors.teal,
        cyan: colors.cyan,
        'light-blue': colors.lightBlue,
        lime: colors.lime,
        'primary-text': colors.black,
        'dark-text': colors.white,
        'primary-background': colors.gray["100"],
        'dark-background': colors.gray["800"],
        'dark-glass': colors.gray["500"],
        'light-glass':colors.white,
        "bg-red": "#d53369",
        "bg-orange": "#daae51",
        primary: colors.cyan["400"],
      },
      backgroundColor: {

      },
      borderRadius: {
        header: '2.5rem'
      },
      width: {
        '30rem': '30rem',
      },
      maxWidth: {
        'logo' : '150px'
      },
      maxHeight: {
        'logo' : '150px'
      },
      height: {
        'hero' : '80vh',
        'half' : '50vh',
        'cv-hero' : '800px',
        'bigsur' : '6016px',
      },
      margin: {
        'test' : '-32rem'
      }
    }
  },
}
