import React, { PureComponent } from 'react'
import MessageBox from '../components/MessageBox/MessageBox'

class MessageBoxContainer extends PureComponent {
  constructor () {
    super()
    this.state = {
      message: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  onChange ({ target: { value: message } }) {
    this.setState({ message })
  }

  onKeyDown (event) {
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
        onKeyDown={this.onKeyDown}
        message={this.state.message}
      />
    )
  }
}

export default MessageBoxContainer
