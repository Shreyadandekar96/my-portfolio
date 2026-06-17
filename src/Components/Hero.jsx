// import React from "react";
// import "./Hero.css";

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1>Hi, I'm Shreya</h1>
//         <p>Frontend Developer | React Developer</p>

       
//         <a href={`${process.env.PUBLIC_URL}/TShreya_Resume.pdf`} download>
//           <button className="hero-btn">Download CV</button>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Shreya</h1>
        <p>Frontend Developer | React Developer</p>

        <a
          href={`${process.env.PUBLIC_URL}/TShreya_Resume.pdf`}
          download="Shreya_Dandekar_Resume.pdf"
          
        >
          <button className="hero-btn">Download CV</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;