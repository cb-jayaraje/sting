module.exports = VerticalNavigation = (styles) => ({

    ".vertical-nav-item": {
        "@apply p-4 rounded-md cursor-pointer select-none": {}
    },
    ".vertical-nav-item.default": {
        "@apply text-neutral-500 hover:bg-neutral-50 hover:text-neutral-600": {}
    },
    ".vertical-nav-item.selected": {
        "@apply bg-primary-50 text-primary-700 hover:bg-primary-100": {}
    },
    ".vertical-nav-item.disabled": {
        "@apply text-neutral-200 cursor-not-allowed": {}
    },
    ".vertical-subheader": {
        "@apply text-neutral-500 px-4 pb-3": {}
    },
    ".vertical-nav-layout": {
        "@apply flex flex-col gap-8": {}
    }

});