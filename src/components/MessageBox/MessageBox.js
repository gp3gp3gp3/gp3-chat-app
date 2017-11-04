import React from 'react'
import './MessageBox.css'

const MessageBox = ({ onChange, onKeyUp, message }) => (
  <form>
    <textarea
      placeholder='Aa'
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={message}
    />
  </form>
)

export default MessageBox
