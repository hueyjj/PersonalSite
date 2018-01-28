import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import "../styles/Header.css"
import logo from "../images/logo.svg"

import Contact from "./Contact"

class Header extends Component {
  render() {
    return (
        <header>
          <section>
            <a id="logo" href="/">
              <img src={logo} alt="No logo =(" />
            </a>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <a target="__blank" title="Github" href="https://www.github.com/hueyjj">Github</a>
              <a target="__blank" title="LinkedIn" href="https://www.linkedin.com/in/jasperjeng/">LinkedIn</a>
              <Link to="/contact">Contact</Link>
            </nav>
          </section>
        </header>
    );
  }
}

export default Header;