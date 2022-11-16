import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import styled from "styled-components";

import { SubmitHandler, useForm } from "react-hook-form";
import { loginUser } from "../../../redux/auth/singIn/asyncActions";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { signIn } from "../../../utils/validation";

import { getProfile } from "../../../redux/auth/getProfile/asyncActions";
import { Link, useNavigate } from "react-router-dom";
import { authorizationHeaders } from "../../../api/fetchWrappers";

import Loader from "../../../components/loader/Loader";
import Logo from "../../../components/logo/Logo";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";

import {
  ContainerAuthEl,
  ContainerContetnEl,
  H5,
  NavLinkEL,
  PDiscriptionEl,
  WrapperForm,
} from "../../../styles/global.styled";

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, isLoading } = useAppSelector((state) => state.singIn);
  const { userInfo,userToken } = useAppSelector((state) => state.getProfileInfo);
  const { success } = useAppSelector((state) => state.signUp);
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

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    dispatch(loginUser(data));
    if (userToken !== null) {
      navigate('/profile')
    }
  };


    
  

  return (
    <ContainerAuthEl>
      <Logo flexDirection={"column"} color="#000" />
      <ContainerContetnEl>
        <H5>Hello</H5>
        <PDiscriptionEl color="#000" lineHeight="normal" textAlign="center">
          Sign in to NFT-Store or
          <NavLinkEL
            to="/auth/signup"
            textDecoration="underline"
            color="#1e50ff"
            marginleft="7px"
          >
            create an account
          </NavLinkEL>
        </PDiscriptionEl>
        <WrapperForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="email"
            error={errors.email?.message}
            register={{ ...register("email") }}
            //styles
            marginTop="3px"
            border="1px solid #adb9c7"
            borderRadius="5px"
            fontSize="13px"
            padding="5px 7px"
            boxShadow="0 0 3px 2px #1f50ffd2"
          />
          <Input
            label="Password"
            type="password"
            error={errors.password?.message}
            register={{ ...register("password") }}
            //styles
            marginTop="3px"
            border="1px solid #adb9c7"
            borderRadius="5px"
            fontSize="13px"
            padding="5px 7px"
            boxShadow="0 0 3px 2px #1f50ffd2"
          />
          <Button
            type="submit"
            label="Continue"
            //styles
            borderRadius="5px"
            background="rgba(30, 80, 255, 0.1019607843)"
            padding="3px 7px"
            boxShadow="0px 0px 6px 2px rgb(30 80 255 / 71%)"
            marginTop="10px"
            color="#000"
            fontSize="14px"
          />
        </WrapperForm>
      </ContainerContetnEl>
    </ContainerAuthEl>
  );
};

export default SignIn;
