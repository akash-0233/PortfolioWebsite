import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form>
        <div>
          <label>Name</label>
          <input placeholder='name' type="text" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input placeholder='email@gmail.com' type="email" name="email" />
        </div>
        <div>
          <label>Message</label>
          <textarea placeholder='message' name="message"></textarea>
        </div>
        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
