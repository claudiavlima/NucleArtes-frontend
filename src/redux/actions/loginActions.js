import {
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_PENDING,
    IS_AUTH,
    USER_LOGOUT,
    ADD_USER_PENDING,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR
} from './types'

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