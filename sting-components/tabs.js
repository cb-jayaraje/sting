module.exports = Tabs = (styles) => ({

    '.tab-link': {
        '@apply border-transparent whitespace-nowrap pt-4 pb-3 px-1 border-b-2 cb-text-copy-regular font-semibold hover:text-neutral-800': {}
    },
    '.tab-link-active': {
        '@apply text-info-900 border-info-700 border-solid hover:text-info-900': {}
    },
    '.tab-link-inactive': {
        '@apply text-neutral-700 hover:text-neutral-800 hover:border-neutral-400': {}
    },
    '.tab-pill': {
        '@apply cb-text-copy-regular font-medium px-3 py-2 rounded hover:bg-neutral-100': {}
    },
    '.tab-pill-active': {
        '@apply bg-info-50 hover:bg-info-50 text-info-900 hover:text-info-900': {}
    },
    '.tab-link-badges': {
        '@apply hidden': {}
    },

});