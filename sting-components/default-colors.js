// const defaultTheme = require("tailwindcss/defaultTheme");

// module.exports = {
//     brand: {
//       50: 'rgb(var(--color-brand-50) / <alpha-value>)',
//       100: 'rgb(var(--color-brand-100) / <alpha-value>)',
//       200: "rgb(var(--color-brand-200) / <alpha-value>)",
//       300: "rgb(var(--color-brand-300) / <alpha-value>)",
//       400: "rgb(var(--color-brand-400) / <alpha-value>)",
//       500: "rgb(var(--color-brand-500) / <alpha-value>)",
//       600: "rgb(var(--color-brand-600) / <alpha-value>)",
//       700: "rgb(var(--color-brand-700) / <alpha-value>)",
//       800: "rgb(var(--color-brand-800) / <alpha-value>)",
//       900: "rgb(var(--color-brand-900) / <alpha-value>)",
//     },

//     primary: {
//       50: 'var(--color-primary-50)',
//       100: 'rgb(var(--color-primary-100) / <alpha-value>)',
//       200: 'rgb(var(--color-primary-200) / <alpha-value>)',
//       300: 'rgb(var(--color-primary-300) / <alpha-value>)',
//       400: 'rgb(var(--color-primary-400) / <alpha-value>)',
//       500: 'rgb(var(--color-primary-500) / <alpha-value>)',
//       600: 'rgb(var(--color-primary-600) / <alpha-value>)',
//       700: 'rgb(var(--color-primary-700) / <alpha-value>)',
//       800: 'rgb(var(--color-primary-800) / <alpha-value>)',
//       900: 'rgb(var(--color-primary-900) / <alpha-value>)',

//     },
//     neutral: {
//       50: 'rgb(var(--color-neutral-50) / <alpha-value>)',
//       100: 'rgb(var(--color-neutral-100) / <alpha-value>)',
//       200: 'rgb(var(--color-neutral-200) / <alpha-value>)',
//       300: 'rgb(var(--color-neutral-300) / <alpha-value>)',
//       400: 'rgb(var(--color-neutral-400) / <alpha-value>)',
//       500: 'rgb(var(--color-neutral-500) / <alpha-value>)',
//       600: 'rgb(var(--color-neutral-600) / <alpha-value>)',
//       700: 'rgb(var(--color-neutral-700) / <alpha-value>)',
//       800: 'rgb(var(--color-neutral-800) / <alpha-value>)',
//       900: 'rgb(var(--color-neutral-900) / <alpha-value>)',

//     },

//     info: {
//       50: 'rgb(var(--color-info-50) / <alpha-value>)',
//       100: 'rgb(var(--color-info-100) / <alpha-value>)',
//       200: 'rgb(var(--color-info-200) / <alpha-value>)',
//       300: 'rgb(var(--color-info-300) / <alpha-value>)',
//       400: 'rgb(var(--color-info-400) / <alpha-value>)',
//       500: 'rgb(var(--color-info-500) / <alpha-value>)',
//       600: 'rgb(var(--color-info-600) / <alpha-value>)',
//       700: 'rgb(var(--color-info-700) / <alpha-value>)',
//       800: 'rgb(var(--color-info-800) / <alpha-value>)',
//       900: 'rgb(var(--color-info-900) / <alpha-value>)',
//     },

//     red: {
//       50: 'rgb(var(--color-red-50) / <alpha-value>)',
//       100: 'rgb(var(--color-red-100) / <alpha-value>)',
//       200: 'rgb(var(--color-red-200) / <alpha-value>)',
//       300: 'rgb(var(--color-red-300) / <alpha-value>)',
//       400: 'rgb(var(--color-red-400) / <alpha-value>)',
//       500: 'rgb(var(--color-red-500) / <alpha-value>)',
//       600: 'rgb(var(--color-red-600) / <alpha-value>)',
//       700: 'rgb(var(--color-red-700) / <alpha-value>)',
//       800: 'rgb(var(--color-red-800) / <alpha-value>)',
//       900: 'rgb(var(--color-red-900) / <alpha-value>)',
//     },

//     orange: {
//       50: 'rgb(var(--color-orange-50) / <alpha-value>)',
//       100: 'rgb(var(--color-orange-100) / <alpha-value>)',
//       200: 'rgb(var(--color-orange-200) / <alpha-value>)',
//       300: 'rgb(var(--color-orange-300) / <alpha-value>)',
//       400: 'rgb(var(--color-orange-400) / <alpha-value>)',
//       500: 'rgb(var(--color-orange-500) / <alpha-value>)',
//       600: 'rgb(var(--color-orange-600) / <alpha-value>)',
//       700: 'rgb(var(--color-orange-700) / <alpha-value>)',
//       800: 'rgb(var(--color-orange-800) / <alpha-value>)',
//       900: 'rgb(var(--color-orange-900) / <alpha-value>)',
//     },

//     green: {
//       50: 'rgb(var(--color-green-50) / <alpha-value>)',
//       100: 'rgb(var(--color-green-100) / <alpha-value>)',
//       200: 'rgb(var(--color-green-200) / <alpha-value>)',
//       300: 'rgb(var(--color-green-300) / <alpha-value>)',
//       400: 'rgb(var(--color-green-400) / <alpha-value>)',
//       500: 'rgb(var(--color-green-500) / <alpha-value>)',
//       600: 'rgb(var(--color-green-600) / <alpha-value>)',
//       700: 'rgb(var(--color-green-700) / <alpha-value>)',
//       800: 'rgb(var(--color-green-800) / <alpha-value>)',
//       900: 'rgb(var(--color-green-900) / <alpha-value>)',
//     },

