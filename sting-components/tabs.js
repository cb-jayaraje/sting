module.exports = Tabs = (styles) => ({

    '.tab-link': {
        '@apply border-transparent whitespace-nowrap py-4 px-1 border-b-2 cb-text-copy-regular font-medium hover:text-neutral-800': {}
    },
    '.tab-link-active': {
        '@apply text-primary-900 border-primary-900 border-solid': {}
    },
    '.tab-link-inactive': {
        '@apply text-neutral-700 hover:text-neutral-800 hover:border-neutral-400': {}
    },
    '.tab-pill': {
        '@apply cb-text-copy-regular font-medium px-3 py-2 rounded hover:bg-neutral-100': {}
    },
    '.tab-pill-active': {
        '@apply bg-primary-500 hover:bg-primary-500 hover:text-white text-white': {}
    },
    '.tab-link-badges': {
        '@apply hidden ': {}
    },

});