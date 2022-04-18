const plugin = require("tailwindcss/plugin");

const Button =  require('./sting-components/button');
const InputGroups =  require('./sting-components/input-groups');

const Alerts = require('./sting-components/alerts');
const colors = require("./sting-components/colors.js");
const SelectMenus = require("./sting-components/select-menu")
const Dropdown = require('./sting-components/dropdowns')
const ListGroups = require('./sting-components/list-groups')


module.exports = plugin.withOptions(
    function () {
      return function (options) {
        const { addComponents, addUtilities } = options;
       // const newUtilities = { "[x-cloak]": { display: "none !important" } };
  
       //addUtilities(newUtilities);
        // addComponents(Alert());
        // addComponents(Avatar());
        // addComponents(Badge())
        // addComponents(Breadcrumb());
        addComponents(Button());
        addComponents(InputGroups());
        addComponents(Alerts());
        addComponents(SelectMenus());
        // addComponents(Card());
        // addComponents(Dialog());
        // addComponents(Drawer());
         addComponents(Dropdown());
         addComponents(ListGroups());
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
          colors,
            inset: {
              "1/2": "50%",
            },
          },
        },
      };
    }
  );