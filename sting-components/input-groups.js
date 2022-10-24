module.exports = InputGroups = (styles) => ({
    
'.form-control': {
    "@apply space-y-1": {},
  },
    '.form-control .input, .input': {
    "@apply block w-full cb-text-copy-regular rounded border-neutral-400 shadow-sm focus:border-primary-500 focus:ring-primary-500 placeholder-neutral-500": {},
  },
  '.form-control .label': {
      "@apply cb-text-copy-regular font-medium": {},
  },
  '.form-control .help-text': {
      "@apply py-1 cb-text-copy-small": {},
  },
  '.form-control .input-error': {
      "@apply block w-full pr-10 border-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md cb-text-copy-regular": {},
  },
  '.form-control .error-text': {
      "@apply py-1 cb-text-copy-small text-red-800": {},
  },
  '.form-control .hint-text': {
      "@apply cb-text-copy-regular text-neutral-600": {},
  },
    '.form-control .input-select': {
        "@apply focus:ring-primary-500 focus:border-primary-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-neutral-500 sm:cb-text-copy-regular rounded-md": {},
    },
  '.form-control .dropdown-div': {
      "@apply origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20": {},
  },
  '.form-control .dropdown-div-a': {
      "@apply block px-4 py-2 cb-text-copy-regular hover:bg-neutral-100": {},
  },
  '.form-control .input-icon-trailing': {
      "@apply absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none":{}
  },
  '.form-control .input-icon-leading': {
      "@apply pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3":{}
  },
  '.form-control .input-icon': {
      "@apply h-5 w-5 text-neutral-500":{}
  },
  '.form-control .input-icon-error': {
      "@apply h-5 w-5 text-red-500":{}
  },
   '.form-control .input-addon': {
       '@apply !rounded-l-none' : {}
   },   
   '.form-control .input-addon-label': {
      '@apply inline-flex items-center px-3 rounded-l-md border border-r-0 border-neutral-300 bg-neutral-50 text-neutral-700 sm:cb-text-copy-regular' : {}
   },


});