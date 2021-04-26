import {
    FETCH_SALES,
    ADD_SALES_PENDING,
    ADD_SALES_SUCCESS,
    ADD_SALES_ERROR
} from '../actions/types'

const initialState = {
    items: [],
    error: null,
    isLoading: false,
    message: undefined,
}

export default function ( state = initialState, action) {
    switch(action.type) {
        case FETCH_SALES:
        return {
            ...state,
            items: action.payload,
        }
        case ADD_SALES_PENDING:
        return {
            ...state,
            isLoading: true
        }
        case ADD_SALES_SUCCESS: {
            const newSales = action.payload.sales.data
            const sales = [...state.items, newSales]
                return {
                    ...state,
                    isLoading: false,
                    items: sales
                }
        }
        case ADD_SALES_ERROR:
        return {
            ...state,
            isLoading: false,
            error: action.error,
            message: action.payload.message
        }
        default:
        return state
    }
}