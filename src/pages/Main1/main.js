import React from "react";
import { Link } from "react-router-dom";
import Particle from "../Particle/partical";
const main = () => {
  return (
    <>
      <Particle id='particle' color='#101010' />
      <div className='container'>
        <div className='section1'>
          <div className='logo1'>CodeFusion</div>
          <div>
            <Link to='/join' className='sharebtn'>
              Share Code Now
            </Link>
          </div>
        </div>
        <div className='section2'>
          <div>
            <div id='logo2'>IDE</div>
            <div>
              An online IDE for HTML, CSS, and JavaScript is a web-based
              platform that enables developers to write, edit, and test their
              code in a browser. It offers features like syntax highlighting,
              auto-completion, and real-time collaboration, making it easier to
              write clean and error-free code.
            </div>
          </div>
          <Link to='/ide' className='idebtn'>
            Go to IDE
          </Link>
        </div>
      </div>
    </>
  );
};

export default main;
