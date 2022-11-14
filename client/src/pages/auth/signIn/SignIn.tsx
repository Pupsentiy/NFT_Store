import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import styled from "styled-components";

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
import Logo from "../../../components/logo/Logo";
import {
  ContainerAuthEl,
  H3,
  NavLinkEL,
  PDiscriptionEl,
} from "../../../styles/global.styled";
import Input from "../../../components/input/Input";

export const ContainerContetnEl = styled.div`
  text-align: center;
  border: 2px solid #1e50ff;
  padding: 20px;
  border-radius: 5px;
  width: 275px;
`;

interface ISignInForm {
  email: string;
  password: string;
}

export const WrapperForm = styled.form`
display: flex;
flex-direction: column;
margin-top: 10px;
`

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

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    dispatch(loginUser(data));
    reset();
  };

  // useEffect(() => {
  //   if (userToken !== null) {
  //     navigate('/profile')
  //   }
  // }, [navigate, userToken])

  const dataLoginInput = [{label:'Email',nametype:'email',name:'email',error:errors.email?.message,register:{register}},{label:'Password',type:'password',name:'password',error:errors.password?.message},

]
  return (
    <ContainerAuthEl>
      <Logo flexDirection={'column'} color='#000'/>
      <ContainerContetnEl className="containerAuth-content">
        <H3 textAlign="center">Hello</H3>
        <PDiscriptionEl color='#000'>
          Sign in to NFT-Store or
          <NavLinkEL to="/auth/signup" textDecoration='underline' color='#1e50ff' marginleft='7px'>create an account</NavLinkEL>
        </PDiscriptionEl>
        <WrapperForm  onSubmit={handleSubmit(onSubmit)}>
          {dataLoginInput && dataLoginInput.map((item:any,i:number) => 
          <label key={i}>
          {item.label}
          <Input  {...item} />
            <div className="errors">
              <p>{item.error}</p>
            </div>
        </label>
          )}
          <button type="submit">Continue</button>
        </WrapperForm>
      </ContainerContetnEl>
    </ContainerAuthEl>
  );
};

export default SignIn;
