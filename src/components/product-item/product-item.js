import React from "react";
import { Link } from "react-router-dom";

import "./product-item.css";

const ProductItem = (props) => {

  const { name, image, price, id, unit, grade } = props.product;

  return (
      <div className="product-item col-12 mt-2 col-sm-6 col-md-4 mt-md-3 col-lg-3">
          <div className="pim-wrapper">
              <Link to={`/products/${id}`}>
                  <div className="product-image">
                      <img src={image} alt={name}/>
                  </div>
              </Link>
              <div className="product-body">
                  <h5 className="product-name">{name}</h5>
                  <p className="price"><span>Цена:</span> {price} сум. {unit}</p>
                  <p className="grade"><span>Сорт:</span> {grade}</p>
              </div>
              <div className="product-footer">
                  <button className="btn btn-block" onClick={() => props.addToCart(id)}>В корзину</button>
              </div>
          </div>
      </div>
  )
};

export default ProductItem;