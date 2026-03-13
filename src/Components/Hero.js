import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Hi, I'm Shreya</h1>
      <p>Web Developer | React JS</p>

      <a href="/Shreya_Resume26.pdf" download>
        <button className="btn">Download CV</button>
      </a>
    </section>
  );
};

export default Hero;
