import React from "react";
import "./styles/footer.scss";

import { Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-top">
        <div className="navigate">
          <h2>Navigate</h2>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <div>
            <p>01928734123</p>
            <p>triehanotowibowo@gmail.com</p>
          </div>
        </div>
        <div className="social">
          <h2>Social</h2>
          <div>
            <a href="">Intagram</a>
            <a href="">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">Copyright © 2022 Trie Hanoto Wibowo</div>
    </div>
  );
};
