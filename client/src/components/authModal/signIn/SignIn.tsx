import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { loginUser } from "../../../redux/auth/singIn/asyncActions";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setTabIndex } from "../../../redux/auth/changeModal/slice";
import { signIn } from "../validation";

import "../../../pages/auth/Auth.scss";
import { getProfile } from "../../../redux/auth/getProfile/asyncActions";
import {useNavigate} from "react-router-dom";

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { error, isLoading } = useAppSelector((state) => state.singIn);
  const {userInfo} = useAppSelector((state) => state.getProfileInfo);
  const {success} = useAppSelector((state) => state.signUp);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignInForm>({ resolver: yupResolver(signIn), mode: "onBlur" });
  // useEffect(() => {
  //   // redirect user to login page if registration was successful
  //   if (success) navigate('/login')
  //   // redirect authenticated user to profile screen
  //   if (userInfo) navigate('/profile')
  // }, [navigate, userInfo, success])


  const modalWindowChange = () => {
    dispatch(setTabIndex(1));
    // localStorage.clear()
    dispatch(getProfile())
  };
  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    dispatch(loginUser(data));
    reset();
  };
  return (
    <>
      <h1>Hello</h1>
      <p>
        Sign in to NFT-Store or
        <button onClick={() => modalWindowChange()}>create an account</button>
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
