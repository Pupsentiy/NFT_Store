import React from "react";
import pandaLogo from "../../assets/icons/pandaLogo.svg";
import { setOpen } from "../../redux/authStore/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import close from "../../assets/icons/close.svg";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const { open, tabIndex } = useAppSelector((state) => state.auth);

  const closeModalAuth = () => {
    dispatch(setOpen(false));
  };

  const tabPanel = [<SignIn />, <SignUp />];
  return (
   <div className={open === true ? "onTheBackground" : ""}>
     <div className={open === true ? "wrapper" : "no-active"}>
      <button className="button__close-modal" onClick={() => closeModalAuth()}>
        <img src={close} alt="close" />
      </button>
      <img src={pandaLogo} alt="logo" />
      <p className="logo__text">NFT Store</p>
      <div className="paper">{tabPanel[tabIndex]}</div>
    </div>
   </div>
  );
};

export default Auth;
