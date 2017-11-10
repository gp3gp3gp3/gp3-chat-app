import firebase from 'firebase'
import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT
} from './types'

export const login = user => dispatch => {
  if (user) {
    dispatch({ type: LOGIN_USER, payload: user })
  } else {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        dispatch({ type: LOGIN_USER, payload: result.user })
    }).catch(error => {
      dispatch({ type: LOGIN_USER_ERROR, payload: error.message })
    })
  }
}

export const logout = () => dispatch => {
  firebase
    .auth()
    .signOut()
  dispatch({ type: LOGOUT })
}
