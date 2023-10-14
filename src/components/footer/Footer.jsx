import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import ContentWrapper from "../content wrapper/ContentWrapper";

import "./style.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <NavLink to="https://github.com/akinurrahman/movix" className="icon">
            <FaGithub />
          </NavLink>
          <NavLink to="https://www.instagram.com/akinurrahman_/" className="icon">
            <FaInstagram />
          </NavLink>
          <NavLink to="" className="icon">
            <FaTwitter />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/akinurrahman" className="icon">
            <FaLinkedin />
          </NavLink>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
