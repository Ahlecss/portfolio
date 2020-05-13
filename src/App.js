import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import './styles/styles.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import AgenceLeaf from './components/Projects/AgenceLeaf';
import INR from './components/Projects/INR';
import Formulez from './components/Projects/Formulez';
import Ecoapp from './components/Projects/Ecoapp';
import Kidz from './components/Projects/Ecoapp';
import Nexity from './components/Projects/Nexity';
import Experiments from './components/Projects/Experiments';
import DesktopMenu from "./components/DesktopMenu/DesktopMenu.jsx";
import MobileMenu from "./components/MobileMenu/MobileMenu.jsx";

export default function App() {

  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  const setCursor = e => {
    setX(e.pageX - 20);
    setY(e.pageY - 20);

    //console.log(e.pageX /10);
  }

  const onMouseOver = e => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'A') {
      const cursor = document.getElementById('cursor');
      cursor.style.transform = 'scale(1)';
    }
  }

  const onMouseOut = e => {
    console.log("leave"); 
    const cursor = document.getElementById('cursor');
    cursor.style.transform = 'scale(0.4)';
  }

  const [isDesktop, setIsDesktop] = useState(true);

  const isMobile = () => {
    console.log(window.screen.width);
    console.log(isDesktop);
    if (window.screen.width < 750) {
      setIsDesktop(false);
    }
  }

  useEffect(() => {
    isMobile();
    console.log('ui');
  }, [window.screen.width])


  /*window.addEventListener('scroll', () => setScroll());
  const setScroll = e => {

    console.log(document.documentElement.clientHeight);
  }*/

  const style = {
    left: x,
    top: y
  }

  const styleBar1 = {
    transform: 'translate(' + x / 10 + 'px,' + y / 10 + 'px) rotate(-25deg)'
  }
  const styleBar2 = {
    transform: 'translate(' + x / 8 + 'px,' + y / 8 + 'px) rotate(-25deg)'
  }
  const styleBar3 = {
    transform: 'translate(' + x / 6 + 'px,' + y / 6 + 'px) rotate(-25deg)'
  }
  const styleBar4 = {
    transform: 'translate(' + x / 4 + 'px,' + y / 4 + 'px) rotate(-25deg)'
  }
  //<div class="cursor-container" onMouseMove={e => setCursor(e)}>

  //<div id="cursor-stroke" style={style}><div id="cursor" style={style}></div>
  return (
    <div className="cursor-container" onMouseMove={(e) => setCursor(e)} onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}>
      <div id="cursor" style={style}><div id="cursor-stroke"></div></div>
      {isDesktop &&
        <Router>
          <div className="website_wrapper">
            <nav>
              <ul className="menu_list">
                <li>
                  <NavLink to="/home" activeClassName='is-active'>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName='is-active'>About</NavLink>
                </li>
                <li>
                  <NavLink to="/projects" activeClassName='is-active'>Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName='is-active'>Contact</NavLink>
                </li>
              </ul>
            </nav>

            <Switch>
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
      } {!isDesktop && <MobileMenu />}

      <div className="bar_wrapper">
        <span className="bar1" style={styleBar1}></span>
        <span className="bar2" style={styleBar2}></span>
        <span className="bar3" style={styleBar3}></span>
        <span className="bar4" style={styleBar4}></span>
      </div>
    </div>
  );
}