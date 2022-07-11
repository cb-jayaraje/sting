module.exports = InputGroups = (styles) => ({
    
    '.form-control .input': {
                      "@apply shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md": {},
                       },
    '.form-control .label': {
                     "@apply block text-sm font-medium text-gray-600": {},
                         },

    '.form-control .help-text': {
                            "@apply mt-2 text-sm text-gray-500": {},
                             },
    '.form-control .input-error': {
                                "@apply block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md": {},
                                 },
    '.form-control .error-text': {
                                "@apply mt-2 text-sm text-red-600": {},
                                 },
    '.form-control .hint-text': {
                    "@apply text-sm text-gray-500": {},
                     },
      '.form-control .input-select': {
                    "@apply focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md": {},
                     },
    '.form-control .input-leading__icon': {
                    "@apply absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none": {},
                     },
    '.form-control .dropdown-div': {
                    "@apply origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20": {},
                     },
    '.form-control .dropdown-div__a': {
                    "@apply text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100": {},
                     },

    '.form-control .input-trailing__icon': {
                        "@apply absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none":{}
                    },
                    

  });