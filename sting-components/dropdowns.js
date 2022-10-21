module.exports = Dropdown = (styles) => ({
    
    '.dropdown': {
            "@apply origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20": {},
                       },
    '.dropdown-list-a': {
            "@apply text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100": {},
                       },
    '.dropdown-divider': {
            "@apply divide-y divide-gray-100": {},
                       } ,
    '.form-control .dropdown-container': {
    '@apply origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' : {}
    },  
    '.form-control .dropdown-submit': {
    '@apply text-gray-700 hover:bg-gray-100 block w-full text-left px-4 py-2 text-sm' : {}
    },
  });