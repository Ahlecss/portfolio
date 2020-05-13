import React, { Fragment, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

import './MobileMenu.scss'
import '../../styles//styles.scss';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import AgenceLeaf from '../Projects/AgenceLeaf';
import INR from '../Projects/INR';
import Formulez from '../Projects/Formulez';
import Ecoapp from '../Projects/Ecoapp';
import Kidz from '../Projects/Ecoapp';
import Nexity from '../Projects/Nexity';
import Experiments from '../Projects/Experiments';

const MobileMenu = () => {

  const [burgerOpen, setBurgerOpen] = useState(false);
  //const overlay = useRef(null);
  //console.log(overlay);
  console.log("mobile");

  useEffect(() => {
    const overlay = document.getElementById("nav");
    if (!burgerOpen) {
      overlay.classList.remove('navigation_overlay_open');
      document.getElementsByClassName('burger-icon1')[0].style.transform = '';
      document.getElementsByClassName('burger-icon2')[0].style.transform = '';
    } else {
      overlay.classList.add('navigation_overlay_open');
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
      document.getElementsByClassName('burger-icon1')[0].style.transform = 'translateY(-5px) translateX(4px) rotate(45deg)';
      document.getElementsByClassName('burger-icon2')[0].style.transform = 'translateY(5px) translateX(4px) rotate(-45deg)';
    }
  }, [burgerOpen])

  return (
    <Fragment>
      <div className='navigation_overlay' id='nav'></div>
      <Router>
        <div className="website_wrapper">
          <div className='stroke-menu-icon' onClick={() => setBurgerOpen(!burgerOpen)}>
            <div className='burger-icon1'></div>
            <div className='burger-icon2'></div>
          </div>
          {burgerOpen &&
            <>


              <nav className="mobile_nav">
                <ul className="mobile_menu_list">
                  <li>
                    <NavLink to="/home" activeClassName='is-active' onClick={() => setBurgerOpen(!burgerOpen)}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" activeClassName='is-active' onClick={() => setBurgerOpen(!burgerOpen)}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" activeClassName='is-active' onClick={() => setBurgerOpen(!burgerOpen)}>Projects</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" activeClassName='is-active' onClick={() => setBurgerOpen(!burgerOpen)}>Contact</NavLink>
                  </li>
                </ul>
              </nav>
            </>
          }

          <Switch>
          <Redirect exact from="/" to="/home" />
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/projects/agenceleaf">
              <AgenceLeaf />
            </Route>
            <Route exact path="/projects/inr">
              <INR />
            </Route>
            <Route exact path="/projects/formulez">
              <Formulez />
            </Route>
            <Route exact path="/projects/ecoapp">
              <Ecoapp />
            </Route>
            <Route exact path="/projects/kidz">
              <Kidz />
            </Route>
            <Route exact path="/projects/nexity">
              <Nexity />
            </Route>
            <Route exact path="/projects/experiments">
              <Experiments />
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  )
}

export default MobileMenu;
