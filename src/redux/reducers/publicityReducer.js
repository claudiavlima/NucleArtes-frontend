import {
  POST_PUBLICITY_ONE_FETCHING,
  POST_PUBLICITY_ONE_REJECTED,
  POST_PUBLICITY_ONE_FULFILLED,
  GET_PUBLICITY_ONE_FULFILLED,
  UPDATE_PUBLICITY_ONE_FETCHING,
  UPDATE_PUBLICITY_ONE_FULFILLED,
  UPDATE_PUBLICITY_ONE_REJECTED,
  REMOVE_PUBLICITY_ONE_FETCHING,
  REMOVE_PUBLICITY_ONE_FULFILLED,
  REMOVE_PUBLICITY_ONE_REJECTED,
  POST_PUBLICITY_TWO_FETCHING,
  POST_PUBLICITY_TWO_REJECTED,
  POST_PUBLICITY_TWO_FULFILLED,
  GET_PUBLICITY_TWO_FULFILLED,
  UPDATE_PUBLICITY_TWO_FETCHING,
  UPDATE_PUBLICITY_TWO_FULFILLED,
  UPDATE_PUBLICITY_TWO_REJECTED,
  REMOVE_PUBLICITY_TWO_FETCHING,
  REMOVE_PUBLICITY_TWO_FULFILLED,
  REMOVE_PUBLICITY_TWO_REJECTED,
  POST_PUBLICITY_THIRD_FETCHING,
  POST_PUBLICITY_THIRD_REJECTED,
  POST_PUBLICITY_THIRD_FULFILLED,
  GET_PUBLICITY_THIRD_FULFILLED,
  UPDATE_PUBLICITY_THIRD_FETCHING,
  UPDATE_PUBLICITY_THIRD_FULFILLED,
  UPDATE_PUBLICITY_THIRD_REJECTED,
  REMOVE_PUBLICITY_THIRD_FETCHING,
  REMOVE_PUBLICITY_THIRD_FULFILLED,
  REMOVE_PUBLICITY_THIRD_REJECTED,
  POST_PUBLICITY_FOURTH_FETCHING,
  POST_PUBLICITY_FOURTH_REJECTED,
  POST_PUBLICITY_FOURTH_FULFILLED,
  GET_PUBLICITY_FOURTH_FULFILLED,
  UPDATE_PUBLICITY_FOURTH_FETCHING,
  UPDATE_PUBLICITY_FOURTH_FULFILLED,
  UPDATE_PUBLICITY_FOURTH_REJECTED,
  REMOVE_PUBLICITY_FOURTH_FETCHING,
  REMOVE_PUBLICITY_FOURTH_FULFILLED,
  REMOVE_PUBLICITY_FOURTH_REJECTED,
  POST_PUBLICITY_FIVE_FETCHING,
  POST_PUBLICITY_FIVE_REJECTED,
  POST_PUBLICITY_FIVE_FULFILLED,
  GET_PUBLICITY_FIVE_FULFILLED,
  UPDATE_PUBLICITY_FIVE_FETCHING,
  UPDATE_PUBLICITY_FIVE_FULFILLED,
  UPDATE_PUBLICITY_FIVE_REJECTED,
  REMOVE_PUBLICITY_FIVE_FETCHING,
  REMOVE_PUBLICITY_FIVE_FULFILLED,
  REMOVE_PUBLICITY_FIVE_REJECTED,
} from '../actions/types'

