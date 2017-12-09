/* eslint-env jest */
import 'react-native'
// Note: test renderer must be required after react-native.
import { shallow } from 'enzyme'
import React from 'react'
import { login } from '../../src/actions'
import Login from '../../src/components/Login'

jest.mock('react-native-google-sign-in', () => {
  return {
    configure: jest.fn(),
    signInPromise: jest.fn()
  }
})

it('renders correctly', () => {
  const wrapper = shallow(<Login login={login} />)
  expect(wrapper).toMatchSnapshot()
})
