/* eslint-env jest */
import {
  RECIEVE_MESSAGES
} from '../../src/actions/types'

import reducer from '../../src/reducers/MessagesReducer'

describe('Auth Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })
  it('should handle RECIEVE_MESSAGES', () => {
    const action = {
      type: RECIEVE_MESSAGES,
      payload: [
        {
          user: { displayName: 'Test User', uid: '123' },
          message: 'Mesage here'
        }
      ]
    }
    expect(reducer(undefined, action)).toEqual(
      [
        {
          user: { displayName: 'Test User', uid: '123' },
          message: 'Mesage here'
        }
      ]
    )
  })
})
