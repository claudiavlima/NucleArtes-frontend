import {
    FETCH_CATEGORIES
} from '../actions/types'

const initialState = {
    items: [],
    error: null,
    isLoading: false,
    message: undefined,
    categoryId: undefined
}

export default function ( state = initialState, action) {
    switch(action.type) {
        case FETCH_CATEGORIES:
        return {
            ...state,
            items: action.payload,
            category_name: action.payload.name
        }
        default:
        return state
    }
}