module.exports = Tabs = (styles) => ({

    '.tab-link': {
        '@apply border-transparent whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-neutral-700 hover:text-neutral-800': {}
    },
    '.tab-link_active': {
        '@apply border-primary-600 font-semibold text-primary-800 border-solid': {}
    },
    '.tab-link_inactive': {
        '@apply text-neutral-700 hover:text-neutral-800 hover:border-primary-600': {}
    },
    '.tab-pill': {
        '@apply px-3 py-2 font-medium text-sm rounded hover:bg-primary-50': {}
    },
    '.tab-pill_active': {
        '@apply bg-primary-600 text-neutral-50 hover:bg-primary-600': {}
    },
    '.tab-link_badges': {
        '@apply hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block hover:bg-primary-600 hover:text-white': {}
    },

});