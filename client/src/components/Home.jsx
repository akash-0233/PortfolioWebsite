import myImage from '../assets/image.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './Home.css';
import { useEffect } from 'react';

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

      <section id="home" className="firstSection">
        <div className="leftSection">
          <div id="hi">Hi there!</div>
          <div>
            I'm 
            <span className='purple'>  Akash Rajput</span>
          </div>
          <div> and I am a passionate  </div>
          <div className='purple' >{text}
            <Cursor></Cursor></div>

        </div>
        <div className="rightSection">
          <img src={myImage} alt="My Image" />
        </div>
      </section>
      <hr className="HR"></hr>

      {/* <section className="secondSection">
        <span className='text-gray' >What i have done so far</span>
        <h1>Work Experience</h1>
        <div className="box">
          <div className="vertical"></div>
          <div className="vertical"></div>
          <div className="vertical"></div>
          <div className="vertical"></div>
        </div>
      </section> */}
    </>
  );
}

export default Home;
