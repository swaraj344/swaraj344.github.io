import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header id="header">
        <nav className="nav-menu">
          <ul>
            <li className="nav-item">
              <a href="##">
                <i className="bx bx-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="##">
                <i className="bx bx-user"></i>
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="##">
                <i className="bx bx-file-blank"></i>
                <span>Resume</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="##">
                <i className="bx bx-book-content"></i>
                <span>Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="##">
                <i className="bx bx-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
