import React, { Component } from 'react'
import firebase from 'firebase'
import Header from './components/Header/Header'
import MessageList from './components/MessageList/MessageList'
import MessageBox from './containers/MessageBox'
import './App.css'

class App extends Component {
  constructor () {
    super()
    const config = {
      apiKey: 'AIzaSyBHymkx-sx64eGJFLNmv8Y7nwakdXCNcpQ',
      authDomain: 'gp3-chat-app.firebaseapp.com',
      databaseURL: 'https://gp3-chat-app.firebaseio.com',
      projectId: 'gp3-chat-app',
      storageBucket: '',
      messagingSenderId: '111539696639'
    }
    firebase.initializeApp(config)
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <MessageList db={firebase} />
        <MessageBox db={firebase} />
      </div>
    )
  }
}

export default App
