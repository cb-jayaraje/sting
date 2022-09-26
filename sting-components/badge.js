module.exports = Badge = (styles) => ({
    '.badge': {
        "@apply inline-flex items-center rounded-full leading-tight font-normal capitalize whitespace-nowrap": {},
                   },
    '.badge-neutral':{
        "@apply badge bg-neutral-200 text-neutral-800":{}
    },
    '.badge button':{
        "@apply ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[#20272A] hover:bg-[#617178] hover:text-[#E9ECEE] focus:bg-[#2F3A3F] focus:text-[#E9ECEE] focus:outline-none":{}
    },
      '.badge-mini ': {
      '@apply px-2 py-0.5 text-xs' : {}
      },        
      ' .badge-small': {
      '@apply px-2.5 py-0.5 text-copy-small rounded-full' : {}
      },     
      '.badge-small__icon': {
        '@apply px-0.5 pr-0.5 pl-2  py-0.5 text-copy-small rounded-full':{}
      },
      '.badge-base__icon': {
        '@apply px-0.5 pr-0.5 pl-2  py-0.5 text-copy-small rounded-full':{}
      },
      '.badge-base': {
      '@apply px-3 py-0.5 text-copy-regular' : {}
      },
      '.badge-inverted': {
      '@apply !bg-white' : {}
      },
      '.badge-dot--sm': {
      '@apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium' : {}
      },
      '.badge-dot--lg': {
      '@apply inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium' : {}
      },
      '.badge-icn': {
      '@apply -ml-1 mr-1.5 h-2 w-2' : {}
      }
  
  });