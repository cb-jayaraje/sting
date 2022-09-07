module.exports = Tabs = (styles) => ({

    '.tab-link': {
        '@apply border-transparent whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-neutral-400 hover:text-neutral-600': {}
    },
    '.tab-link_active': {
        '@apply border-primary-500 font-semibold text-primary-600 border-solid': {}
    },
    '.tab-link_inactive': {
        '@apply text-gray-500 hover:text-gray-700 hover:border-primary-500': {}
    },
    '.tab-pill': {
        '@apply px-3 py-2 font-medium text-sm rounded': {}
    },
    '.tab-pill_active': {
        '@apply bg-primary-500 text-neutral-50': {}
    },
    '.tab-link_badges': {
        '@apply hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block': {}
    },

});