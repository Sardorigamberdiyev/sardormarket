import React from "react";

import "./adaptive-cart.css";

const AdaptiveCart = (props) => {
  const { onDecrease, onIncrease, cart, totalPrice } = props;

  if (cart.length === 0) {
    return (
        <div className="ac-be">
            <div>
                <h5 className="text-center">Ваша корзина пусто</h5>
                <i className="fa fa-meh-o" />
            </div>
        </div>
    )
  }

  return (
      <div className="adaptive-cart container-fluid">
        <h3>Корзина</h3>
        <div className="row">
          {
            cart.map((item) => {
              const { id, name, price, total, image, count } = item;
              return (
                  <div key={id} className="col-12">
                    <img src={image} alt={name}/>
                    <div>
                      <h4>{name}</h4>
                      <div className="price">
                        <span>{price}</span> сум. за 1 шт
                      </div>
                      <div className="total">
                        <span>{total}</span>
                        <span>сум</span>
                      </div>
                      <div>
                        <button
                            onClick={() => onDecrease(id)}
                            className="btn btn-sm">
                          <i className="fa fa-minus-circle" />
                        </button>
                        <span>{count}</span>
                        <button onClick={() => onIncrease(id)}
                                className="btn btn-sm">
                          <i className="fa fa-plus-circle" />
                        </button>
                      </div>
                    </div>
                  </div>
              )
            })
          }
        </div>
        <div className="checkout">
          <button className="btn btn-block">Оформить заказ
            <span className="total-price">{totalPrice} сум</span>
          </button>
        </div>
      </div>
  )
};

export default AdaptiveCart