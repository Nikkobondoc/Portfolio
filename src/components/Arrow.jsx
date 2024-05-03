import React from 'react';
import { NavLink } from 'react-router-dom';

const Arrow = () => {
  return (
    <div className='centered-element'>
        <NavLink to="/work">
        <div id="container">
            <button className="learn-more">
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">My Work</span>
            </button>
        </div>
        </NavLink>
    </div>
  );
};

export default Arrow;
