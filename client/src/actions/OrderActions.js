import axios from 'axios';
import {ORDERS_FETCH} from './type';

export const orderFecth = () => {
    return dispatch => {
        axios.get(`${process.env.REACT_APP_URL}/orders`).then(res => {
            const {dataList: orders} = res.data
            dispatch({type: ORDERS_FETCH ,payload: orders})
        })
    }
}

export const orderDelete = (id) => {
    return dispatch => {
        axios.delete(`${process.env.REACT_APP_URL}/orders/${id}`).then(res => {
            axios.get(`${process.env.REACT_APP_URL}/orders`).then(res => {
                const {dataList: orders} = res.data
                dispatch({type: ORDERS_FETCH ,payload: orders})
            })
        })
    }
}