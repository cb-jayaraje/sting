module.exports = StackedList = (styles) => ({

  ".stack-list-container": {
    "@apply cursor-pointer rounded-md border-neutral-200 p-6 flex gap-1 justify-between": {}
  },
  ".stack-list-layout": {
    "@apply border border-neutral-200 rounded-md shadow-sm flex flex-col divide-y": {}
  },
  ".stack-list-container.stacked": {
    "@apply !rounded-none": {}
  },
  ".stack-list-container-description": {
    "@apply overflow-visible card min-w-[640px] p-6 flex flex-col gap-1 justify-between": {}
  },
  ".stack-list-icon": {
    "@apply w-4 h-4 text-primary-600": {}
  }
  
});