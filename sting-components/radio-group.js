module.exports = RadioGroup = (styles) => ({
    '.radio-group p': {
        '@apply cb-text-copy-regular': {}
    },
    '.radio-list': {
        '@apply space-y-4': {}
    },
    '.radio-list-inline': {
        '@apply sm:flex sm:items-center sm:space-y-0 sm:space-x-10': {}
    },
    '.radio-list div, .radio-list-inline div': {
        '@apply flex items-start': {}
    },
    '.radio-input': {
        '@apply focus:ring-primary-500 h-4 w-4 text-primary-500 border-neutral-400': {}
    },
    '.radio-label': {
        '@apply ml-3 block cb-text-copy-regular font-medium hover:text-neutral-700 cursor-pointer leading-tight': {}
    },
    '.radio-label.with-info span:first-of-type, .radio-label.with-primary-inline span:first-of-type': {
        '@apply font-semibold': {}
    },
    '.radio-label.with-info span:nth-of-type(2)': {
        '@apply block mt-0.5 font-normal': {}
    },
    '.radio-label.with-primary-inline span:nth-of-type(2)': {
        '@apply pl-2 font-normal': {}
    },

    // Radio card

    '.radio-cards label': {
        '@apply relative bg-white h-full flex p-4 w-full rounded ring-1 ring-neutral-200 hover:ring-neutral-300 cursor-pointer': {}
    },
    '.radio-cards label.selected': {
        '@apply ring-primary-200 bg-primary-50 hover:cursor-default': {}
    },
    '.radio-cards label span': {
        '@apply cb-text-copy-regular': {}
    },
    '.radio-cards label h3': {
        '@apply cb-text-copy-regular font-semibold': {}
    },
    '.radio-cards label svg': {
        '@apply w-5 h-5 invisible': {}
    },
    '.radio-cards label.selected h3': {
        '@apply text-neutral-800': {}
    },
    '.radio-cards label.selected svg': {
        '@apply text-primary-500 visible': {}
    },
    '.radio-cards.simple label h3': {
        '@apply font-medium text-center mx-auto': {}
    },

    // Radio compact

    '.radio-compact': {
        '@apply border border-neutral-200 bg-white divide-x divide-neutral-200 rounded': {}
    },
    '.radio-compact label': {
        '@apply py-2 px-6 flex flex-1 items-center justify-center cb-text-copy-regular font-medium whitespace-nowrap cursor-pointer focus:outline-none hover:bg-neutral-50': {}
    },
    '.radio-compact label:first-of-type': {
        '@apply rounded-l': {}
    },
    '.radio-compact label:last-of-type': {
        '@apply rounded-r': {}
    },
    '.radio-compact label.selected': {
        '@apply bg-primary-50': {}
    },

    // Radio stacked

    '.radio-cards.stacked': {
        '@apply space-y-4': {}
    },
    '.radio-cards.stacked label': {
        '@apply sm:justify-between': {}
    },
    '.radio-cards label .right-info': {
        '@apply mt-2 flex text-sm sm:mt-0 sm:ml-4 sm:flex-col sm:text-right cb-text-copy-regular': {}
    },
    '.radio-cards label .right-info .strong': {
        '@apply !font-semibold': {}
    },
    '.radio-cards label .right-info .light': {
        '@apply !text-neutral-600': {}
    },

    // Radio tabular

    '.radio-cards.tabular': {
        '@apply relative -space-y-px': {}
    },
    '.radio-cards.tabular label.selected': {
        '@apply z-20 ring-0 border-primary-200': {}
    },
    '.radio-cards.tabular label': {
        '@apply relative ring-0 border border-neutral-200 hover:border-neutral-300 p-4 flex cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none rounded-none hover:z-10': {}
    },
    '.radio-cards.tabular label:first-child': {
        '@apply rounded-t': {}
    },
    '.radio-cards.tabular label:last-child': {
        '@apply rounded-b': {}
    },
    '.radio-cards.tabular label span': {
        '@apply flex gap-1': {}
    },
    '.radio-cards.tabular label span:first-child': {
        '@apply gap-3': {}
    },
    '.radio-cards.tabular label span:last-child': {
        '@apply md:ml-0 md:pl-0 md:text-right': {}
    },

    // Radio panels

    '.radio-cards.panels': {
        '@apply -space-y-px rounded-md bg-white ring-0': {}
    },
    '.radio-cards.panels label': {
        '@apply relative border border-neutral-200 hover:border-neutral-300 p-4 flex gap-3 cursor-pointer focus:outline-none rounded-none ring-0 hover:z-10': {}
    },
    '.radio-cards.panels label:first-child': {
        '@apply rounded-t': {}
    },
    '.radio-cards.panels label:last-child': {
        '@apply rounded-b': {}
    },
    '.radio-cards.panels label.selected': {
        '@apply z-20 ring-0 border-primary-200': {}
    },





});