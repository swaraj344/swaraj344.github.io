import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div>
      <section id="footer">
        <div className="container">
          <h3>SWARAJ KUMAR</h3>
          <p>
            Oh You come at the end thanks for visiting my page, stay connected
            with me, you can contact me through contact section Thank-You{" "}
            <span role="img" aria-label="blush:">
              😊{" "}
            </span>
          </p>
          <div className="social-links">
            <a
              href="https://api.whatsapp.com/send?phone=+918709830719"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a
              href="https://www.facebook.com/swaraj.kumar.1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/i_am_dev_swaraj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://github.com/swaraj344"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/swaraj-kumar-b63376171/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Swaraj Kumar</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
