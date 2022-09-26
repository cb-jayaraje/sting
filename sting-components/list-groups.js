module.exports = ListGroupss = (styles) => ({
   '.list-group': {
        "@apply divide-y divide-gray-200  w-full": {},
         },
'.list-group--card': {
        "@apply px-4 py-4 flex items-center sm:px-6": {},
         },
'.list-group--body': {
        "@apply min-w-0 flex-1 sm:flex sm:items-center sm:justify-between": {},
         },
'.list-group__title': {
        "@apply font-medium text-neutral-800 truncate": {},
         },
'.list-group__subtext': {
        "@apply flex items-center text-sm text-gray-500": {},
         },
'.list-group--icon': {
        "@apply ml-5 flex-shrink-0": {},
         },
 '.stacked-list ul, .stacked-list__two___column ul': {
         "@apply divide-y divide-[#D3D9DC]": {},
         },
         '.stacked-list li': {
                "@apply flex py-4": {},
                },
        '.stacked-list__two___column li': {
                "@apply py-4":{}
        },
        
         '.stacked-list li > div, .stacked-list__two___column > div': {
                "@apply ml-3": {},
                },
        '.stacked-list li .content, .stacked-list__two___column li .content': {
                "@apply antialiased text-[14.22px] leading-snug font-medium text-[#3F4E54]": {}
        },
        '.stacked-list li .content-small, .stacked-list__two___column li .content-small': {
                "@apply antialiased text-[14.22px] leading-snug font-normal text-[#617178]": {}
        },
        
        

})