import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import pandaLogo from "../../assets/icons/pandaLogo.svg";

const Header = () => {
  return (
    <header className="header__container">
      <div className="custom__header">
        <div className="header__logo">
          <img src={pandaLogo} alt="logo" />
          <p className="logo__text">NFT Store</p>
        </div>
        <nav className="header__menu_primary">
          <ul className="main__menu">
            <li className="menu__item">
              <NavLink to="#" className="item-link">
                Home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="#" className="item-link">
                Discover
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="#" className="item-link">
                Docs
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="#" className="item-link">
                Blog
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="#" className="item-link">
                About Us
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="#" className="item-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__connectWallet">
          <button className="wallet">Connect Wallet</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
