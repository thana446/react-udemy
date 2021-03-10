import axios from 'axios';
import {ORDERS_FETCH} from './type';

export const orderFecth = () => {
    return dispatch => {
        axios.get("http://localhost:3000/orders").then(res => {
            const {dataList: orders} = res.data
            dispatch({type: ORDERS_FETCH ,payload: orders})
        })
    }
}

export const orderDelete = (id) => {
    return dispatch => {
        axios.delete("http://localhost:3000/orders/"+id).then(res => {
            axios.get("http://localhost:3000/orders").then(res => {
                const {dataList: orders} = res.data
                dispatch({type: ORDERS_FETCH ,payload: orders})
            })
        })
    }
}