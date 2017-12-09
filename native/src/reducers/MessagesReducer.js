import {
  RECIEVE_MESSAGES
} from '../actions/types'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECIEVE_MESSAGES:
      return [...action.payload]
    default:
      return state
  }
}
