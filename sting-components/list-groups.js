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
        "@apply font-medium text-indigo-600 truncate": {},
         },
'.list-group__subtext': {
        "@apply flex items-center text-sm text-gray-500": {},
         },
'.list-group--icon': {
        "ml-5 flex-shrink-0": {},
         },
})