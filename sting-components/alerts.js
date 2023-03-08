module.exports = Alert = (styles) => ({
    
    ".alert-info": {
        "@apply bg-info-50 border-info-200": {}
      },
      ".alert-info .btn-primary": {
        "@apply !bg-info-100 !text-info-600": {}
      },
      ".alert-info .btn-borderless": {
        "@apply !text-info-600 hover:!bg-neutral-100": {}
      },
      ".alert-warning": {
        "@apply bg-orange-50 border-orange-200": {}
      },
      ".alert-warning .btn-primary": {
        "@apply !bg-orange-100 !text-orange-600": {}
      },
      ".alert-warning .btn-borderless": {
        "@apply !text-orange-600 hover:!bg-orange-100": {}
      },
      ".alert-danger": {
        "@apply bg-red-50 border-red-200": {}
      },
      ".alert-danger .btn-primary": {
        "@apply !bg-red-100 !text-red-600": {}
      },
      ".alert-danger .btn-borderless": {
        "@apply !text-red-600 hover:!bg-red-100": {}
      },
      ".alert-success": {
        "@apply bg-green-50 border-green-200": {}
      },
      ".alert-success .btn-primary": {
        "@apply !bg-green-100 !text-green-600": {}
      },
      ".alert-success .btn-borderless": {
        "@apply !text-green-600 hover:!bg-green-100": {}
      },
      ".alert-container": {
        "@apply flex items-start gap-4 p-4 rounded-lg border max-w-[928]": {}
      },
      ".alert-simple": {
        "@apply flex items-center gap-2": {}
      }
    
    
  })