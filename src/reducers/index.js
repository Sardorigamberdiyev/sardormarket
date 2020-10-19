const initialState = {
    products: [],
    cart: [],
    loading: true,
    error: null,
    totalPrice: 0,
    term: '',
    categories: "",
    swipeShow: false
};

const updateItem = (state, item, idx, act) => {
    return [
        ...state.cart.slice(0, idx),
        {
            ...item,
            count: item.count + act,
            total: item.total + act*item.price
        },
        ...state.cart.slice(idx + 1)
    ]
};

const deleteItem = (state, idx) => {
    return [
        ...state.cart.slice(0, idx),
        ...state.cart.slice(idx + 1)
    ]
};


const reducer = (state = initialState, action) => {

    console.log(action.type);

    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
            return {
              ...state,
              products: [],
              loading: true,
              error: null
            };
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case 'FETCH_PRODUCTS_FAILURE':
            return {
              ...state,
              products: [],
              loading: false,
              error: action.payload
            };
        case 'ADDED_TO_CART':
            const product = state.products.find(({ id }) => id === action.payload);
            const idx = state.cart.findIndex((item) => item.id === action.payload);
            const oldProduct = state.cart[idx];

            const newItem = {
                id: product.id,
                image: product.image,
                name: product.name,
                price: product.price,
                count: 1,
                total: product.price,
                unit: product.unit
            };

            if (idx >= 0) {
                return {
                    ...state,
                    cart: updateItem(state, oldProduct, idx, 1),
                    totalPrice: state.totalPrice + oldProduct.price
                }
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        newItem
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }
            }
        case 'PRODUCT_REMOVED_FROM_CART':
            const idxRemove = state.cart.findIndex((item) => item.id === action.payload);
            const oldProductRemove = state.cart[idxRemove];

            if (oldProductRemove.count === 1) {
                return {
                    ...state,
                    cart: deleteItem(state, idxRemove),
                    totalPrice: state.totalPrice - oldProductRemove.price
                }
            } else {
                return {
                    ...state,
                    cart: updateItem(state, oldProductRemove, idxRemove, -1),
                    totalPrice: state.totalPrice - oldProductRemove.price
                };
            }
        case 'ALL_PRODUCTS_REMOVED_FROM_CART':
            const idxAllRemoved = state.cart.findIndex((item) => item.id === action.payload);

            return {
                ...state,
                cart: deleteItem(state, idxAllRemoved),
                totalPrice: state.totalPrice - state.cart[idxAllRemoved].total
            };
        case 'SEARCH_PRODUCTS':
            return {
              ...state,
              term: action.payload
            };
        case 'CATEGORY_PRODUCTS':
            return {
                ...state,
                categories: action.payload
            };
        case 'SWIPE-SHOW':
            console.log(action.payload);
            return {
                ...state,
              swipeShow: action.payload
            };

        default:
            return state;
    }

};

export default reducer;