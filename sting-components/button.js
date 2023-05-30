module.exports = Button = (styles) => ({
  " .btn": {
    "@apply antialiased rounded bg-white px-2.5 py-2.5 font-medium cb-text-copy-small leading-3 focus:outline-none cursor-pointer h-8 inline-flex items-center justify-center disabled:btn-disabled":
      {},
  },
  ".btn-small": {
    "@apply antialiased px-2.5 py-1.5 cb-text-copy-small border border-transparent font-medium rounded focus:outline-none disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer":
      {},
  },
  ".btn-lg": {
    "@apply antialiased rounded bg-white px-4 py-3 font-medium cb-text-copy-regular leading-4 focus:outline-none disabled:btn-disabled cursor-pointer h-10 inline-flex items-center justify-center":{}
  },


  ".btn-rounded, .btn-icon-only": {
    "@apply btn rounded w-auto border-0": {},
  },

  ".btn-rounded svg, .btn-icon-only svg": {
    "@apply w-3 h-3": {},
  },

  ".btn-rounded-small, .btn-sm-icon-only": {
    "@apply btn rounded p-1.5": {},
  },
  ".btn-rounded-small svg, .btn-sm-icon-only svg": {
    "@apply h-4 w-4": {},
  },


  ".btn-rounded-lg, .btn-lg-icon-only": {
    "@apply btn-lg rounded w-auto border-0": {},
  },
  ".btn-rounded-lg svg, .btn-lg-icon-only svg": {
    "@apply h-4 w-4": {},
  },

  ".btn-icon": {
    "@apply h-3 w-3": {},
  },

  ".btn-small .btn-icon": {
    "@apply h-3.5 w-3.5": {},
  },

  ".btn-lg .btn-icon": {
    "@apply h-4 w-4": {},
  },



  ".btn-icon-leading": {
    "@apply inline-flex gap-2 items-center": {},
  },
  ".btn-small .btn-icon-leading": {
    "@apply inline-flex gap-1 items-center": {},
  },

  ".btn-lg .btn-icon-leading": {
    "@apply inline-flex gap-3 items-center": {},
  },
  
  ".btn-icon-trailing": {
    "@apply inline-flex  gap-2 items-center flex-row-reverse": {},
  },
  ".btn-small .btn-icon-trailing": {
    "@apply inline-flex gap-1 items-center flex-row-reverse": {},
  },

  ".btn-lg .btn-icon-trailing": {
    "@apply inline-flex gap-3 items-center flex-row-reverse": {},
  },

  ".btn-link": {
    "@apply px-0.5 antialiased font-medium text-primary-600 underline underline-offset-2 hover:text-primary-700":
      {},
  },

  ".btn-disabled": {
    "@apply disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-300":
      {},
  },

  ".disabled-outline": {
    "@apply disabled:bg-transparent disabled:border disabled:border-neutral-100 disabled:text-neutral-300":
      {},
  },

  ".disabled-borderless": {
    "@apply disabled:bg-transparent disabled:text-neutral-300":
      {},
  },



  // Sting theme
  ".btn-primary, .theme-sting .btn-primary": {
    "@apply  text-primary-50 bg-primary-800 hover:bg-primary-700 active:bg-primary-600 active:text-white focus:ring-info-500":
      {},
  },
  ".theme-sting .btn-secondary, .btn-secondary": {
    "@apply text-primary-700 hover:text-primary-800 bg-primary-300 hover:bg-primary-400 active:bg-primary-500 active:text-primary-800 focus:outline-none":
      {},
  },
  ".theme-sting .btn-outline, .btn-outline": {
    "@apply text-primary-600 bg-transparent hover:bg-primary-50 hover:text-primary-700 active:bg-primary-100  active:text-primary-700 focus:outline-none border border-primary-300 disabled:disabled-outline":
      {},
  },
  ".theme-sting .btn-borderless, .btn-borderless": {
    "@apply bg-transparent text-primary-600 hover:bg-primary-50 hover:text-primary-700 active:bg-primary-100  active:text-primary-700 disabled:disabled-borderless": {},
  },
  // '.theme-sting .btn-info': {
  //     '@apply text-white bg-info-800 hover:bg-info-900 active:bg-info-800 hover:text-white focus:outline-none border border-transparent border-b-info-900': {},
  // },
  ".theme-sting .btn-neutral, .btn-neutral": {
    "@apply bg-neutral-200 hover:bg-neutral-300 text-neutral-700 hover:text-neutral-700 active:bg-neutral-400 active:text-neutral-800":
      {},
  },

  ".theme-sting .btn-neutral-outline, .btn-neutral-outline": {
    "@apply bg-transparent  text-neutral-600 hover:bg-neutral-50 hover:text-neutral-700 active:bg-neutral-100 active:bg-neutral-200 border border-neutral-200 hover:border-neutral-300 focus:ring-neutral-200":
      {},
  },


  ".theme-sting .btn-neutral-borderless, .btn-neutral-borderless": {
    "@apply bg-transparent text-neutral-600 hover:bg-neutral-50 hover:text-neutral-700 active:bg-neutral-100": {},
  },
  ".theme-sting .btn-danger, .btn-danger": {
    "@apply text-white bg-red-500 hover:bg-red-600 hover:text-red-50 active:bg-red-700 active:text-red-50":
      {},
  },

  ".theme-sting .btn-danger-outline, .btn-danger-outline": {
    "@apply bg-transparent  text-red-500 hover:bg-red-50 hover:text-red-600 active:bg-red-100 active:text-red-600 border border-red-200":
      {},
  },

  ".theme-sting .btn-danger-borderless, .btn-danger-borderless": {
    "@apply bg-transparent text-red-500 hover:bg-red-50 hover:text-red-600 active:bg-red-100 active:text-red-600": {},
  },

  // Leap theme
  ".theme-leap .btn-primary": {
    "@apply text-white border-0 !bg-primary-400 active:!bg-primary-600 border-primary-500 text-white":
      {},
  },
  ".btn-primary-small": {
    "@apply text-white border-0 !bg-primary-500 hover:!bg-primary-600 active:!bg-primary-600 border-primary-500 text-white":
      {},
  },
  ".theme-leap .btn-secondary": {
    "@apply text-neutral-900 bg-gradient-to-b from-white to-neutral-100 active:!bg-primary-50 border border-neutral-400 hover:text-primary-800 focus:outline-none":
      {},
  },
});
