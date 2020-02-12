import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul className="navBar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/aboutMe">About me</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
  )
}

export default NavBar;
