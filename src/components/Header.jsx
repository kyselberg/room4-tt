import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <NavLink to='/'>
          <img style={{width: '60px'}} src={logo} alt=' ' />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink className='nav-link' to='/'>
              Main
            </NavLink>
            <NavLink className='nav-link' to='/page'>
              Page of artist
            </NavLink>
            <NavLink className='nav-link' to='/search'>
              Search
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
