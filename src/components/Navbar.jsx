import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="slideInTop containerNavbar">
        <div className="logo">
            <a href="#">Alim</a>
        </div>
        <div className="navbar">
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar