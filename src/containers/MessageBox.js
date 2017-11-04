import React, { Component } from 'react'
import MessageBox from '../components/MessageBox/MessageBox'

class MessageBoxContainer extends Component {
  constructor () {
    super()
    this.state = {
      message: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
  }

  onChange ({ target: { value: message } }) {
    this.setState({ message })
  }

  onKeyUp (event) {
    const message = event.target.value.trim()
    if (event.keyCode === 13 && message !== '') {
      event.preventDefault()
      const dbCon = this.props.db.database().ref('/messages')
      dbCon.push({ message })
      this.setState({ message: '' })
    }
  }

  render () {
    return (
      <MessageBox
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
        message={this.state.message}
      />
    )
  }
}

export default MessageBoxContainer
