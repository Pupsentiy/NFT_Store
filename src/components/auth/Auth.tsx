import React from "react";
import CreateAccount from "./createAccount/CreateAccount";
import SignUp from "./signUp/SignUp";
import pandaLogo from "../../assets/icons/pandaLogo.svg";
import { setOpen } from "../../redux/authStore/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const Auth:React.FC = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.auth);

  // const openModalAuth = () => {
  //   dispatch(setOpen(true));
  // };
  return (
    <div className="wrapper">
      <img src={pandaLogo} alt="logo" />
      <p className="logo__text">NFT Store</p>
      <div className="paper">
        {/* <SignUp/> */}
        <CreateAccount   />
      </div>
    </div>
  );
};

export default Auth;
