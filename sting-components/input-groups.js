module.exports = InputGroups = (styles) => ({
    
    '.form-control .input': {
                      "@apply shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md": {},
                       },
    '.form-control .label': {
                     "@apply block text-sm font-medium text-gray-700": {},
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

  });