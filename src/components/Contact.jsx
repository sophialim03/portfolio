import NavBar from "./NavBar";
import React from "react";
import sophResume from "/public/Sophia_Lim_Resume_UpdatedDec2024.pdf";

function Contact() {
  return (
    <div className="contact">
      <NavBar />
      <div>
        <h1>Contact Me</h1>
        <div className="contact-buttons">
          <a href={sophResume} download>
            <button className="contact-btn">Download Resume</button>
          </a>

          <a href="mailto:sophialimnz@gmail.com">
            <button className="contact-btn">Email Me</button>
          </a>
          <a
            href="https://www.linkedin.com/in/sophia-lim-a310841a0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="contact-btn">LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
