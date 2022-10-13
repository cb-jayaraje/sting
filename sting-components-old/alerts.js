module.exports = Alert = (styles) => ({
    
    '.alert': {
        "@apply rounded-md  p-2": {},
    },

    '.alert .title': {
        "@apply text-sm font-medium": {},
    },
    '.alert .description': {
        "@apply mt-2 text-sm": {},
    },
    '.alert .description-only': {
        "@apply text-sm": {},
    },

    '.alert .alert-ul': {
        "@apply list-disc pl-5 space-y-1": {},
    },

    '.alert .alert-btn': {
        "@apply inline-flex px-2 py-1.5 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2": {},
    },
    

    '.alert .alert-a': {
        "@apply whitespace-nowrap font-medium": {},
    },

    '.accent-border': {
        "@apply border-l-4": {},
    },


    //warning

    '.alert-warning': {
        "@apply bg-orange-100": {},
    },
    '.alert-warning .content': {
        "@apply text-orange-800":{}
    },
    '.alert-warning svg': {
        "@apply text-orange-600": {},
    },
    '.alert-warning .title': {
        "@apply text-copy font-bold text-orange-800": {},
    },
    '.alert-warning .description': {
        "@apply text-orange-700": {},
    },

    //danger

    '.alert-danger': {
        "@apply bg-red-50 text-red-700": {},
    },
    '.alert-danger svg': {
        "@apply text-red-500": {},
    },
    '.alert-danger .title': {
        "@apply text-red-700": {},
    },
    '.alert-danger .description': {
        "@apply text-red-700": {},
    },

    //success

    '.alert-success': {
        "@apply bg-green-100 text-green-800": {},
    },
    'alert-success.alert svg': {
        "@apply text-green-600": {},
    },
    '.alert-success .title': {
        "@apply text-green-800": {},
    },
    '.alert-success .description': {
        "@apply text-green-800": {},
    },
    '.alert .alert-btn-success': {
        "@apply ring-offset-green-100": {},
    },
    
    
  });