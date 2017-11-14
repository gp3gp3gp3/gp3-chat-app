import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import Header, { HeaderContainer } from './Header'


it('renders Header with approriate props from store', () => {
  const mockStore = configureStore([])
  const store = mockStore({ auth: { authenticated: true } })
  const props = shallow(<Header store={store} />).find(HeaderContainer).props()

  expect(props).toHaveProperty('authenticated')
  expect(props).toHaveProperty('logout')
})
