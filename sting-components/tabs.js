module.exports = Tabs = (styles) => ({

    '.tab-link': {
        '@apply border-transparent whitespace-nowrap pt-4 pb-3 px-1 border-b-2 cb-text-copy-regular hover:text-neutral-700': {}
    },
    '.tab-link-active': {
        '@apply text-primary-600 border-primary-400 border-solid hover:text-primary-700': {}
    },
    '.tab-link-inactive': {
        '@apply text-neutral-600 hover:text-neutral-700 hover:border-neutral-300': {}
    },
    '.tab-pill': {
        '@apply cb-text-copy-regular px-4 py-2 rounded-full hover:bg-neutral-100 shadow-sm shadow-neutral-300': {}
    },
    '.tab-pill-active': {
        '@apply bg-primary-50 hover:bg-primary-100 text-primary-600 hover:text-primary-700 border border-primary-100 shadow-none': {}
    },
    '.tab-pill-inactive': {
        '@apply text-neutral-500 hover:text-neutral-600 hover:border-transparent': {}
    },
    '.tab-link-badges': {
        '@apply hidden': {}
    },

});