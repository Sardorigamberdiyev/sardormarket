
const productsRequested = () => {
  return {
      type: 'FETCH_PRODUCTS_REQUEST'
  }
};

const productsLoaded = (products) => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: products
    }
};

const productsError = (error) => {
    return {
        type: 'FETCH_PRODUCTS_FAILURE',
        payload: error
    }
};

const addToCart = (productId) => {
  return {
      type: 'ADDED_TO_CART',
      payload: productId
  }
};

const productRemovedFromCart = (productId) => {
  return {
      type: 'PRODUCT_REMOVED_FROM_CART',
      payload: productId
  }
};

const allProductsRemovedFromCart = (productId) => {
    return {
        type: 'ALL_PRODUCTS_REMOVED_FROM_CART',
        payload: productId
    }
};

const searchProducts = (term) => {
    return {
        type: 'SEARCH_PRODUCTS',
        payload: term
    }
};

const categoryProducts = (categor) => {
  return {
      type: 'CATEGORY_PRODUCTS',
      payload: categor
  }
};

const swipeShow = (isShow) => {
  return {
      type: 'SWIPE-SHOW',
      payload: isShow
  }
};



export {
    productsLoaded,
    productsError,
    productsRequested,
    addToCart,
    productRemovedFromCart,
    allProductsRemovedFromCart,
    searchProducts,
    categoryProducts,
    swipeShow
}