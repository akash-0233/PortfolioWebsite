import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Freelancing Work</h2>
        <div className="freelancingCards">
          <div className="card">
            <h3>Future Pilots Club</h3>
            <p>This website is for students aspiring to build a career in aviation. It features magazines, study materials, and blogs related to aviation.</p>
            <button className="btn"> Visit Site</button>
          </div>
          <img src="/image.png" alt="Project Imgage" />
        </div>


        <h2>My Projects</h2>
        <div className="freelancingCards">
          <div className="card">
            <h3>Decentralize Autonomus Organization</h3>
            <p>A decentralized autonomous organization where anyone can become an investor by donating Ethereum. Investors have the right to vote on proposals such as funding child education or food distribution. Proposals are executed if the majority supports them.</p>
            <button className="btn"> Visit Site</button>
            <button className="btn"> GitBub</button>

          </div>
          <img src="/dao.png" alt="Project Imgage" />
        </div>
        <div className="freelancingCards">
          <div className="card">
            <h3>NFT Gatting Website</h3>
            <p>This project allows users to access special features or the entire website only if they possess our NFT.</p>
            <button className="btn"> Visit Site</button>
            <button className="btn"> GitHub</button>

          </div>
          <img src="/nftgate.png" alt="Project Imgage" />
        </div>
        <div className="freelancingCards">
          <div className="card">
            <h3>Decentralized Lottery</h3>
            <p>This project allows users to access special features or the entire website only if they possess our NFT.</p>
            <button className="btn"> Visit Site</button>
            <button className="btn"> GitHub</button>

          </div>
          <img src="/lottery.png" alt="Project Imgage" />
        </div>

      </div>
    </section>
  );
}

export default Projects;
