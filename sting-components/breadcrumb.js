module.exports = Breadcrumb = (styles) => ({
  ".breadcrumb": {
    "@apply flex": {},
  },
  ".breadcrumb ol": {
    "@apply flex items-center space-x-3": {},
  },
  ".breadcrumb ol li": {
    "@apply  flex items-center cursor-pointer": {},
  },
  ".breadcrumb-text": {
    "@apply cb-text-copy-small hover:text-neutral-800": {},
  },
  ".breadcrumb-icon": {
    "@apply flex-shrink-0 h-5 w-5 text-neutral-400": {},
  },
});
