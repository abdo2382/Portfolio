import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";
import githubGif from "../assets/github.gif";
import linkedinImg from "../assets/linkedin.gif";
import facebookImg from "../assets/facebook.gif";
import instagramImg from "../assets/instagram.gif";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo for portfolio website" />
      </div>

      <nav className="nav-links">
        <ul>
          <li>
            <a href="#landing">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li className="contact-dropdown">
            <a href="#contact">Contact</a>
            <div className="dropdown-content">
              <a
                href="https://github.com/abdo2382"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubGif} alt="github" /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abdelrahman-alaa-8801b2337"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinImg} alt="linkedin" /> LinkedIn
              </a>

              <a
                href="https://www.facebook.com/share/1AEooYy8Vt/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebookImg} alt="facebook" /> Facebook
              </a>

              <a
                href="https://www.instagram.com/3bdo_________alaa?igsh=YWV1b2kxc3Bla21i&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagramImg} alt="instagram" /> Instagram
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
