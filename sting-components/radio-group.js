module.exports = RadioGroup = (styles) => ({
    '.radio': {
        '@apply focus:ring-primary-500 h-4 w-4 text-primary-500 border-neutral-400': {}
    },
    '.radio-label': {
        '@apply ml-3 block text-sm font-medium text-neutral-700 hover:text-neutral-800 cursor-pointer': {}
    },
    '.radio-inline__label': {
        '@apply font-medium text-neutral-700 hover:text-neutral-800 cursor-pointer': {}
    },
    '.radio-colorpicker': {
        '@apply -m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none': {}
    },
    '.radio-colorpicker__fill': {
        '@apply h-8 w-8 border border-black border-opacity-10 rounded-full': {}
    },
    '.radio-card': {
        '@apply relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none': {}
    },
    '.radio-card__header': {
        '@apply block text-sm font-medium text-neutral-800': {}
    },
    '.radio-card__subheader': {
        '@apply mt-1 flex items-center text-sm text-neutral-700': {}
    },
    '.radio-card__footer': {
        '@apply mt-6 text-sm font-medium text-neutral-700': {}
    },
    '.radio-card__icon': {
        '@apply  h-5 w-5': {}
    },
    '.radio-card__checked .radio-card__icon': {
        '@apply  text-primary-600 !visible': {}
    },
    '.radio-card__checked': {
        '@apply border-transparent border-primary-500 ring-2 ring-primary-500': {}
    },
    '.radio-card__sm': {
        '@apply border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none': {}
    },
    '.radio-card__sm--checked': {
        '@apply bg-primary-600 border-transparent text-white hover:bg-primary-700 ring-2 ring-offset-2 ring-primary-500 cursor-pointer': {}
    },
    '.radio-card__sm--inactive': {
        '@apply border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 opacity-25 cursor-not-allowed': {}
    },
    '.radio-card__stacked': {
        '@apply relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none': {}
    },
    '.radio-card__stacked--checked': {
        '@apply border-transparent border-primary-500 ring-2 ring-primary-500': {}
    },

    '.radio-card__stacked___labelwrapper': {
        '@apply mt-2 flex text-sm sm:mt-0 sm:flex-col sm:ml-4 sm:text-right': {}
    },

    '.radio-table': {
        '@apply relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none': {}
    },
    '.radio-table--checked': {
        '@apply bg-primary-50 border-primary-200': {}
    },
    '.radio-table__input': {
        '@apply h-4 w-4 text-primary-600 border-neutral-300 focus:ring-primary-500': {}
    },
    '.radio-table__label--checked': {
        '@apply text-primary-800': {}
    },
    '.radio-table__label': {
        '@apply ml-2 opacity-100 cursor-pointer': {}
    },
    '.radio-table__description': {
        '@apply ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right': {}
    },
    '.radio-table__panel': {
        '@apply relative border p-4 flex cursor-pointer focus:outline-none': {}
    },






});