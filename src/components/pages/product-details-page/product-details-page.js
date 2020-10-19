import React, { Component } from "react";
import { connect } from "react-redux";
import { productsLoaded, productsRequested, productsError, addToCart } from "../../../actions";
import { withGroserystoreService } from "../../hoc";
import ProductDetails from "../../product-details";

import "./product-details-page.css";

class ProductDetailsPage extends Component {

    componentDidMount() {
        const { productsLoaded, grocerystoreService, productsRequested, productsError } = this.props;

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
        const { error, loading, products, match, addToCart } = this.props;

        return (
            <div className="product-details-page container pb-5">
                <div className="row">
                    <div className="col-10 offset-1 col-sm-10 offset-sm-1 col-md-4 offset-md-4">
                        <ProductDetails products={products}
                                        loading={loading}
                                        error={error}
                                        match={match}
                                        addToCart={addToCart}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      products: state.products,
      loading: state.loading,
      error: state.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      productsRequested: () => {
        dispatch(productsRequested())
      },
      productsLoaded: (products) => {
          dispatch(productsLoaded(products))
      },
      productsError: (error) => {
          dispatch(productsError(error))
      },
      addToCart: (productId) => {
          dispatch(addToCart(productId))
      }
  }
};

export default withGroserystoreService(connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage));
