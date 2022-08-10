import React from "react";
import pandaLogo from "../../assets/icons/pandaLogo.svg";
import git from '../../assets/icons/github-1.svg'
import inst from '../../assets/icons/instagram.svg'
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__aboutUs">
            <div className="footer__logo">
            <img src={pandaLogo} alt="logo"/>
            <p className="logo__text">NFT Store</p>
            </div>
            <p className="footer__discription">
              The world's first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>
         
        
          <div className="footer__contact">
          <h5>Contact</h5>
            <p className="footer__address">2715 Ash Dr. San Jose, South Dakota 83475</p> 
             <div className="footer__social">
                <a href="https://github.com/Pupsentiy"  className="footer__social-link"><img src={git} alt="git" /> </a>    
                <a href="https://www.instagram.com/pupsentiy/"  className="footer__social-link"><img src={inst} alt="inst" /> </a>    
            </div>   
          </div>
        </div>
        <p className="reserved">2022 All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
