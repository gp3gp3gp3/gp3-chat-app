import React from 'react'
import Headroom from 'react-headroom'
import './Header.css'

const headerStyles = {
  boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
  background: '#222',
  height: '60px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around'
}

const Header = ({ authenticated, logout }) => (
  <Headroom
    style={headerStyles}
    className='App-header'
  >
    <h1 className='App-title'>George's chat app</h1>
    {authenticated && <h1
      onClick={logout}
      style={{cursor: 'pointer'}}
      className='App-title'
      >Log Out</h1>
    }
  </Headroom>
)

export default Header
