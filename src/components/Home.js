import React, { Component } from 'react';

import "../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-content">
        <h1 className="paragraph-header">Who am I</h1>
        <p>
        Hey there! My name's Jasper Jeng. I come from the Bay Area (San Jose). I'm an avid fan of emerging new (or old) things in general. 
        So things like machine learning, faster browsers (Mozilla), electric cars (Tesla) are all super fun to look at.       
        </p>
        <hr />
      </div>
    );
  }
}

export default Home;