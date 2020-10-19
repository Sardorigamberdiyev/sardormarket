import React from "react";

import "./shopping-cart-item.css";

const ShoppingCartItem = (props) => {
  const { id,
      name,
      count,
      image,
      price,
      total,
      unit } = props.product;
  return (
      <tr className="shopping-cart-item">
          <td>
              <img src={image} alt={name}/>
          </td>
          <td>{price} <span>Сумм. за {unit}</span></td>
          <td>
              <div>
                  <button onClick={() => props.onDecrease(id)}
                          className="btn btn-sm">
                      <i className="fa fa-minus-circle" />
                  </button>
                  <input type="number"
                         value={count}
                         disabled />
                  <button onClick={() => props.onIncrease(id)}
                          className="btn btn-sm">
                      <i className="fa fa-plus-circle" />
                  </button>
              </div>
          </td>
          <td>
              <span className="total">{total}</span>
          </td>
          <td>
              <button onClick={() => props.delete(id)}
                  className="btn btn-outline-danger btn-sm">
                  <i className="fa fa-trash-o" />
              </button>
          </td>
      </tr>
  )
};

export default ShoppingCartItem