//     lime: {
//       50: 'rgb(var(--color-lime-50) / <alpha-value>)',
//       100: 'rgb(var(--color-lime-100) / <alpha-value>)',
//       200: 'rgb(var(--color-lime-200) / <alpha-value>)',
//       300: 'rgb(var(--color-lime-300) / <alpha-value>)',
//       400: 'rgb(var(--color-lime-400) / <alpha-value>)',
//       500: 'rgb(var(--color-lime-500) / <alpha-value>)',
//       600: 'rgb(var(--color-lime-600) / <alpha-value>)',
//       700: 'rgb(var(--color-lime-700) / <alpha-value>)',
//       800: 'rgb(var(--color-lime-800) / <alpha-value>)',
//       900: 'rgb(var(--color-lime-900) / <alpha-value>)',
//     },

//     warning: {
//       50: 'var(--color-warning-50)',
//       75: 'var(--color-warning-75)',
//       100: 'var(--color-warning-100)',
//       200: "var(--color-warning-200)",
//       300: "var(--color-warning-300)",
//       400: "var(--color-warning-400)",
//       500: "var(--color-warning-500)",
//       600: "var(--color-warning-500)",

//     },
//     success: {
//       50: 'var(--color-success-50)',
//       75: 'var(--color-success-75)',
//       100: 'var(--color-success-100)',
//       200: "var(--color-success-200)",
//       300: "var(--color-success-300)",
//       400: "var(--color-success-400)",
//       500: "var(--color-success-500)",
//   },
//     danger: {
//       50: 'var(--color-danger-50)',
//       75: 'var(--color-danger-75)',
//       100: 'var(--color-danger-100)',
//       200: "var(--color-danger-200)",
//       300: "var(--color-danger-300)",
//       400: "var(--color-danger-400)",
//       500: "var(--color-danger-500)",
//       600: "var(--color-danger-500)",
//     },

//   };

module.exports = {
  brand: {
    50: "var(--color-brand-50)",
    100: "var(--color-brand-100)",
    200: "var(--color-brand-200)",
    300: "var(--color-brand-300)",
    400: "var(--color-brand-400)",
    500: "var(--color-brand-500)",
    600: "var(--color-brand-600)",
    700: "var(--color-brand-700)",
    800: "var(--color-brand-800)",
    900: "var(--color-brand-900)",
  },

  primary: {
    50: "var(--color-primary-50)",
    100: "var(--color-primary-100)",
    200: "var(--color-primary-200)",
    300: "var(--color-primary-300)",
    400: "var(--color-primary-400)",
    500: "var(--color-primary-500)",
    600: "var(--color-primary-600)",
    700: "var(--color-primary-700)",
    800: "var(--color-primary-800)",
    900: "var(--color-primary-900)",
  },
  neutral: {
    50: "var(--color-neutral-50)",
    100: "var(--color-neutral-100)",
    200: "var(--color-neutral-200)",
    300: "var(--color-neutral-300)",
    400: "var(--color-neutral-400)",
    500: "var(--color-neutral-500)",
    600: "var(--color-neutral-600)",
    700: "var(--color-neutral-700)",
    800: "var(--color-neutral-800)",
    900: "var(--color-neutral-900)",
  },

  info: {
    50: "var(--color-info-50)",
    100: "var(--color-info-100)",
    200: "var(--color-info-200)",
    300: "var(--color-info-300)",
    400: "var(--color-info-400)",
    500: "var(--color-info-500)",
    600: "var(--color-info-600)",
    700: "var(--color-info-700)",
    800: "var(--color-info-800)",
    900: "var(--color-info-900)",
  },

  red: {
    50: "var(--color-red-50)",
    100: "var(--color-red-100)",
    200: "var(--color-red-200)",
    300: "var(--color-red-300)",
    400: "var(--color-red-400)",
    500: "var(--color-red-500)",
    600: "var(--color-red-600)",
    700: "var(--color-red-700)",
    800: "var(--color-red-800)",
    900: "var(--color-red-900)",
  },

  orange: {
    50: "var(--color-orange-50)",
    100: "var(--color-orange-100)",
    200: "var(--color-orange-200)",
    300: "var(--color-orange-300)",
    400: "var(--color-orange-400)",
    500: "var(--color-orange-500)",
    600: "var(--color-orange-600)",
    700: "var(--color-orange-700)",
    800: "var(--color-orange-800)",
    900: "var(--color-orange-900)",
  },

  green: {
    50: "var(--color-green-50)",
    100: "var(--color-green-100)",
    200: "var(--color-green-200)",
    300: "var(--color-green-300)",
    400: "var(--color-green-400)",
    500: "var(--color-green-500)",
    600: "var(--color-green-600)",
    700: "var(--color-green-700)",
    800: "var(--color-green-800)",
    900: "var(--color-green-900)",
  },

  lime: {
    50: "var(--color-lime-50)",
    100: "var(--color-lime-100)",
    200: "var(--color-lime-200)",
    300: "var(--color-lime-300)",
    400: "var(--color-lime-400)",
    500: "var(--color-lime-500)",
    600: "var(--color-lime-600)",
    700: "var(--color-lime-700)",
    800: "var(--color-lime-800)",
    900: "var(--color-lime-900)",
  },
};
