import './About.css';
import ContactBox from './ContactBox';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="profile-pic">
          <img src="/image.png" alt="Project Imgage" />
        </div>
        <div className="text-content">
          <h1>Akash Rajput</h1>
          <h2>Blockchain Developer, Web Developer, MERN Stack Developer</h2>
          <p>
            I'm a self-taught developer with a passion for continuous learning. My tech journey began with curiosity, leading to a diverse portfolio in blockchain and full-stack web development.
          </p>
          <p>
            I thrive on challenges and have experience in freelancing, completing MERN projects for clients. Let's connect and explore the possibilities of working together!
          </p>
        </div>
      </div>

      <ContactBox></ContactBox>
      <div className="skills-container">
        <h3>Skillset</h3>
        <h4>Technologies I use in my development.</h4>
        <div>
          <div>
            <p className="skillName">Languages</p>
            <p className="skillText">Programming languages I use:</p>
          </div>
          <div className="skill-card">
            <div>
              <img src="/solidity.png" alt="Solidity" />
              <h4>Solidity</h4>
            </div>
            <div>
              <img src="/javaScript.png" alt="JavaScript" />
              <h4>JavaScript</h4>
            </div>
            <div>
              <img src="/html.png" alt="HTML" />
              <h4>HTML</h4>
            </div>
            <div>
              <img src="/css.png" alt="CSS" />
              <h4>CSS</h4>
            </div>
          </div>
          <br />
          <br />
          <div>
            <p className="skillName">Technologies</p>
            <p className="skillText">Technologies I use:</p>
          </div>
          <div className="skill-card">
            <div>
              <img src="/react.png" alt="React.js" />
              <h4>React.js</h4>
            </div>
            <div>
              <img src="/nodejs.png" alt="Node.js" />
              <h4>Node.js</h4>
            </div>
            <div>
              <img src="/express.png" alt="Express.js" />
              <h4>Express.js</h4>
            </div>
            <div>
              <img src="/mongo.png" alt="MongoDB" />
              <h4>MongoDB</h4>
            </div>
            <div>
              <img src="/web3.png" alt="Web3.js" />
              <h4>Web3.js</h4>
            </div>
            <div>
              <img src="/ether.png" alt="Ether.js" />
              <h4>Ether.js</h4>
            </div>
          </div>
          <br />
          <br />
          <div>
            <p className="skillName">Tools</p>
            <p className="skillText">Tools I use during my development:</p>
          </div>
          <div className="skill-card">
            <div>
              <img src="/hardhat.png" alt="Hardhat" />
              <h4>Hardhat</h4>
            </div>
            <div>
              <img src="/ganache.png" alt="Ganache" />
              <h4>Ganache</h4>
            </div>
            <div>
              <img src="/truffle.png" alt="Truffle" />
              <h4>Truffle</h4>
            </div>
            <div>
              <img src="/mocha.png" alt="Mocha" />
              <h4>Mocha</h4>
            </div>
            <div>
              <img src="/chai.png" alt="Chai" />
              <h4>Chai</h4>
            </div>
            <div>
              <img src="/postman.png" alt="Postman" />
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
              <img src="/motivated.png" alt="My Image" />
              <h4>Self-Motivated</h4>
            </div>
            <div  >
              <img src="/learner.png" alt="My Image" />
              <h4>Continuous Learner</h4>
            </div>
            <div  >
              <img src="/problem-solving.png" alt="My Image" />
              <h4>Problem-solving</h4>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
