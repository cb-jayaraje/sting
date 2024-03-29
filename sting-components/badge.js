// module.exports = Badge = (styles) => ({
//     '.badge': {
//         "@apply inline-flex items-center rounded-full leading-tight capitalize whitespace-nowrap": {},
//                    },

//     '.badge button':{
//         "@apply ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full focus:outline-none":{}
//     },

//       '.badge-mini ': {
//       '@apply px-2 py-0.5 text-xs' : {}
//       },
//       ' .badge-small': {
//       '@apply px-2 py-0.5 cb-text-copy-small rounded-full' : {}
//       },
//       '.badge-icon-small': {
//         '@apply pr-0.5 pl-2 py-0.5 text-copy-small rounded-full':{}
//       },
//       '.badge-icon-base': {
//         '@apply px-0.5 pr-1 pl-2.5 py-0.5 text-copy-regular rounded-full':{}
//       },
//       '.badge-base': {
//       '@apply px-3 py-0.5 cb-text-copy-regular' : {}
//       },

//       '.badge-neutral':{
//         "@apply badge bg-neutral-50 text-neutral-700 border border-neutral-200":{}
//     },
//       '.badge-neutral button':{
//         "@apply text-neutral-600 hover:bg-neutral-100 focus:bg-neutral-50 focus:text-neutral-600 ml-1":{}
//     },
//     '.badge-primary':{
//       "@apply badge bg-primary-50 text-primary-600 border border-primary-100":{}
//   },
//     '.badge-primary button':{
//       "@apply text-primary-600 hover:bg-primary-200 focus:bg-primary-100":{}
//   },

//   '.badge-minimal':{
//     "@apply badge border border-neutral-200 text-neutral-600":{}
// },
//   '.badge-minimal button':{
//     "@apply text-neutral-600 hover:bg-neutral-100 focus:bg-neutral-50 focus:text-primary-700":{}
// },

// '.badge-info':{
//   "@apply badge text-info-600 bg-info-50 border border-info-100":{}
// },
// '.badge-info button':{
//   "@apply text-info-600 hover:bg-info-100 hover:text-info-700 focus:bg-info-500 focus:text-info-700":{}
// },

// '.badge-red':{
//   "@apply badge text-red-600 bg-red-50 border border-red-100":{}
// },
// '.badge-red button':{
//   "@apply text-red-600 hover:bg-red-100 hover:text-red-700 focus:bg-red-50 focus:text-red-600":{}
// },
// '.badge-green':{
//   "@apply badge text-green-600 bg-green-50 border border-green-100":{}
// },
// '.badge-green button':{
//   "@apply text-green-600 hover:bg-green-100 hover:text-green-700 focus:bg-green-50 focus:text-green-600":{}
// },

// '.badge-orange':{
//   "@apply badge text-orange-600 bg-orange-50 border border-orange-100":{}
// },
// '.badge-orange button':{
//   "@apply text-orange-600 hover:bg-orange-100 hover:text-orange-700 focus:bg-orange-50 focus:text-orange-600":{}
// },

//   });

module.exports = Badge = (styles) => ({
  ".badge": {
    "@apply inline-flex items-center rounded cb-text-copy-regular font-medium leading-4 whitespace-nowrap h-6 p-1":
      {},
  },
  ".badge span": {
    "@apply px-1":
      {},
  },

  ".badge-primary": {
    "@apply badge bg-primary-200 text-primary-800":
      {},
  },

  ".badge-primary-light": {
    "@apply badge bg-primary-50 text-primary-700 border border-primary-100":
      {},
  },

  ".badge-neutral": {
    "@apply badge bg-neutral-200 text-neutral-800":
      {},
  },

  ".badge-neutral-light": {
    "@apply badge bg-neutral-50 text-neutral-700 border border-neutral-100":
      {},
  },

  ".badge-red": {
    "@apply badge bg-red-200 text-red-800":
      {},
  },

  ".badge-red-light": {
    "@apply badge bg-red-50 text-red-700 border border-red-100":
      {},
  },

  ".badge-yellow": {
    "@apply badge bg-yellow-200 text-yellow-800":
      {},
  },

  ".badge-yellow-light": {
    "@apply badge bg-yellow-50 text-yellow-700 border border-yellow-100":
      {},
  },

  ".badge-green": {
    "@apply badge bg-green-200 text-green-800":
      {},
  },

  ".badge-green-light": {
    "@apply badge bg-green-50 text-green-700 border border-green-100":
      {},
  },

  ".badge-disabled": {
    "@apply badge bg-transparent text-neutral-200 border border-neutral-100":
      {},
  },

  ".badge-icon, .badge-info": {
    "@apply h-4 w-4":
      {},
  },

  ".badge:hover .badge-icon": {
    "@apply rounded-sm cursor-pointer":
      {},
  },

  ".badge-primary:hover .badge-icon": {
    "@apply bg-primary-300 text-primary-700":
      {},
  },

  ".badge-primary-light:hover .badge-icon": {
    "@apply bg-primary-200 text-primary-700":
      {},
  },

  ".badge-neutral:hover .badge-icon": {
    "@apply bg-neutral-300 text-neutral-800":
      {},
  },

  ".badge-neutral-light:hover .badge-icon": {
    "@apply bg-neutral-200 text-neutral-700":
      {},
  },




  
});
