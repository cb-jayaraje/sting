module.exports = Tabs = (styles) => ({

    '.tab-link': {
        '@apply border-transparent whitespace-nowrap py-4 px-1 border-b-2 cb-text-copy-regular font-medium  text-neutral-400 hover:text-neutral-600': {}
    },
    '.tab-link-active': {
        '@apply border-primary-500 font-semibold text-primary-600 border-solid': {}
    },
    '.tab-link-inactive': {
        '@apply text-gray-500 hover:text-gray-700 hover:border-primary-500': {}
    },
    '.tab-pill': {
        '@apply px-3 py-2 cb-text-copy-regular font-medium rounded': {}
    },
    '.tab-pill-active': {
        '@apply bg-primary-500 text-neutral-50': {}
    },
    '.tab-link-badges': {
        '@apply hidden ml-3 py-0.5 px-2.5 rounded-full cb-text-copy-small font-medium md:inline-block hover:bg-primary-500 hover:text-white': {}
    },

});