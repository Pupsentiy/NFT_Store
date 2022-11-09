import React from "react";
import pandaLogo from "../../assets/icons/pandaLogo.svg";
import { useAppSelector } from "../../redux/store";
import SignIn from "./signIn/SignIn";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import SignUp from "./signUp/SignUp";

const Auth: React.FC = () => {
  const { tabIndex } = useAppSelector((state) => state.changeModal);
  const { isLoading } = useAppSelector((state) => state.signUp);
  const tabPanel: JSX.Element[] = [<SignIn />, <SignUp/>];

  return (
    <div className="wrapper">
      <Link to="/">
        <img src={pandaLogo} alt="logo" />
        <p className="logo__text">NFT Store</p>
      </Link>
      {isLoading !== true ? (
        <div className="paper"></div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Auth;
