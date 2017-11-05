import React from 'react'
import Headroom from 'react-headroom'
import './Header.css'

const headerStyles = {
  boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
  height: '60px',
  padding: '20px'
}

const Header = () => (
  <Headroom
    style={headerStyles}
    className='App-header'
  >
    <h1 className='App-title'>George's chat app</h1>
  </Headroom>
)

export default Header
