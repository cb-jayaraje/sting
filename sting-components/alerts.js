module.exports = Alert = (styles) => ({
    
    ".alert-info": {
        "@apply bg-primary-100 border-info-200": {}
      },
      ".alert-info .btn-primary": {
        "@apply !bg-info-100 !text-info-600": {}
      },
      ".alert-info .btn-borderless": {
        "@apply !text-info-600 hover:!bg-neutral-100": {}
      },
      ".alert-primary": {
        "@apply bg-primary-50 text-neutral-900 border-primary-200": {}
      },
      ".alert-primary .alert-icon": {
        "@apply text-primary-600 h-5 w-5": {}
      },
      ".alert-primary .btn-primary": {
        "@apply !bg-primary-100 !text-primary-600": {}
      },
      ".alert-primary .btn-borderless, .alert-primary .close-icon": {
        "@apply !text-primary-600 hover:!bg-primary-100": {}
      },
      ".alert-warning": {
        "@apply bg-orange-50 text-neutral-900 border-orange-200": {}
      },
      ".alert-warning .alert-icon": {
        "@apply text-orange-600 h-5 w-5": {}
      },
      ".alert-warning .btn-primary": {
        "@apply !bg-orange-100 !text-orange-600": {}
      },
      ".alert-warning .btn-borderless, .alert-warning .close-icon": {
        "@apply !text-orange-600 hover:!bg-orange-100": {}
      },
      ".alert-danger": {
        "@apply bg-red-50 border-red-200": {}
      },
      ".alert-danger .alert-icon": {
        "@apply text-red-600 h-5 w-5": {}
      },
      ".alert-danger .btn-primary": {
        "@apply !bg-red-100 !text-red-600": {}
      },
      ".alert-danger .btn-borderless, .alert-danger .close-icon": {
        "@apply !text-red-600 hover:!bg-red-100": {}
      },
      ".alert-success": {
        "@apply bg-green-50 border-green-200": {}
      },
      ".alert-success .alert-icon": {
        "@apply text-green-600 h-5 w-5": {}
      },
      ".alert-success .btn-primary": {
        "@apply !bg-green-100 !text-green-600": {}
      },
      ".alert-success .btn-borderless, .alert-success .close-icon": {
        "@apply !text-green-600 hover:!bg-green-100": {}
      },
      ".alert-container": {
        "@apply flex items-start gap-4 p-4 rounded-lg border max-w-[928]": {}
      },
      ".alert-simple": {
        "@apply flex items-center gap-2": {}
      }
    
    
  })