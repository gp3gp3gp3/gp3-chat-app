import React from 'react'
import Message from './Message'
import './MessageList.css'

const MessageList = ({ messages }) => (
  <div className='MessageList'>
    {messages.map(message => <Message {...message} />)}
  </div>
)

export default MessageList
