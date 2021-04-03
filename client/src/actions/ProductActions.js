import axios from 'axios';
import { PRODUCTS_FETCH ,PRODUCT_FETCH ,PRODUCT_UPDATE ,PRODUCT_CREATE } from './type';

export const productsFecth = () => {
    console.log(process.env.REACT_APP_URL)
    return dispatch => {
        axios.get(`${process.env.REACT_APP_URL}/products`).then((res) => {
            dispatch({type: PRODUCTS_FETCH ,payload: res.data})
        })
    }
}

export const productFecth = (id) => {
    return dispatch => {
        axios.get(`${process.env.REACT_APP_URL}/products/${id}`).then((res) => {
            dispatch({type: PRODUCT_FETCH ,payload: res.data})
        })
    }
}

export const productCreate = (req) => {
    return dispatch => {
        axios.post(`${process.env.REACT_APP_URL}/products` ,req).then((res) => {
            dispatch({type: PRODUCT_CREATE ,payload: res.data})
        })
    }
}

export const productUpdate = (id ,req) => {
    return dispatch => {
        axios.put(`${process.env.REACT_APP_URL}/products/${id}` ,req).then((res) => {
            dispatch({type: PRODUCT_UPDATE ,payload: res.data})
        })
    }
}

export const productDelete = (id) => {
    return dispatch => {
        axios.delete(`${process.env.REACT_APP_URL}/products/${id}`).then(res => {
            axios.get(`${process.env.REACT_APP_URL}/products`).then((res) => {
                dispatch({type: PRODUCTS_FETCH ,payload: res.data})
            })
        }) 
    }
}