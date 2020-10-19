import React from "react";
import ShoppingCartItem from "../shopping-cart-item";

import "./shopping-cart-table.css";

const ShoppingCartTable = (props) => {

    const { cart, onIncrease, onDecrease, deleted } = props;

    if (cart.length === 0) {
        return (
            <div className="sc-te">
                <div>
                    <h3 className="text-center">Ваша корзина пусто</h3>
                    <i className="fa fa-meh-o" />
                </div>
            </div>
        )
    }

    return (
        <div className="shopping-cart-table pb-5">
            <h2>Корзина</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Товар</th>
                        <th>Сумма</th>
                        <th>Количество</th>
                        <th>Общая сумма</th>
                        <th>Очистить корзину</th>
                    </tr>
                </thead>

                <tbody>
                {
                    cart.map((item) => {
                        return <ShoppingCartItem
                            onIncrease={(id) => onIncrease(id)}
                            onDecrease={(id) => onDecrease(id)}
                            delete={(id) => deleted(id)}
                            key={item.id}
                            product={item}
                        />
                    })
                }
                </tbody>
            </table>
            <button className="btn mt-4">Оформить заказ</button>
        </div>
    )
};




export default ShoppingCartTable;