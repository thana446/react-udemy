import axios from 'axios';
import { PRODUCTS_FETCH } from './type';

export const productFecth = () => {
    return dispatch => {
        axios.get("http://localhost:3000/products").then((res) => {
            dispatch({type: PRODUCTS_FETCH ,payload: res.data})
        })
    }
}

export const productDelete = (id) => {
    return dispatch => {
        axios.delete("http://localhost:3000/products/"+id).then(res => {
            axios.get("http://localhost:3000/products").then((res) => {
                dispatch({type: PRODUCTS_FETCH ,payload: res.data})
            })
        }) 
    }
}