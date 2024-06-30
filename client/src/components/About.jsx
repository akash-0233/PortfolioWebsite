import React from 'react';
import './About.css';


function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="profile-pic">AR</div>
        <h1>Akash Rajput</h1>
        <h2>Blockchain Developer, Web Developer, MERN Stack Developer</h2>
        <p>
          I am a self-taught developer with a passion for learning new things continuously. My journey in tech started with a curiosity that quickly grew into a full-fledged career. Over the years, I've honed my skills in both blockchain development and full-stack web development, building a diverse portfolio of projects and contributing to innovative solutions.
        </p>
        <p>
          In blockchain development, I am proficient in Solidity, Hardhat, Ganache, Mocha, Chai, Web3.js, Ether.js, and Truffle. For web development, I excel in React.js, JavaScript, HTML, and CSS. On the backend, I have strong experience with Node, Express, MongoDB, and Postman.
        </p>
        <p>
          I thrive on challenges and am always eager to take on new projects that push the boundaries of my knowledge and skills. Let's connect and explore the possibilities of working together!
        </p>

      </div>
      <div className="skills-container">
        <h3>Skillset</h3>
        <h4>Technologies i use in my development.</h4>
        <div>
          <div>
            <p className="skillName">Languages</p>
            <p className="skillText">Programing languages I use:</p>

          </div>

          <div className="skill-card" >
            <div  >
              <img  src="/solidity.png" alt="My Image" />
              <h4>Solidity</h4>
            </div>
            <div  >
              <img  src="/javaScript.png" alt="My Image" />
              <h4>JavaScript</h4>
            </div>
            <div  >
              <img  src="/html.png" alt="My Image" />
              <h4>HTML</h4>
            </div>
            <div  >
              <img  src="/css.png" alt="My Image" />
              <h4>CSS</h4>
            </div>

          </div>
          <br></br>
          <br></br>
          <div>
            <p className="skillName">Technologies</p>
            <p className="skillText">Technologies I use:</p>

          </div>

          <div className="skill-card" >
            <div  >
              <img  src="/react.png" alt="My Image" />
              <h4>React.js</h4>
            </div>
            <div  >
              <img  src="/nodejs.png" alt="My Image" />
              <h4>Node.js</h4>
            </div>
            <div  >
              <img  src="/express.png" alt="My Image" />
              <h4>Express.js</h4>
            </div>
            <div  >
              <img  src="/mongo.png" alt="My Image" />
              <h4>MongoDB</h4>
            </div>
            <div  >
              <img  src="/web3.png" alt="My Image" />
              <h4>WEb3.js</h4>
            </div>
            <div  >
              <img  src="/ether.png" alt="My Image" />
              <h4>Ether.js</h4>
            </div>

          </div>
          <br></br>
          <br></br>
          <div>
            <p className="skillName">Tools</p>
            <p className="skillText">Tools I use during my development:

</p>

          </div>

          <div className="skill-card" >
            <div  >
              <img  src="/hardhat.png" alt="My Image" />
              <h4>Hardhat</h4>
            </div>
            <div  >
              <img  src="/ganache.png" alt="My Image" />
              <h4>Ganache</h4>
            </div>
            <div  >
              <img  src="/truffle.png" alt="My Image" />
              <h4>Truffle</h4>
            </div>
            <div  >
              <img  src="/mocha.png" alt="My Image" />
              <h4>Mocha</h4>
            </div>
            <div  >
              <img  src="/chai.png" alt="My Image" />
              <h4>Chai</h4>
            </div>
            <div  >
              <img  src="/postman.png" alt="My Image" />
              <h4>Postman</h4>
            </div>

          </div>
          <br></br>
          <br></br>
          <div>
            <p className="skillName">Soft Skills</p>

          </div>

          <div className="skill-card" >
            <div  >
              <img  src="/motivated.png" alt="My Image" />
              <h4>Self-Motivated</h4>
            </div>
            <div  >
              <img  src="/learner.png" alt="My Image" />
              <h4>Continuous Learner</h4>
            </div>
            <div  >
              <img  src="/problem-solving.png" alt="My Image" />
              <h4>Problem-solving</h4>
            </div>
           

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
