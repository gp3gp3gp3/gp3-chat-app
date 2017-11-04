import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import Header from './components/Header/Header'
import MessageList from './containers/MessageList'
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
    this.scrollToBottom = this.scrollToBottom.bind(this)
  }

  scrollToBottom () {
    const node = ReactDOM.findDOMNode(this.refs['messageBox'])
    window.scrollTo({
      left: 0,
      top: node.offsetTop,
      behavior: 'smooth'
    })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <div className='Body'>
          <MessageList
            db={firebase}
            scrollToBottom={this.scrollToBottom}
          />
          <MessageBox
            ref='messageBox'
            db={firebase}
          />
        </div>
      </div>
    )
  }
}

export default App
