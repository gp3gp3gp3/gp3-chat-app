import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }
    const app = props.db.database().ref('messages')
    app.on('value', snapshot => {
      this.getData(snapshot.val())
    })
  }

  getData (values) {
    const messages = Object.keys(values)
      .map(messageKey => {
        const cloned = JSON.parse(JSON.stringify(values[messageKey]))
        cloned.key = messageKey
        return cloned
      })
    this.setState({ messages })
  }

  renderMessages () {
    const { messages } = this.state
    return messages.map(message => <Message {...message} />)
  }

  render () {
    return (
      <div>
        {this.renderMessages()}
      </div>
    )
  }
}

export default MessageList
