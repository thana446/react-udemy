import axios from 'axios';
import {ORDERS_FETCH} from './type';

export const orderFecth = () => {
    return dispatch => {
        axios.get("http://localhost:3000/orders").then((res) => {
            dispatch({type: ORDERS_FETCH ,payload: res.data})
        })
    }
}