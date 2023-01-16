module.exports = Alert = (styles) => ({
    
    '.alert': {
        "@apply rounded-md p-3 border cb-text-copy-regular text-neutral-800": {},
    }, 
    '.alert div:first-child': {
        "@apply flex items-start gap-3": {},
    },
    '.alert div:nth-child(2)': {
        "@apply space-y-1.5 pb-0.5": {},
    },
    '.alert h3': {
        "@apply cb-text-h6": {},
    },
    '.alert p': {
        "@apply max-w-xl": {},
    },
    '.alert ul': {
        "@apply list-disc pl-5 space-y-0": {},
    },
    '.alert svg': {
        "@apply flex-shrink-0 w-5 h-5": {},
    },
    '.alert button svg': {
        "@apply w-4 h-4": {},
    },
    '.alert .actions': {
        "@apply flex gap-4 pt-2": {},
    },
    '.alert button.link, .alert a': {
        "@apply underline font-medium": {},
    },


    //info

    '.alert-info': {
        "@apply bg-info-50 border-info-100": {},
    },
    '.alert-info svg': {
        "@apply text-info-500": {},
    },
    '.alert-info .link, .alert-info a': {
        "@apply text-info-700": {},
    },


    //warning

    '.alert-warning': {
        "@apply bg-orange-50 border-orange-100": {},
    },
    '.alert-warning svg': {
        "@apply text-orange-500": {},
    },
    '.alert-warning .link': {
        "@apply text-orange-600": {},
    },

    //danger

    '.alert-danger': {
        "@apply bg-red-50 border-red-100": {},
    },
    '.alert-danger svg': {
        "@apply text-red-500": {},
    },
    '.alert-danger .link': {
        "@apply text-red-600": {},
    },

    //success

    '.alert-success': {
        "@apply bg-green-50 border-green-100": {},
    },
    '.alert-success svg': {
        "@apply text-green-500": {},
    },
    '.alert-success .link': {
        "@apply text-green-600": {},
    },
    
    
  });