import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { setTabIndex } from "../../../redux/authStore/authSlice";
import { useAppDispatch } from "../../../redux/store";
import "../Auth.scss";
import { loginValidation, nameValidation, passwordValidation } from "../validation";

interface ISignUpForm {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<ISignUpForm>();

  const modalWidndowChange1 = () => {
    dispatch(setTabIndex(0));
  };

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    console.log(data);
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
          <input type="text" {...register("name", {...nameValidation})} />
          {errors?.email && (<div className="errors"><p>{errors.email.message}</p></div>)}
        </label>
        <label>
          Email
          <input type="text" {...register("email", { ...loginValidation })} />
          {errors?.email && (<div className="errors"><p>{errors.email.message}</p></div>)}
        </label>
        <label>
          Password
          <input
            type="password"
            {...register("password", { ...passwordValidation })}
          />
          {errors?.email && (<div className="errors"><p>{errors.email.message}</p></div>)}
        </label>
        <label>
          Re-enter password
          <input
            type="password"
            placeholder="at least 6 characters."
            {...register("password", { ...passwordValidation })}
          />
          {errors?.email && (<div className="errors"><p>{errors.email.message}</p></div>)}
        </label>
        <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default SignUp;
