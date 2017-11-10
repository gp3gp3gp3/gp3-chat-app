import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import Message from './Message'
import './MessageList.css'

const MessageList = ({ messages, currentUser }) => (
  <div className='MessageList'>
    <CSSTransitionGroup
      transitionName='message'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {messages.map(message => <Message {...message} currentUser={currentUser} />)}
    </CSSTransitionGroup>
  </div>
)

export default MessageList
