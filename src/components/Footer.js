import React from "react";
import logoLight from "../assets/Logo-light.png";
import logoDark from "../assets/Logo-dark.png";
import githubLogo from "../assets/icons/Github.svg";
import linkedinLogo from "../assets/icons/Linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={false ? logoLight : logoDark} alt="logo" width="60px" />
        <p>Surriya Luavan Minatchy</p>
      </div>
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
    </footer>
  );
};

export default Footer;
