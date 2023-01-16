module.exports = Dropdown = (styles) => ({
    
        '.dropdown': {
            '@apply origin-top-right absolute right-0 mt-2 p-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-neutral-200 focus:outline-none z-20': {},
                           },
        '.dropdown a, .dropdown-container a': {
            '@apply cb-text-copy-regular block px-4 py-2 hover:bg-neutral-50': {},
                           },
        '.dropdown-divider': {
            '@apply divide-y divide-neutral-200 space-y-1': {},
                           } ,
        '.form-control .dropdown-container': {
            '@apply origin-top-right absolute right-0 mt-2 p-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-neutral-200 focus:outline-none' : {}
        },  
        '.form-control .dropdown-submit': {
            '@apply cb-text-copy-regular hover:bg-neutral-50 block w-full text-left px-4 py-2' : {}
        }, 
        '.dropdown svg, .dropdown-container svg': {
            '@apply text-neutral-300 w-5 h-5 mr-3 -ml-2' : {}
        },
      });