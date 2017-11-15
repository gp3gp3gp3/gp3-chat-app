import React from 'react'
import { shallow } from 'enzyme'
import MessageBox from './MessageBox'

it('renders without crashing', () => {
  shallow(<MessageBox />)
})
