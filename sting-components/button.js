module.exports = Button = (styles) => ({
    '.btn': {
        "@apply w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium": {},
                   },
    
    '.btn-outline': {
            "@apply inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500": {},
                       },
    '.btn-primary': {
        "@apply text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500":{},
    },
    '.btn-secondary': {
        "@apply text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500":{},
    }
  });