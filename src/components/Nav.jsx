import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Music from './Music';
// import Hamburger from "./Hamburger.json";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

<div className="nav-wrap">
    <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={isOpen ? 'open' : ''}>
        <li><NavLink to="/" onClick={toggleMenu} className="li-nav" >Home</NavLink></li>
        <li><NavLink to="/work" onClick={toggleMenu} className="li-nav" >Work</NavLink></li>
        <li><NavLink to="/info" onClick={toggleMenu} className="li-nav" >Info</NavLink></li>
      </ul>
    </nav>
    <div className='music'>
      <Music />

    </div>
    </div>
  );
}


export default Nav;


