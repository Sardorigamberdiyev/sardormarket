import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./adaptive-nav.css";

class AdaptiveNav extends Component {

    state = {
      openCategory: false
    };

    isShowCategory() {
        this.setState((state) => {
            return {
                openCategory: !state.openCategory
            }
        })
    }

    render() {
        const { isShow, swipeShow, categoryProducts } = this.props;

        const layer = isShow ? "layer" : "";
        const isSwipeShow = isShow ? "swipe-right open" : "swipe-right";
        const navClass = this.state.openCategory ? "nav-category active-category" : "nav-category";

        return (
            <div className="adaptive-nav">
                <div className={layer} onClick={() => swipeShow(!isShow)} />
                <div className={isSwipeShow}>
                    <Link to="/"
                          className="swipe-right-header"
                          onClick={() => {
                        swipeShow(!isShow);
                        categoryProducts("")
                    }}>
                        <img src="images/my logo.png" alt="logo" />
                    </Link>
                    <ul className="swipe-right-body">
                        <li>
                            <i className="fa fa-language" />
                            <span>Русский</span>
                        </li>
                        <li>
                            <div onClick={() => this.isShowCategory()}>
                                <i className="fa fa-navicon" />
                                <span>Все категория</span>
                            </div>
                            <ul className={navClass}>

                                <li onClick={() => {
                                    categoryProducts("fruits");
                                    swipeShow(!isShow);
                                    this.isShowCategory();
                                }}>
                                    <Link to="/">
                                        <span>Фкрукты</span>
                                    </Link>
                                </li>
                                <li onClick={() => {
                                    categoryProducts("vegetables");
                                    swipeShow(!isShow);
                                    this.isShowCategory();
                                }}>
                                    <Link to="/">
                                        <span>Продукты</span>
                                    </Link>
                                </li>
                                <li onClick={() => {
                                    categoryProducts("drinks");
                                    swipeShow(!isShow);
                                    this.isShowCategory();
                                }}>
                                    <Link to="/">
                                        <span>Напитки</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <i className="fa fa-h-square" />
                            <span>Помощь</span>
                        </li>
                    </ul>
                    <div className="swipe-right-footer">
                        <span>телефон поддержки</span>
                        <span>+998 (90) 174-34-14</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdaptiveNav