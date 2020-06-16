import { combineReducers } from 'redux'
import productReducer from './productReducer'
import categoryReducer from './categorieReducer'
import loginReducer from './loginReducer'

export default combineReducers({
    products: productReducer,
    categories: categoryReducer,
    users: loginReducer
})