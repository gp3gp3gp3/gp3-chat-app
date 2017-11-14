import React from 'react'
import { shallow } from 'enzyme'
import MessageList from './MessageList'

it('renders without crashing', () => {
  const props = {
    messages: []
  }
  shallow(<MessageList {...props} />)
})
