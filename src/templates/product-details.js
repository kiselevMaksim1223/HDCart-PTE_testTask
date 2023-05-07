import React from 'react';
import * as s from "../styles/product-details.module.css";
import Layout from "../components/layout";
import {graphql, Link} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import Seo from "../components/seo";

const ProductDetails = ({data}) => {
    const {price, description, title, image} = data.allPrismicProductsv2.nodes[0].data.product[0]
    return (
        <Layout>
            <Link to={"/products"} className={s.btn}>Back</Link>
            <div className={s.details}>
                <div className={s.detailsTop}>
                    <div className={s.info}>
                        <h2>{title.text}</h2>
                        <h3>{price} $</h3>
                    </div>
                    <div className={s.img}>
                        <GatsbyImage image={image.gatsbyImageData} alt={"alt"}/>
                    </div>
                </div>
                <div className={s.description}>
                    <p>{description.text}</p>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;

export const Head = () => <Seo title="ProductDetails"/>

export const query = graphql`
    query productDetails($id: String) {
        allPrismicProductsv2(filter: {data: {id: {eq: $id}}}) {
            nodes {
                data {
                    id
                    product {
                        title{
                            text
                        }
                        price
                        description {
                            text
                        }
                        image {
                            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                        }
                    }
                }
            }
        }
    }
`
