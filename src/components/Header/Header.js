import React from 'react'
import Headroom from 'react-headroom'
import './Header.css'

const Header = () => (
  <Headroom
    style={{background: 'black', height: '60px', padding: '20px'}}
    className='App-header'
  >
    <h1 className='App-title'>George's chat app</h1>
  </Headroom>
)

export default Header
