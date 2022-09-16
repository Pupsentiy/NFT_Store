import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { setTabIndex } from "../../../redux/auth/changeModal/slice";
import { useAppDispatch } from "../../../redux/store";
import { registerUser } from "../../../redux/auth/signUp/asyncActions";
import { signUpShema } from "../validation";

import "../../../pages/auth/Auth.scss";

interface ISignUpForm {
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignUpForm>({
    resolver: yupResolver(signUpShema),
    mode: "onBlur",
  });

  const modalWidndowChange = () => {
    dispatch(setTabIndex(0));
  };

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    dispatch(registerUser(data));
    console.log(data, "submit");
    reset();
    dispatch(setTabIndex(0));
  };

  return (
    <>
      <h1>Create account</h1>
      <p>
        Already have an account?
        <button onClick={() => modalWidndowChange()}>Sign in</button>
      </p>
      <form className="wrapper-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name
          <input type="text" {...register("firstName")} />
          {errors?.firstName && (
            <div className="errors">
              <p>{errors.firstName.message}</p>
            </div>
          )}
        </label>
        <label>
          Email
          <input type="email" {...register("email")} />
          {errors?.email && (
            <div className="errors">
              <p>{errors.email.message}</p>
            </div>
          )}
        </label>
        <label>
          Password
          <input type="password" {...register("password")} />
          {errors?.password && (
            <div className="errors">
              <p>{errors.password.message}</p>
            </div>
          )}
        </label>
        <label>
          Re-enter password
          <input
            type="password"
            placeholder="at least 6 characters."
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword && (
            <div className="errors">
              <p>{errors.confirmPassword.message}</p>
            </div>
          )}
        </label>
        <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default SignUp;
