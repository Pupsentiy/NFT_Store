import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import pandaLogo from "../../assets/icons/pandaLogo.svg";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { getProfile } from "../../redux/auth/getProfile/asyncActions";
import { setLogout } from "../../redux/auth/getProfile/slice";
import { authorizationHeaders } from "../../api/fetchWrappers";

const Header: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.singIn);
  const dispatch = useAppDispatch();
  const { userInfo, isLoading } = useAppSelector(
    (state) => state.getProfileInfo
  );
  // const userToken = authorizationHeaders.Authorization
  useEffect(() => {
      dispatch(getProfile());
  }, []);

  const handlelogout = () => {
    dispatch(setLogout());
  };
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
          {userInfo ? (
            <NavLink to="/">
              <button className="wallet" onClick={handlelogout}>
                Logout
              </button>
            </NavLink>
          ) : (
            <NavLink to="/auth/signin">
              <button className="wallet">Sign in</button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
