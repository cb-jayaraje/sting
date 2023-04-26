module.exports = Typography = (styles) => ({
  ".cb-text-header": {
    "@apply font-semibold tracking-tight text-neutral-800 max-w-4xl font-Sora antialiased":
      {},
  },
  ".cb-text-copy": {
    "@apply font-Inter font-normal text-neutral-600 leading-snug antialiased":
      {},
  },
  ".cb-text-display": {
    "@apply cb-text-header text-display leading-tight font-light": {},
  },
  ".cb-text-h1": {
    "@apply cb-text-header text-h1 leading-snug": {},
  },
  ".cb-text-h2": {
    "@apply cb-text-header text-h2 leading-snug": {},
  },
  ".cb-text-h3": {
    "@apply cb-text-header text-h3 leading-snug": {},
  },
  ".cb-text-h4": {
    "@apply cb-text-header text-h4 leading-snug": {},
  },
  ".cb-text-h5": {
    "@apply cb-text-header text-h5 leading-snug": {},
  },
  ".cb-text-h6": {
    "@apply cb-text-header text-h6 leading-snug font-Inter": {},
  },
  ".cb-text-copy-large": {
    "@apply cb-text-copy text-copy-large": {},
  },
  ".cb-text-copy-regular": {
    "@apply cb-text-copy text-copy-regular": {},
  },
  ".cb-text-copy-small": {
    "@apply cb-text-copy text-copy-small text-neutral-700": {},
  },
  ".cb-text-copy-upper": {
    "@apply cb-text-copy text-copy-upper uppercase": {},
  },
});
