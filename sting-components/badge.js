module.exports = Badge = (styles) => ({
    '.badge': {
        "@apply inline-flex items-center rounded-full leading-tight font-normal capitalize whitespace-nowrap": {},
                   },
    
    '.badge button':{
        "@apply ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full focus:outline-none":{}
    },
   

      '.badge-mini ': {
      '@apply px-2 py-0.5 text-xs' : {}
      },        
      ' .badge-small': {
      '@apply px-2 py-0.5 cb-text-copy-small rounded-full' : {}
      },     
      '.badge-small__icon': {
        '@apply pr-0.5 pl-2  py-0.5 text-copy-small rounded-full':{}
      },
      '.badge-base__icon': { 
        '@apply px-0.5 pr-1 pl-2.5  py-0.5 text-copy-regular rounded-full':{}
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
      },
      '.badge-neutral':{
        "@apply badge bg-neutral-100 text-neutral-700":{}
    },
      '.badge-neutral button':{
        "@apply text-neutral-700 hover:bg-neutral-100 hover:text-neutral-200 focus:bg-neutral-700 focus:text-neutral-100 ml-1":{}
    },
    '.badge-primary':{
      "@apply badge bg-primary-600 text-primary-50":{}
  },
    '.badge-primary button':{
      "@apply text-primary-50 hover:bg-primary-300 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400":{}
  },

  '.badge-minimal':{
    "@apply badge border border-neutral-300 text-primary-700":{}
},
  '.badge-minimal button':{
    "@apply text-neutral-500 hover:bg-neutral-200 hover:text-neutral-800 focus:bg-neutral-500 focus:text-primary-50":{}
},

'.badge-red':{
  "@apply badge text-red-900 bg-red-100":{}
},
'.badge-red button':{
  "@apply text-red-900 hover:bg-red-200 hover:text-red-900 focus:bg-red-200 focus:text-red-900":{}
},
'.badge-green':{
  "@apply badge text-green-900 bg-green-100":{}
},
'.badge-green button':{
  "@apply text-green-900 hover:bg-green-200 hover:text-green-900 focus:bg-green-100 focus:text-green-900":{}
},

'.badge-orange':{
  "@apply badge text-orange-900 bg-orange-100":{}
},
'.badge-orange button':{
  "@apply text-orange-900 hover:bg-orange-200 hover:text-orange-900 focus:bg-orange-100 focus:text-orange-900":{}
},
  
  });