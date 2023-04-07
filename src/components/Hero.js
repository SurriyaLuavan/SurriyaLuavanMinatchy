import React from "react";
import myPhoto from "../assets/myPhoto-mobile.png";
import "../styles/Hero.css";
import { useTheme } from "../context/ThemeProvider";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section
      id="Hero"
      className={`hero-container | padding-inline padding-block ${
        theme === "light" && "hero-light"
      }`}
    >
      <div className="hero-wrapper">
        <svg
          className="profile-svg"
          viewBox="0 0 200 187"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask id="mask0" mask-type="alpha">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
          130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
          97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
          0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              fill="#4DDA87"
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
          165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
          129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
          -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
            <image href={myPhoto} width={190} />
          </g>
        </svg>
        <div className="text-container">
          <h1 className="uppercase fs-primary-subheading fw-semi-bold">
            Hi There! I'm <br />{" "}
            <span className="uppercase-remove fs-primary-heading fw-bold">
              Surriya Luavan Minatchy
            </span>
          </h1>
          <p className="fs-primary-body fw-regular">
            A dedicated frontend web developer who strives to create beautiful
            and intuitive user experiences through clean, efficient, and
            maintainable code.
          </p>
          <button type="button" className="uppercase btn ">
            <a href="#Projects">view projects</a>
          </button>
        </div>
        {/* <img src={myPhoto} alt="surriya" width="500px" /> */}
        {/* <svg
          width="600px"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0" mask-type="alpha">
            <path
              fill="#4DDA87"
              d="M40.1,-69.2C51.2,-63.1,58.9,-50.8,64.7,-38.2C70.5,-25.6,74.5,-12.8,76.3,1C78,14.9,77.6,29.7,70.2,39.5C62.8,49.3,48.4,54,35.5,61.9C22.6,69.8,11.3,80.8,-0.9,82.3C-13,83.8,-26,75.7,-35.4,65.8C-44.7,55.9,-50.3,44.1,-57.2,32.8C-64.1,21.5,-72.3,10.8,-73.7,-0.8C-75,-12.3,-69.4,-24.6,-61.5,-34C-53.5,-43.5,-43.1,-50.1,-32.5,-56.5C-21.8,-62.8,-10.9,-68.9,1.8,-72.1C14.5,-75.2,29.1,-75.3,40.1,-69.2Z"
              transform="translate(100 100)"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              fill="#4DDA87"
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
          165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
          129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
          -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
            <image href={myPhoto} width={200} />
          </g>
        </svg> */}
      </div>
    </section>
  );
};

export default Hero;
