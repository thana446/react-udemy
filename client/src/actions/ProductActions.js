import axios from 'axios';
import { PRODUCTS_FETCH ,PRODUCT_FETCH ,PRODUCT_UPDATE ,PRODUCT_CREATE } from './type';

export const productsFecth = () => {
    return dispatch => {
        axios.get("http://localhost:3000/products").then((res) => {
            dispatch({type: PRODUCTS_FETCH ,payload: res.data})
        })
    }
}

export const productFecth = (id) => {
    return dispatch => {
        axios.get("http://localhost:3000/products/"+id).then((res) => {
            dispatch({type: PRODUCT_FETCH ,payload: res.data})
        })
    }
}

export const productCreate = (req) => {
    return dispatch => {
        axios.post("http://localhost:3000/products" ,req).then((res) => {
            dispatch({type: PRODUCT_CREATE ,payload: res.data})
        })
    }
}

export const productUpdate = (id ,req) => {
    return dispatch => {
        axios.put("http://localhost:3000/products/"+id ,req).then((res) => {
            dispatch({type: PRODUCT_UPDATE ,payload: res.data})
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