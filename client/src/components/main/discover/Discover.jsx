import React from "react";
import { NavLink } from "react-router-dom";
import "./Discover.scss";
import pictur1 from "../../../assets/img/discover_img/wallper1234.png";
import pictur2 from "../../../assets/img/discover_img/wallper1564.png";
import pictur3 from "../../../assets/img/discover_img/wallper12345.png";
import binance from "../../../assets/icons/discover_logo/binance.svg";
import trust from "../../../assets/icons/discover_logo/trustWallet.svg";
import metamask from "../../../assets/icons/discover_logo/metamask.svg";
import coinbase from "../../../assets/icons/discover_logo/coinbase.svg";
import toko from "../../../assets/icons/discover_logo/toko.svg";
import linkup from "../../../assets/icons/discover_logo/linkup.svg";

const Discover = () => {
  return (
    <div className="discover">
      <div className="container">
      <div className="ornament"></div>
        <div className="discover__title">
          <div className="title">
            <h3> Discover a New Era of Crypto Currency</h3>
          </div>

          <div className="discover__discription">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <NavLink className="start__link" to="#">
              Get Started
              <img src={linkup} alt="img" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="discover__picture">
        <div className="wrapper__picture">
          <img className="picture" src={pictur1} alt="foto" />
        </div>
        <div className="wrapper__picture">
          <img className="picture" src={pictur3} alt="foto" />
        </div>
        <div className="wrapper__picture">
          <img className="picture" src={pictur2} alt="foto" />
        </div>
      </div>
      <nav className="wrapper__blockhain">
        <ul className="blockchain__items">
          <li className="blockchain__item">
            <a rel="noreferrer"  target="_blank" href="https://binance.com/ru" className="blockhain__link">
              <img src={binance} alt="blockhain" />
            </a>
          </li>
          <li className="blockchain__item">
            <a rel="noreferrer"  target="_blank" href="https://trustwallet.com/ru/" className="blockhain__link">
              <img src={trust} alt="blockhain" />
            </a>
          </li>
          <li className="blockchain__item">
            <a rel="noreferrer"  target="_blank" href="https://metamask.io/" className="blockhain__link">
              <img src={metamask} alt="blockhain" />
            </a>
          </li>
          <li className="blockchain__item">
            <a rel="noreferrer"  target="_blank" href="https://www.coinbase.com/ru/" className="blockhain__link">
              <img src={coinbase} alt="blockhain" />
            </a>
          </li>
          <li className="blockchain__item">
            <a rel="noreferrer" target="_blank" href="https://www.tokocrypto.com/" className="blockhain__link">
              <img className="blockchain__logo" src={toko} alt="blockhain" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Discover;
