import React from "react";
import aboutIllustrators from "../assets/About.png";
import "../styles/About.css";

const About = () => {
  return (
    <section
      id="About"
      className="about-container | padding-inline padding-block"
    >
      <div class="wrapper-container">
        <img
          className="illustImage"
          src={aboutIllustrators}
          alt="developer-illustrator"
        />
        <div class="about-info">
          <div class="about-title">
            <p className="uppercase fs-secondary-subheading fw-semi-bold">
              Let me introduce myself
            </p>
            <h2 className="fs-secondary-heading fw-bold text-accent">
              About me
            </h2>
          </div>
          <p className="fs-secondary-body fw-regular text-tertiary">
            As a Junior Full Stack Developer, I am passionate about crafting
            user-friendly web experiences that combine visual appeal with
            usability. With a Master's degree in Electrical and Computer
            Engineering and a background in software development, I bring a
            unique perspective to my work. I thrive on continuous learning,
            constantly expanding my skill set to create elegant and efficient
            code that caters to client requirements and enhances the end-user
            experience. During my free time, I explore the latest design trends
            and experiment with emerging technologies to stay ahead in the
            dynamic web development industry.
          </p>
          <div className="about-button-container">
            <button className="btn">
              <a href="#Contact" className="uppercase">
                Contact
              </a>
            </button>{" "}
            <button className="btn inverted">
              <a
                href="https://drive.google.com/file/d/1sudZvLrHb_bonUopWvc9RhlnjFKNJojm/view?usp=share_link"
                target="_blank"
                className="uppercase"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
