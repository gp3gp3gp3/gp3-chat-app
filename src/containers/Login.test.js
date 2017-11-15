import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import Login, { LoginContainer } from './Login'


it('renders Login with approriate props from store', () => {
  const mockStore = configureStore([])
  const store = mockStore({})
  const props = shallow(<Login store={store} />).find(LoginContainer).props()

  expect(props).toHaveProperty('login')
})
