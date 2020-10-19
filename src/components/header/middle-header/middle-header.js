import React, { Component } from "react";
import { Link } from "react-router-dom";
import FoundProductList from "../../found-product-list";

import "./middle-header.css";


class MiddleHeader extends Component {

    state = {
        adhesion: false
    };

    componentDidMount() {
        window.addEventListener("scroll", this.throttleScroll, false);
    }

    throttleScroll = () => {
        window.requestAnimationFrame(() => {
            this.scrolling()
        });
    };

    scrolling = () => {
        const middleHeader = document.querySelector(".upper-header");

        if (this.isFullyNoVisible(middleHeader)) {
            this.setState({
                adhesion: true
            })
        } else {
            this.setState({
                adhesion: false
            })
        }
    };

    isFullyNoVisible = (el) => {
        let elementBoundary = el.getBoundingClientRect();

        let bottom = elementBoundary.bottom;

        return (bottom <= 0);
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.props.searchProducts(term)
    };

    render() {

        const {
            categoryProducts,
            cartLength,
            totalPrice,
            products,
            term,
            addToCart
        } = this.props;

        const quantityCart = cartLength ? <span className="quantity" >{cartLength}</span> : null;
        const adhesionMdHeader = this.state.adhesion ? "middle-header container-fluid adhesion" : "middle-header container-fluid";

        return (
            <div className={adhesionMdHeader}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 pl-0">
                            <Link to="/" onClick={() => categoryProducts("")}>
                                <img src="/images/my logo.png" alt="logo" />
                            </Link>
                            <div className="menu-btn">
                                <span className="strip" />
                                <span className="strip" />
                                <span className="strip" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search-panel">
                                <input type="text"
                                       value={term}
                                       onChange={this.onSearchChange}
                                       placeholder="Поиск товаров..."
                                />
                                <button type="button" className="btn btn-success"><i className="fa fa-search" />Поиск</button>
                            </div>
                            <FoundProductList products={products}
                                              term={term}
                                              addToCart={addToCart}
                            />
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <li>
                                    <i className="fa fa-user-o" />
                                    <div>
                                        <Link to="/account/registration">Регистрация</Link>
                                        <hr/>
                                        <Link to="/account/login">Войти</Link>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/#"><i className="fa fa-heart-o" /></Link>
                                </li>
                                <li>
                                    <Link to="/cart"><i className="fa fa-shopping-cart" /></Link>
                                    <div>
                                        <span>В корзине: <strong>{cartLength}</strong> </span>
                                        <span>Cумма: <strong>{totalPrice}</strong>  сум</span>
                                    </div>
                                    {quantityCart}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default MiddleHeader;