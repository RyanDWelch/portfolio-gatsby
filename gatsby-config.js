/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `I like Google fonts`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inconsolata`,
          `source sans pro\:300`
        ],
        display: 'swap'
      }
    },`gatsby-plugin-fontawesome-css`
  ]
}