import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

class LoginContainer extends Component {
  onLoginClick () {
    this.props.login()
  }

  render () {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', minHeight: 'calc(100vh - 100px)' }}>
        <div><span onClick={this.onLoginClick.bind(this)} style={{fontSize: '2em', backgroundColor: 'lightGrey', padding: 20, borderRadius: 5, cursor: 'pointer'}}>Login with Google</span></div>
      </div>
    )
  }
}

export default connect(null, { login })(LoginContainer)
