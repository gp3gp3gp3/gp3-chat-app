import React from 'react'
import { shallow } from 'enzyme'
import Message from './Message'

it('renders without crashing', () => {
  const props = {
    user: {
      displayName: 'George Paul',
      uid: 123
    },
    message: 'Hi this is a message',
    currentUser: { uid: 1234 }
  }
  shallow(<Message {...props} />)
})
