import React from 'react'
import ReactDOM from 'react-dom'
import MessageList from './MessageList'
import firebase from 'firebase'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const config = {
    apiKey: 'AIzaSyBHymkx-sx64eGJFLNmv8Y7nwakdXCNcpQ',
    authDomain: 'gp3-chat-app.firebaseapp.com',
    databaseURL: 'https://gp3-chat-app.firebaseio.com',
    projectId: 'gp3-chat-app',
    storageBucket: '',
    messagingSenderId: '111539696639'
  }
  firebase.initializeApp(config)
  ReactDOM.render(<MessageList db={firebase} />, div)
})
