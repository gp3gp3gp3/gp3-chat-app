import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import MessageBox, { MessageBoxContainer } from './MessageBox'


it('renders MessageBox with approriate props from store', () => {
  const mockStore = configureStore([])
  const store = mockStore({})
  const messageBoxProps = shallow(<MessageBox store={store} />).find(MessageBoxContainer).props()

  expect(messageBoxProps).toHaveProperty('addMessage')
})
