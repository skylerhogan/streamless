import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/film.svg";

export const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">streamlss</Link>
          </div>
        </div>
        {/* <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">About Us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Must Watch</Link>
            <Link to="/">Recent Releases</Link>
            <Link to="/">Top Rated</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