const initialState = {
  publicityOne: [],
  publicityTwo: [],
  publicityThird: [],
  publicityFourth: [],
  publicityFive: [],
  error: null,
  isLoadingOne: false,
  isLoadingTwo: false,
  isLoadingThird: false,
  isLoadingFourth: false,
  isLoadingFive: false,
  message: undefined,
  title: '',
  categoryName: 'TODOS'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PUBLICITY_ONE_FULFILLED:
      console.log('ACTION PAYLOAD PU', action);
      return {
        ...state,
        publicityOne: action.payload,
      }
    case GET_PUBLICITY_TWO_FULFILLED:
      return {
        ...state,
        publicityTwo: action.payload,
      }
    case GET_PUBLICITY_THIRD_FULFILLED:
      return {
        ...state,
        publicityThird: action.payload,
      }
    case GET_PUBLICITY_FOURTH_FULFILLED:
      return {
        ...state,
        publicityFourth: action.payload,
      }
    case GET_PUBLICITY_FIVE_FULFILLED:
      return {
        ...state,
        publicityFive: action.payload,
      }
    case POST_PUBLICITY_ONE_FETCHING:
    case REMOVE_PUBLICITY_ONE_FETCHING:
      return {
        ...state,
        isLoadingOne: true
      }
    case POST_PUBLICITY_TWO_FETCHING:
    case REMOVE_PUBLICITY_TWO_FETCHING:
      return {
        ...state,
        isLoadingTwo: true
      }
    case POST_PUBLICITY_THIRD_FETCHING:
    case REMOVE_PUBLICITY_THIRD_FETCHING:
      return {
        ...state,
        isLoadingThird: true
      }
    case POST_PUBLICITY_FOURTH_FETCHING:
    case REMOVE_PUBLICITY_FOURTH_FETCHING:
      return {
        ...state,
        isLoadingFourth: true
      }
    case POST_PUBLICITY_FIVE_FETCHING:
    case REMOVE_PUBLICITY_FIVE_FETCHING:
      return {
        ...state,
        isLoadingFive: true
      }
    case POST_PUBLICITY_ONE_FULFILLED: {
      const newPublicity = [action.payload.product.data]
      return {
        ...state,
        isLoadingOne: false,
        publicityOne: newPublicity
      }
    }
    case POST_PUBLICITY_TWO_FULFILLED: {
      const newPublicity = [action.payload.product.data]
      return {
        ...state,
        isLoadingTwo: false,
        publicityTwo: newPublicity
      }
    }
    case POST_PUBLICITY_THIRD_FULFILLED: {
      const newPublicity = [action.payload.product.data]
      return {
        ...state,
        isLoadingThird: false,
        publicityThird: newPublicity
      }
    }
    case POST_PUBLICITY_FOURTH_FULFILLED: {
      const newPublicity = [action.payload.product.data]
      return {
        ...state,
        isLoadingFourth: false,
        publicityFourth: newPublicity
      }
    }
    case POST_PUBLICITY_FIVE_FULFILLED: {
      const newPublicity = [action.payload.product.data]
      return {
        ...state,
        isLoadingFive: false,
        publicityFive: newPublicity
      }
    }
    case POST_PUBLICITY_ONE_REJECTED:
      return {
        ...state,
        isLoadingOne: false,
        error: action.error,
        message: action.payload.message
      }
    case POST_PUBLICITY_TWO_REJECTED:
      return {
        ...state,
        isLoadingTwo: false,
        error: action.error,
        message: action.payload.message
      }
    case POST_PUBLICITY_THIRD_REJECTED:
      return {
        ...state,
        isLoadingThird: false,
        error: action.error,
        message: action.payload.message
      }
    case POST_PUBLICITY_FOURTH_REJECTED:
      return {
        ...state,
        isLoadingFourth: false,
        error: action.error,
        message: action.payload.message
      }
    case POST_PUBLICITY_FIVE_REJECTED:
      return {
        ...state,
        isLoadingFive: false,
        error: action.error,
        message: action.payload.message
      }
    case UPDATE_PUBLICITY_ONE_FETCHING:
      return {
        ...state,
        isLoadingOne: true
      }
    case UPDATE_PUBLICITY_TWO_FETCHING:
      return {
        ...state,
        isLoadingTwo: true
      }
    case UPDATE_PUBLICITY_THIRD_FETCHING:
      return {
        ...state,
        isLoadingThird: true
      }
    case UPDATE_PUBLICITY_FOURTH_FETCHING:
      return {
        ...state,
        isLoadingFourth: true
      }
    case UPDATE_PUBLICITY_FIVE_FETCHING:
      return {
        ...state,
        isLoadingFive: true
      }
    case UPDATE_PUBLICITY_ONE_FULFILLED: {
      return {
        ...state,
        isLoadingOne: false,
        publicityOne: [action.payload]
      }
    }
    case UPDATE_PUBLICITY_TWO_FULFILLED: {
      return {
        ...state,
        isLoadingTwo: false,
        publicityTwo: [action.payload]
      }
    }
    case UPDATE_PUBLICITY_THIRD_FULFILLED: {
      return {
        ...state,
        isLoadingThird: false,
        publicityThird: [action.payload]
      }
    }
    case UPDATE_PUBLICITY_FOURTH_FULFILLED: {
      return {
        ...state,
        isLoadingFourth: false,
        publicityFourth: [action.payload]
      }
    }
    case UPDATE_PUBLICITY_FIVE_FULFILLED: {
      return {
        ...state,
        isLoadingFive: false,
        publicityFive: [action.payload]
      }
    }
    case UPDATE_PUBLICITY_ONE_REJECTED:
    case REMOVE_PUBLICITY_ONE_REJECTED:
      return {
        ...state,
        isLoadingOne: false,
        message: action.payload.message
      }
    case UPDATE_PUBLICITY_TWO_REJECTED:
    case REMOVE_PUBLICITY_TWO_REJECTED:
      return {
        ...state,
        isLoadingTwo: false,
        message: action.payload.message
      }
    case UPDATE_PUBLICITY_THIRD_REJECTED:
    case REMOVE_PUBLICITY_THIRD_REJECTED:
      return {
        ...state,
        isLoadingThird: false,
        message: action.payload.message
      }
    case UPDATE_PUBLICITY_FOURTH_REJECTED:
    case REMOVE_PUBLICITY_FOURTH_REJECTED:
      return {
        ...state,
        isLoadingFourth: false,
        message: action.payload.message
      }
    case UPDATE_PUBLICITY_FIVE_REJECTED:
    case REMOVE_PUBLICITY_FIVE_REJECTED:
      return {
        ...state,
        isLoadingFive: false,
        message: action.payload.message
      }
    case REMOVE_PUBLICITY_ONE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        publicityOne: action.payload
      }
    case REMOVE_PUBLICITY_TWO_FULFILLED:
      return {
        ...state,
        isLoading: false,
        publicityTwo: action.payload
      }
    case REMOVE_PUBLICITY_THIRD_FULFILLED:
      return {
        ...state,
        isLoading: false,
        publicityThird: action.payload
      }
    case REMOVE_PUBLICITY_FOURTH_FULFILLED:
      return {
        ...state,
        isLoading: false,
        publicityFourth: action.payload
      }
    case REMOVE_PUBLICITY_FIVE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        publicityFive: action.payload
      }
    default:
      return state
  }
}