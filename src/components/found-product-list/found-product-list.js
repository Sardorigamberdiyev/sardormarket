import React from "react";

import "./found-product-list.css";
import FoundProductItem from "../found-product-item";

const FoundProductList = (props) => {

    const { products, term, addToCart } = props;

    const searchResults = (items, term, action) => {

        if (term === "") {
            return null
        } else {
            const search = items.filter((item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);

            return search.map((item) => {
                return <FoundProductItem key={item.id} product={item} addToCart={action} />
            })
        }

    };

    const styleFoundSearch = term === "" ? "found-product-list hide-found-search" : "found-product-list";

    return (
        <ul className={styleFoundSearch}>
            {
                searchResults(products, term, addToCart)
            }
        </ul>
    )
};

export default FoundProductList;