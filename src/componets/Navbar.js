import React from 'react';
import './Navbar.css'
import Logo from "../assets/icons(svg)/logo-sm.svg";
import User from "../assets/images(png)/Projects Avatar.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-image">

        <img src={Logo} alt="" />
        </div>
        <h6 className="logo-text">Untitled Survey</h6>
      </div>
      <div className="user-info">
        <p>SteveJohn Olumese</p>
        <img src={User} alt="" />
        </div>
        </div>
  )
}

export default Navbar
