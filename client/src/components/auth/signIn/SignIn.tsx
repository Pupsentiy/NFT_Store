import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { setTabIndex } from "../../../redux/authStore/authSlice";
import { useAppDispatch } from "../../../redux/store";
import { signIn } from "../validation";
import "../Auth.scss";
import { SubmitHandler, useForm } from "react-hook-form";

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
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
    console.log(data);
    reset()
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
