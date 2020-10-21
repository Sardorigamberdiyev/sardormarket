import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, productsError, productsLoaded, productsRequested } from "../../../actions";
import { withGroserystoreService } from "../../hoc";
import ProductList from "../../product-list";
import Slider from "../../slider";

import "./home-page.css";


class HomePage extends Component {

    componentDidMount() {
        this.updateProducts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.categories !== this.props.categories) {
            this.updateProducts();
        }
    }

    updateProducts() {
        const { grocerystoreService, productsLoaded, productsError, productsRequested, categories } = this.props;

        productsRequested();

        switch (categories) {
            case 'fruits':
                grocerystoreService.getAllFruits()
                    .then((fruits) => {
                        productsLoaded(fruits)
                    })
                    .catch((err) => {
                        productsError(err)
                    }); break;
            case 'vegetables':
                grocerystoreService.getAllVegetables()
                    .then((vegetables) => {
                        productsLoaded(vegetables)
                    })
                    .catch((err) => {
                        productsError(err)
                    }); break;
            case 'drinks':
                grocerystoreService.getAllDrinks()
                    .then((drinks) => {
                        productsLoaded(drinks)
                    })
                    .catch((err) => {
                        productsError(err)
                    }); break;

            default:
                grocerystoreService.getAllProducts()
                    .then((products) => {
                        productsLoaded([...products.fruits, ...products.vegetables, ...products.drinks])
                    })
                    .catch((err) => {
                        productsError(err)
                    });
        }
    }

    render() {
        const { loading, error, products, addToCart } = this.props;

        return (
            <div className="container home-page mt-3">
                <div className="row">
                    <div className="col-10 offset-1 mt-5 col-sm-12 mt-sm-5 offset-sm-0 col-md-12 mt-md-5 mt-lg-0">
                        <div className="row">
                            <div className="col-md-8">
                                <Slider />
                            </div>
                            <div className="col-md-4">
                                <img src="https://sardorigamberdiyev.github.io/sardormarket/images/various/react.png" alt="react" />
                                <img src="https://sardorigamberdiyev.github.io/sardormarket/images/various/redux.png" alt="redux" />
                            </div>
                        </div>
                        <div className="row">
                            <ProductList loading={loading}
                                         error={error}
                                         products={products}
                                         addToCart={addToCart}
                            />
                        </div>
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
        error: state.error,
        categories: state.categories
    }
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
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    }
};



export default withGroserystoreService(connect(mapStateToProps, mapDispatchToProps)(HomePage));