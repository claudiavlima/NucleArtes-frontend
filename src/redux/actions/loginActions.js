import {
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_PENDING,
  IS_AUTH,
  USER_LOGOUT,
  ADD_USER_PENDING,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  FORGOT_PASSWORD_FETCHING,
  FORGOT_PASSWORD_REJECTED,
  FORGOT_PASSWORD_FULFILLED,
  SET_MAIL_SENDED,
  CHANGE_PASSWORD_FETCHING,
  CHANGE_PASSWORD_FULFILLED,
  CHANGE_PASSWORD_REJECTED,
  FETCH_USERS,
} from './types'

// FETCH PRODUCTS
export const fetchUsers = () => dispatch => {
  fetch('http://localhost:5000/api/users')
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: FETCH_USERS, payload: data })
    })
}

//LOGIN USER ACCOUNT
export const loginAccount = data => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER_PENDING
    })
    const options = {
      timeout: 25000,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: document.getElementById('inputEmail').value,
        password: document.getElementById('inputPassword').value
      })
    }
    return fetch('http://localhost:5000/api/users/signIn', options)
      .then(res => res.json())
      .then(res => {
        if (res.msg !== 'Invalid Email or password') {
          return dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res
          })
        } else {
          return dispatch({
            type: LOGIN_USER_ERROR,
            payload: res.error
          })
        }
      })
  }
}

//IS AUTH
export const isAuth = isAuth => {
  return {
    type: IS_AUTH,
    payload: isAuth
  }
}

//LOGOUT
export const logOut = dispatch => {
  return {
    type: USER_LOGOUT
  }
}

//POST USERS
export const postUser = user => {
  return dispatch => {
    dispatch({
      type: ADD_USER_PENDING
    })
    const options = {
      timeout: 25000,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    return fetch(`http://localhost:5000/api/users`, options)
      .then(res => res.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: ADD_USER_SUCCESS,
          payload: {
            user: data
          }
        })
      })
      .catch(error => {
        return dispatch({
          type: ADD_USER_ERROR,
          payload: error
        })
      })
  }
}

export const forgotPassword = data => {
  return dispatch => {
    dispatch({
      type: FORGOT_PASSWORD_FETCHING,
    })
    const options = {
      timeout: 25000,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch('http://localhost:5000/api/users/forgot-password', options)
      .then(res => res.json())
      .then(res => {
        if (res.msg !== 'Invalid Email or password') {
          return dispatch({
            type: FORGOT_PASSWORD_FULFILLED,
            payload: res
          })
        } else {
          return dispatch({
            type: FORGOT_PASSWORD_REJECTED,
            payload: res.error
          })
        }
      })
  }
}

export const setMailSended = (data) => {
  return dispatch => {
    dispatch({
      type: SET_MAIL_SENDED,
      payload: data,
    })
  }
}

export const changePassword = (data) => {
  return dispatch => {
    dispatch({
      type: CHANGE_PASSWORD_FETCHING,
    })
    const options = {
      timeout: 25000,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(`http://localhost:5000/api/users/change-password/${data.id}`, options)
      .then(res => res.json())
      .then(res => {
        if (res.msg !== 'Invalid Email or password') {
          return dispatch({
            type: CHANGE_PASSWORD_FULFILLED,
            payload: res
          })
        } else {
          return dispatch({
            type: CHANGE_PASSWORD_REJECTED,
            payload: res.error
          })
        }
      })
  }
}