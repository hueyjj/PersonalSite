import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import "../styles/Projects.css"

class Projects extends React.Component {
  render() {
    return (
      <div className="content-projects">
        <p>
          For now please go to my <a target="__blank" title="Github" href="https://www.github.com/hueyjj">Github</a> or
          <Link to="/resume"> Resume</Link> if its up
          
          <br /><br />
          
          m(_ _) m
        
        </p>
      </div>
    );
  }
}

export default Projects;