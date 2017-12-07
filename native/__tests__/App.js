/* eslint-env jest */
import 'react-native'
// Note: test renderer must be required after react-native.
import { shallow } from 'enzyme'
import React from 'react'
import App from '../src/App'

it('renders correctly', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})
