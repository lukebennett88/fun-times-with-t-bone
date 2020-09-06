const resolveConfig = require('tailwindcss/resolveConfig');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: 'Fun Times With Tbones',
    description: '',
    author: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-tailwind',
        short_name: 'starter',
        start_url: '/',
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.green['200'],
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [tailwind(tailwindConfig), autoprefixer],
      },
    },
  ],
};
