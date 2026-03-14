import React from "react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p>© 2026 Shreya Dandekar | Frontend Developer</p>

        <div className="footer-icons">
          <a
            href="https://wa.me/917741833858"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://github.com/Shreyadandekar96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shreya-dandekar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:shreya.dandekar1996@gmail.com">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;