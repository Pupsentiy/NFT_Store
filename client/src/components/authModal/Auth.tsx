import React from "react";
import pandaLogo from "../../assets/icons/pandaLogo.svg";
import { setOpen } from "../../redux/authModalWindow/slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import close from "../../assets/icons/close.svg";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import { Link } from "react-router-dom";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const { open, tabIndex } = useAppSelector((state) => state.auth);

  const closeModalAuth = () => {
    dispatch(setOpen(false));
  };

  const tabPanel = [<SignIn />, <SignUp />];


  // переделать модальное окно!!!!!!!!!! убрать лишний div-onTheBackground
  return (
   <div className={open === true ? "onTheBackground" : "no-active"}>
     <div className={open === true ? "wrapper" : "no-active"}>
      <Link to="/" className="button__close-modal" onClick={() => closeModalAuth()}>
        <img src={close} alt="close" />
      </Link>
      <img src={pandaLogo} alt="logo" />
      <p className="logo__text">NFT Store</p>
      <div className="paper">{tabPanel[tabIndex]}</div>
    </div>
   </div>
  );
};

export default Auth;
