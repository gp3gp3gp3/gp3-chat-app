import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import RouterContainer, { Router } from './Router'

describe ('Router', () => {
  it('renders without crashing', () => {
    shallow(<Router />)
  })

  it ('renders Router with appropriate props from store', () => {
    const mockStore = configureStore([])
    const store = mockStore({ auth: { authenticated: false } })
    const routerProps = shallow(<RouterContainer store={store} />).find(Router).props()

    expect(routerProps).toHaveProperty('authenticated')
    expect(routerProps).toHaveProperty('login')
  })
})
