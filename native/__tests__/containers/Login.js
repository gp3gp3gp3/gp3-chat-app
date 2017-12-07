/* eslint-env jest */
import 'react-native'
import { shallow } from 'enzyme'
import React from 'react'
import configureStore from 'redux-mock-store'
import Login from '../../src/containers/Login'

const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = { auth: { authenticated: false } }

it('renders correctly with store', () => {
  const wrapper = shallow(
    <Login />,
    { context: { store: mockStore(initialState) } }
  )
  expect(wrapper).toMatchSnapshot()
})
