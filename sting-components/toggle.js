module.exports = Toggle = (styles) => ({ 
    
    '.toggle-btn': {
    '@apply relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2' : {}
    },

    '.toggle-btn__default': {
        '@apply pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out':{}
    },
    '.toggle-btn__default.enabled': {
        '@apply bg-primary-500':{}
    },
    '.toggle-btn__default.not-enabled': {
        '@apply bg-gray-200':{}
    },

    '.toggle-switch': {
    '@apply pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out' : {}
    },

    '.toggle-switch.enabled': {
        '@apply translate-x-5' : {}
        },

        '.toggle-switch.not-enabled': {
            '@apply translate-x-0' : {}
            },

    '.toggle-icn__container': {
    '@apply absolute inset-0 h-full w-full flex items-center justify-center transition-opacity' : {}
    },

});