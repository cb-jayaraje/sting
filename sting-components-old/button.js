module.exports = Button = (styles) => ({
  " .btn": {
    "@apply  px-3 py-2 rounded border font-medium  text-copy leading-4 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30":
      {},
  },
  ".btn-small": {
    "@apply px-2.5 py-1.5": {},
  },

  ".btn-rounded": {
    "@apply rounded-full p-1": {},
  },
  ".btn-icon-only": {
    "@apply rounded-full p-1": {},
  },

  ".btn-outline": {
    "@apply bg-transparent hover:bg-primary-50 text-primary-500 border-primary-400 focus:ring-primary-500":
      {},
  },
  ".btn-primary": {
    "@apply text-white border-0 !bg-primary-500 hover:!bg-primary-600 active:!bg-primary-600 focus:ring-primary-600 border-primary-500 text-white":
      {},
  },
  ".theme-sting .btn-primary": {
    "@apply  text-white !bg-primary-500 hover:!bg-primary-700 active:!bg-primary-400 focus:ring-primary-500 border-transparent hover:text-lime-500 focus:outline-none":
      {},
  },
  ".theme-sting .btn-secondary": {
    "@apply  text-primary-500 !bg-primary-100 hover:!bg-primary-200/60 active:!bg-primary-100/60 focus:ring-primary-500 border-transparent hover:text-primary-600 focus:outline-none":
      {},
  },

  ".btn-brand": {
    "@apply text-white !bg-brand-50 hover:!bg-brand-100 active:!bg-brand-100  focus:ring-brand-100 text-brand-600":
      {},
  },

  ".theme-sting .btn-neutral": {
    "@apply bg-white hover:bg-neutral-100 text-primary-500 hover:text-primary-600 active:bg-neutral-100/50  border-neutral-200 focus:ring-primary-500":
      {},
  },

  ".btn-red": {
    "@apply text-white !bg-red-50 hover:!bg-red-100 active:!bg-red-100 focus:ring-red-500 border-red-50 text-white":
      {},
  },
  ".theme-sting .btn-danger": {
    "@apply text-white !bg-red-500 hover:!bg-red-400 active:!bg-red-300 focus:ring-red-400 border-transparent text-white":
      {},
  },

  ".btn-orange": {
    "@apply text-white !bg-orange hover:!bg-orange active:!bg-orange focus:ring-orange text-white":
      {},
  },
  ".btn-green": {
    "@apply text-white !bg-green hover:!bg-green active:!bg-green focus:ring-green text-white":
      {},
  },

  ".btn-info": {
    "@apply text-white !bg-info-300 hover:!bg-info-100 focus:ring-info-300 active:!bg-info-400":
      {},
  },
  ".btn-warning": {
    "@apply !bg-orange-50 hover:!bg-orange-100 text-orange-700 border-orange-50 focus:ring-orange-500":
      {},
  },
  ".btn-success": {
    "@apply text-green-700 !bg-green-50 hover:!bg-green-100 focus:ring-green-500 active:!bg-green-100":
      {},
  },
  ".btn-danger": {
    "@apply !bg-red-50 hover:!bg-red-100 active:!bg-red-100 focus:ring-red-400  text-red-600":
      {},
  },

  ".btn-trailing-icon": {
    "@apply ml-2 -mr-0.5 h-4 w-4": {},
  },

  ".btn-leading-icon": {
    "@apply mr-2 -ml-0.5 h-4 w-4": {},
  },

  ".btn-icon": {
    "@apply inline-flex items-center": {},
  },
  ".btn-link": {
    "@apply mx-1 antialiased !font-semibold leading-5 !text-primary-500 underline underline-offset-2 focus:rounded-sm focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-primary-500":
      {},
  },
});
