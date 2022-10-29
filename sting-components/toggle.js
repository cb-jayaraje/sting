module.exports = Toggle = (styles) => ({ 

    '.toggle-group': {
        '@apply w-full max-w-xl' : {}
    },
    '.toggle-group.reverse div:only-child': {
        '@apply flex-row-reverse' : {}
    },
    '.toggle-group div.toggle': {
        '@apply w-min' : {}
    },
    '.toggle-group div:only-child': {
        '@apply flex items-center justify-between gap-6' : {}
    },
    '.toggle-group div:only-child div': {
        '@apply flex flex-grow flex-col cb-text-copy-regular' : {}
    },
    '.toggle-group.inline div:only-child div': {
        '@apply flex flex-grow flex-row gap-1 cb-text-copy-regular' : {}
    },
    '.toggle-group div:only-child div:first-of-type': {
        '@apply w-full' : {}
    },
    '.toggle-group div:only-child div span:first-of-type': {
        '@apply font-semibold' : {}
    },
    '.toggle-btn': {
        '@apply relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2' : {}
    },
    '.toggle-btn-default': {
        '@apply pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out':{}
    },
    '.toggle-btn-default.enabled': {
        '@apply bg-info-800':{}
    },
    '.toggle-btn-default.not-enabled': {
        '@apply bg-gray-200':{}
    },
    '.toggle-switch': {
        '@apply pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out' : {}
    },    
    '.toggle-switch toggle-shape': {
        '@apply pointer-events-none absolute h-full w-full rounded-md bg-white' : {}
    },
    '.toggle-switch.enabled': {
        '@apply translate-x-5' : {}
        },

        '.toggle-switch.not-enabled': {
            '@apply translate-x-0' : {}
            },


});