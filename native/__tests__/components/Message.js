/* eslint-env jest */
import 'react-native'
import { shallow } from 'enzyme'
import React from 'react'
import Message from '../../src/components/Message'

it('renders correctly', () => {
  const props = {
    user: {
      displayName: 'Test User',
      uid: '1234'
    },
    currentUser: {
      uid: '123'
    }
  }
  const wrapper = shallow(
    <Message
      {...props}
    />
)
  expect(wrapper).toMatchSnapshot()
})
