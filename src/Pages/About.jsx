import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2 className="about-title">About Me</h2>

      <p className="about-text">
        Hi, I’m <span className="highlight">Shreya</span>, a frontend developer
        skilled in HTML, CSS, JavaScript, and React. I enjoy creating
        responsive and user-friendly websites while continuously learning
        new technologies.
      </p>

      <h3 className="hobby-title">Creative Hobbies</h3>

      <div className="hobby-cards">
        <div className="hobby-card">🎨 Painting</div>
        <div className="hobby-card">🖌 Drawing</div>
        <div className="hobby-card">🌸 Rangoli</div>
      </div>
    </section>
  );
};

export default About;