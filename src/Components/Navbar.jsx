import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='navbar navbar-expand-lg navbar-light bg-light'>
  
  <div className='collapse navbar-collapse' id='navbarNavDropdown'>
    <ul className='navbar-nav'>
      <li className='nav-item active'>
        <Link className='nav-link' to='/home'>Home</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/products'>Products</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/aboutus'>About Us</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/contactus'>Contact Us</Link>
      </li>
      
    </ul>
  </div>
</div>
    </>
  )
}

export default Navbar