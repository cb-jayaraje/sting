module.exports = Banner = (styles) => ({
    
    ".banner-container": {
        "@apply flex card shadow-md shadow-neutral-100 gap-16 px-8 py-6 max-w-[1136px]": {}
      },
      ".info-container": {
        "@apply flex gap-16 py-2": {}
      },
      ".banner-info": {
        "@apply flex flex-col justify-between gap-10": {}
      },
      ".banner-details": {
        "@apply flex flex-col gap-4": {}
      },
      ".banner-controls": {
        "@apply flex": {}
      },
      ".banner-actions": {
        "@apply flex gap-4": {}
      }
      
  });
