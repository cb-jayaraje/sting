const plugin = require("tailwindcss/plugin");

const Button =  require('./sting-components/button');
const Table =  require('./sting-components/table');
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
const Card = require('./sting-components/card');


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
        addComponents(Table());
         addComponents(Card());
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
          fontFamily: {
            Inter: ['Inter', 'sans-serif'],
            Sora: ['Sora', 'sans-serif']
           },
           fontSize: {
            display: '2.566rem', //41.05px
            h1: '1.802rem', //28.83px
            h2: '1.602rem', //25.63px
            h3: '1.424rem', //20.25px
            h4: '1.266rem', //18px
            h5: '1.125rem', //16px
            h6: '0.889rem', //14.22px
            upper: '0.79rem', //12.64px
            subtitle: '1rem',
            copy: '0.889rem',
            small: '0.79rem',
              'copy-large': '1rem',
              'copy-regular': '0.889rem',
              'copy-small': '0.79rem',
              'copy-upper': '0.702rem'
           
          },
          colors,
            inset: {
              "1/2": "50%",
            },
          },
        },
      };
    }
  );