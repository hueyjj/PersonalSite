import React, { Component } from 'react';

import "../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="content-home">
        <p>
          Hey there! My name's <mark className="mark-blue">Jasper Jeng</mark>. I come from the Bay Area (San Jose). I'm an avid fan of emerging new (or old) things in general.
          So things like machine learning, faster browsers (Mozilla), electric cars (Tesla) are all super fun to keep up with.

          <br /><br />

          Lately there's been stuff like Go, Rust, Web Assembly that I've been hearing more and more. Hopefully I can make enough time to dive into them.

          <br /><br />

          Anyway... I'm an aspiring <mark className="mark-orange">software engineer/developer/ ? </mark> hoping to add a <mark className="mark-red">twist</mark> somehow...

          <br /><br />
          But for the time being I'll be hanging around at <mark className="mark-darkblue"><a target="_blank" href="https://www.ucsc.edu/">UCSC</a></mark>
          <br /><br />

          As always good luck and have fun!

        </p>
        <hr />
      </div>
    );
  }
}

export default Home;