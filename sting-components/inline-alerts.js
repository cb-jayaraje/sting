module.exports = InlineAlert = (styles) => ({
  ".inline-alert-info": {
    "@apply bg-info-50 border-info-200": {}
  },
  ".inline-alert-warning": {
    "@apply bg-orange-50 border-orange-200": {}
  },
  ".inline-alert-danger": {
    "@apply bg-red-50 border-red-200": {}
  },
  ".inline-alert-success": {
    "@apply bg-green-50 border-green-200": {}
  },
  ".inline-alert-container": {
    "@apply flex items-start gap-4 p-4 rounded-lg border max-w-[928]": {}
  },
  ".inline-alert-simple": {
    "@apply flex items-center gap-2": {}
  }
});