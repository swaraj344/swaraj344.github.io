import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div>
      <section className="hero">
        <h1>Swaraj Kumar</h1>
        <p>
          I'm <span></span>
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
