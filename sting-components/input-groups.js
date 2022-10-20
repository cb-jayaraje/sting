module.exports = InputGroups = (styles) => ({
    
    '.form-control .input, .input': {
                      "@apply shadow-sm focus:!ring-primary-500 focus:!border-primary-500 focus:outline-none block w-full sm:text-sm border-neutral-400 rounded text-neutral-800 placeholder-neutral-500 font-Inter placeholder:text-sm": {},
                       },
    '.form-control .label': {
                     "@apply cb-text-copy-regular font-semibold": {},
                         },

    '.form-control .help-text': {
                            "@apply mt-2 cb-text-copy-small": {},
                             },
    '.form-control .input-error': {
                                "@apply block w-full pr-10 border-red-600 text-neutral-600 placeholder-neutral-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md": {},
                                 },
    '.form-control .error-text': {
                                "@apply mt-2 text-small text-red-600": {},
                                 },
    '.form-control .hint-text': {
                    "@apply text-sm text-neutral-600": {},
                     },
      '.form-control .input-select': {
                    "@apply focus:ring-primary-500 focus:border-primary-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-neutral-700 sm:text-sm rounded-md": {},
                     },
    '.form-control .input-leading__icon': {
                    "@apply absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-700": {},
                     },
    '.form-control .dropdown-div': {
                    "@apply origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20": {},
                     },
    '.form-control .dropdown-div__a': {
                    "@apply text-neutral-700 block px-4 py-2 text-sm hover:bg-neutral-100": {},
                     },

    '.form-control .input-trailing__icon': {
                        "@apply absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-700":{}
                    },
  
     '.form-control .input-addon': {
     '@apply !rounded-l-none' : {}
     },   
     
     '.form-control .input-addon__innerlabel': {
     '@apply inline-flex items-center px-3 rounded-l-md border border-r-0 border-neutral-300 bg-neutral-50 text-neutral-700 sm:text-sm' : {}
     },

     '.form-control .input-leading__trailing': {
     '@apply !rounded-r-none pl-10' : {}
     },

     '.form-control .input-leading__trailing___button': {
     '@apply -ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-neutral-300 text-sm font-medium rounded-r-md text-neutral-700 bg-neutral-50 hover:bg-neutral-100 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500' : {}
     },

     '.form-control .input-leading__trailing___icon': {
     '@apply h-5 w-5 text-neutral-700' : {}
     },

     '.form-control .input-leading__trailing___iconcontainer': {
     '@apply absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none' : {}
     },

     '.form-control .input-sharedborders__label': {
     '@apply block text-sm font-medium text-neutral-700' : {}
     },

     ".form-control .input-sharedborders": {
        "@apply focus:ring-primary-500 focus:border-primary-500 relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-neutral-300": true
      },
      ".form-control .input-inset__container": {
        "@apply border border-neutral-300 bg-white rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-primary-600 focus-within:border-primary-600": true
      },
      ".form-control .input-inset__label": {
        "@apply block text-xs font-medium text-neutral-800": true
      },
      ".form-control .input-inset": {
        "@apply block w-full border-0 p-0 text-neutral-800 placeholder-neutral-500 focus:ring-0 sm:text-sm": true
      },
      ".form-control .input-shortcut__kbd": {
        "@apply inline-flex items-center border border-neutral-200 rounded px-2 text-sm font-sans font-medium text-neutral-700": true
      },
      ".form-control .input-overlap__label": {
        "@apply absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-neutral-800": true
      },
      ".form-control .input-neutralbg__btmborder": {
        "@apply block w-full border-0 border-b border-transparent bg-neutral-50 focus:border-primary-600 focus:ring-0 sm:text-sm": true
      }

  });