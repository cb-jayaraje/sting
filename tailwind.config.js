module.exports = {
  darkMode: 'class',
  prefix: '',
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}"
  ],
  theme: {
   
    extend: {
     // colors: require('./sting-components/default-colors')
    },
  },
 
  plugins: [
   
    require('./sting'),
    require('@tailwindcss/forms'),
  ],
}
