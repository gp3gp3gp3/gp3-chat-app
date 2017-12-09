/* eslint-env jest */
import 'react-native'
import { shallow } from 'enzyme'
import React from 'react'
import configureStore from 'redux-mock-store'
import MessageList from '../../src/containers/MessageList'

jest.mock('react-native-google-sign-in', () => {
  return {
    configure: jest.fn(),
    signInPromise: jest.fn()
  }
})

const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = {
  auth: {
    authenticated: true,
    currentUser: {
      displayName: 'Test User',
      uid: '1234'
    }
  },
  messages: [
    {
      user: {
        displayName: 'Other user',
        uid: '12345'
      },
      message: 'Test Message',
      currentUser: {
        displayName: 'Test User',
        uid: '1234'
      },
      time: '12:30'
    },
    {
      user: {
        displayName: 'Other user',
        uid: '12345'
      },
      message: 'Test Message 2',
      currentUser: {
        displayName: 'Test User',
        uid: '1234'
      },
      time: '12:30'
    }
  ]
}

it('renders correctly with store', () => {
  const wrapper = shallow(
    <MessageList />,
    { context: { store: mockStore(initialState) } }
  )
  expect(wrapper).toMatchSnapshot()
})
