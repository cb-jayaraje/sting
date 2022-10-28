module.exports = Alert = (styles) => ({
    
    '.alert': {
        "@apply rounded-md p-4 border cb-text-copy-regular": {},
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
        "@apply list-disc pl-5 space-y-1": {},
    },
    '.alert svg': {
        "@apply flex-shrink-0 w-5 h-5": {},
    },
    '.alert .actions': {
        "@apply flex gap-4 pt-2": {},
    },
    '.alert button.link, .alert a': {
        "@apply underline font-medium": {},
    },


    //info

    '.alert-info': {
        "@apply bg-info-50 border-info-200": {},
    },
    '.alert-info svg': {
        "@apply text-info-600": {},
    },
    '.alert-info .link, .alert-info a': {
        "@apply text-info-900": {},
    },


    //warning

    '.alert-warning': {
        "@apply bg-orange-50 border-orange-200": {},
    },
    '.alert-warning svg': {
        "@apply text-orange-600": {},
    },
    '.alert-warning .link': {
        "@apply text-orange-900": {},
    },

    //danger

    '.alert-danger': {
        "@apply bg-red-100 border-red-200": {},
    },
    '.alert-danger svg': {
        "@apply text-red-600": {},
    },
    '.alert-danger .link': {
        "@apply text-red-900": {},
    },

    //success

    '.alert-success': {
        "@apply bg-green-50 border-green-200": {},
    },
    '.alert-success svg': {
        "@apply text-green-600": {},
    },
    '.alert-success .link': {
        "@apply text-green-900": {},
    },
    
    
  });