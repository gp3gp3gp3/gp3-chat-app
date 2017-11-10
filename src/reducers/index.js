import { combineReducers } from 'redux'
import MessagesReducer from './MessagesReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
  messages: MessagesReducer,
  auth: AuthReducer
})
