import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import firebase from 'firebase'
import Header from './components/Header/Header'
import MessageList from './containers/MessageList'
import MessageBox from './containers/MessageBox'
import Login from './containers/Login'
import { login } from './actions'
import './App.css'

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

  renderApp () {
    if (this.props.loading) {
      return <div />
    } else if (this.props.authenticated) {
      return (
        <div className='Body'>
          <MessageList
            scrollToBottom={this.scrollToBottom}
          />
          <MessageBox
            ref='messageBox'
          />
        </div>
      )
    } else {
      return <Login />
    }
  }

  render () {
    return (
      <div className='App'>
        <Header />
        {this.renderApp()}
      </div>
    )
  }
}

const mapStateToProps = ({ auth: { authenticated, loading } }) => {
  return { authenticated, loading }
}

export default connect(mapStateToProps, { login })(Router)
