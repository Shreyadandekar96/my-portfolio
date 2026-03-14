import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      {/* <p>If you’d like to get in touch, you can reach me here:</p> */}

      <div className="contact-info">
        {/* Email */}
        <div className="contact-item">
          <h3>Email</h3>
          <p>
            <a href="mailto:shreya.dandekar1996@gmail.com">shreya.dandekar1996@gmail.com</a>
          </p>
        </div>

        {/* Phone / WhatsApp */}
        <div className="contact-item">
          <h3>WhatsApp</h3>
          <p>
            <a
              href="https://wa.me/917741833858"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 7741833858
            </a>
          </p>
        </div>

        {/* Location */}
        <div className="contact-item">
          <h3>Location</h3>
          <p>
            <a
              href="https://www.google.com/maps/place/Mumbai,+Maharashtra,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mumbai, Maharashtra, India
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}