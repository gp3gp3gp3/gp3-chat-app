import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { View } from 'react-native'
import { login } from './actions'
import Login from './containers/Login'
import MessageList from './containers/MessageList'

class Router extends Component {
  constructor (props) {
    super(props)
    const config = {
      apiKey: 'AIzaSyBHymkx-sx64eGJFLNmv8Y7nwakdXCNcpQ',
      authDomain: 'gp3-chat-app.firebaseapp.com',
      databaseURL: 'https://gp3-chat-app.firebaseio.com',
      projectId: 'gp3-chat-app',
      storageBucket: '',
      messagingSenderId: '111539696639'
    }
    firebase.initializeApp(config)
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          props.login(user)
        }
      })
    // this.scrollToBottom = this.scrollToBottom.bind(this)
  }

  // scrollToBottom () {
  //   window.scrollTo({
  //     left: 0,
  //     top: this.messageBox.offsetTop,
  //     behavior: 'smooth'
  //   })
  // }

  render () {
    if (this.props.authenticated) {
      return (
        <View>
          <MessageList
            // scrollToBottom={this.scrollToBottom}
          />
          <View ref={messageBox => {
            this.messageBox = messageBox
          }} />
        </View>
      )
    } else {
      return <Login />
    }
  }
}

const mapStateToProps = ({ auth: { authenticated } }) => {
  return { authenticated }
}

export default connect(mapStateToProps, { login })(Router)
