import React, { Component } from 'react';

import "../styles/About.css";
import UpsideDownFace from "../images/UpsideDownFace.png"

class About extends React.Component {
  render() {
    return (
      <div className="content-about">
        <p>
          Not much to say yet!
        </p>
        <img src={UpsideDownFace} alt="=(" />
      </div>
    );
  }
}

export default About;