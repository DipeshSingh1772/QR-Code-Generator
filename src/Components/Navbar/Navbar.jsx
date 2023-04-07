import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_main'>
      <div className='navbar_logo'>
        QR Generator
      </div>
      <div className='navbar_links'>
        <a className='link' href='#'>About</a>
      </div>
    </div>
  )
}

export default Navbar
