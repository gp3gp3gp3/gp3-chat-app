import React, { Component } from 'react'
import MessageList from '../components/MessageList/MessageList'

class MessageListContainer extends Component {
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
    this.setState({ messages }, () => {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth'
      })
    })
  }

  render () {
    return (
      <MessageList
        {...this.state}
      />
    )
  }
}

export default MessageListContainer
