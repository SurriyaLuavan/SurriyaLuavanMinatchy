import React from "react";
import myPhoto from "../assets/myPhoto.png";

const Hero = () => {
  return (
    <section id="hero">
      <h1 className="uppercase fs-primary-subheading fw-semi-bold">
        Hi There! I'm <br />{" "}
        <span className="uppercase-remove fs-primary-heading fw-bold">
          Surriya Luavan Minatchy
        </span>
      </h1>
      <p className="fs-primary-body fw-regular">
        A dedicated frontend web developer who strives to create beautiful and
        intuitive user experiences through clean, efficient, and maintainable
        code.
      </p>
      <button type="button" className="uppercase btn ">
        <a href="#projects">view projects</a>
      </button>
      <img src={myPhoto} alt="surriya" width="700px" />
    </section>
  );
};

export default Hero;
