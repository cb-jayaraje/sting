const plugin = require("tailwindcss/plugin");

const Button =  require('./sting-components/button');
const InputGroups =  require('./sting-components/input-groups');


module.exports = plugin.withOptions(
    function () {
      return function (options) {
        const { addComponents, addUtilities } = options;
       // const newUtilities = { "[x-cloak]": { display: "none !important" } };
  
       //addUtilities(newUtilities);
        // addComponents(Alert());
        // addComponents(Avatar());
        // addComponents(Badge());
        // addComponents(Breadcrumb());
        addComponents(Button());
        addComponents(InputGroups());
        // addComponents(Card());
        // addComponents(Dialog());
        // addComponents(Drawer());
        // addComponents(Dropdown());
        // addComponents(Forms());
        // addComponents(List());
        // addComponents(Pagination());
        // addComponents(Skeleton());
        // addComponents(Spinner());
        // addComponents(Tabs());
        // addComponents(Tooltip());
        // Typography().handler(options);
      };
    },
    function () {
      return {
        theme: {
          extend: {
            //colors,
            inset: {
              "1/2": "50%",
            },
          },
        },
      };
    }
  );