import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "This is the COOLEST Cube Ever",
            description: "This cube will keep you busy the entire day and it is very fun to play with",
            price: 15.0,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 2,
            title: "This is the second COOLEST Cube Ever",
            description: "This cube will keep you busy the entire day and it is very fun to play with",
            price: 15.0,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 3,
            title: "This is the third COOLEST Cube Ever",
            description: "This cube will keep you busy the entire day and it is very fun to play with",
            price: 15.0,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
    ], // {id, title, descr, price, img}
    cart: [], // {id, title, descr, price, img, qty}
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return{}
        case actionTypes.REMOVE_FROM_CART:
            return{}
        case actionTypes.ADJUST_QTY:
            return{}
        case actionTypes.LOAD_CURRENT_ITEM:
            return{}
        default:
            return state;
    }
};

export default shopReducer;