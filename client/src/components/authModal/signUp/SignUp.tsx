import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { setTabIndex } from "../../../redux/authModalWindow/slice";
import { useAppDispatch } from "../../../redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpShema } from "../validation";
import "../Auth.scss";

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
  } = useForm<ISignUpForm>({ resolver: yupResolver(signUpShema),mode:'onBlur' });

  const modalWidndowChange1 = () => {
    dispatch(setTabIndex(0));
  };

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    console.log(data);
    reset()
  };

  return (
    <>
      <h1>Create account</h1>
      <p>
        Already have an account?
        <button onClick={() => modalWidndowChange1()}>Sign in</button>
      </p>
      <form className="wrapper-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Your Name
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
