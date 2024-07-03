import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <header className="header">
      <nav>
        <div className="left"> Akash's Portfolio</div>
        <div className="right">
           <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
          <li><Link to="clients-review" smooth={true} duration={1200}>Review</Link></li>
          <li><Link to="contact" smooth={true} duration={1500}>Contact</Link></li>
        </ul>
        </div>
       
      </nav>
    </header>
  );
}

export default Navbar;
