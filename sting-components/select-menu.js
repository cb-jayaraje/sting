module.exports = SelectMenus = (styles) => ({ 
     '.form-control .select': {
          "@apply block w-full pl-3 pr-10 py-2 cb-text-copy-regular border border-neutral-400 focus:outline-none focus:!ring-primary-500 focus:!border-primary-500 sm:text-sm rounded shadow-sm": {},
     },
     '.form-control .select-button': {
          "@apply bg-white relative w-full cb-text-copy-regular border border-neutral-400 rounded shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:!ring-primary-500 focus:!border-primary-500 sm:text-sm": {},
     },
     '.form-control .select-button span:first-class': {
          "@apply block truncate": {},
     },
     '.form-control .select-button span:last-of-type': {
          "@apply absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none": {},
     },
     '.form-control .select-button svg': {
          "@apply w-5 h-5": {},
     },
     '.form-control .select-ul': {
          "@apply absolute z-10 w-full bg-white mt-1 shadow-lg max-h-60 rounded ring-1 ring-primary-500 ring-opacity-5 overflow-auto focus:outline-none": {},
     },
     '.form-control .select-ul li': {
          "@apply cb-text-copy-regular cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-neutral-100": {},
     },
     '.form-control .select-ul li span:first-class': {
          "@apply block truncate": {},
     },
     '.form-control .select-ul li span:nth-child(2)': {
          "@apply absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none": {},
     },
     '.form-control .select-ul li span:nth-child(2) svg': {
          "@apply w-5 h-5": {},
     },
     '.form-control .select-li-selected': {
          "@apply cb-text-copy-regular text-info-800 bg-info-50 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-info-50": {},
     },
     '.form-control .select-ul li.select-li-selected span:nth-child(2) svg': {
          "@apply !text-info-800": {},
     },
       
        
})