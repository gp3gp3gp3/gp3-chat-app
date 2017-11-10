import firebase from 'firebase'
import {
  RECIEVE_MESSAGES
} from './types'

export const addMessage = message => dispatch => {
  const app = firebase.database().ref('/messages')
  app.push({ message, time: Date.now() })
}

export const fetchMessages = () => dispatch => {
  const app = firebase.database().ref('messages')
  const getData = values => dispatch => {
    if (values) {
      const messages = Object.keys(values)
        .map(messageKey => {
          const cloned = JSON.parse(JSON.stringify(values[messageKey]))
          cloned.key = messageKey
          return cloned
        })
      dispatch({ type: RECIEVE_MESSAGES, payload: messages })
    }
  }

  app.on('value', snapshot => {
    getData(snapshot.val())(dispatch)
  })
}
