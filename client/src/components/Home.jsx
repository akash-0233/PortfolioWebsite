import myImage from '../assets/image.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Helmet } from 'react-helmet-async';
import './Home.css';

function Home() {
  const [text] = useTypewriter({
    words: ['Blockchain Developer', 'Web Developer', 'MERN Developer'],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <>
      <Helmet>
        <meta name="description" content="Welcome to my portfolio homepage" />
      </Helmet>
      <section id="home" className="firstSection">
        <div className="leftSection">
          <div id="hi">Hi there!</div>
          <div className="name">
            I'm <span className='purple'>Akash Rajput</span>
          </div>
          <div className="description">and I am a passionate</div>
          <div className="roles">
            {text}
            <Cursor />
          </div>
          <div id="homeButtons">
            <a href='/' className="btn">Resume</a>
            <a href='https://github.com/akash-0233/' className="btn">Github</a>
          </div>
        </div>
        <div className="rightSection">
          <img src={myImage} alt="My Image" />
        </div>
      </section>
      <hr className="HR" />
    </>
  );
}

export default Home;
