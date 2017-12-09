import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import MessagesReducer from './MessagesReducer'

export default combineReducers({
  auth: AuthReducer,
  messages: MessagesReducer
})
