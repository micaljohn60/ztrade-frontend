import { ActionTypes } from "../actions/types";

const productInitialState ={
    loading : true,
    products : []
}

export const ProductReducer = (state = productInitialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.FETCH_PRODUCTS:
            return {
                ... state,
                products  : payload,
                loading : false
            }
        default:
            return state;
    }
}