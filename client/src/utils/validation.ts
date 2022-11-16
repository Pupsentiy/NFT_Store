import * as yup from "yup";

const EMAIL_REGEXP =/^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,64}$/;
const NAME_REGEXP = /^[a-zA-Z][a-zA-Z0-9-_]{1,20}$/;

export const emeilSchema = yup
  .string()
  .email()
  .matches(EMAIL_REGEXP, "Enter your email")
  .required("Please Enter Your Email!");

export const firstNameShema = yup
  .string()
  .typeError("must be a string")
  .matches(NAME_REGEXP, "First character must be a letter")
  .required("Please Enter Your Name!");

export const passwordShema = yup
  .string()
  .typeError("must be a string")
  .matches(PASSWORD_REGEXP, "Must be at least one letter and one number")
  .min(8)
  .max(64)
  .required("Please Enter Your Password!");

export const confrimPasswordShema = yup
  .string()
  .oneOf([yup.ref("password"), null], "Passwords must match")
  .required("Please Enter Your Password!");

export const signUpShema = yup.object().shape({
  firstName: firstNameShema,
  email: emeilSchema,
  password: passwordShema,
  confirmPassword: confrimPasswordShema,
});

export const signIn = yup.object().shape({
  email: emeilSchema,
  password: passwordShema,
});
