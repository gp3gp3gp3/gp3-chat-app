import React, { PureComponent } from 'react'
import MessageList from '../components/MessageList/MessageList'

class MessageListContainer extends PureComponent {
  constructor () {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount () {
    const app = this.props.db.database().ref('messages')
    app.on('value', snapshot => {
      this.getData(snapshot.val())
    })
  }

  getData (values) {
    if (values) {
      const messages = Object.keys(values)
        .map(messageKey => {
          const cloned = JSON.parse(JSON.stringify(values[messageKey]))
          cloned.key = messageKey
          return cloned
        })
      this.setState({ messages }, this.props.scrollToBottom)
    }
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
