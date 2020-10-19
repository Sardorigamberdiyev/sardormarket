import React, { Component } from "react";
import { connect } from "react-redux";
import {
    addToCart,
    productRemovedFromCart,
    allProductsRemovedFromCart,
    productsLoaded,
    productsError,
    productsRequested
} from "../../../actions";
import { withGroserystoreService } from "../../hoc";
import ShoppingCartTable from "../../shopping-cart-table";
import { AdaptiveCart } from "../../responsive";

import "./cart-page.css";

class CartPage extends Component {

    componentDidMount() {
        const { grocerystoreService, productsLoaded, productsRequested, productsError } = this.props;

        productsRequested();

        grocerystoreService.getAllProducts()
            .then((products) => {
                productsLoaded([...products.fruits, ...products.vegetables, ...products.drinks])
            })
            .catch((err) => {
                productsError(err)
            });
    }

  render() {

      const { onIncrease, onDecrease, deleted, cart, totalPrice } = this.props;



      return (
          <div className="container cart-page">
              <div className="row">
                  <div className="col-md-12">
                      <ShoppingCartTable onIncrease={onIncrease}
                                         onDecrease={onDecrease}
                                         deleted={deleted}
                                         cart={cart}
                      />
                      <AdaptiveCart onIncrease={onIncrease}
                                    onDecrease={onDecrease}
                                    cart={cart}
                                    totalPrice={totalPrice}
                      />
                  </div>
              </div>
          </div>
      )
  }
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        totalPrice: state.totalPrice
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        productsLoaded: (products) => {
            dispatch(productsLoaded(products))
        },
        productsError: (error) => {
            dispatch(productsError(error))
        },
        productsRequested: () => {
            dispatch(productsRequested())
        },
        onIncrease: (id) => {
            dispatch(addToCart(id))
        },
        onDecrease: (id) => {
            dispatch(productRemovedFromCart(id))
        },
        deleted: (id) => {
            dispatch(allProductsRemovedFromCart(id))
        }
    }
};


export default withGroserystoreService(connect(mapStateToProps, mapDispatchToProps)(CartPage));