module.exports = Checkbox = (styles) => ({ 

    '.checkbox': {
        '@apply focus:ring-info-800 h-4 w-4 text-info-800 border-neutral-400 rounded' : {}
    },
    '.checkbox-group p': {
        '@apply cb-text-copy-regular': {}
    },
    '.checkbox-list': {
        '@apply space-y-4': {}
    },
    '.checkbox-list-inline': {
        '@apply sm:flex sm:items-center sm:space-y-0 sm:space-x-10': {}
    },
    '.checkbox-list.boxed': {
        '@apply space-y-0 divide-y divide-neutral-200': {}
    },
    '.checkbox-list div, .checkbox-list-inline div': {
        '@apply flex items-start gap-3': {}
    },
    '.checkbox-list.boxed div': {
        '@apply flex items-start py-4': {}
    },
    '.checkbox-list.right label': {
        '@apply min-w-0 flex-1 -mt-0.5': {}
    },
    '.checkbox-label': {
        '@apply block cb-text-copy-regular font-medium hover:text-neutral-800 cursor-pointer leading-tight': {}
    },
    '.checkbox-label.with-info span:first-of-type, .checkbox-label.with-info-inline span:first-of-type': {
        '@apply font-semibold': {}
    },
    '.checkbox-label.with-info span:nth-of-type(2)': {
        '@apply block mt-0.5 font-normal': {}
    },
    '.checkbox-label.with-info-inline span:nth-of-type(2)': {
        '@apply pl-2 font-normal': {}
    },
    '.checkbox-card': {
        '@apply relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none': {}
    },

});