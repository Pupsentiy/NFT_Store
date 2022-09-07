import { NavLink } from "react-router-dom";
import "./Header.scss";
import pandaLogo from "../../assets/icons/pandaLogo.svg";
import { useAppDispatch } from "../../redux/store";
import { setOpen } from "../../redux/authStore/authSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const openModalAuth = () => {
    dispatch(setOpen(true));
  };

  return (
    <header className="container">
      <div className="custom__header">
        <div className="header__logo">
          <img src={pandaLogo} alt="logo" />
          <p className="logo__text">NFT Store</p>
        </div>
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
              <NavLink to="/contact-us" className="item-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__connectWallet">
          <button className="wallet" onClick={() => openModalAuth()}>
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
