module.exports = Tabs = (styles) => ({

    '.tab-link': {
        '@apply border-transparent whitespace-nowrap pt-4 pb-3 px-1 border-b-2 cb-text-copy-regular hover:text-neutral-800': {}
    },
    '.tab-link-active': {
        '@apply text-info-900 border-info-700 border-solid hover:text-info-900': {}
    },
    '.tab-link-inactive': {
        '@apply text-neutral-700 hover:text-neutral-800 hover:border-neutral-400': {}
    },
    '.tab-pill': {
        '@apply cb-text-copy-regular px-4 py-2 rounded-full hover:bg-neutral-100 shadow-sm shadow-neutral-300': {}
    },
    '.tab-pill-active': {
        '@apply bg-info-50 hover:bg-info-50 text-info-900 hover:text-info-900 shadow-none': {}
    },
    '.tab-pill-inactive': {
        '@apply text-neutral-700 hover:text-neutral-800 hover:border-transparent': {}
    },
    '.tab-link-badges': {
        '@apply hidden': {}
    },

});