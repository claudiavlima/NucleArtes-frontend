import {
    FETCH_SALES,
    ADD_SALES_PENDING,
    ADD_SALES_SUCCESS,
    ADD_SALES_ERROR,
 } from './types'
 import store from '../store'

 // FETCH SALESS
export const fetchSales = () => dispatch => {
    fetch('http://localhost:5000/api/sales')
        .then(res => res.json())
        .then(data => {
            return dispatch ({ type: FETCH_SALES, payload: data})
        })
}

// POST SALES
export const postSales = (sales) => {
    return dispatch => {
    dispatch({
        type: ADD_SALES_PENDING
    })
    const {
        users: { token }
    } = store.getState()
    const options = {
        timeout: 25000,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `BEARER ${token}`
        },
        body: JSON.stringify(sales)
    }
    return fetch('http://localhost:5000/api/sales', options)
        .then( res => res.json())
        .then( data => {
            if (!Object.entries(data).length) {
                return Promise.reject(data)
            }
            return dispatch({
                type: ADD_SALES_SUCCESS,
                payload: {
                    sales: data
                }
            })
        })
        .catch( error => {
            return dispatch ({
                type: ADD_SALES_ERROR,
                payload: error
            })
        })
    }
}
