import { combineReducers } from 'redux'
import productReducer from './productReducer'
import categoryReducer from './categorieReducer'

export default combineReducers({
    products: productReducer,
    categories: categoryReducer
})