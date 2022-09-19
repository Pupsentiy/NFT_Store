import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import pandaLogo from "../../assets/icons/pandaLogo.svg";

const Header: React.FC = () => {
  return (
    <header className="container">
      <div className="custom__header">
        <Link to="/" className="header__logo">
          <img src={pandaLogo} alt="logo" />
          <p className="logo__text">NFT Store</p>
        </Link>
        <nav className="header__menu_primary">
          <ul className="main__menu">
            <li className="menu__item">
              <NavLink to="/" className="item-link">
                Home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/discover" className="item-link">
                Discover
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/docs" className="item-link">
                Docs
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/blog" className="item-link">
                Blog
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/profile" className="item-link">
                Contact Us/profile
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__connectWallet">
          <NavLink to="/auth">
            <button className="wallet">Sign in</button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
