import {
  GET_ORDER_FULFILLED,
  POST_ORDER_FULFILLED,
  POST_ORDER_REJECTED,
  POST_ORDER_FETCHING,
  ORDER_CANCEL_FETCHING,
  ORDER_CANCEL_REJECTED,
  ORDER_CANCEL_FULFILLED
} from '../actions/types'

const initialState = {
  items: [],
  error: null,
  isLoading: false,
  message: undefined,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORDER_FULFILLED:
      console.log('ACTION PAYLOAD', action.payload);
      return {
        ...state,
        items: action.payload,
      }
    case POST_ORDER_FETCHING:
    case ORDER_CANCEL_FETCHING:
      return {
        ...state,
        isLoading: true
      }
    case POST_ORDER_FULFILLED: {
      const newSales = action.payload.order.data
      const sales = [...state.items, newSales]
      return {
        ...state,
        isLoading: false,
        items: sales
      }
    }
    case ORDER_CANCEL_FULFILLED: {
      const newOrderUpdated = [...state.items]
      const orderToUpdated = newOrderUpdated.findIndex(
        ele => ele._id === action.payload._id
      )
      newOrderUpdated.splice(orderToUpdated, 1, action.payload);
      return {
        ...state,
        isLoading: false,
        items: newOrderUpdated
      }
    }
    case ORDER_CANCEL_REJECTED:
    case POST_ORDER_REJECTED:
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