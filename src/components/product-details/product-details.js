import React from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./product-details.css";

const ProductDetails = (props) => {

    const { error, loading, products, match, addToCart } = props;

    const product = products.find((item) => item.id === Number(match.params.id));

    if (loading) {
        return <Spinner />
    }

    if (error || product === undefined) {
        return <ErrorIndicator />
    }

    const { image, name, id, price, grade } = product;

    return (
        <div className="card product-details">
            <img src={image}
                 alt={name}
                 className="card-img-top"
            />
            <div className="card-body">
                <h5>{name}</h5>
                <p>Цена: {price}</p>
                <p>Сорт: {grade}</p>
            </div>
            <div className="card-footer">
                <button className="btn-lg btn-block" onClick={() => addToCart(id)}>В корзину</button>
            </div>
        </div>
    )
};

export default ProductDetails;