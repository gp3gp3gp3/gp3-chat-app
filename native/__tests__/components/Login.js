/* eslint-env jest */
import 'react-native'
// Note: test renderer must be required after react-native.
import { shallow } from 'enzyme'
import React from 'react'
import Login from '../../src/components/Login'

it('renders correctly', () => {
  const wrapper = shallow(<Login />)
  expect(wrapper).toMatchSnapshot()
})
