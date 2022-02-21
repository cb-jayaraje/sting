module.exports = {
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
