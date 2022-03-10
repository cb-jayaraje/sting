module.exports = {
  darkMode: 'class',
  prefix: '',
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}"
  ],
  theme: {
   
    extend: {},
  },
 
  plugins: [
    require('./sting'),
  ],
}
