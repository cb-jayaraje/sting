module.exports = InputGroups = (styles) => ({
    
    '.form-control .input, .input': {
                      "@apply shadow-sm focus:!ring-primary-500 focus:!border-primary-500 focus:outline-none block w-full sm:text-sm border-neutral-200 rounded text-neutral-600 placeholder-neutral-300 font-Inter placeholder:text-xs": {},
                       },
    '.form-control .label': {
                     "@apply cb-text-copy-regular font-semibold": {},
                         },

    '.form-control .help-text': {
                            "@apply mt-2 cb-text-copy-small": {},
                             },
    '.form-control .input-error': {
                                "@apply block w-full pr-10 border-red-400 text-neutral-600 placeholder-neutral-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md": {},
                                 },
    '.form-control .error-text': {
                                "@apply mt-2 text-small text-red-500": {},
                                 },
    '.form-control .hint-text': {
                    "@apply text-sm text-neutral-300": {},
                     },
      '.form-control .input-select': {
                    "@apply focus:ring-primary-500 focus:border-primary-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md": {},
                     },

    '.form-control .dropdown-div': {
                    "@apply origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20": {},
                     },
    '.form-control .dropdown-div-a': {
                    "@apply text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100": {},
                     },

    '.form-control .input-icon-trailing': {
                        "@apply absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-200":{}
                    },
  
     '.form-control .input-addon': {
     '@apply !rounded-l-none' : {}
     },   
     
     '.form-control .input-addon-label': {
     '@apply inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm' : {}
     },

   




  });