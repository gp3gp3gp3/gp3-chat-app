import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { View, StyleSheet } from 'react-native'
import Login from './components/Login'

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
    // firebase
    //   .auth()
    //   .onAuthStateChanged(user => {
    //     if (user) {
    //       props.login(user)
    //     }
    //   })
  }

  render () {
    return (
      <Login />
    )
  }
}

const mapStateToProps = ({ auth: { authenticated } }) => {
  return { authenticated }
}

export default connect(mapStateToProps)(Router)
