/* eslint-env jest */
import 'react-native'
// Note: test renderer must be required after react-native.
import { shallow } from 'enzyme'
import React from 'react'
import configureStore from 'redux-mock-store'
import Router from '../src/Router'

const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = { auth: { authenticated: false } }

it('renders correctly with store', () => {
  const wrapper = shallow(
    <Router />,
    { context: { store: mockStore(initialState) } }
  )
  expect(wrapper).toMatchSnapshot()
})
