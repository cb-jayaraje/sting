module.exports = SettingList = (styles) => ({

    ".list-container": {
        "@apply cursor-pointer card min-w-[640px] p-6 flex gap-1 justify-between": {}
      },
      ".list-container .dropdown-container": {
        "@apply z-20": {}
      },
      ".list-container-description": {
        "@apply overflow-visible card min-w-[640px] p-6 flex flex-col gap-1 justify-between": {}
      },
      ".list-info": {
        "@apply flex justify-between w-full": {}
      },
      ".list-status-container": {
        "@apply flex items-center": {}
      },
      ".list-tooltip": {
        "@apply relative opacity-0 group-hover:opacity-100 right-3": {}
      },
      ".list-tooltip-content": {
        "@apply absolute top-16 z-10 w-44 p-2 -mt-1 cb-text-copy-regular leading-tight !bg-gray-900 text-white rounded-md transform -translate-x-1/2 -translate-y-[42px] shadow-lg": {}
      },
      ".list-tooltip-icon": {
        "@apply absolute z-10 w-6 h-6 text-gray-900 transform -translate-x-[18px] -translate-y-[-12px] fill-current stroke-current": {}
      },
      ".list-description": {
        "@apply cb-text-copy-regular text-neutral-600 max-w-md": {}
      }
});