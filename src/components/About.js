import React from "react";
import aboutIllustrators from "../assets/About-me.png";

const About = () => {
  return (
    <section id="About" className="padding-inline">
      <img src={aboutIllustrators} width="400px" alt="developer-illustrator" />
      <p className="uppercase fs-secondary-subheading fw-semi-bold">
        Let me introduce myself
      </p>
      <h2 className="fs-secondary-heading fw-bold text-accent">About me</h2>
      <p className="fs-secondary-body fw-regular text-tertiary">
        As a budding frontend web developer, I'm passionate about creating
        user-friendly web experiences that not only look great but are also easy
        to use. With a Master's degree in Electrical and Computer Engineering
        and a foundation in embedded software development, I bring a unique
        perspective to my work. I enjoy learning new skills and techniques to
        create elegant and efficient code that meets the needs of both clients
        and end-users. In my free time, I love exploring the latest design
        trends and experimenting with new technologies to stay at the forefront
        of the industry
      </p>
      <button className="btn">
        <a href="#Contact" className="uppercase">
          Contact
        </a>
      </button>{" "}
      <button className="btn inverted">
        <a href="#resume" className="uppercase">
          Resume
        </a>
      </button>
    </section>
  );
};

export default About;
