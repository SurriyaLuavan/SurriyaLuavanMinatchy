import React from "react";
import logo from "../assets/Logo.png";
import githubLogo from "../assets/icons/Github.svg";
import linkedinLogo from "../assets/icons/Linkedin.svg";

const NavBar = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" width="50px" />
        <p>Surriya</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
          <li>
            <a href="qualification">Qualification</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <ul className="socials">
        <li>
          <a href="https://github.com/SurriyaLuavan">
            <img src={githubLogo} alt="github-logo" width="25px" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/surriya-luavan-minatchy/">
            <img src={linkedinLogo} alt="linkedin-logo" width="25px" />
          </a>
        </li>
      </ul>
      <button type="button">Let's Talk</button>
    </>
  );
};

export default NavBar;
