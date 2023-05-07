/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({path: ".env"})

module.exports = {
  siteMetadata: {
    title: `Products spawner`,
    description: `This is test task!`,
    copyright: 'This site is copyright 2023',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: "hdcartpte-test",
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        customTypesApiToken: `${process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN}` ,
        // linkResolver: ({node, key, value}) => post =>`/${post.id}`,
        schemas: {
          post: require("./custom_types/post.json")
        }
      },
    },
  ],
}
