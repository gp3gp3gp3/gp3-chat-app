import {
  LOGIN_USER,
  LOGIN_USER_FETCH,
  LOGIN_USER_ERROR
} from '../actions/types'

const INITIAL_STATE = {
  authenticated: false,
  loading: false,
  currentUser: null,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_FETCH:
      return {
        ...INITIAL_STATE,
        loading: true
      }
    case LOGIN_USER:
      return {
        ...INITIAL_STATE,
        authenticated: true,
        currentUser: action.payload
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
