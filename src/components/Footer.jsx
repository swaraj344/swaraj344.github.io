import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div>
      <section id="footer">
        <div className="container">
          <h3>SWARAJ KUMAR</h3>
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p>
          <div className="social-links">
            <a href="##" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="##" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="##" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="##" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="##" className="linkedin">
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
