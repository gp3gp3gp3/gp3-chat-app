import reducer from './MessagesReducer'
import * as types from '../actions/types'

describe ('messages reducer', () => {
  const INITIAL_STATE = []

  it ('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it ('should handle RECIEVE_MESSAGES', () => {
    expect(reducer(undefined, {
      type: types.RECIEVE_MESSAGES,
      payload: [{ message: 'text here' }]
    })).toEqual([{ message: 'text here' }])
    expect(reducer([{ message: 'text here' }], {
      type: types.RECIEVE_MESSAGES,
      payload: [{ message: 'text here' }, { message: 'another message' }]
    })).toEqual([{ message: 'text here' }, { message: 'another message' }])
  })
})
