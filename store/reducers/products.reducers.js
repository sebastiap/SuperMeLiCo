import { PRODUCTS } from "../../data/products"
import { SELECT_PRODUCT,FILTER_PRODUCT } from "../actions/products.action"

const INITIAL_STATE = {
    list:PRODUCTS,
    filtered:[],
    selectedID:null

};

const ProductReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SELECT_PRODUCT:
            return { ...state,selectedID:action.productID}
        case FILTER_PRODUCT:
            return {...state,
                   filtered: state.list.filter(item => item.category === action.categoryID)
              }
        default:
            return state;

    }
}

export default ProductReducer;