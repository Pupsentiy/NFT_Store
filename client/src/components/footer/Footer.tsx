import React from "react";
import { Link } from "react-router-dom";

import pandaLogo from "../../assets/icons/pandaLogo.svg";
import git from "../../assets/icons/github-1.svg";
import inst from "../../assets/icons/instagram.svg";

import "./Footer.scss";

const Footer: React.FC = () => {
  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__aboutUs">
            <Link to="/" className="footer__logo" onClick={handlerScrollUp}>
              <img src={pandaLogo} alt="logo" />
              <p className="logo__text">NFT Store</p>
            </Link>
            <p className="footer__discription">
              The world's first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>

          <div className="footer__contact">
            <h5>Contact</h5>
            <p className="footer__address">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
            <div className="footer__social">
              <a
                href="https://github.com/Pupsentiy"
                className="footer__social-link"
              >
                <img src={git} alt="git" />
              </a>
              <a
                href="https://www.instagram.com/pupsentiy/"
                className="footer__social-link"
              >
                <img src={inst} alt="inst" />
              </a>
            </div>
          </div>
        </div>
        <p className="reserved">2022 All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
