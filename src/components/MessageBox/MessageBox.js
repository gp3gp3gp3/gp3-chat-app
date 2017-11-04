import React, { Component } from 'react'

class MessageBox extends Component {
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
      <form>
        <textarea
          placeholder='Type a message'
          cols='100'
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          value={this.state.message}
        />
      </form>
    )
  }
}

export default MessageBox
