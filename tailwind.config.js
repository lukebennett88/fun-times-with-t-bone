const customForms = require('@tailwindcss/custom-forms');

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: 'all',
  theme: {
    extend: {
      margin: {
        '-2px': '-2px',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first'],
    zIndex: ['responsive', 'focus', 'hover'],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [customForms],
};
