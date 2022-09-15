module.exports = Toggle = (styles) => ({ 
    
    '.toggle-btn': {
    '@apply relative inline-flex flex-shrink-0 h-5 w-10  border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2' : {}
    },

    '.toggle-switch': {
    '@apply pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 border border-neutral-200 transition ease-in-out duration-200' : {}
    },

    '.toggle-icn__container': {
    '@apply absolute inset-0 h-full w-full flex items-center justify-center transition-opacity' : {}
    },

});