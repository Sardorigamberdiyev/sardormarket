import React from "react";
import { connect } from "react-redux";
import { addToCart, categoryProducts, searchProducts, swipeShow } from "../actions";
import { LowerHeader, MiddleHeader, UpperHeader } from "../components/header";
import { AdaptiveHeader, AdaptiveNav } from "../components/responsive";


const HeaderContainer = (props) => {
  const {
      term,
      categoryProducts,
      searchProducts,
      addToCart,
      cart,
      totalPrice,
      isShow,
      swipeShow,
      products
  } = props;

  const cartLength = cart.length;

  return (
      <div>
          <UpperHeader />
          <MiddleHeader categoryProducts={categoryProducts}
                        cartLength={cartLength}
                        totalPrice={totalPrice}
                        term={term}
                        searchProducts={searchProducts}
                        addToCart={addToCart}
                        products={products}
          />
          <LowerHeader categoryProducts={categoryProducts} />
          <AdaptiveHeader />
          <AdaptiveNav isShow={isShow}
                       swipeShow={swipeShow}
                       categoryProducts={categoryProducts}
          />
      </div>
  )
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        totalPrice: state.totalPrice,
        term: state.term,
        isShow: state.swipeShow,
        products: state.products
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
      searchProducts: (term) => {
        dispatch(searchProducts(term))
      },
      categoryProducts: (categor) => {
          dispatch(categoryProducts(categor))
      },
      swipeShow: (isShow) => {
          dispatch(swipeShow(isShow))
      },
      addToCart: (id) => {
          dispatch(addToCart(id))
      },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

