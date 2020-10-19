import React from "react";
import { connect } from "react-redux";
import { addToCart, searchProducts, swipeShow } from "../../../actions";

import "./adaptive-header.css";
import FoundProductList from "../../found-product-list";


const AdaptiveHeader = (props) => {
    const {
        isShow,
        swipeShow,
        term,
        searchProducts,
        products,
        addToCart } = props;

    const search = (e) => {
      searchProducts(e.target.value)
    };

    return (
        <div className="adaptive-header container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-2 col-sm-2 col-md-2">
                        <div className="strips" onClick={() => swipeShow(!isShow)}>
                            <div className="strip-item" />
                            <div className="strip-item" />
                            <div className="strip-item" />
                        </div>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10">
                        <input type="text"
                               placeholder="Поиск товаров..."
                               className="form-control"
                               onChange={search}
                               value={term}
                        />
                        <FoundProductList products={products}
                                          term={term}
                                          addToCart={addToCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isShow: state.swipeShow,
        term: state.term,
        products: state.products
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
      swipeShow: (isShow) => {
          dispatch(swipeShow(isShow))
      },
      searchProducts: (term) => {
          dispatch(searchProducts(term))
      },
      addToCart: (id) => {
          dispatch(addToCart(id))
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdaptiveHeader);