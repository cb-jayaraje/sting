module.exports = Tabs = (styles) => ({

    '.tab-link': {
        '@apply border-transparent whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm': {}
    },
    '.tab-link_active': {
        '@apply border-primary-500 text-primary-600 border-solid': {}
    },
    '.tab-link_inactive': {
        '@apply text-gray-500 hover:text-gray-700 hover:border-gray-300': {}
    },
    '.tab-pill': {
        '@apply px-3 py-2 font-medium text-sm rounded-md': {}
    },
    '.tab-pill_active': {
        '@apply bg-gray-100 text-gray-700': {}
    },
    '.tab-link_badges': {
        '@apply hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block': {}
    },

});