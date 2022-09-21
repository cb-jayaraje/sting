/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  prefix: '',
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}"
  ],
  theme: {
    
    extend: {
      //colors: require('./sting-components/default-colors')
      animation: {
        fade: 'fadeIn 1s ease-in-out',
      },
      keyframes: () => ({
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -100%, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'none',
          },
        },
      }),
    },
  },
 
  plugins: [
   
    require('./sting'),
    require('@tailwindcss/forms'),
  ],
}
