import {ADD_TO_CART, REMOVE_FROM_CART} from '../action/type';
const initialState={items:[],myCount:0};
export default function(state=initialState,action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {items:action.payload.cartItems}
        case REMOVE_FROM_CART:
            return {items:action.payload.cartItems}
        
            default:
            return state;
            
    }
}