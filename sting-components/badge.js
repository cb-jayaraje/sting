module.exports = Badge = (styles) => ({
    '.badge': {
        "@apply inline-flex items-center rounded-full leading-tight font-medium capitalize whitespace-nowrap": {},
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
      '.badge-icon-small': {
        '@apply pr-0.5 pl-2  py-0.5 text-copy-small rounded-full':{}
      },
      '.badge-icon-base': { 
        '@apply px-0.5 pr-1 pl-2.5  py-0.5 text-copy-regular rounded-full':{}
      },
      '.badge-base': {
      '@apply px-3 py-0.5 cb-text-copy-regular' : {}
      },
     
     
     
      '.badge-neutral':{
        "@apply badge bg-neutral-100 text-neutral-700 border border-neutral-200":{}
    },
      '.badge-neutral button':{
        "@apply text-neutral-700 hover:bg-neutral-400 focus:bg-neutral-100 focus:text-neutral-700 ml-1":{}
    },
    '.badge-primary':{
      "@apply badge bg-primary-800 text-white border border-primary-800":{}
  },
    '.badge-primary button':{
      "@apply text-white hover:bg-primary-900 focus:bg-primary-800":{}
  },

  '.badge-minimal':{
    "@apply badge border border-neutral-400 text-neutral-700":{}
},
  '.badge-minimal button':{
    "@apply text-neutral-700 hover:bg-neutral-200 focus:bg-neutral-50 focus:text-primary-700":{}
},

'.badge-info':{
  "@apply badge text-info-900 bg-info-50 border border-info-100":{}
},
'.badge-info button':{
  "@apply text-info-900 hover:bg-info-200 hover:text-info-900 focus:bg-info-200 focus:text-info-900":{}
},

'.badge-red':{
  "@apply badge text-red-900 bg-red-50 border border-red-100":{}
},
'.badge-red button':{
  "@apply text-red-900 hover:bg-red-200 hover:text-red-900 focus:bg-red-200 focus:text-red-900":{}
},
'.badge-green':{
  "@apply badge text-green-900 bg-green-50 border border-green-100":{}
},
'.badge-green button':{
  "@apply text-green-900 hover:bg-green-200 hover:text-green-900 focus:bg-green-100 focus:text-green-900":{}
},

'.badge-orange':{
  "@apply badge text-orange-900 bg-orange-50 border border-orange-100":{}
},
'.badge-orange button':{
  "@apply text-orange-900 hover:bg-orange-200 hover:text-orange-900 focus:bg-orange-100 focus:text-orange-900":{}
},
  
  });