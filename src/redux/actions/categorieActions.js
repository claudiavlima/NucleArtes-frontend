import {
    FETCH_CATEGORIES
} from './types'

// FETCH ACTIONS
export const fetchCategories = () => dispatch => {
    fetch('http://localhost:5000/api/categories')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return dispatch ({ type: FETCH_CATEGORIES, payload: data})
        })
}
