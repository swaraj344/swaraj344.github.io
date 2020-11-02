import React from "react";
import "./css/HeroSection.css";
import Typed from "react-typed";

function HeroSection() {
  return (
    <div>
      <section id="home" className="hero">
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
            <a
              href="https://api.whatsapp.com/send?phone=+918709830719"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/swaraj.kumar.1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/i_am_dev_swaraj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/swaraj344"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/swaraj-kumar-b63376171/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HeroSection;
