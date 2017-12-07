/* eslint-env jest */
import reducer from '../../src/reducers/AuthReducer'
import {
  LOGIN_USER,
  LOGOUT
} from '../../src/actions/types'

describe('Auth Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      authenticated: false,
      currentUser: null,
      error: ''
    })
  })
  it('should handle LOGIN_USER', () => {
    const action = {
      type: LOGIN_USER,
      payload: {
        uid: '1234',
        displayName: 'Test User'
      }
    }
    expect(reducer(undefined, action))
      .toEqual({
        authenticated: true,
        error: '',
        currentUser: {
          uid: '1234',
          displayName: 'Test User'
        }
      })
  })
  it('should handle LOGOUT', () => {
    const state = {
      uid: '1234',
      displayName: 'Test User'
    }
    const action = { type: LOGOUT }
    expect(reducer(state, action))
      .toEqual({
        authenticated: false,
        currentUser: null,
        error: ''
      })
  })
  it('should handle LOGIN_USER_ERROR')
})
