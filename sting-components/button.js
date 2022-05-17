module.exports = Button = (styles) => ({
    '.btn': {
        "@apply inline-flex justify-center rounded-md border shadow-sm  focus:outline-none focus:ring focus:ring-offset-2  items-center": {},
                   },

            '.btn-rounded': {
        "@apply rounded-full p-1": {},
                   },
    
    '.btn-outline': {
            "@apply inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500": {},
                       },
    '.btn-primary': {
        "@apply px-4 py-2 text-white bg-primary-300 hover:bg-primary-100 active:bg-primary-400 focus:ring-primary-300" :{},
    },
    '.btn-secondary': {
        "@apply px-4 py-2 text-white bg-secondary-300 hover:bg-secondary-100 active:bg-secondary-400 focus:ring-secondary-300":{},
    },
    '.btn-info': {
        "@apply px-4 py-2 text-white bg-info-300 hover:bg-info-100 focus:ring-info-300 active:bg-info-400":{},
    },
    '.btn-warning': {
        "@apply px-4 py-2 text-white bg-warning-300 hover:bg-warning-100 focus:ring-warning-300 active:bg-warning-400":{},
    },
    '.btn-success': {
        "@apply px-4 py-2 text-success-50 bg-success-300 hover:bg-success-100 focus:ring-success-300 active:bg-success-400":{},
    },
    '.btn-danger': {
        "@apply px-4 py-2 text-danger-50 bg-danger-300 hover:bg-danger-100 focus:ring-danger-300 active:bg-danger-400":{},
    },
    '.btn-neutral': {
        "@apply px-4 py-2 text-neutral-50 bg-neutral-300 hover:bg-neutral-100 focus:ring-neutral-300 active:bg-neutral-400":{},
    },
    '.btn-icon': {
        "@apply -ml-1 mr-3 h-5 w-5":{},
    },
    '.btn-trailing-icon': {
        "@apply ml-2 -mr-0.5 h-4 w-4":{},
    },
  
  });