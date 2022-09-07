import * as yup from "yup";

const EMAIL_REGEXP =
  /^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$/;
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,64}$/;
const NAME_REGEXP = /^[a-zA-Z][a-zA-Z0-9-_]{1,20}$/;

export const emeilSchema = yup
  .string()
  .email()
  .matches(EMAIL_REGEXP, "Enter your email")
  .required("Please Enter Your Email!");

export const nameShema = yup
  .string()
  .typeError("должно быть строкой")
  .matches(NAME_REGEXP, "First character must be a letter")
  .required("Please Enter Your Name!");

export const passwordShema = yup
  .string()
  .typeError("Должно быть строкой")
  .matches(PASSWORD_REGEXP, "Must be at least one letter and one number")
  .min(8)
  .max(64)
  .required("Please Enter Your Password!");

export const confrimPasswordShema = yup
  .string()
  .oneOf([yup.ref("password"), null], "Passwords must match")
  .required("Please Enter Your Password!");

export const signUpShema = yup.object().shape({
  name: nameShema,
  email: emeilSchema,
  password: passwordShema,
  confirmPassword: confrimPasswordShema,
});

export const signIn = yup.object().shape({
  email: emeilSchema,
  password: passwordShema,
});
