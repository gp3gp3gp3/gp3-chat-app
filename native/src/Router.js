import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { View, Text } from 'react-native'
import { login } from './actions'
import Login from './containers/Login'

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
  }

  render () {
    if (this.props.authenticated) {
      return <View><Text>hello</Text></View>
    } else {
      return <Login />
    }
  }
}

const mapStateToProps = ({ auth: { authenticated } }) => {
  return { authenticated }
}

export default connect(mapStateToProps, { login })(Router)
