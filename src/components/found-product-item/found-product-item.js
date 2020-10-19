import React from "react";

import "./found-product-item.css";

const FoundProductItem = (props) => {
  const { product, addToCart } = props;
  const { name, price, image, id, unit } = product;

  return (
      <li className="found-product-item">
          <img src={image} alt={name}/>
          <div className="main-about-product">
              <h5 className="name">{name}</h5>
              <div className="price">
                  <span>{price} суммов</span>
                  <span>{unit}</span>
              </div>
              <button className="btn btn-sm mt-2" onClick={() => addToCart(id)}>В корзину</button>
          </div>
      </li>
  )
};


export default FoundProductItem;