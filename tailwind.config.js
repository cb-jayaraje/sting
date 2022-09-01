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
        h1: '1.802rem', //28.83px
        h2: '1.424rem', //25.63px
        h3: '1.266rem', //20.25px
        h4: '1.125rem', //18px
        h5: '1rem', //16px
        h6: '0.889rem', //14.22px
        upper: '0.79rem', //12.64px
        subtitle: '1rem',
        copy: '0.889rem',
        small: '0.79rem',
        mini: '0.702rem', //11.24px
      }
      //colors: require('./sting-components/default-colors')
      
    },
  },
 
  plugins: [
   
    require('./sting'),
    require('@tailwindcss/forms'),
  ],
}
