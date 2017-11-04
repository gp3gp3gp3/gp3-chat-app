import React from 'react'
import './MessageBox.css'

const MessageBox = ({ onChange, onKeyDown, message }) => (
  <div className='form-wrapper'>
    <form>
      <input
        className='message-input'
        placeholder='Aa'
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={message}
      />
    </form>
  </div>
)

export default MessageBox
