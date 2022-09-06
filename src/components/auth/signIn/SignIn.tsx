import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { setTabIndex } from "../../../redux/authStore/authSlice";
import { useAppDispatch } from "../../../redux/store";
import "../Auth.scss";
import { loginValidation, passwordValidation } from "../validation";

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors},
    // reset,
  } = useForm<ISignInForm>();

  const modalWidndowChange = () => {
    dispatch(setTabIndex(1));
  };
  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    console.log(data);
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
          <input type="text" {...register("email", { ...loginValidation })} />
          {errors?.email && (<div className="errors"><p>{errors.email.message}</p></div>)}
        </label>
        <label>
          Password
          <input type="password" {...register("password" , {...passwordValidation})} />
          {errors?.password && (<div className="errors"><p>{errors.password.message}</p></div>)}
        </label>
        <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default SignIn;
