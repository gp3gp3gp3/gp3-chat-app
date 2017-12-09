import firebase from 'firebase'
import GoogleSignIn from 'react-native-google-sign-in'
import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT
} from './types'

export const login = user => dispatch => {
  if (user) {
    dispatch({ type: LOGIN_USER, payload: user })
  } else {
    GoogleSignIn.configure({
      clientId: '111539696639-rio84crtrl16f0inpn5de5lf08hu3egs.apps.googleusercontent.com'
    })
    GoogleSignIn.signInPromise()
      .then(({ idToken, userID, name }) => {
        const provider = firebase.auth.GoogleAuthProvider
        const credential = provider.credential(idToken)
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(() => {
            dispatch({ type: LOGIN_USER, payload: { displayName: name, uid: userID } })
          }).catch(error => {
            console.log('errr', error)
            dispatch({ type: LOGIN_USER_ERROR, payload: error.message })
          })
      })
  }
}

export const logout = () => dispatch => {
  firebase
    .auth()
    .signOut()
  dispatch({ type: LOGOUT })
}
