import React from 'react'
import { View } from 'react-native'
import Message from './Message'

const MessageList = ({ messages, currentUser }) => (
  <View className='MessageList'>
    {/* <CSSTransitionGroup
      transitionName='message'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    > */}
    {messages.map(message => <Message {...message} currentUser={currentUser} />)}
    {/* </CSSTransitionGroup> */}
  </View>
)

export default MessageList
