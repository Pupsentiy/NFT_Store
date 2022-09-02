import React from "react";
import { NavLink } from "react-router-dom";
import "../Auth.scss";

const CreateAccount: React.FC = () => {
  return (
    <>
      <h1>Create account</h1>
      <p>
        Already have an account? <NavLink to="#">Sign in</NavLink>
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

export default CreateAccount;
