import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import MessageBox from '../components/MessageBox/MessageBox'

export class MessageBoxContainer extends PureComponent {
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
      this.props.addMessage(message)
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

const mapDispatchToProps = { addMessage }

export default connect(null, mapDispatchToProps)(MessageBoxContainer)
