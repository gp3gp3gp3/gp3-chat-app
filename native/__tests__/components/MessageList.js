/* eslint-env jest */
import 'react-native'
import { shallow } from 'enzyme'
import React from 'react'
import MessageList from '../../src/components/MessageList'

it('renders correctly', () => {
  const wrapper = shallow(<MessageList messages={[]} />)
  expect(wrapper).toMatchSnapshot()
})
