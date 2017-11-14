import React from 'react'
import { shallow } from 'enzyme'
import MessageList, { MessageListContainer } from './MessageList'

const createReduxState = () => {
  const currentUser = {}
  const messages = []

  return {
    currentUser,
    messages,
    store: {
      getState: () => ({
        auth: { currentUser },
        messages
      }),
      dispatch: () => {},
      subscribe: () => {},
    }
  }
}


it('renders MessageList with approriate props from store', () => {
  const { store, currentUser, messages } = createReduxState()

  const subject = shallow(<MessageList store={store} />).find(MessageListContainer)

  const actual = subject.prop('currentUser')

  expect(actual).toBe(currentUser)
})
