import React from 'react'
import './Login.css'

const Login = ({ login }) => {
  const onLoginClick = () => login()
  return (
    <div className='Login-wrapper'>
      <div>
        <span
          className='Login-button'
          onClick={onLoginClick}
        >Login with Google</span>
      </div>
    </div>

  )
}

export default Login
