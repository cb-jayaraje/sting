module.exports = SelectMenus = (styles) => ({ 
    '.form-control .select': {
        "@apply mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:!ring-primary-500 focus:!border-primary-500 sm:text-sm rounded-md": {},
         },
         '.form-control .select-button': {
        "@apply bg-white  relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:!ring-primary-500 focus:!border-primary-500 sm:text-sm": {},
         },
         '.form-control .select-button-l-curve': {
          "@apply relative inline-flex items-center bg-primary-600 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500": {},
           },
         '.theme-sting .form-control .select-button': { 
          "@apply bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:!ring-primary-500 focus:!border-primary-500 sm:text-sm": {},

         },
         '.form-control .select-button-icon-container': {
        "@apply absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none": {},
         },
         '.form-control .select-ul': {
        "@apply absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm": {},
             },
        '.form-control .select-li': {
        "@apply text-gray-900 cursor-default select-none relative py-2 hover:bg-primary-500 hover:text-white": {},
             },

             '.theme-sting .form-control .select-li': {
               "@apply hover:text-lime-500": {},
                    },

        '.form-control .select-li-icon': {
        "@apply !text-primary-600 hover:!text-white absolute inset-y-0  flex items-center": {},
             }, 

            

        '.form-control .select-secondary-text': {
        "@apply truncate text-gray-500": {},
             }, 
       
        
})