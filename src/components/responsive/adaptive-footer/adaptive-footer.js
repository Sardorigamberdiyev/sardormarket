import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./adaptive-footer.css";


const AdaptiveFooter = (props) => {
    const { cart } = props;
    return (
        <div className="adaptive-footer">
            <ul>
                <li className="af-active">
                    <Link to="/">
                        <i className="fa fa-home" />
                        <span>Главная</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className="fa fa-heart-o" />
                        <span>Избраный</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <i className="fa fa-shopping-cart" />
                        <span>Корзина</span>
                    </Link>
                    <span>{cart.length}</span>
                </li>
                <li>
                    <Link to="/account/registration">
                        <i className="fa fa-user-plus" />
                        <span>Регистрация</span>
                    </Link>
                </li>
                <li>
                    <Link to="/account/login">
                        <i className="fa fa-user-circle-o" />
                        <span>Войти</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => {
  return {
      cart: state.cart,
  }
};

export default connect(mapStateToProps)(AdaptiveFooter);