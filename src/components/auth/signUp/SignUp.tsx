import React from "react";
import { setTabIndex } from "../../../redux/authStore/authSlice";
import { useAppDispatch } from "../../../redux/store";
import "../Auth.scss";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();

  const modalWidndowChange1 = () => {
    dispatch(setTabIndex(0));
  };

  return (
    <>
      <h1>Create account</h1>
      <p>
        Already have an account?
        <button onClick={() => modalWidndowChange1()}>Sign in</button>
      </p>
      <form className="wrapper-form">
        <label>Your name</label>
        <input type="text" maxLength={50} />
        <label>Email</label>
        <input type="text" maxLength={64} />
        <label>Password</label>
        <input
          type="password"
          maxLength={64}
          placeholder="at least 6 characters."
        />
        <label>Re-enter password</label>
        <input
          type="password"
          maxLength={64}
          placeholder="at least 6 characters."
        />
        <button>Continue</button>
      </form>
    </>
  );
};

export default SignUp;
