const plugin = require("tailwindcss/plugin");

const Button =  require('./sting-components/button');
const InputGroups =  require('./sting-components/input-groups');

const Alerts = require('./sting-components/alerts');
//const colors = require("./sting-components/colors.js");
const colors = require("./sting-components/default-colors.js");
const fontSize = require("./sting-components/font-style.js");
const SelectMenus = require("./sting-components/select-menu")
const Dropdown = require('./sting-components/dropdowns')
const ListGroups = require('./sting-components/list-groups')
const Token = require('./sting-components/token');
const Badge = require('./sting-components/badge');
const Modal = require('./sting-components/modal');
const Checkout = require('./sting-components/checkout');
const Toggle = require('./sting-components/toggle');
const RadioGroup = require('./sting-components/radio-group');
const Tabs = require('./sting-components/tabs');
const Checkbox = require('./sting-components/checkbox');
const Typography = require('./sting-components/typography');


module.exports = plugin.withOptions(
    function () {
      return function (options) {
        const { addComponents, addUtilities } = options;
       // const newUtilities = { "[x-cloak]": { display: "none !important" } };
  
       //addUtilities(newUtilities);
        // addComponents(Alert());
        // addComponents(Avatar());
         addComponents(Badge())
         addComponents(Modal())
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
         addComponents(Token());
         addComponents(Checkout());
         addComponents(Toggle());
         addComponents(RadioGroup());
        // addComponents(Forms());
        // addComponents(List());
        // addComponents(Pagination());
        // addComponents(Skeleton());
        // addComponents(Spinner());
        addComponents(Tabs());
        addComponents(Checkbox());
        addComponents(Typography());
        // addComponents(Tooltip());
        // Typography().handler(options);
      };
    },
    function () {
      return {
        theme: {
          extend: {
          //fontSize,
          colors,
            inset: {
              "1/2": "50%",
            },
          },
        },
      };
    }
  );