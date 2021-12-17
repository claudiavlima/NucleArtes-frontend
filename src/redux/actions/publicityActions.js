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
} from './types'
import store from '../store'

// FETCH PRODUCTS
export const fetchPublicityOne = () => dispatch => {
  fetch(`http://localhost:5000/api/publicity/publicityOne`)
    .then(res => res.json())
    .then(data => {
      console.log('DATA', data)
      return dispatch({ type: GET_PUBLICITY_ONE_FULFILLED, payload: data })
    })
}

// FETCH PRODUCTS
export const fetchPublicityTwo = () => dispatch => {
  fetch('http://localhost:5000/api/publicity/publicityTwo')
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: GET_PUBLICITY_TWO_FULFILLED, payload: data })
    })
}

// FETCH PRODUCTS
export const fetchPublicityThird = () => dispatch => {
  fetch('http://localhost:5000/api/publicity/publicityThird')
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: GET_PUBLICITY_THIRD_FULFILLED, payload: data })
    })
}

// FETCH PRODUCTS
export const fetchPublicityFourth = () => dispatch => {
  fetch('http://localhost:5000/api/publicity/publicityFourth')
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: GET_PUBLICITY_FOURTH_FULFILLED, payload: data })
    })
}

// FETCH PRODUCTS
export const fetchPublicityFive = () => dispatch => {
  fetch('http://localhost:5000/api/publicity/publicityFive')
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: GET_PUBLICITY_FIVE_FULFILLED, payload: data })
    })
}

// POST PRODUCTS
export const postPublicityOne = publicity => {
  return dispatch => {
    dispatch({
      type: POST_PUBLICITY_ONE_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      },
      body: JSON.stringify(publicity)
    }
    return fetch('http://localhost:5000/api/publicity/publicityOne', options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: POST_PUBLICITY_ONE_FULFILLED,
          payload: {
            product: data
          }
        })
      })
      .catch(error => {
        return dispatch({
          type: POST_PUBLICITY_ONE_REJECTED,
          payload: error
        })
      })
  }
}

export const postPublicityTwo = publicity => {
  return dispatch => {
    dispatch({
      type: POST_PUBLICITY_TWO_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      },
      body: JSON.stringify(publicity)
    }
    return fetch('http://localhost:5000/api/publicity/publicityTwo', options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: POST_PUBLICITY_TWO_FULFILLED,
          payload: {
            product: data
          }
        })
      })
      .catch(error => {
        return dispatch({
          type: POST_PUBLICITY_TWO_REJECTED,
          payload: error
        })
      })
  }
}

export const postPublicityThird = publicity => {
  return dispatch => {
    dispatch({
      type: POST_PUBLICITY_THIRD_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      },
      body: JSON.stringify(publicity)
    }
    return fetch('http://localhost:5000/api/publicity/publicityThird', options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: POST_PUBLICITY_THIRD_FULFILLED,
          payload: {
            product: data
          }
        })
      })
      .catch(error => {
        return dispatch({
          type: POST_PUBLICITY_THIRD_REJECTED,
          payload: error
        })
      })
  }
}

export const postPublicityFourth = publicity => {
  return dispatch => {
    dispatch({
      type: POST_PUBLICITY_FOURTH_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      },
      body: JSON.stringify(publicity)
    }
    return fetch('http://localhost:5000/api/publicity/publicityFourth', options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: POST_PUBLICITY_FOURTH_FULFILLED,
          payload: {
            product: data
          }
        })
      })
      .catch(error => {
        return dispatch({
          type: POST_PUBLICITY_FOURTH_REJECTED,
          payload: error
        })
      })
  }
}

export const postPublicityFive = publicity => {
  return dispatch => {
    dispatch({
      type: POST_PUBLICITY_FIVE_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      },
      body: JSON.stringify(publicity)
    }
    return fetch('http://localhost:5000/api/publicity/publicityFive', options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: POST_PUBLICITY_FIVE_FULFILLED,
          payload: {
            product: data
          }
        })
      })
      .catch(error => {
        return dispatch({
          type: POST_PUBLICITY_FIVE_REJECTED,
          payload: error
        })
      })
  }
}

// DELETE THE PRODUCTS
export const deletePublicityOne = code => {
  return dispatch => {
    dispatch({
      type: REMOVE_PUBLICITY_ONE_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      }
    }
    return fetch(`http://localhost:5000/api/publicityOne/${code}`, options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: REMOVE_PUBLICITY_ONE_FULFILLED,
          payload: data
        })
      })
      .catch(error => {
        return dispatch({
          type: REMOVE_PUBLICITY_ONE_REJECTED,
          payload: error
        })
      })
  }
}

