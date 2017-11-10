import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT
} from '../actions/types'

const INITIAL_STATE = {
  authenticated: false,
  currentUser: null,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...INITIAL_STATE
      }
    case LOGIN_USER:
      return {
        ...INITIAL_STATE,
        authenticated: true,
        currentUser: {
          uid: action.payload.uid,
          displayName: action.payload.displayName
        }
      }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload
      }
    default:
      return state
  }
}
