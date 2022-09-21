import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { loginUser } from "../../../redux/auth/singIn/asyncActions";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setTabIndex } from "../../../redux/auth/changeModal/slice";
import { signIn } from "../validation";

import "../../../pages/auth/Auth.scss";
import { getProfile } from "../../../redux/auth/getProfile/asyncActions";

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.singIn);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignInForm>({ resolver: yupResolver(signIn), mode: "onBlur" });



  const modalWidndowChange = () => {
    dispatch(setTabIndex(1));
  };
  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    dispatch(loginUser(data));
    dispatch(getProfile());
    reset();
  };
  return (
    <>
      <h1>Hello</h1>
      <p>
        Sign in to NFT-Store or
        <button onClick={() => modalWidndowChange()}>create an account</button>
      </p>

      <form className="wrapper-form" onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default SignIn;
