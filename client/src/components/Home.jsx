import React from 'react';
import myImage from '../assets/image.png';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a Full-Stack Developer</p>
      </div>
      <div className='img'>
      <img src={myImage} alt="My Image" />
      </div>
    </section>
  );
}

export default Home;
