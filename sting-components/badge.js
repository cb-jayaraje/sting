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
      '.badge-icon-small': {
        '@apply pr-0.5 pl-2  py-0.5 text-copy-small rounded-full':{}
      },
      '.badge-icon-base': { 
        '@apply px-0.5 pr-1 pl-2.5  py-0.5 text-copy-regular rounded-full':{}
      },
      '.badge-base': {
      '@apply px-3 py-0.5 text-copy-regular' : {}
      },
     
     
     
      '.badge-neutral':{
        "@apply badge bg-neutral-200 text-neutral-800":{}
    },
      '.badge-neutral button':{
        "@apply text-neutral-800 hover:bg-neutral-400 hover:text-neutral-100 focus:bg-neutral-700 focus:text-neutral-100 ml-1":{}
    },
    '.badge-primary':{
      "@apply badge bg-primary-500 text-primary-50":{}
  },
    '.badge-primary button':{
      "@apply text-primary-50 hover:bg-primary-300 hover:text-primary-400 focus:bg-primary-50 focus:text-primary-400":{}
  },

  '.badge-minimal':{
    "@apply badge border border-neutral-200  text-primary-500":{}
},
  '.badge-minimal button':{
    "@apply text-neutral-500 hover:bg-neutral-200 hover:text-neutral-800 focus:bg-neutral-500 focus:text-primary-50":{}
},

'.badge-red':{
  "@apply badge text-red-800 bg-red-100":{}
},
'.badge-red button':{
  "@apply text-red-800 hover:bg-red-200 hover:text-red-900 focus:bg-red-500 focus:text-red-50":{}
},
'.badge-green':{
  "@apply badge text-green-800 bg-green-100":{}
},
'.badge-green button':{
  "@apply text-green-800 hover:bg-green-300 hover:text-green-800 focus:bg-green-600 focus:text-green-50":{}
},

'.badge-orange':{
  "@apply badge text-orange-900 bg-orange-200":{}
},
'.badge-orange button':{
  "@apply text-orange-900 hover:bg-orange-500 hover:text-orange-900 focus:bg-orange-700 focus:text-orange-50":{}
},
  
  });