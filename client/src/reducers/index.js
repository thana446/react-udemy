import {combineReducers} from 'redux';
import OrderReducer from './OrderReducer';
import ProductReducer from './ProductReducer';
import {reducer as ReduxForm} from 'redux-form';

const rootReducer = combineReducers({
    orders: OrderReducer,
    products: ProductReducer,
    form: ReduxForm
})

export default rootReducer;