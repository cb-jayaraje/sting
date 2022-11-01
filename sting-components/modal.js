module.exports = Modal = (styles) => ({
    '.modal': {
        "@apply relative transform overflow-hidden rounded-md bg-white p-4 text-left shadow-xl transition-all  sm:p-6": {},
    },

    

    '.modal-small': {
        "@apply modal sm:w-full sm:max-w-sm": {},
    },

    '.modal-regular': {
        "@apply modal sm:w-full sm:max-w-md": {},
    },

    '.modal-title': {
        "@apply cb-text-h5 text-primary-800": {},
    },

    
  
  });