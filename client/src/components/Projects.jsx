import React from 'react';
import { Helmet } from 'react-helmet-async';

import './Projects.css';

function Projects() {
  return (
    <>
      <Helmet>
        <meta name="description" content="What i have done" />
        <meta name="keywords" content="Blockchain Projects, DAO, solidity projects, " />
      </Helmet>

      <section id="projects" className="projects">
        <div className="projects-container">
          <h2 className="workHeading">My Freelancing Work</h2>
          <div className="freelancingCards">
            <div className="card">
              <h3>Future Pilots Club</h3>
              <p>This website is for students aspiring to build a career in aviation. It features magazines, study materials, and blogs related to aviation.</p>
              <a className="btn" href='https://www.futurepilotsclub.com' > Visit Site</a>
            </div>
            <img src="/image.png" alt="Project Imgage" />
          </div>


          <h2 className="workHeading">My Projects</h2>
          <div className="freelancingCards">
            <div className="card">
              <h3>Decentralize Autonomus Organization</h3>
              <p>A decentralized autonomous organization where anyone can become an investor by donating Ethereum. Investors have the right to vote on proposals such as funding child education or food distribution. Proposals are executed if the majority supports them.</p>
              <a className="btn" href='https://d-org.netlify.app' > Visit Site</a>
              <a className="btn" href='https://github.com/akash-0233/DAO.git'> GitHub</a>

            </div>
            <img src="/dao.png" alt="Project Imgage" />
          </div>
          <div className="freelancingCards">
            <div className="card">
              <h3>NFT Gatting Website</h3>
              <p>This project allows users to access special features or the entire website only if they possess our NFT.</p>
              <a className="btn" href='https://www.linkedin.com/posts/akash-rajput-764669210_nftgating-blockchain-webdevelopment-activity-7174017715056046080-IR86?utm_source=share&utm_medium=member_desktop' > Demo</a>
              <a className="btn"> GitHub</a>

            </div>
            <img src="/nftgate.png" alt="Project Imgage" />
          </div>
          {/* <div className="freelancingCards">
            <div className="card">
              <h3>Decentralized Lottery</h3>
              <p>This project allows users to access special features or the entire website only if they possess our NFT.</p>
              <a className="btn"> Visit Site</a>
              <a className="btn"> GitHub</a>

            </div>
            <img src="/lottery.png" alt="Project Imgage" />
          </div> */}

        </div>
      </section>
    </>
  );
}

export default Projects;
