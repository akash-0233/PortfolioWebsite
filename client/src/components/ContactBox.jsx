import './ContactBox.css';
import { Link } from 'react-scroll';


function ContactBox() {
  return (
    < >
      <div className="contact-container">
        <div className="info-box">
          <h2>Contact Me</h2>
          <p>
            Hi, I'm Akash Rajput. I'm a professional Blockchain Developer, Web Developer, and MERN Stack Developer. If you're interested in collaborating or have any questions, feel free to reach out to me!
          </p>
          <Link className="contact-button" to="contact" smooth={true} duration={1500}>Hire Me</Link>
        </div>
        <div className="image-box">
          <img src="/image.png" alt="Contact" />
        </div>
      </div>
    </>
  );
}

export default ContactBox;
