import React from 'react'
import { shallow } from 'enzyme'
import MessageList from './MessageList'

it('renders without crashing', () => {
  shallow(<MessageList />)
})
