import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  IS_AUTH,
  USER_LOGOUT,
  ADD_USER_PENDING,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  CHANGE_PASSWORD_REJECTED,
  CHANGE_PASSWORD_FULFILLED,
  CHANGE_PASSWORD_FETCHING,
  SET_MAIL_SENDED,
  FORGOT_PASSWORD_FETCHING,
  FORGOT_PASSWORD_REJECTED,
  FORGOT_PASSWORD_FULFILLED,
  FETCH_USERS,
} from '../actions/types'

const initialState = {
  isAuth: false,
  users: [],
  error: null,
  isLoading: false,
  message: undefined,
  logged: false,
  token: '',
  failedLogin: false,
  failedRegister: false,
  user: undefined,
  isFetchingSendMail: false,
  mailSended: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        token: action.payload.token
      }
    case USER_LOGOUT:
      return {
        ...initialState,
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
        user: action.payload.user,
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
      const user = state.users.length ? [...state.users, newUser] : [newUser]
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
    case FORGOT_PASSWORD_FETCHING:
      return {
        ...state,
        isFetchingSendMail: true,
        mailSended: false,
      }
    case FORGOT_PASSWORD_FULFILLED:
      return {
        ...state,
        isFetchingSendMail: false,
        mailSended: true,
      }
    case FORGOT_PASSWORD_REJECTED:
      return {
        ...state,
        isFetchingSendMail: false,
        error: action.error,
        message: action.payload.message,
        mailSended: false
      }
    case SET_MAIL_SENDED:
      return {
        ...state,
        mailSended: action.payload,
      }
    case CHANGE_PASSWORD_FETCHING:
      return {
        ...state,
        isLoading: true
      }
    case CHANGE_PASSWORD_FULFILLED:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      }
    case CHANGE_PASSWORD_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        message: action.payload.message,
      }
    default:
      return state
  }
}