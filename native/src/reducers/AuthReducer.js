import {
  LOGIN_USER,
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
      return { ...INITIAL_STATE }
    case LOGIN_USER:
      return {
        ...INITIAL_STATE,
        authenticated: true,
        currentUser: {
          uid: action.payload.uid,
          displayName: action.payload.displayName
        }
      }
    default:
      return state
  }
}
