/* eslint-env jest */
import reducer from '../../src/reducers/AuthReducer'

describe('Auth Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      authenticated: false,
      currentUser: null,
      error: ''
    })
  })
})
