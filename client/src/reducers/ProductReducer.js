import {PRODUCTS_FETCH ,PRODUCT_FETCH ,PRODUCT_UPDATE ,PRODUCT_CREATE} from '../actions/type';

export default function(state = [] ,action) {
    switch(action.type) {
        case PRODUCTS_FETCH:
        case PRODUCT_FETCH:
            return action.payload;
        case PRODUCT_CREATE:
        case PRODUCT_UPDATE:
            const {resultCode ,resultDesc} = action.payload
            const saved = resultCode === '20000'
            return {...state,saved ,msg: resultDesc}
        default:
            return state;
    }
}