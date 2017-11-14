import reducer from './AuthReducer'
import * as types from '../actions/types'

describe ('auth reducer', () => {
  const INITIAL_STATE = {
    authenticated: false,
    currentUser: null,
    error: ''
  }

  it ('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it ('should handle LOGOUT', () => {
    expect(reducer(undefined, { type: types.LOGOUT })).toEqual(INITIAL_STATE)
    expect(reducer({
      authenticated: true,
      currentUser: { uid: 123, displayName: 'George Paul' }
    }, { type: types.LOGOUT })).toEqual(INITIAL_STATE)
  })

  it ('should handle LOGIN_USER', () => {
    expect(reducer(undefined, {
      type: types.LOGIN_USER,
      payload: { uid: 123, displayName: 'George Paul' }
    })).toEqual({
      authenticated: true,
      error: '',
      currentUser: {
        uid: 123,
        displayName: 'George Paul'
      }
    })
  })

  it ('should handle LOGIN_USER_ERROR', () => {
    expect(reducer(undefined, {
      type: types.LOGIN_USER_ERROR,
      payload: 'ERROR HAPPENED'
    })).toEqual({
      authenticated: false,
      error: 'ERROR HAPPENED',
      currentUser: null
    })
  })

})
