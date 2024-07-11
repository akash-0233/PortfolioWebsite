import { useState } from 'react';
import emailjs from "@emailjs/browser";
import './Contact.css';


function Contact() {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayMessage, setOverlayMessage] = useState("");

  const handeChange = (event) => {
    const { name, value } = event.target;
    setFromData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setOverlayMessage("Sending email...");
    setOverlayVisible(true);

    emailjs.send(import.meta.env.VITE_Service_Id,import.meta.env.VITE_Template_Id, formData, import.meta.env.VITE_PublicKey).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setOverlayMessage("Email sent successfully!");
        setFromData({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.log('FAILED...', error);
        setOverlayMessage("Failed to send email. Please try again.");

      },
    );

  }
  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <section id='contact' className="contact-form">
      <h2>Contact  Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input placeholder='name' type="text" name="name" id="name" value={formData.name} onChange={handeChange} required />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input placeholder='email@gmail.com' type="email" name="email" id='email' required value={formData.email} onChange={handeChange} />
        </div>
        <div>
          <label htmlFor="message" >Message</label>
          <textarea placeholder='message' name="message" id="message" rows={"5"} value={formData.message} onChange={handeChange} ></textarea>
        </div>
        <button className="btn" type="submit" >Send</button>
      </form>
      {overlayVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <p>{overlayMessage}</p>
            {overlayMessage !== "Sending email..." && <button className="close-btn" onClick={handleCloseOverlay}>Close</button>
            }          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
