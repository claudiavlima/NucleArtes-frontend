import { combineReducers } from 'redux'
import productReducer from './productReducer'
import categoryReducer from './categorieReducer'
import loginReducer from './loginReducer'
import cartReducer from './cartReducer'
import salesReducer from './salesReducer'
import { reducer as form, FormStateMap } from 'redux-form';
import publicityReducer from './publicityReducer';

export default combineReducers({
    products: productReducer,
    categories: categoryReducer,
    users: loginReducer,
    cart: cartReducer,
    order: salesReducer,
    form,
    publicity: publicityReducer
})