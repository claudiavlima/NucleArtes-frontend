import {
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    IS_AUTH,
    USER_LOGOUT,
    ADD_USER_PENDING,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
    FETCH_USERS
} from '../actions/types'

const initialState = {
    id_artesano: undefined,
    isAuth: false,
    users: [],
    name: undefined,
    error: null,
    isLoading: false,
    message: undefined,
    logged: false,
    token: '',
    failedLogin: false,
    failedRegister: false,
    role: undefined,
    userAuth: undefined,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isAuth: action.payload.isAuth,
                token: action.payload.token
            }
        case USER_LOGOUT:
            return {
                state: initialState
            }
        case LOGIN_USER_PENDING:
            return {
                ...state,
                isLoading: true,
                failedLogin: false
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload.token,
                isAuth: true,
                user: action.payload.user.name,
                id_artesano: action.payload.user._id,
                role: action.payload.user.role,
                userAuth: action.payload.user,
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                message: action.payload,
                failedLogin: true
            }
        case ADD_USER_PENDING:
            return {
                ...state,
                isLoading: true,
                failedRegister: false
            }
        case ADD_USER_SUCCESS: {
            const newUser = action.payload.user
            const user = state.users.length ? [...state.users, newUser]: [newUser]
                return {
                    ...state,
                    isLoading: false,
                    users: user
                }
            }
        case ADD_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                message: action.payload.message,
                failedRegister: true
            }
        default:
            return state
    }
}