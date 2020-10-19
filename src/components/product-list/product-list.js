import React from "react";
import ProductItem from "../product-item";

import "./product-list.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const ProductList = (props) => {
    const { addToCart, products, loading, error } = props;

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return products.map((product) => {
        return <ProductItem key={product.id} product={product} addToCart={addToCart} />
    })
};



export default ProductList;