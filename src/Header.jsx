import React from "react";
import "./Header.css";

const HeaderLink = (props) => (
  <li className={props.liClass}>
    <a href="##">
      <i className={props.iconClass}></i>
      <span>{props.title}</span>
    </a>
  </li>
);

function Header() {
  return (
    <div>
      <header id="header">
        <nav className="nav-menu">
          <ul>
            <HeaderLink
              liClass="nav-item"
              iconClass="bx bx-home"
              title="Home"
            />
            <HeaderLink
              liClass="nav-item"
              iconClass="bx bx-user"
              title="About"
            />
            <HeaderLink
              liClass="nav-item"
              iconClass="bx bx-file-blank"
              title="Resume"
            />
            <HeaderLink
              liClass="nav-item"
              iconClass="bx bx-book-content"
              title="Portfolio"
            />
            <HeaderLink
              liClass="nav-item"
              iconClass="bx bx-envelope"
              title="Contact"
            />
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
