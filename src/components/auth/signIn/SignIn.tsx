// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from "react";
import { setTabIndex } from "../../../redux/authStore/authSlice";
import { useAppDispatch } from "../../../redux/store";
import "../Auth.scss";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();

  const modalWidndowChange = () => {
    dispatch(setTabIndex(1));
  };

  return (
    <>
      <h1>Hello</h1>
      <p>
        Sign in to NFT-Store or{" "}
        <button onClick={() => modalWidndowChange()}>create an account</button>
      </p>
      <form className="wrapper-form">
        <label>Email</label>
        <input type="text" maxLength={64} />
        <label>Password</label>
        <input type="password" maxLength={64} />
        <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default SignIn;
