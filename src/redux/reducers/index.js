import { combineReducers } from 'redux'
import productReducer from './productReducer'
import categoryReducer from './categorieReducer'
import loginReducer from './loginReducer'
import cartReducer from './cartReducer'
import salesReducer from './salesReducer'

export default combineReducers({
    products: productReducer,
    categories: categoryReducer,
    users: loginReducer,
    cart: cartReducer,
    sales: salesReducer,
})