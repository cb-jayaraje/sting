module.exports = Button = (styles) => ({
    ' .btn': {
        "@apply  px-3.5 py-2.5 rounded border  text-copy leading-4 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30": {},
                   },
        '.btn-small': {
            "@apply px-2.5 py-1.5":{},
        },

            '.btn-rounded': {
        "@apply rounded-full p-1": {},
                   },
  
    
    '.btn-outline': {
            "@apply bg-transparent hover:bg-primary-50 text-primary-500 border-primary-400 focus:ring-primary-500": {},
                       },
    '.btn-primary': {
        "@apply  text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-600 focus:ring-primary-600 border-primary-500 text-white" :{},
    },
    '.btn-primary-small': {
        "@apply  text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-600 focus:ring-primary-600 border-primary-500 text-white" :{},
    },
    '.btn-brand': {
        "@apply text-white bg-brand-50 hover:bg-brand-100 active:bg-brand-100  focus:ring-brand-100 text-brand-600" :{},
    },
    
    '.btn-neutral': {
        "@apply bg-transparent hover:bg-neutral-50 text-neutral-600 border-neutral-200 focus:ring-neutral-600" :{},
    },
    '.btn-neutral-small': {
        "@apply bg-transparent hover:bg-neutral-50 text-neutral-600 border-neutral-200 focus:ring-neutral-600" :{},
    },


    '.btn-red': {
        "@apply text-white bg-red-50 hover:bg-red-100 active:bg-red-100 focus:ring-red-500 border-red-50 text-white" :{},
    },
    '.btn-orange': {
        "@apply text-white bg-orange hover:bg-orange active:bg-orange focus:ring-orange text-white" :{},
    },
    '.btn-green': {
        "@apply text-white bg-green hover:bg-green active:bg-green focus:ring-green text-white" :{},
    },

    '.btn-info': {
        "@apply text-white bg-info-300 hover:bg-info-100 focus:ring-info-300 active:bg-info-400":{},
    },
    '.btn-warning': {
        "@apply bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-50 focus:ring-orange-500":{},
    },
    '.btn-success': {
        "@apply text-green-700 bg-green-50 hover:bg-green-100 focus:ring-green-500 active:bg-green-100":{},
    },
    '.btn-danger': {
        "@apply bg-red-50 hover:bg-red-100 active:bg-red-100 focus:ring-red-400  text-red-600" :{},
    },

    '.btn-icon': {
        "@apply inline-flex gap-x-1.5 items-center text-left":{},
    },
    '.btn-trailing-icon': {
        "@apply ml-2 -mr-0.5 h-4 w-4":{},
    },
    '.btn-link': {
        "@apply text-gray-700 block w-full text-left px-4 py-2 text-sm":{},
    },
  
  });