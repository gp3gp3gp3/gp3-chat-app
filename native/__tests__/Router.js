/* eslint-env jest */
import { shallow } from 'enzyme'
import React from 'react'
import configureStore from 'redux-mock-store'
import Router from '../src/Router'

const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = { auth: { authenticated: false } }

jest.mock('react-native-google-sign-in', () => {
  return {
    configure: jest.fn(),
    signInPromise: jest.fn()
  }
})

it('renders correctly with store', () => {
  const wrapper = shallow(
    <Router />,
    { context: { store: mockStore(initialState) } }
  )
  expect(wrapper).toMatchSnapshot()
})
