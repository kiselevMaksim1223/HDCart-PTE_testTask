import React from 'react';
import {Link} from "gatsby";
import * as s from "../styles/products.module.scss";
import {GatsbyImage} from "gatsby-plugin-image";
import Seo from "./seo";

const ProductList = ({product}) => {
    return (
            <Link className={s.container} to={"/products/" + product.data.id} key={product.id}>
                <div>
                    <GatsbyImage className={s.img}
                                 image={product.data.product[0].image.gatsbyImageData}
                                 alt={"imgs"}
                    />
                </div>
                <div className={s.desc}>
                    <h3>{product.data.product[0].title.text}</h3>
                    <h2>{product.data.product[0].price} $</h2>
                </div>
            </Link>
    )
};

export default ProductList;

export const Head = () => <Seo title="ProductList"/>
