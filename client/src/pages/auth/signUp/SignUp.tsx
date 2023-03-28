import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {useAppDispatch} from "../../../hooks/hooks";
import { registerUser } from "../../../redux/auth/signUp/asyncActions";
import { signUpShema } from "../../../utils/helpers/validation.helpers";

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
} from "../../../assets/styles/global.styled";


interface ISignUpForm {
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
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

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    dispatch(registerUser(data));
    console.log(data, "submit");
    reset();
  };

  return (
    <ContainerAuthEl>
      <Logo flexDirection={"column"} color="#000" />
      <ContainerContetnEl>
        <H5>Create account</H5>
        <PDiscriptionEl color="#000" lineHeight="normal" textAlign="center">
          Already have an account?
          <NavLinkEL
            to="/auth/signin"
            textDecoration="underline"
            color="#1e50ff"
            marginleft="7px"
          >
            Sign in
          </NavLinkEL>
        </PDiscriptionEl>
        <WrapperForm  onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="First Name"
            type="text"
            error={errors.firstName?.message}
            register={{ ...register("firstName") }}
            //styles
            marginTop="3px"
            border="1px solid #adb9c7"
            borderRadius="5px"
            fontSize="13px"
            padding="5px 7px"
            boxShadow="0 0 3px 2px #1f50ffd2"
          />
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
          <Input
            label="Re-enter password"
            type="password"
            placeholder="at least 6 characters."
            error={errors.confirmPassword?.message}
            register={{ ...register("confirmPassword") }}
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
            borderRadius="5px"
            background="rgba(30, 80, 255, 0.1019607843)"
            padding="3px 7px"
            boxShadow="0px 0px 6px 2px rgb(30 80 255 / 71%)"
            marginTop="10px"
            color="#000"
            fontSize="14px"
          >Continue</Button>
        </WrapperForm>
      </ContainerContetnEl>
    </ContainerAuthEl>
  );
};

export default SignUp;
