import React from "react";
import "./css/HeroSection.css";
import Typed from "react-typed";

function HeroSection() {
  return (
    <div>
      <section className="hero">
        <h1>Swaraj Kumar</h1>
        <p>
          I'm{" "}
          <Typed
            className="typed"
            strings={[
              "Programmer",
              "App Developer",
              "Web Developer",
              "Student",
            ]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={1000}
            // attr="placeholder"
            loop
          />
        </p>
        <ul className="social-links">
          <li>
            <a href="##">
              <i className="bx bxl-twitter"></i>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="bx bxl-facebook"></i>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="bx bxl-instagram"></i>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="bx bxl-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HeroSection;
