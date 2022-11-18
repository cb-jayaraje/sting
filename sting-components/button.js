module.exports = Button = (styles) => ({
    ' .btn': {
        '@apply antialiased whitespace-nowrap items-center rounded border border-transparent bg-white px-4 py-2 font-medium cb-text-copy-regular hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-info-800 disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer items-start whitespace-nowrap': {},
    },
    '.btn-small': {
        '@apply px-2.5 py-1.5 cb-text-copy-small border border-transparent font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30': {},
    },
    '.btn-rounded': {
        '@apply rounded p-2': {},
    },
    '.btn-rounded svg': {
        '@apply w-5 h-5': {},
    },
    '.btn-rounded-small': {
        '@apply rounded p-1.5': {},
    },
    '.btn-rounded-small svg': {
        '@apply h-4 w-4': {},
    },
    '.btn-icon-trailing': {
        '@apply ml-2 -mr-0.5 h-4 w-4': {},
    },
    '.btn-icon-leading': {
        '@apply mr-2 -ml-0.5 h-4 w-4': {},
    },
    '.btn-small .btn-icon-trailing': {
        '@apply ml-1.5 -mr-0.5 h-3.5 w-3.5': {},
    },
    '.btn-small .btn-icon-leading': {
        '@apply mr-1 -ml-0.5 h-3.5 w-3.5': {},
    },
    '.btn-icon-leading': {
        '@apply mr-2 -ml-0.5 h-4 w-4': {},
    },
    '.btn-icon': {
        '@apply inline-flex items-center': {},
    },
    '.btn-link': {
        '@apply px-0.5 antialiased font-medium text-primary-800 underline underline-offset-2 hover:text-primary-800': {},
    },


    // Sting theme
    '.theme-sting .btn-primary': {
        '@apply text-white bg-primary-800 hover:bg-primary-900 active:bg-primary-800 focus:outline-none border border-transparent border-b-primary-900': {},
    },
    '.theme-sting .btn-secondary': {
        '@apply text-primary-800 bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-200 focus:outline-none border border-transparent border-b-neutral-300': {},
    },
    '.theme-sting .btn-info': {
        '@apply text-white bg-info-800 hover:bg-info-900 active:bg-info-800 hover:text-white focus:outline-none border border-transparent border-b-info-900': {},
    },
    '.theme-sting .btn-neutral': {
        '@apply bg-transparent hover:bg-neutral-100 text-primary-800 hover:text-neutral-900 active:bg-neutral-100/50 border border-neutral-400': {},
    },
    '.theme-sting .btn-borderless': {
        '@apply bg-transparent text-primary-800 hover:bg-neutral-100': {},
    },
    '.theme-sting .btn-danger': {
        '@apply text-white !bg-red-800 hover:!bg-red-900 active:!bg-red-800 text-white border !border-transparent !border-b-red-900': {},
    },


    // Leap theme
    '.theme-leap .btn-primary': {
        "@apply text-white border-0 !bg-primary-400 active:!bg-primary-600 border-primary-500 text-white": {},
    },
    '.btn-primary-small': {
        '@apply text-white border-0 !bg-primary-500 hover:!bg-primary-600 active:!bg-primary-600 border-primary-500 text-white': {},
    },
    '.theme-leap .btn-secondary': {
        "@apply text-neutral-900 bg-gradient-to-b from-white to-neutral-100 active:!bg-primary-50 border border-neutral-400 hover:text-primary-800 focus:outline-none": {},
    },


});