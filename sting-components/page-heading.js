module.exports = PageHeading = (styles) => ({
    ".page-heading-container": {
        "@apply lg:flex lg:items-center lg:justify-between": {}
      },
      ".page-heading-subtext": {
        "@apply mt-2 flex items-center cb-text-copy-regular text-neutral-700": {}
      },
      ".page-heading-actions": {
        "@apply mt-6 flex flex-shrink-0 lg:mt-0 space-x-4": {}
      },
      ".page-heading-subtext-container": {
        "@apply mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6": {}
      },
      ".page-heading-subtext-icons": {
        "@apply mt-2 flex items-center cb-text-copy-regular": {}
      },
      ".page-heading-subtext-icons svg": {
        "@apply text-neutral-400": {}
      }
  
  });