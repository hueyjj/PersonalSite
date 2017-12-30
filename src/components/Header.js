import React, { Component } from 'react';
import "../styles/Header.css"

class Header extends Component {
  render() {
    return (
      <header>
        <section>
          <a id="logo" href="/">
            <img src="/images/logo.svg" alt="No logo =(" />
          </a>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
          </nav>
        </section>
      </header>
    );
  }
}

export default Header;