module.exports = Dropdown = (styles) => ({
    
    '.dropdown': {
            "@apply origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20": {},
                       },
    '.dropdown-list__a': {
            "@apply text-neutral-700 block px-4 py-2 text-sm hover:bg-neutral-100 hover:text-neutral-800": {},
                       },
    '.dropdown-divider': {
            "@apply divide-y divide-neutral-200": {},
                       } ,
    '.form-control .dropdown-container': {
    '@apply origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' : {}
    },  
    '.form-control .dropdown-submit': {
    '@apply text-neutral-700 hover:text-neutral-800 hover:bg-neutral-100 block w-full text-left px-4 py-2 text-sm' : {}
    },
  });