module.exports = InputGroups = (styles) => ({
  ".form-control": {
    "@apply space-y-1": {},
  },
  ".form-control .input": {
    "@apply block w-full cb-text-copy-regular rounded border-neutral-300 shadow-sm focus:border-primary-600 focus:ring-primary-600 placeholder-neutral-400":
      {},
  },
  ".form-control .label": {
    "@apply cb-text-copy-regular font-medium text-neutral-700": {},
  },
  ".form-control .help-text": {
    "@apply py-1 cb-text-copy-small text-neutral-500": {},
  },
  ".form-control .input-error": {
    "@apply block w-full pr-10 border-red-600 focus:outline-none focus:ring-red-600 focus:border-red-500 sm:text-sm rounded-md cb-text-copy-regular":
      {},
  },
  ".form-control .error-text": {
    "@apply py-1 cb-text-copy-small text-red-600": {},
  },
  ".form-control .hint-text": {
    "@apply cb-text-copy-regular text-neutral-600": {},
  },
  ".form-control .input-select": {
    "@apply focus:ring-info-800 focus:border-info-800 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-neutral-500 sm:cb-text-copy-regular rounded-md":
      {},
  },
  ".form-control .dropdown-div": {
    "@apply origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20":
      {},
  },
  ".form-control .dropdown-div-a": {
    "@apply block px-4 py-2 cb-text-copy-regular hover:bg-neutral-100": {},
  },
  ".form-control .input-icon-trailing": {
    "@apply absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none":
      {},
  },
  ".form-control .input-icon-leading": {
    "@apply pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3":
      {},
  },
  ".form-control .input-icon": {
    "@apply h-5 w-5 text-neutral-300": {},
  },
  ".form-control .input-icon-error": {
    "@apply h-5 w-5 text-red-500": {},
  },
  ".form-control .input-addon": {
    "@apply !rounded-l-none": {},
  },
  ".form-control .input-addon-label": {
    "@apply inline-flex items-center px-3 rounded-l-md border border-r-0 border-neutral-300 bg-neutral-50 text-neutral-700 sm:cb-text-copy-regular":
      {},
  },

//Updated Input

  ".input": {
    "@apply block w-full px-3 py-2 cb-text-copy-regular rounded border border-neutral-300 hover:border-neutral-400 focus:outline-0 focus:ring-2 focus:ring-primary-500 placeholder-neutral-300": {}
  },
  ".input:disabled, .input-disabled": {
    "@apply bg-neutral-50 border-neutral-100": {}
  },
  ".input-disabled select, .input-disabled .custom-icon, .input-disabled input": {
    "@apply !bg-neutral-50 cursor-not-allowed": {}
  },
  ".input-label": {
    "@apply cb-text-h6 text-neutral-600": {}
  },
  ".input-help-text": {
    "@apply cb-text-copy-small text-neutral-500": {}
  },
  ".input-group": {
    "@apply flex flex-col gap-1": {}
  },
  ".input-errors .input-digit-only": {
    "@apply hover:border-red-500 ring-2 !ring-red-500": {}
  },
  ".input-errors .input-help-text": {
    "@apply cb-text-copy-small text-red-500": {}
  },
  ".input-success .input-digit-only": {
    "@apply hover:border-green-500 ring-2 !ring-green-500": {}
  },
  ".input-error": {
    "@apply hover:border-red-500 ring-2 !ring-red-500": {}
  },
  ".input-error-text": {
    "@apply cb-text-copy-small text-red-500": {}
  },
  ".input-join-item": {
    "@apply cb-text-copy-regular text-neutral-300 flex select-none items-center h-4": {}
  },
  ".input-join": {
    "@apply flex px-3 items-center gap-3 w-full overflow-hidden py-2 rounded border border-neutral-300 hover:border-neutral-400 focus:outline-2 focus:outline-primary-500 focus-within:ring-2  focus-within:ring-primary-500": {}
  },
  ".input-join .custom-select": {
    "@apply w-min relative z-0 appearance-none bg-none p-0": {}
  },
  ".input-join .custom-input": {
    "@apply border-0 px-0 py-0 focus:outline-none focus:ring-0 z-10 h-4 rounded-none bg-transparent": {}
  },
  ".input-join .custom-select select": {
    "@apply w-min pl-0 pr-4 py-0 border-none focus:outline-none focus:ring-0 cb-text-copy-regular !bg-none": {}
  },
  ".input-join .custom-select .custom-icon": {
    "@apply flex items-center cb-text-copy-regular absolute top-0 right-0 h-full w-4 bg-white pointer-events-none": {}
  },
  ".text-area": {
    "@apply input focus:border-primary-500": {}
  },
  ".custom-digit-only": {
    "@apply h-12 w-12": {}
  },
  ".custom-digit-only .input-digit-only": {
    "@apply w-full h-full cb-text-h1 text-center": {}
  },
  ".custom-select select::-ms-expand": {
    "@apply hidden": {}
  }

});
