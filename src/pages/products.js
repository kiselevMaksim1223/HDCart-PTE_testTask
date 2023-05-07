import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as s from "../styles/products.module.scss"
import {graphql} from "gatsby";
import ProductItem from "../components/productItem";

const Products = ({data}) => {
    const products = data.allPrismicProductsv2.nodes
    return (
        <Layout>
            <div className={s.products}>
                {products.map(p => <ProductItem key={p.data.id} product={p}/>)}
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Products"/>

export default Products

export const query = graphql`
    query allProducts {
        allPrismicProductsv2 {
            nodes {
                data {
                    id
                    product {
                        title {
                            text
                        }
                        price
                        description {
                            text
                        }
                        image {
                            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, height: 300)
                        }
                    }
                }
            }
        }
    }
`