import React from "react";
import pandaLogo from "../../assets/icons/pandaLogo.svg";
import { useAppSelector } from "../../redux/store";
import SignIn from "../../components/authModal/signIn/SignIn";
import SignUp from "../../components/authModal/signUp/SignUp";
import { Link, useParams } from "react-router-dom";

const Auth: React.FC = () => {
  const { tabIndex } = useAppSelector((state) => state.auth);
  const tabPanel: JSX.Element[] = [<SignIn />, <SignUp />];

  return (
    <div className="wrapper">
      <Link to="/">
        <img src={pandaLogo} alt="logo" />
        <p className="logo__text">NFT Store</p>
      </Link>
      <div className="paper">{tabPanel[tabIndex]}</div>
    </div>
  );
};

export default Auth;
