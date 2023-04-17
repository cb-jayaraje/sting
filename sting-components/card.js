module.exports = Card = (styles) => ({
  ".card": {
    "@apply overflow-hidden rounded-lg bg-white ring-1 ring-neutral-200 max-w-lg":
      {},
  },
  ".card-link": {
    "@apply card hover:ring-neutral-400 hover:shadow cursor-pointer": {},
  },
});
