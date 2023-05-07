/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require('path')

/**
 * with this function we create a page based on our data
 */
exports.createPages = async ({graphql, actions }) => {
    const {data} = await graphql(`
        query products{
            allPrismicProductsv2 {
                nodes {
                    data {
                        id
                    }
                }
            }
        }
    `)

    data.allPrismicProductsv2.nodes.forEach(pr => {
        actions.createPage({
            path: '/products/' + pr.data.id,
            component: path.resolve('./src/templates/product-details.js'),
            context: {id: pr.data.id}
        })
    })
}
