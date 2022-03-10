module.exports = Alert = (styles) => ({
    
    '.alert': {
        "@apply rounded-md  p-4": {},
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
        "@apply bg-warning-50": {},
    },
    '.alert-warning .content': {
        "@apply text-warning-200":{}
    },
    '.alert-warning svg': {
        "@apply text-warning-400": {},
    },
    '.alert-warning .title': {
        "@apply text-warning-600": {},
    },
    '.alert-warning .description': {
        "@apply text-warning-600": {},
    },

    //danger

    '.alert-danger': {
        "@apply bg-danger-50 text-danger-600": {},
    },
    '.alert svg': {
        "@apply fill-current": {},
    },
    '.alert-danger .title': {
        "@apply text-danger-400": {},
    },
    '.alert-danger .description': {
        "@apply text-danger-600": {},
    },
    
  });