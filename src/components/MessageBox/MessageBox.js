import React from 'react'

const MessageBox = ({ onChange, onKeyUp, message }) => (
  <form>
    <textarea
      placeholder='Type a message'
      cols='100'
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={message}
    />
  </form>
)

export default MessageBox
