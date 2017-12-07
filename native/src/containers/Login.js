import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import Login from '../components/Login'

export const LoginContainer = props => <Login {...props} />

export default connect(null, { login })(LoginContainer)
