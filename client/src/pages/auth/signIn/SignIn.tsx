import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { loginUser } from "../../../redux/auth/singIn/asyncActions";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setTabIndex } from "../../../redux/auth/changeModal/slice";
import { signIn } from "../../../utils/validation";

import "../../../components/wrapperAuth/Auth.scss";
import { getProfile } from "../../../redux/auth/getProfile/asyncActions";
import { Link, useNavigate } from "react-router-dom";
import { authorizationHeaders } from "../../../api/fetchWrappers";
import Loader from "../../../components/loader/Loader";
import pandaLogo from "../../../assets/icons/pandaLogo.svg";
import Logo from "../../../components/logo/Logo";

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, isLoading } = useAppSelector((state) => state.singIn);
  const { userInfo } = useAppSelector((state) => state.getProfileInfo);
  const { success } = useAppSelector((state) => state.signUp);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignInForm>({ resolver: yupResolver(signIn), mode: "onBlur" });
  const userToken = authorizationHeaders.Authorization;

  // useEffect(() => {
  //   // redirect user to login page if registration was successful
  //   if (success) navigate('/login')
  //   // redirect authenticated user to profile screen
  //   if (userInfo) navigate('/profile')
  // }, [navigate, userInfo, success])

  const modalWindowChange = () => {
    dispatch(setTabIndex(1));
    // localStorage.clear()
  };
  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    dispatch(loginUser(data));
    reset();
  };

  // useEffect(() => {
  //   if (userToken !== null) {
  //     navigate('/profile')
  //   }
  // }, [navigate, userToken])
  return (
    <div className="containerAuth">
        <Logo/>
      <div className="containerAuth-content">
        <h1>Hello</h1>
        <p>
          Sign in to NFT-Store or
          <button onClick={modalWindowChange}>create an account</button>
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
      </div>
    </div>
  );
};

export default SignIn;