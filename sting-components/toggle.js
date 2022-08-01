module.exports = Toggle = (styles) => ({ 
    
    '.toggle-btn': {
    '@apply relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2' : {}
    },

    '.toggle-switch': {
    '@apply pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200' : {}
    },

    '.toggle-icn__container': {
    '@apply absolute inset-0 h-full w-full flex items-center justify-center transition-opacity' : {}
    },

});