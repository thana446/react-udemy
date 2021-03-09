import {combineReducers} from 'redux';
import OrderReducer from './OrderReducer';
import ProductReducer from './ProductReducer';

const rootReducer = combineReducers({
    orders: OrderReducer,
    products: ProductReducer
})

export default rootReducer;