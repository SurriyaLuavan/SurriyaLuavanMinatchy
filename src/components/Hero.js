import React from "react";
import myPhoto from "../assets/myPhoto.png";

const Hero = () => {
  return (
    <section>
      <h1>Hi There! I'm Surriya Luavan Minatchy</h1>
      <p>
        A dedicated frontend web developer who strives to create beautiful and
        intuitive user experiences through clean, efficient, and maintainable
        code.
      </p>
      <button type="button">
        {" "}
        <a href="#projects">VIEW PORTFOLIO</a>{" "}
      </button>
      <img src={myPhoto} alt="surriya" width="700px" />
    </section>
  );
};

export default Hero;
