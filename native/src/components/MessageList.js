import React from 'react'
import Message from './Message'

const MessageList = ({ messages, currentUser }) => (
  <div className='MessageList'>
    {/* <CSSTransitionGroup
      transitionName='message'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    > */}
    {messages.map(message => <Message {...message} currentUser={currentUser} />)}
    {/* </CSSTransitionGroup> */}
  </div>
)

export default MessageList
