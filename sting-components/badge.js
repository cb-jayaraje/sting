module.exports = Badge = (styles) => ({
    '.badge': {
        "@apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium": {},
                   },

            
    
   
    '.badge-primary': {
        "@apply  bg-primary-300 hover:bg-primary-100 active:bg-primary-400 focus:ring-primary-300 text-white" :{},
    },
    '.badge-secondary': {
        "@apply text-white bg-secondary-300 hover:bg-secondary-100 active:bg-secondary-400 focus:ring-secondary-300":{},
    },
    '.badge-info': {
        "@apply text-white bg-info-300 hover:bg-info-100 focus:ring-info-300 active:bg-info-400":{},
    },
    '.badge-warning': {
        "@apply text-white bg-warning-300 hover:bg-warning-100 focus:ring-warning-300 active:bg-warning-400":{},
    },
    '.badge-success': {
        "@apply  text-success-50 bg-success-300 hover:bg-success-100 focus:ring-success-300 active:bg-success-400":{},
    },
    '.badge-danger': {
        "@apply px-4 py-2 text-danger-50 bg-danger-300 hover:bg-danger-100 focus:ring-danger-300 active:bg-danger-400":{},
    },
    '.badge-neutral': {
        "@apply text-neutral-50 bg-neutral-300 hover:bg-neutral-100 focus:ring-neutral-300 active:bg-neutral-400":{},
    },
    '.badge-icon': {
        "@apply -ml-1 mr-3 h-5 w-5":{},
    },
    '.badge-trailing-icon': {
        "@apply ml-2 -mr-0.5 h-4 w-4":{},
    },
    '.badge-link': {
        "@apply text-gray-700 block w-full text-left px-4 py-2 text-sm":{},
    },
  
  });