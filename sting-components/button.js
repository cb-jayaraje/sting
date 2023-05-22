module.exports = Button = (styles) => ({
  " .btn": {
    "@apply antialiased rounded border border-transparent bg-white px-4 py-2 font-medium cb-text-copy-regular focus:outline-none disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer":
      {},
  },
  ".btn-small": {
    "@apply antialiased px-2.5 py-1.5 cb-text-copy-small border border-transparent font-medium rounded focus:outline-none disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer":
      {},
  },
  ".btn-rounded, .btn-icon-only": {
    "@apply btn rounded p-2": {},
  },

  ".btn-rounded svg, .btn-icon-only svg": {
    "@apply w-5 h-5": {},
  },
  ".btn-rounded-small, .btn-sm-icon-only": {
    "@apply btn rounded p-1.5": {},
  },
  ".btn-rounded-small svg, .btn-sm-icon-only svg": {
    "@apply h-4 w-4": {},
  },

  ".btn-icon": {
    "@apply h-4 w-4": {},
  },

  ".btn-small .btn-icon": {
    "@apply h-3.5 w-3.5": {},
  },

  ".btn-icon-leading": {
    "@apply inline-flex gap-2 items-center": {},
  },
  ".btn-small .btn-icon-leading": {
    "@apply inline-flex gap-1 items-center": {},
  },
  
  ".btn-icon-trailing": {
    "@apply inline-flex  gap-2 items-center flex-row-reverse": {},
  },
  ".btn-small .btn-icon-trailing": {
    "@apply inline-flex gap-1 items-center flex-row-reverse": {},
  },

  ".btn-link": {
    "@apply px-0.5 antialiased font-medium text-primary-600 underline underline-offset-2 hover:text-primary-700":
      {},
  },

  // Sting theme
  ".btn-primary, .theme-sting .btn-primary": {
    "@apply  text-primary-50 bg-primary-800 hover:bg-primary-700 active:bg-primary-600 active:text-white focus:ring-info-800":
      {},
  },
  ".theme-sting .btn-secondary, .btn-secondary": {
    "@apply text-primary-700 hover:text-primary-700 bg-primary-200 hover:bg-primary-300 active:bg-primary-400 active:text-primary-800 focus:outline-none":
      {},
  },
  ".theme-sting .btn-outline, .btn-outline": {
    "@apply text-primary-600 bg-transparent hover:bg-primary-50 hover:text-primary-700 active:bg-primary-100  active:text-primary-700 focus:outline-none border border-primary-600":
      {},
  },
  ".theme-sting .btn-borderless, .btn-borderless": {
    "@apply bg-transparent text-primary-600 hover:bg-primary-50": {},
  },
  // '.theme-sting .btn-info': {
  //     '@apply text-white bg-info-800 hover:bg-info-900 active:bg-info-800 hover:text-white focus:outline-none border border-transparent border-b-info-900': {},
  // },
  ".theme-sting .btn-neutral, .btn-neutral": {
    "@apply bg-transparent hover:bg-neutral-50 text-neutral-600 hover:text-neutral-700 active:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 focus:ring-neutral-200":
      {},
  },
  ".theme-sting .btn-neutral-borderless, .btn-neutral-borderless": {
    "@apply bg-transparent text-neutral-600 hover:bg-neutral-50 text-neutral-600 hover:text-neutral-700 active:bg-neutral-100": {},
  },
  ".theme-sting .btn-danger, .btn-danger": {
    "@apply text-white bg-red-500 border hover:bg-red-600 active:bg-red-700 focus:ring-red-400":
      {},
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
