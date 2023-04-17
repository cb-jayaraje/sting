module.exports = Table = (styles) => ({

  '.table': {
      '@apply bg-white min-w-full table-fixed divide-y divide-neutral-100': {}
  },
  '.table-th': {
      '@apply bg-neutral-100 py-3.5 pr-4 text-left cb-text-copy-regular font-medium': {}
  },
  ".table-container": {
    "@apply rounded-lg border border-neutral-100 overflow-hidden": {}
  },
  ".table": {
    "@apply min-w-full": {}
  },
  ".table-head-data": {
    "@apply table-th bg-neutral-50 py-3.5 pl-6 min-w-[120px]": {}
  },
  ".table-head-data-action": {
    "@apply table-th bg-neutral-50 py-[12.5] px-4 w-0": {}
  },
  ".table-head-data-checkbox": {
    "@apply table-th bg-neutral-50 p-0 px-5 w-0": {}
  },
  ".table-body": {
    "@apply divide-y divide-neutral-100 border-t border-neutral-100": {}
  },
  ".table-body-row": {
    "@apply hover:bg-neutral-50": {}
  },
  ".table-row-selected": {
    "@apply bg-info-50 hover:bg-info-50": {}
  },
  ".table-body-data": {
    "@apply whitespace-nowrap px-6 py-4": {}
  },
  ".table-body-data-action": {
    "@apply whitespace-nowrap px-0": {}
  },
  ".table-body-data-checkbox": {
    "@apply whitespace-nowrap py-4 px-5": {}
  },
  ".table-head-row": {
    "@apply divide-x": {}
  },
  ".table-head": {
    "@apply bg-neutral-50": {}
  },
  ".controls-container-varaint-1": {
    "@apply bg-white flex items-center gap-4 py-3 px-5 w-full": {}
  },
  ".controls-container-varaint-2": {
    "@apply bg-white flex items-center gap-4 py-3 px-6 w-full border-b": {}
  }
})
