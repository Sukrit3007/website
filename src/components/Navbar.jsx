import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/"  className='links'>🏠 home</Link>
        <Link to="Projects" className='links'>📎 projects</Link>
        <Link to="About" className='links'>🔖 about</Link>
        <Link to="Contact" className='links'>✉️ contact me</Link>
    </div>
  )
}

export default Navbar
