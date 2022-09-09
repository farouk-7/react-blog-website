import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <div className='navbar'>
      <div className='navbar-container'>
      <Link to='/'><h3 className='logo'>
        <img src='/images/logo-blog.png' height='50px'></img>
        </h3></Link>
      

      <ul className='nav-links'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/blog'><li>Blog</li></Link>
        <Link to='/about'><li>About</li></Link>
      </ul>
      </div>

    </div>
  )
}

export default Navbar