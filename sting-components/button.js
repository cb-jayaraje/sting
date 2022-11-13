module.exports = Button = (styles) => ({
    ' .btn': {
        '@apply antialiased whitespace-nowrap items-center rounded border border-transparent bg-white px-4 py-2 font-medium cb-text-copy-regular hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer items-start': {},
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
    '.btn-outline': {
        '@apply bg-transparent hover:bg-primary-50 text-primary-500 border-primary-400 focus:ring-primary-500': {},
    },
    '.btn-primary': {
        '@apply text-white border-0 !bg-primary-800 hover:!bg-primary-900 active:!bg-primary-800 focus:ring-primary-800 text-white border border-transparent': {},
    },
    '.btn-red': {
        '@apply text-white !bg-red-50 hover:!bg-red-100 active:!bg-red-100 focus:ring-red-500 border-red-50 text-white border border-transparent': {},
    },
    '.btn-green': {
        '@apply text-green-700 !bg-green-50 hover:!bg-green-100 focus:ring-green-500 active:!bg-green-100 border border-transparent': {},
    },
    '.btn-info': {
        '@apply text-white !bg-info-300 hover:!bg-info-100 focus:ring-info-300 active:!bg-info-400 border border-transparent': {},
    },
    '.btn-warning': {
        '@apply !bg-orange-50 hover:!bg-orange-100 text-orange-700 border-orange-50 focus:ring-orange-500 border border-transparent': {},
    },
    '.btn-success': {
        '@apply text-green-700 !bg-green-50 hover:!bg-green-100 focus:ring-green-500 active:!bg-green-100 border border-transparent': {},
    },
    '.btn-danger': {
        '@apply !bg-red-50 hover:!bg-red-100 active:!bg-red-100 focus:ring-red-400 text-red-600 border border-transparent': {},
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
        '@apply px-0.5 antialiased font-medium text-primary-800 underline underline-offset-2 hover:text-primary-900': {},
    },
    // '.btn-brand': {
    //     '@apply text-white !bg-brand-50 hover:!bg-brand-100 active:!bg-brand-100 focus:ring-brand-100 text-brand-600': {},
    // },


    // Leap theme
    '.theme-leap .btn-primary': {
        "@apply text-white border-0  !bg-primary-400 active:!bg-primary-600 focus:ring-primary-600 border-primary-500 text-white": {},
    },
    '.btn-primary-small': {
        '@apply text-white border-0 !bg-primary-500 hover:!bg-primary-600 active:!bg-primary-600 focus:ring-primary-600 border-primary-500 text-white': {},
    },
    '.theme-leap .btn-secondary': {
        "@apply text-neutral-900 bg-gradient-to-b from-white to-neutral-100 active:!bg-primary-50 focus:ring-primary-500 border border-neutral-400 hover:text-primary-800 focus:outline-none": {},
    },


    // Sting theme
    '.theme-sting .btn-primary': {
        '@apply text-white !bg-primary-800 hover:!bg-primary-900 active:!bg-primary-800 focus:ring-primary-800 focus:outline-none border !border-transparent': {},
    },
    '.theme-sting .btn-secondary': {
        '@apply text-primary-800 !bg-neutral-200 hover:!bg-neutral-300 active:!bg-neutral-50 focus:ring-primary-500 hover:text-primary-900 focus:outline-none border !border-transparent': {},
    },
    '.theme-sting .btn-info': {
        '@apply text-white !bg-info-800 hover:!bg-info-900 active:!bg-info-800 focus:ring-info-500 hover:text-white focus:outline-none border !border-transparent': {},
    },
    '.theme-sting .btn-neutral': {
        '@apply bg-transparent hover:bg-neutral-100 text-neutral-800 hover:text-neutral-900 active:bg-neutral-100/50 border border-neutral-400 focus:ring-primary-500': {},
    },
    '.theme-sting .btn-borderless': {
        '@apply !bg-transparent text-primary-800 hover:text-primary-900 hover:bg-neutral-100 border-transparent': {},
    },
    '.theme-sting .btn-danger': {
        '@apply text-white !bg-red-800 hover:!bg-red-900 active:!bg-red-800 focus:ring-red-400 text-white border border-transparent': {},
    },


});