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
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Sora: ['Sora', 'sans-serif']
       },
      fontSize: {
        display: '2.566rem', //41.05px
        h1: '1.802rem', //28.83px
        h2: '1.602rem', //25.63px
        h3: '1.424rem', //20.25px
        h4: '1.266rem', //18px
        h5: '1.125rem', //16px
        h6: '0.889rem', //14.22px
        upper: '0.79rem', //12.64px
        subtitle: '1rem',
        copy: '0.889rem',
        small: '0.79rem',
          'copy-large': '1rem',
          'copy-regular': '0.889rem',
          'copy-small': '0.79rem',
          'copy-upper': '0.702rem'
       
      },
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
