module.exports = ListGroupss = (styles) => ({

        '.stacked-list ul, .stacked-list-two-column ul': {
                "@apply divide-y divide-neutral-200": {},
                },
                '.stacked-list li': {
                       "@apply flex py-4": {},
                       },
               '.stacked-list-two-column li': {
                       "@apply py-4":{}
               },
               
                '.stacked-list li > div, .stacked-list-two-column > div': {
                       "@apply ml-3": {},
                       },
               '.stacked-list li .content-title, .stacked-list-two-column li .content-title': {
                       "@apply cb-text-copy-regular font-semibold": {}
               },
               '.stacked-list li .content, .stacked-list-two-column li .content': {
                       "@apply cb-text-copy-regular": {}
               },
               '.stacked-list li .content-small, .stacked-list-two-column li .content-small': {
                       "@apply cb-text-copy-small": {}
               },
               
               
       
       })