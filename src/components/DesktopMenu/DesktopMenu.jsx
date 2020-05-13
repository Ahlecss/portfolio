import React from 'react';
import {
  NavLink
} from "react-router-dom";

import './DesktopMenu.scss';

const DesktopMenu = () => {

  const handleHover = (e) => {
    console.log(e);
}

  return (
    <nav>
    <ul className="menu_list">
      <li onMouseOver={(e) => handleHover(e)}>
        <NavLink to="/" activeClassName='is-active'>Home</NavLink>
      </li>
      <li onMouseOver={(e) => handleHover(e)}>
        <NavLink to="/about" activeClassName='is-active'>About</NavLink>
      </li>
      <li onMouseOver={(e) => handleHover(e)}>
        <NavLink to="/projects" activeClassName='is-active'>Projects</NavLink>
      </li>
      <li onMouseOver={(e) => handleHover(e)}>
        <NavLink to="/contact" activeClassName='is-active'>Contact</NavLink>
      </li>
    </ul>
</nav>

  )
}

export default DesktopMenu;