export const deletePublicityTwo = code => {
  return dispatch => {
    dispatch({
      type: REMOVE_PUBLICITY_TWO_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      }
    }
    return fetch(`http://localhost:5000/api/publicityTwo/${code}`, options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: REMOVE_PUBLICITY_TWO_FULFILLED,
          payload: data
        })
      })
      .catch(error => {
        return dispatch({
          type: REMOVE_PUBLICITY_TWO_REJECTED,
          payload: error
        })
      })
  }
}

export const deletePublicityThird = code => {
  return dispatch => {
    dispatch({
      type: REMOVE_PUBLICITY_THIRD_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      }
    }
    return fetch(`http://localhost:5000/api/publicityThird/${code}`, options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: REMOVE_PUBLICITY_THIRD_FULFILLED,
          payload: data
        })
      })
      .catch(error => {
        return dispatch({
          type: REMOVE_PUBLICITY_THIRD_REJECTED,
          payload: error
        })
      })
  }
}

export const deletePublicityFourth = code => {
  return dispatch => {
    dispatch({
      type: REMOVE_PUBLICITY_FOURTH_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      }
    }
    return fetch(`http://localhost:5000/api/publicityFourth/${code}`, options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: REMOVE_PUBLICITY_FOURTH_FULFILLED,
          payload: data
        })
      })
      .catch(error => {
        return dispatch({
          type: REMOVE_PUBLICITY_FOURTH_REJECTED,
          payload: error
        })
      })
  }
}

export const deletePublicityFive = code => {
  return dispatch => {
    dispatch({
      type: REMOVE_PUBLICITY_FIVE_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      }
    }
    return fetch(`http://localhost:5000/api/publicityFive/${code}`, options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: REMOVE_PUBLICITY_FIVE_FULFILLED,
          payload: data
        })
      })
      .catch(error => {
        return dispatch({
          type: REMOVE_PUBLICITY_FIVE_REJECTED,
          payload: error
        })
      })
  }
}

// UPDATE PRODUCTS
export const updatePublicityOne = publicity => {
  return dispatch => {
    dispatch({
      type: UPDATE_PUBLICITY_ONE_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      },
      body: JSON.stringify({ ...publicity })
    }
    return fetch(`http://localhost:5000/api/publicityOne/${publicity._id}`, options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: UPDATE_PUBLICITY_ONE_FULFILLED,
          payload: publicity
        })
      })
      .catch(error => {
        return dispatch({
          type: UPDATE_PUBLICITY_ONE_REJECTED,
          payload: error
        })
      })
  }
}

export const updatePublicityTwo = publicity => {
  return dispatch => {
    dispatch({
      type: UPDATE_PUBLICITY_TWO_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      },
      body: JSON.stringify({ ...publicity })
    }
    return fetch(`http://localhost:5000/api/publicityTwo/${publicity._id}`, options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: UPDATE_PUBLICITY_TWO_FULFILLED,
          payload: publicity
        })
      })
      .catch(error => {
        return dispatch({
          type: UPDATE_PUBLICITY_TWO_REJECTED,
          payload: error
        })
      })
  }
}

export const updatePublicityThird = publicity => {
  return dispatch => {
    dispatch({
      type: UPDATE_PUBLICITY_THIRD_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      },
      body: JSON.stringify({ ...publicity })
    }
    return fetch(`http://localhost:5000/api/publicityThird/${publicity._id}`, options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: UPDATE_PUBLICITY_THIRD_FULFILLED,
          payload: publicity
        })
      })
      .catch(error => {
        return dispatch({
          type: UPDATE_PUBLICITY_THIRD_REJECTED,
          payload: error
        })
      })
  }
}

export const updatePublicityFourth = publicity => {
  return dispatch => {
    dispatch({
      type: UPDATE_PUBLICITY_FOURTH_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      },
      body: JSON.stringify({ ...publicity })
    }
    return fetch(`http://localhost:5000/api/publicityFourth/${publicity._id}`, options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: UPDATE_PUBLICITY_FOURTH_FULFILLED,
          payload: publicity
        })
      })
      .catch(error => {
        return dispatch({
          type: UPDATE_PUBLICITY_FOURTH_REJECTED,
          payload: error
        })
      })
  }
}

export const updatePublicityFive = publicity => {
  return dispatch => {
    dispatch({
      type: UPDATE_PUBLICITY_FIVE_FETCHING
    })
    const {
      users: { token }
    } = store.getState()
    const options = {
      timeout: 25000,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${token}`
      },
      body: JSON.stringify({ ...publicity })
    }
    return fetch(`http://localhost:5000/api/publicityFive/${publicity._id}`, options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: UPDATE_PUBLICITY_FIVE_FULFILLED,
          payload: publicity
        })
      })
      .catch(error => {
        return dispatch({
          type: UPDATE_PUBLICITY_FIVE_REJECTED,
          payload: error
        })
      })
  }
}