import React, { PureComponent } from 'react'
import moment from 'moment'

class Message extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      messageTime: moment(props.time).fromNow()
    }
    this.updateMessageTime = this.updateMessageTime.bind(this)
  }

  componentDidMount () {
    this.interval = setInterval(this.updateMessageTime, 3000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  updateMessageTime () {
    const messageTime = moment(this.props.time).fromNow()
    this.setState({ messageTime })
  }

  render () {
    const {
      user: { displayName, uid },
      message,
      currentUser: { uid: currentUserId }
    } = this.props
    const isCurrentUser = uid === currentUserId
    return (
      <div className='Message-wrapper'>
        {!isCurrentUser && <span
          className={`Message-time ${isCurrentUser ? 'current-user' : 'other-user'}`}
        >{displayName}</span>}
        <span
          className={`Message ${isCurrentUser ? 'current-user blue' : 'other-user green'}`}
        >{message}</span>
        <span
          className={`Message-time ${isCurrentUser ? 'current-user' : 'other-user'}`}
        >{this.state.messageTime}</span>
      </div>
    )
  }
}

export default Message
