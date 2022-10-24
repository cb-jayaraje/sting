module.exports = Button = (styles) => ({
    ' .btn': {
        "@apply antialiased items-center rounded border border-transparent bg-white px-4 py-2 text-sm font-medium cb-text-copy-regular drop-shadow-sm hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer": {},
    },
    '.btn-small': {
        "@apply px-2.5 py-1.5 cb-text-copy-small border border-transparent font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30": {},
    },
    '.btn-rounded': {
        "@apply rounded p-2": {},
    },
    '.btn-rounded-small': {
        "@apply rounded p-1.5": {},
    },

    '.btn-outline': {
        "@apply bg-transparent hover:bg-primary-50 text-primary-500 border-primary-400 focus:ring-primary-500": {},
    },
    
    '.btn-primary': {
        "@apply text-white border-0 !bg-primary-900 hover:!bg-primary-900 active:!bg-primary-600 focus:ring-primary-600 border-primary-500 text-white": {},
    },

    '.btn-primary-small': {
        "@apply text-white border-0 !bg-primary-500 hover:!bg-primary-600 active:!bg-primary-600 focus:ring-primary-600 border-primary-500 text-white": {},
    },

    '.theme-sting .btn-primary': {
        "@apply text-white !bg-primary-800 hover:!bg-primary-900 active:!bg-primary-800 focus:ring-primary-500 border border-transparent hover:text-lime-500 focus:outline-none": {},
    },

    '.theme-sting .btn-secondary': {
        "@apply text-primary-800 !bg-primary-50 hover:!bg-primary-100 active:!bg-primary-50 focus:ring-primary-500 border border-transparent hover:text-primary-800 focus:outline-none": {},
    },

    '.btn-brand': {
        "@apply text-white !bg-brand-50 hover:!bg-brand-100 active:!bg-brand-100 focus:ring-brand-100 text-brand-600": {},
    },

    '.theme-sting .btn-neutral': {
        "@apply bg-white hover:bg-neutral-100 text-primary-800 hover:text-primary-900 active:bg-neutral-100/50 border-primary-100 focus:ring-primary-500": {},
    },

    '.theme-sting .btn-borderless': {
        "@apply text-primary-800 hover:text-primary-900 hover:bg-neutral-100 border-transparent drop-shadow-none": {},
    },



    '.btn-red': {
        "@apply text-white !bg-red-50 hover:!bg-red-100 active:!bg-red-100 focus:ring-red-500 border-red-50 text-white": {},
    },
    '.theme-sting .btn-danger': {
        "@apply text-white !bg-red-800 hover:!bg-red-900 active:!bg-red-800 focus:ring-red-400 border-transparent text-white": {},
    },

   
    '.btn-green': {
        "@apply text-green-700 !bg-green-50 hover:!bg-green-100 focus:ring-green-500 active:!bg-green-100": {},
    },

    '.btn-info': {
        "@apply text-white !bg-info-300 hover:!bg-info-100 focus:ring-info-300 active:!bg-info-400": {},
    },
    '.btn-warning': {
        "@apply !bg-orange-50 hover:!bg-orange-100 text-orange-700 border-orange-50 focus:ring-orange-500": {},
    },
    '.btn-success': {
        "@apply text-green-700 !bg-green-50 hover:!bg-green-100 focus:ring-green-500 active:!bg-green-100": {},
    },
    '.btn-danger': {
        "@apply !bg-red-50 hover:!bg-red-100 active:!bg-red-100 focus:ring-red-400  text-red-600": {},
    },


    '.btn-icon-trailing': {
        "@apply ml-2 -mr-0.5 h-4 w-4": {},
    },

    '.btn-icon-leading': {
        "@apply mr-2 -ml-0.5 h-4 w-4": {},
    },

    '.btn-small .btn-icon-trailing': {
        "@apply ml-1.5 -mr-0.5 h-3.5 w-3.5": {},
    },

    '.btn-small .btn-icon-leading': {
        "@apply mr-1 -ml-0.5 h-3.5 w-3.5": {},
    },

    '.btn-icon-leading': {
        "@apply mr-2 -ml-0.5 h-4 w-4": {},
    },


    '.btn-icon': {
        "@apply inline-flex items-center": {},
    },
    '.btn-link': {
        "@apply px-0.5 antialiased font-medium text-primary-800 underline underline-offset-2 hover:text-primary-900 hover:bg-primary-50": {},
    }

});