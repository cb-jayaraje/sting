module.exports = SelectMenus = (styles) => ({ 
    '.form-control .select': {
        "@apply block w-full pl-3 pr-10 py-2 text-copy-regular text-neutral-700 border-neutral-400 focus:outline-none focus:!ring-primary-500 focus:!border-primary-500 sm:text-sm rounded shadow-sm": {},
         },
         '.form-control .select-button': {
        "@apply bg-white  relative w-full border text-copy-regular text-neutral-700 border-neutral-400  rounded shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:!ring-primary-500 focus:!border-primary-500 sm:text-sm": {},
         },
         '.form-control .select-button-l-curve': {
          "@apply relative inline-flex items-center bg-primary-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-primary-500 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500": {},
           },
         '.theme-sting .form-control .select-button': { 
          "@apply block w-full pl-3 pr-10 py-2 text-copy-regular text-neutral-700 border-neutral-400 focus:outline-none focus:!ring-primary-500 focus:!border-primary-500 sm:text-sm rounded shadow-sm": {},

         },
         '.form-control .select-button-icon-container': {
          "@apply absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none": {},
         },
         '.form-control .select-ul': {
        "@apply absolute z-10 w-full bg-white shadow-lg max-h-60 rounded  text-copy-regular ring-1 ring-primary-500 ring-opacity-5 overflow-auto focus:outline-none sm:text-sm": {},
             },
        '.form-control .select-li': {
        "@apply text-neutral-700 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-neutral-100": {},
             },

             '.theme-sting .form-control .select-li': {
               "@apply text-neutral-700 hover:text-neutral-800 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-neutral-100": {},
                    },
                    '.form-control .select-li-selected': {
                         "@apply text-white bg-primary-500 cursor-default select-none relative py-2 pl-3 pr-9  hover:bg-primary-500": {},
                              },

        '.form-control .select-li-icon': {
        "@apply !text-green-400  absolute inset-y-0 flex items-center right-0 pr-4": {},
             }, 

            

        '.form-control .select-secondary-text': {
        "@apply truncate text-gray-700": {},
             }, 
       
        
})