import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MessageList from '../components/MessageList/MessageList'
import { fetchMessages } from '../actions'

class MessageListContainer extends PureComponent {
  componentDidMount () {
    this.props.fetchMessages()
  }

  componentDidUpdate () {
    this.props.scrollToBottom()
  }

  render () {
    return (
      <MessageList
        {...this.props}
      />
    )
  }
}

const mapDispatchToProps = {
    fetchMessages
}

const mapStateToProps = ({ messages, auth: { currentUser } }) => {
  return {
    messages,
    currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageListContainer)
