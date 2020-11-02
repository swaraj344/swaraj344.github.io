import React, { useEffect, useState } from "react";
import "./css/Header.css";

const HeaderLink = (props) => (
  <li className={props.liClass}>
    <a className={props.unid} href={`#${props.navigation}`}>
      <i className={props.iconClass}></i>
      <span>{props.title}</span>
    </a>
  </li>
);

function Header() {
  const [currentPosition, setCurrentPosition] = useState("home");

  useEffect(() => {
    const homePosition = document.getElementById("home").offsetTop;
    const about = document.getElementById("about").offsetTop - 100;

    const resume = document.getElementById("resume").offsetTop - 100;

    const portfolio = document.getElementById("portfolio").offsetTop - 100;
    const contact = document.getElementById("contact").offsetTop - 100;

    document.addEventListener("scroll", () => {
      var scrollPosition = window.scrollY;
      if (homePosition < scrollPosition && scrollPosition < about) {
        setCurrentPosition("home");
      } else if (about < scrollPosition && scrollPosition < resume) {
        setCurrentPosition("about");
      } else if (resume < scrollPosition && scrollPosition < portfolio) {
        setCurrentPosition("resume");
      } else if (portfolio < scrollPosition && scrollPosition < contact) {
        setCurrentPosition("portfolio");
      } else if (contact < scrollPosition) {
        setCurrentPosition("contact");
      } else {
        setCurrentPosition("home");
      }
    });
  });
  return (
    <div>
      <header id="header">
        <nav className="nav-menu">
          <ul>
            <HeaderLink
              unid=""
              liClass={
                currentPosition === "home" ? "active nav-item" : "nav-item"
              }
              iconClass="bx bx-home"
              title="Home"
              navigation="home"
            />
            <HeaderLink
              liClass={
                currentPosition === "about" ? "active nav-item" : "nav-item"
              }
              iconClass="bx bx-user"
              title="About"
              navigation="about"
            />
            <HeaderLink
              liClass={
                currentPosition === "resume" ? "active nav-item" : "nav-item"
              }
              iconClass="bx bx-file-blank"
              title="Resume"
              navigation="resume"
            />
            <HeaderLink
              liClass={
                currentPosition === "portfolio" ? "active nav-item" : "nav-item"
              }
              iconClass="bx bx-book-content"
              title="Portfolio"
              navigation="portfolio"
            />
            <HeaderLink
              liClass={
                currentPosition === "contact" ? "active nav-item" : "nav-item"
              }
              iconClass="bx bx-envelope"
              title="Contact"
              navigation="contact"
            />
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
