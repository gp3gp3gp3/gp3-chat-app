import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions'
import Header from '../components/Header/Header'

export const HeaderContainer = props => <Header {...props} />

const mapStateToProps = ({ auth: { authenticated } }) => {
  return {
    authenticated
  }
}

export default connect(mapStateToProps, { logout })(HeaderContainer)
