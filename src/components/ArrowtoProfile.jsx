import React from 'react'
import { NavLink } from 'react-router-dom';


const ArrowtoProfile = () => {
  return (
    <div className='centered-element-profile'>
    <NavLink to="/info">
    <div id="container-meetMe">
        <button className="learn-more">
        <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
        </span>
        <span className="button-text">Meet Me!</span>
        </button>
    </div>
    </NavLink>
</div>
  )
}

export default ArrowtoProfile