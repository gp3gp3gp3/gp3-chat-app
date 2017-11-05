import React, { PureComponent } from 'react'
import moment from 'moment'
import './MessageList.css'

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
    return (
      <div className='Message-wrapper'>
        <span className='Message'>{this.props.message}</span>
        <span className='Message-time'>{this.state.messageTime}</span>
      </div>
    )
  }
}

export default Message
